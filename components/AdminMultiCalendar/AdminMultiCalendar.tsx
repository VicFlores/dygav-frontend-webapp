import React, { useState, useEffect } from 'react';
import { TAvaibookAccomodations } from '@/types';
import { FaSpinner } from 'react-icons/fa6';
import axios from 'axios';
import styles from './AdminMultiCalendar.module.css';
import moment from 'moment';
import Link from 'next/link';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export const AdminMultiCalendar = () => {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('accomodation1');
  const [accomodations, setAccomodations] =
    useState<TAvaibookAccomodations[]>();

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

  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month, 0).getDate();
  };

  const getDayOfWeek = (date: Date) => {
    const days = ['D', 'L', 'M', 'X', 'J', 'V', 'S'];
    return days[date.getDay()];
  };

  const getNextMonthAndYear = (month: number, year: number) => {
    if (month === 11) {
      return { month: 0, year: year + 1 };
    } else {
      return { month: month + 1, year: year };
    }
  };

  const getPreviousMonthAndYear = (month: number, year: number) => {
    if (month === 0) {
      return { month: 11, year: year - 1 };
    } else {
      return { month: month - 1, year: year };
    }
  };

  const getMonthName = (month: number) => {
    const months = [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ];
    return months[month];
  };

  const goToNextMonth = () => {
    const { month, year } = getNextMonthAndYear(currentMonth, currentYear);
    setCurrentMonth(month);
    setCurrentYear(year);
  };

  const goToPreviousMonth = () => {
    const { month, year } = getPreviousMonthAndYear(currentMonth, currentYear);
    setCurrentMonth(month);
    setCurrentYear(year);
  };

  const daysInCurrentMonth = getDaysInMonth(currentMonth + 1, currentYear);

  const daysOfWeekInCurrentMonth = Array.from(
    { length: daysInCurrentMonth },
    (_, i) => {
      const date = new Date(currentYear, currentMonth, i + 1);
      return getDayOfWeek(date);
    }
  );

  const { month: nextMonth, year: nextYear } = getNextMonthAndYear(
    currentMonth,
    currentYear
  );
  const daysInNextMonth = getDaysInMonth(nextMonth + 1, nextYear);

  const daysOfWeekInNextMonth = Array.from(
    { length: daysInNextMonth },
    (_, i) => {
      const date = new Date(nextYear, nextMonth, i + 1);
      return getDayOfWeek(date);
    }
  );

  return (
    <section className='px-2 lg:px-10 mt-12'>
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
        <div>
          <div className='flex flex-col md:flex-row justify-center items-center md:justify-between md:items-end border-b-[1px] mb-10'>
            <p className=' text-black900/[.7]  text-2xl text-center md:text-left md:text-3xl  lg:text-4xl'>
              Calendario de reservas
            </p>
          </div>

          <div className={`${styles.container} scrollbar`}>
            <div>
              {accomodations?.map((accomodation) => (
                <div key={accomodation.id} className={styles.accommodationItem}>
                  <p className='text-p800 font-semibold p-2 border-r-[1px] border-r-p600 lg:sticky left-0 bg-white z-20 text-sm text-center'>
                    {accomodation.name}
                  </p>

                  <div className='flex'>
                    {daysOfWeekInCurrentMonth.map((day, index) => {
                      const date = moment()
                        .year(currentYear)
                        .month(currentMonth)
                        .date(index + 1)
                        .startOf('day');
                      const reservations = accomodation.reservations.filter(
                        (reservation) => {
                          const startDate = moment(
                            reservation.startDate
                          ).startOf('day');
                          let endDate = moment(reservation.endDate).startOf(
                            'day'
                          );
                          endDate = endDate.add(1, 'days'); // Add a day to the endDate

                          return (
                            date.isSameOrAfter(startDate) &&
                            date.isSameOrBefore(endDate)
                          );
                        }
                      );

                      return (
                        <div
                          key={index}
                          className='flex justify-center items-center border-[1px] border-p600 border-b-0 border-t-0 w-28'
                        >
                          {reservations.map((reservation, reservationIndex) => {
                            const isStartDate = date.isSame(
                              moment(reservation.startDate).startOf('day')
                            );
                            const isEndDate = date.isSame(
                              moment(reservation.endDate)
                                .add(1, 'days')
                                .startOf('day')
                            );
                            const roundedClass = isStartDate
                              ? 'rounded-l-xl'
                              : isEndDate
                              ? 'rounded-r-xl'
                              : '';

                            return reservation.type === 'BLOCKED' ? (
                              <p
                                key={reservationIndex}
                                className={`text-center bg-p600/80 text-white text-xs w-full py-1 overflow-hidden ${roundedClass} ${
                                  reservations.length === 2 &&
                                  reservationIndex === 0
                                    ? 'mr-1'
                                    : ''
                                }`}
                              >
                                Bloqueado
                              </p>
                            ) : (
                              <Link
                                href={`/private/owner/reservation/${reservation.booking}`}
                                className={`text-center bg-p600/80 text-white text-xs w-full py-1 overflow-hidden ${roundedClass} ${
                                  reservations.length === 2 &&
                                  reservationIndex === 0
                                    ? 'mr-1'
                                    : ''
                                }`}
                                key={reservation.booking}
                              >
                                {reservation.travellerName
                                  ? reservation.travellerName
                                      .substring(0, 6)
                                      .toUpperCase()
                                  : 'Desconocido'}
                              </Link>
                            );
                          })}

                          <div className='text-center' />
                          <div className='text-center' />
                        </div>
                      );
                    })}
                  </div>

                  <div className='flex'>
                    {daysOfWeekInNextMonth.map((day, index) => {
                      const date = moment()
                        .year(nextYear)
                        .month(nextMonth)
                        .date(index + 1)
                        .startOf('day');
                      const reservations = accomodation.reservations.filter(
                        (reservation) => {
                          const startDate = moment(
                            reservation.startDate
                          ).startOf('day');
                          let endDate = moment(reservation.endDate).startOf(
                            'day'
                          );
                          endDate = endDate.add(1, 'days'); // Add a day to the endDate

                          return (
                            date.isSameOrAfter(startDate) &&
                            date.isSameOrBefore(endDate)
                          );
                        }
                      );

                      return (
                        <div
                          key={index}
                          className='flex justify-center items-center border-[1px] border-p600 border-b-0 border-t-0 w-28'
                        >
                          {reservations.map((reservation, reservationIndex) => {
                            const isStartDate = date.isSame(
                              moment(reservation.startDate).startOf('day')
                            );
                            const isEndDate = date.isSame(
                              moment(reservation.endDate)
                                .add(1, 'days')
                                .startOf('day')
                            );
                            const roundedClass = isStartDate
                              ? 'rounded-l-xl'
                              : isEndDate
                              ? 'rounded-r-xl'
                              : '';

                            return reservation.type === 'BLOCKED' ? (
                              <p
                                key={reservationIndex}
                                className={`text-center bg-p600/80 text-white text-xs w-full py-1 overflow-hidden ${roundedClass} ${
                                  reservations.length === 2 &&
                                  reservationIndex === 0
                                    ? 'mr-1'
                                    : ''
                                }`}
                              >
                                Bloqueado
                              </p>
                            ) : (
                              <Link
                                href={`/private/owner/reservation/${reservation.booking}`}
                                className={`text-center bg-p600/80 text-white text-xs w-full py-1 overflow-hidden ${roundedClass} ${
                                  reservations.length === 2 &&
                                  reservationIndex === 0
                                    ? 'mr-1'
                                    : ''
                                }`}
                                key={reservation.booking}
                              >
                                {reservation.travellerName
                                  ? reservation.travellerName
                                      .substring(0, 6)
                                      .toUpperCase()
                                  : 'Desconocido'}
                              </Link>
                            );
                          })}

                          <div className='text-center' />
                          <div className='text-center' />
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.calendarHeader}>
              <div className='lg:sticky left-0 bg-white z-10 border-[1px] border-p600 border-b-0 flex justify-center'>
                <button
                  className='flex items-center justify-center text-p800 font-semibold'
                  onClick={goToPreviousMonth}
                >
                  <FaArrowLeft className='mr-2' />
                  Anterior
                </button>

                <button
                  className='flex items-center justify-center ml-4 text-p800 font-semibold'
                  onClick={goToNextMonth}
                >
                  Siguiente
                  <FaArrowRight className='ml-2' />
                </button>
              </div>

              <div className='border-[1px] border-p600 border-b-0 border-l-0'>
                <p className='border-[1px] border-p600 border-t-0 border-l-0 border-r-0 pl-4 text-p800 font-bold'>
                  {getMonthName(currentMonth)} {currentYear}
                </p>

                <div className='flex'>
                  {daysOfWeekInCurrentMonth.map((day, index) => (
                    <div
                      key={index}
                      className='border-[1px] border-p600 border-b-0 border-t-0 w-28'
                    >
                      <div className='text-center border-[1px] border-p600 border-t-0 border-r-0 border-l-0 text-p800 font-bold'>
                        {day}
                      </div>
                      <div className='text-center border-[1px] border-p600 border-t-0 border-r-0 border-b-0 border-l-0 text-p800 font-bold'>
                        {index + 1}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className='border-[1px] border-p600 border-b-0 border-l-0'>
                <p className='border-[1px] border-p600 border-t-0 border-l-0 border-r-0 pl-4 text-p800 font-bold'>
                  {getMonthName(nextMonth)} {nextYear}
                </p>

                <div className='flex'>
                  {daysOfWeekInNextMonth.map((day, index) => (
                    <div
                      key={index}
                      className='border-[1px] border-p600 border-b-0 border-t-0 border-l-0 w-28'
                    >
                      <div className='text-center border-[1px] border-p600 border-t-0 border-r-0 border-l-0 text-p800 font-bold'>
                        {day}
                      </div>
                      <div className='text-center border-[1px] border-p600 border-t-0 border-r-0 border-b-0 border-l-0 text-p800 font-bold'>
                        {index + 1}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
