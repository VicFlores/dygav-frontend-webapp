import { TAvaibookAccomodations } from '@/types';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { BsCalendar2Week } from 'react-icons/bs';
import { AccomodationsCalendar } from './AccomodationsCalendar';
import { FaSpinner } from 'react-icons/fa6';

export const CalendarByAccommodation = () => {
  const [loading, setLoading] = useState(true);
  const [accomodations, setAccomodations] =
    useState<TAvaibookAccomodations[]>();
  const [activeTab, setActiveTab] = useState('accomodationDefault');

  useEffect(() => {
    const fetchAccomodationsAndReservations = async () => {
      const allAccomodationsResponse = await axios.get(
        'https://api.avaibook.com/api/owner/accommodations/',
        {
          headers: {
            'Content-Type': 'application/json',
            'X-AUTH-TOKEN': process.env.AVAIBOOK_API_TOKEN,
          },
        }
      );

      const allAccomodations = allAccomodationsResponse.data;

      const accomodationsWithReservations = await Promise.all(
        allAccomodations.map(async (accomodation: any) => {
          const pastMonthStart = new Date();
          pastMonthStart.setMonth(pastMonthStart.getMonth() - 1);
          pastMonthStart.setDate(1);

          const pastMonthEnd = new Date();
          pastMonthEnd.setDate(0);

          const next90DaysStart = new Date();
          next90DaysStart.setDate(1);
          const next90DaysEnd = new Date();
          next90DaysEnd.setDate(next90DaysStart.getDate() + 90);

          const pastMonthResponse = await axios.get(
            `https://api.avaibook.com/api/owner/accommodations/${
              accomodation.id
            }/calendar/?startDate=${
              pastMonthStart.toISOString().split('T')[0]
            }&endDate=${pastMonthEnd.toISOString().split('T')[0]}`,
            {
              headers: {
                'Content-Type': 'application/json',
                'X-AUTH-TOKEN': process.env.AVAIBOOK_API_TOKEN,
              },
            }
          );

          const next90DaysResponse = await axios.get(
            `https://api.avaibook.com/api/owner/accommodations/${
              accomodation.id
            }/calendar/?startDate=${
              next90DaysStart.toISOString().split('T')[0]
            }&endDate=${next90DaysEnd.toISOString().split('T')[0]}`,
            {
              headers: {
                'Content-Type': 'application/json',
                'X-AUTH-TOKEN': process.env.AVAIBOOK_API_TOKEN,
              },
            }
          );

          const allReservations = [
            ...new Map(
              [...pastMonthResponse.data, ...next90DaysResponse.data].map(
                (item) => [item['booking'], item]
              )
            ).values(),
          ];

          const reservationsWithBookingInfo = await Promise.all(
            allReservations.map(async (reservation: any) => {
              if (reservation.booking) {
                const bookingResponse = await axios.get(
                  `https://api.avaibook.com/api/owner/bookings/${reservation.booking}/`,
                  {
                    headers: {
                      'Content-Type': 'application/json',
                      'X-AUTH-TOKEN': process.env.AVAIBOOK_API_TOKEN,
                    },
                  }
                );

                return {
                  ...reservation,
                  partnerName: bookingResponse.data.partnerName,
                  travellerName: bookingResponse.data.travellerName,
                };
              } else {
                return reservation;
              }
            })
          );

          return {
            id: accomodation.id,
            name: accomodation.name,
            reservations: reservationsWithBookingInfo,
          };
        })
      );

      setAccomodations(accomodationsWithReservations);

      if (accomodationsWithReservations.length > 0) {
        setActiveTab(accomodationsWithReservations[0].name);
      }

      setLoading(false);
    };

    fetchAccomodationsAndReservations();
  }, []);

  const renderCalendar = () => {
    const accomodation = accomodations?.find(
      (accomodation) => accomodation.name === activeTab
    );

    if (!accomodation) {
      return null;
    }

    return <AccomodationsCalendar {...accomodation} />;
  };

  return (
    <div className='px-2 lg:px-10 my-12'>
      {loading ? (
        <div className='col-start-1 col-end-4'>
          <div className='border border-p600/30 shadow rounded-md px-6 py-10 max-w-sm w-full mx-auto '>
            <div className='animate-pulse flex space-x-4'>
              <div className='rounded-full bg-p600/60 h-10 w-10'></div>
              <div className='flex-1 space-y-6 py-1'>
                <div className='h-2 bg-p600/60 rounded'></div>
                <div className='space-y-3'>
                  <div className='grid grid-cols-3 gap-4'>
                    <div className='h-2 bg-p600/60 rounded col-span-2'></div>
                    <div className='h-2 bg-p600/60 rounded col-span-1'></div>
                  </div>
                  <div className='h-2 bg-p600/60 rounded'></div>
                </div>
              </div>
            </div>
          </div>

          <div className='flex items-center justify-center space-x-4 mt-6'>
            <FaSpinner className='animate-spin h-5 w-5 text-p400' />
            <span className='text-lg font-medium text-p600'>
              Cargando alojamientos...
            </span>
          </div>
        </div>
      ) : (
        <>
          <div className='flex flex-col md:flex-row justify-center items-center md:justify-between md:items-end border-b-[1px] mb-10'>
            <p className=' text-black900/[.7]  text-2xl text-center md:text-left md:text-3xl  lg:text-4xl'>
              Calendarios de alojamientos
            </p>
          </div>

          <div className='flex flex-col md:flex-row justify-center items-center md:justify-between md:items-center'>
            <div className='flex flex-col justify-center items-center'>
              {accomodations?.map((accomodation) => (
                <button
                  key={accomodation.id}
                  onClick={() => setActiveTab(accomodation.name)}
                  className={`${
                    activeTab === accomodation.name
                      ? 'bg-p600 text-white'
                      : 'text-gray-900'
                  } px-4 py-2 rounded-md text-sm font-medium`}
                >
                  {accomodation.name}
                </button>
              ))}
            </div>

            {renderCalendar()}
          </div>
        </>
      )}
    </div>
  );
};
