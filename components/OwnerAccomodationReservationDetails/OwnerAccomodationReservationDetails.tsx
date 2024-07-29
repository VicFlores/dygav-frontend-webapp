import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { ActiveReservations } from './ActiveReservations';
import moment from 'moment';
import { RangeOfDates } from './RangeOfDates';
import { CancelledRangeOfDates } from './CancelledRangeOfDates';

interface ReservationCalendarProps {
  start: string;
  end: string;
}

interface IBookingId {
  id: string;
  travellerName: string;
  accommodationName: string;
  status: string;
  occupiedPeriod: {
    startDate: string;
    endDate: string;
  };
}

export const OwnerAccomodationReservationDetails: FC<{ id: string }> = ({
  id,
}) => {
  const [bookingById, setBookingById] = useState<IBookingId[]>([
    {
      id: '',
      travellerName: '',
      accommodationName: '',
      status: '',
      occupiedPeriod: {
        startDate: '',
        endDate: '',
      },
    },
  ]);
  const [beforeBooking, setBeforeBooking] = useState<IBookingId[]>([
    {
      id: '',
      travellerName: '',
      accommodationName: '',
      status: '',
      occupiedPeriod: {
        startDate: '',
        endDate: '',
      },
    },
  ]);
  const [accomodationDayBlock, setAccomodationDayBlock] = useState<
    ReservationCalendarProps[]
  >([
    {
      start: '',
      end: '',
    },
  ]);
  const [activeTab, setActiveTab] = useState('active');

  useEffect(() => {
    const accomodationBlockDay = async (id: string) => {
      if (id) {
        const res = await axios.get(
          `https://api.avaibook.com/api/owner/accommodations/${id}/calendar/`,
          {
            headers: {
              'Content-Type': 'application/json',
              'X-AUTH-TOKEN': process.env.AVAIBOOK_API_TOKEN,
            },
          }
        );

        setAccomodationDayBlock(res.data);
      }
    };

    accomodationBlockDay(id);
  }, [id]);

  useEffect(() => {
    const getBookingById = async (id: string) => {
      try {
        if (id) {
          const resBooking = await axios.get(
            `https://api.avaibook.com/api/owner/bookings/${id}/`,
            {
              headers: {
                'Content-Type': 'application/json',
                'X-AUTH-TOKEN': process.env.AVAIBOOK_API_TOKEN,
              },
            }
          );

          setBookingById((prevState) => {
            const bookingExists = prevState.some(
              (booking) => booking.id === resBooking.data.id
            );
            if (!bookingExists) {
              return [...prevState, resBooking.data];
            } else {
              return prevState;
            }
          });
        }
      } catch (error) {
        console.error(`Error fetching booking with ID ${id}:`, error);
      }
    };

    const getBeforeBookings = async (id: string) => {
      let currentDate = moment();
      let startDate = moment('2024-01-01'); // Replace with your desired start date

      try {
        while (startDate.isBefore(currentDate)) {
          let endDate = moment(startDate).add(90, 'days');
          if (endDate.isAfter(currentDate)) {
            endDate = currentDate;
          }

          const res = await axios.get(
            `https://api.avaibook.com/api/owner/accommodations/${id}/calendar/?startDate=${startDate.format(
              'YYYY-MM-DD'
            )}&endDate=${endDate.format('YYYY-MM-DD')}`,
            {
              headers: {
                'Content-Type': 'application/json',
                'X-AUTH-TOKEN': process.env.AVAIBOOK_API_TOKEN,
              },
            }
          );

          for (const booking of res.data) {
            const resBooking = await axios.get(
              `https://api.avaibook.com/api/owner/bookings/${booking.booking}/`,
              {
                headers: {
                  'Content-Type': 'application/json',
                  'X-AUTH-TOKEN': process.env.AVAIBOOK_API_TOKEN,
                },
              }
            );

            setBeforeBooking((prevState) => {
              const bookingExists = prevState.some(
                (booking) => booking.id === resBooking.data.id
              );
              if (!bookingExists) {
                return [...prevState, resBooking.data];
              } else {
                return prevState;
              }
            });
          }

          startDate = endDate.add(1, 'day');
        }
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    const findBookingById = accomodationDayBlock.map((block: any) => {
      return block.booking;
    });

    findBookingById.forEach((id) => {
      getBookingById(id);
    });

    getBeforeBookings(id);
  }, [accomodationDayBlock, id]);

  const renderTabContent = () => {
    switch (activeTab) {
      case 'active':
        return <ActiveReservations bookings={bookingById} status='CONFIRMED' />;
      case 'past':
        return (
          <ActiveReservations bookings={beforeBooking} status='CONFIRMED' />
        );
      case 'canceled':
        return <CancelledRangeOfDates id={id} />;
      case 'rangeOfDates':
        return <RangeOfDates id={id} />;
      default:
        return null;
    }
  };

  return (
    <div className='px-8 space-y-12 mb-24'>
      <div className='flex flex-col md:flex-row justify-center items-center md:justify-between md:items-end border-b-[1px]'>
        <p className=' text-black900/[.7]  mt-10 text-2xl text-center md:text-left md:text-3xl lg:mt-16 lg:text-4xl'>
          Reservas en mi alojamiento
        </p>

        <ul className='flex flex-col space-y-3 md:space-y-0 md:flex-row justify-center items-center md:space-x-10 mt-8  lg:text-lg'>
          <li
            className={`cursor-pointer ${
              activeTab === 'active' ? 'text-p600' : ''
            }`}
            onClick={() => setActiveTab('active')}
          >
            Activas
          </li>

          <li
            className={`cursor-pointer ${
              activeTab === 'past' ? 'text-p600' : ''
            }`}
            onClick={() => setActiveTab('past')}
          >
            Pasadas
          </li>

          <li
            className={`cursor-pointer ${
              activeTab === 'canceled' ? 'text-p600' : ''
            }`}
            onClick={() => setActiveTab('canceled')}
          >
            Canceladas
          </li>

          <li
            className={`cursor-pointer ${
              activeTab === 'rangeOfDates' ? 'text-p600' : ''
            }`}
            onClick={() => setActiveTab('rangeOfDates')}
          >
            Rango de fechas
          </li>
        </ul>
      </div>

      {renderTabContent()}
    </div>
  );
};
