import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { TAvaibookAccomodations } from '@/types';
import { FaAirbnb, FaSpinner } from 'react-icons/fa6';
import axios from 'axios';
import styles from './AdminMultiCalendar.module.css';
import moment from 'moment';
import Link from 'next/link';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { BsCalendar2Week } from 'react-icons/bs';
import { TbBrandBooking, TbLockCancel } from 'react-icons/tb';
import { GrStatusUnknown } from 'react-icons/gr';
import { BookingDetail } from './BookingDetail';

export const AdminMultiCalendar = () => {
  const [loading, setLoading] = useState(true);
  const [showDetails, setShowDetails] = useState<null | string>(null);
  const [accomodations, setAccomodations] =
    useState<TAvaibookAccomodations[]>();
  const [scrollContainer, setScrollContainer] = useState<HTMLDivElement | null>(
    null
  );

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

      setLoading(false);
    };

    fetchAccomodationsAndReservations();
  }, []);

  useEffect(() => {
    if (scrollContainer) {
      const today = new Date().getDate();
      const dayCellWidth = 144;
      const scrollPosition = dayCellWidth * (today - 1);
      scrollContainer.scrollLeft = scrollPosition;
    }
  }, [scrollContainer]);

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
    if (scrollContainer) {
      scrollContainer.scrollLeft = 0;
      setScrollContainer(scrollContainer);
    }
  };

  const goToPreviousMonth = () => {
    const { month, year } = getPreviousMonthAndYear(currentMonth, currentYear);
    setCurrentMonth(month);
    setCurrentYear(year);
    if (scrollContainer) {
      scrollContainer.scrollLeft = 0;
      setScrollContainer(scrollContainer);
    }
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

  const scrollLeft = () => {
    if (scrollContainer) {
      scrollContainer.scrollLeft -= 70;
      setScrollContainer(scrollContainer);
    }
  };

  const scrollRight = () => {
    if (scrollContainer) {
      scrollContainer.scrollLeft += 70;
      setScrollContainer(scrollContainer);
    }
  };

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

            <Link
              href={'/private/admin/accommodationsCalendars'}
              className='bg-p600 text-white p-2 rounded-xl mb-4 mt-4 lg:mt-0 lg:mb-2 flex items-center text-sm md:text-base'
            >
              Calendarios por alojamientos{' '}
              <BsCalendar2Week className='mx-3 text-xl' />
            </Link>
          </div>

          <div className='flex items-center'>
            <button
              onClick={scrollLeft}
              className='hidden lg:flex p-2 relative z-10 text-white bg-p600/80 mr-3 -bottom-[218px]'
            >
              <AiOutlineArrowLeft />
            </button>

            <div
              ref={(node) => setScrollContainer(node)}
              className={`${styles.container} ${styles.scrollbar}`}
            >
              <div>
                {accomodations?.map((accomodation) => (
                  <div
                    key={accomodation.id}
                    className={`${styles.accommodationItem} border border-p600 border-t-0 border-r-0`}
                  >
                    <p className='text-xs lg:text-sm text-p800 font-semibold border border-p600 border-b-0 border-t-0 p-2 lg:py-2 lg:px-0 sticky left-0 bg-white z-20 text-center'>
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
                            endDate = endDate.add(1, 'days');

                            return (
                              date.isSameOrAfter(startDate) &&
                              date.isSameOrBefore(endDate)
                            );
                          }
                        );

                        return (
                          <div
                            key={index}
                            className='flex justify-center items-center border-[1px] border-p600 border-b-0 border-t-0 border-l-0 w-36'
                          >
                            {reservations.map(
                              (reservation, reservationIndex) => {
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
                                    className={`text-center bg-p600/80 relative text-white h-2/6 lg:h-2/3 text-xs w-full py-1 ${roundedClass} ${
                                      (reservations.length === 2 &&
                                        (reservationIndex === 0
                                          ? 'mr-1'
                                          : '')) ||
                                      (isStartDate &&
                                        reservations.length === 1 &&
                                        'ml-16') ||
                                      (isEndDate && 'mr-16')
                                    }`}
                                  >
                                    <span className='flex items-center absolute z-10 left-2'>
                                      {isStartDate ? (
                                        <TbLockCancel className='w-4 h-4 mr-1' />
                                      ) : (
                                        ''
                                      )}
                                      {isStartDate ? 'Bloqueado' : ''}
                                    </span>
                                  </p>
                                ) : (
                                  <Link
                                    href={`/private/owner/reservation/${reservation.booking}`}
                                    className={` bg-p600/80  relative text-white text-xs w-full h-2/6 lg:h-2/3  py-1 ${roundedClass} ${
                                      (reservations.length === 2 &&
                                        (reservationIndex === 0
                                          ? 'mr-1'
                                          : '')) ||
                                      (isStartDate &&
                                        reservations.length === 1 &&
                                        'ml-16') ||
                                      (isEndDate && 'mr-16')
                                    }`}
                                    key={reservation.booking}
                                    style={{ whiteSpace: 'nowrap' }}
                                    onMouseEnter={() =>
                                      setShowDetails(reservation.booking)
                                    }
                                    onMouseLeave={() => setShowDetails(null)}
                                  >
                                    {showDetails === reservation.booking && (
                                      <BookingDetail
                                        bookingId={reservation.booking}
                                      />
                                    )}

                                    <span className='flex items-center absolute z-10 left-2'>
                                      {isStartDate &&
                                        (reservation.partnerName ===
                                        'Airbnb' ? (
                                          <FaAirbnb className='mr-1' />
                                        ) : reservation.partnerName ===
                                          'Booking.com' ? (
                                          <TbBrandBooking className='mr-1 h-4 w-4' />
                                        ) : (
                                          <GrStatusUnknown className='mr-1 w-4 h-4' />
                                        ))}

                                      {isStartDate &&
                                        (reservation.travellerName.toUpperCase() ===
                                        ''
                                          ? 'Desconocido'
                                          : reservation.travellerName
                                              .substring(0, 17)
                                              .toUpperCase())}
                                    </span>
                                  </Link>
                                );
                              }
                            )}

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
                            className='flex justify-center items-center border-[1px] border-p600 border-b-0 border-t-0 border-l-0 w-36'
                          >
                            {reservations.map(
                              (reservation, reservationIndex) => {
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
                                    className={`text-center bg-p600/80 h-2/6 lg:h-2/3 text-white text-xs w-full py-1 ${roundedClass} ${
                                      (reservations.length === 2 &&
                                        (reservationIndex === 0
                                          ? 'mr-1'
                                          : '')) ||
                                      (isStartDate &&
                                        reservations.length === 1 &&
                                        'ml-16') ||
                                      (isEndDate && 'mr-16')
                                    }`}
                                  >
                                    <span className='flex items-center absolute z-10 left-2'>
                                      <TbLockCancel className='w-4 h-4 mr-1' />
                                      {isStartDate ? 'Bloqueado' : ''}
                                    </span>
                                  </p>
                                ) : (
                                  <Link
                                    href={`/private/owner/reservation/${reservation.booking}`}
                                    className={` bg-p600/80  relative text-white text-xs w-full h-2/6 lg:h-2/3  py-1 ${roundedClass} ${
                                      (reservations.length === 2 &&
                                        (reservationIndex === 0
                                          ? 'mr-1'
                                          : '')) ||
                                      (isStartDate &&
                                        reservations.length === 1 &&
                                        'ml-16') ||
                                      (isEndDate && 'mr-16')
                                    }`}
                                    key={reservation.booking}
                                    style={{ whiteSpace: 'nowrap' }}
                                    onMouseEnter={() =>
                                      setShowDetails(reservation.booking)
                                    }
                                    onMouseLeave={() => setShowDetails(null)}
                                  >
                                    {showDetails === reservation.booking && (
                                      <BookingDetail
                                        bookingId={reservation.booking}
                                      />
                                    )}

                                    <span className='flex items-center absolute z-10 left-2'>
                                      {isStartDate &&
                                        (reservation.partnerName ===
                                        'Airbnb' ? (
                                          <FaAirbnb className='mr-1' />
                                        ) : reservation.partnerName ===
                                          'Booking.com' ? (
                                          <TbBrandBooking className='mr-1 h-4 w-4' />
                                        ) : (
                                          <GrStatusUnknown className='mr-1 w-4 h-4' />
                                        ))}

                                      {isStartDate &&
                                        (reservation.travellerName.toUpperCase() ===
                                        ''
                                          ? 'Desconocido'
                                          : reservation.travellerName
                                              .substring(0, 17)
                                              .toUpperCase())}
                                    </span>
                                  </Link>
                                );
                              }
                            )}

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
                <div className='text-xs lg:text-base space-y-2 lg:space-y-0 sticky left-0 bg-white z-10 border border-p600  flex flex-col lg:flex-row justify-center'>
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

                <div>
                  <p className='text-xs lg:text-base border border-p600 border-l-0 pl-4 text-p800 font-bold'>
                    {getMonthName(currentMonth)} {currentYear}
                  </p>

                  <div className='flex'>
                    {daysOfWeekInCurrentMonth.map((day, index) => (
                      <div key={index} className='border-r border-r-p600 w-36'>
                        <div className='text-xs lg:text-base text-center text-p800 font-bold'>
                          {day}
                        </div>
                        <div className='text-xs lg:text-base text-center border-y border-y-p600  text-p800 font-bold'>
                          {index + 1}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className='text-xs lg:text-base border border-p600 border-l-0 pl-4 text-p800 font-bold'>
                    {getMonthName(nextMonth)} {nextYear}
                  </p>

                  <div className='flex'>
                    {daysOfWeekInNextMonth.map((day, index) => (
                      <div key={index} className='border-r border-r-p600 w-36'>
                        <div className='text-xs lg:text-base text-center text-p800 font-bold'>
                          {day}
                        </div>
                        <div className='text-xs lg:text-base text-center border-y border-y-p600  text-p800 font-bold'>
                          {index + 1}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={scrollRight}
              className='hidden lg:flex p-2 relative z-10 text-white bg-p600/80 ml-3 -bottom-[218px]'
            >
              <AiOutlineArrowRight />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
