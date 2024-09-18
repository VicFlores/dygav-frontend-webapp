import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import {
  ReservationAvaibook,
  TAvaibookAccomodations,
  TCustomAccomodation,
} from '@/types';
import { FaAirbnb, FaSpinner } from 'react-icons/fa6';
import axios from 'axios';
import styles from '../AdminMultiCalendar/AdminMultiCalendar.module.css';
import moment from 'moment';
import Link from 'next/link';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { BsCalendar2Week } from 'react-icons/bs';
import { TbBrandBooking, TbLockCancel } from 'react-icons/tb';
import { GrStatusUnknown } from 'react-icons/gr';
import { BookingDetail } from '../AdminMultiCalendar/BookingDetail';
import useDictionary from '@/app/hooks/useDictionary';

export const AdminMultiCalendar = ({ allAccomodationsResponse }: any) => {
  const [loading, setLoading] = useState(false);
  const [showDetails, setShowDetails] = useState<null | string>(null);
  const [accomodations, setAccomodations] = useState<TCustomAccomodation[]>();
  const [scrollContainer, setScrollContainer] = useState<HTMLDivElement | null>(
    null
  );

  useEffect(() => {
    const fetchAccomodationsAndReservations = async () => {
      setLoading(true);

      if (
        allAccomodationsResponse !== undefined &&
        allAccomodationsResponse.length > 0
      ) {
        const currentDay = moment().startOf('day').format('YYYY-MM-DD');

        const nextDay = moment(currentDay).add(1, 'days').format('YYYY-MM-DD');

        const firstDayNinetyDaysAgo = moment()
          .subtract(90, 'days')
          .startOf('day')
          .format('YYYY-MM-DD');

        const nextNinetyDays = moment(nextDay)
          .add(90, 'days')
          .format('YYYY-MM-DD');

        const ninetyAgoBookings = await axios.get(
          `https://api.avaibook.com/api/owner/bookings/?checkinStartDate=${firstDayNinetyDaysAgo}&checkinEndDate=${currentDay}`,
          {
            headers: {
              'Content-Type': 'application/json',
              'X-AUTH-TOKEN': process.env.AVAIBOOK_API_TOKEN,
            },
          }
        );

        const ninetyDaysBookings = await axios.get(
          `https://api.avaibook.com/api/owner/bookings/?checkinStartDate=${nextDay}&checkinEndDate=${nextNinetyDays}`,
          {
            headers: {
              'Content-Type': 'application/json',
              'X-AUTH-TOKEN': process.env.AVAIBOOK_API_TOKEN,
            },
          }
        );

        const accomodations = allAccomodationsResponse;
        const afterBookings = ninetyAgoBookings.data;
        const beforeBookings = ninetyDaysBookings.data;

        accomodations.forEach((accomodation: TAvaibookAccomodations) => {
          const afterReservations = afterBookings.filter(
            (booking: ReservationAvaibook) =>
              booking.accommodationId === accomodation.id &&
              booking.status === 'CONFIRMED'
          );

          const beforeReservations = beforeBookings.filter(
            (booking: ReservationAvaibook) =>
              booking.accommodationId === accomodation.id &&
              booking.status === 'CONFIRMED'
          );

          accomodation.reservations = [
            ...afterReservations,
            ...beforeReservations,
          ];
        });

        setAccomodations(accomodations);
      }

      setLoading(false);
    };

    fetchAccomodationsAndReservations();
  }, [allAccomodationsResponse]);

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

  const dictionary = useDictionary('ownersAccount');

  return (
    <section className='px-2 lg:px-10 mt-12 mb-16'>
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
              {dictionary.ownerDashboard?.loadingAccommodations}
            </span>
          </div>
        </div>
      ) : (
        <div>
          <div className='flex items-center'>
            <button
              onClick={scrollLeft}
              className='hidden lg:flex p-2 relative z-10 text-white bg-p600/80 mr-3 -bottom-[205px]'
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
                              reservation.checkInDate
                            ).startOf('day');
                            let endDate = moment(
                              reservation.checkOutDate
                            ).startOf('day');

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
                                  moment(reservation.checkInDate).startOf('day')
                                );
                                const isEndDate = date.isSame(
                                  moment(reservation.checkOutDate).startOf(
                                    'day'
                                  )
                                );

                                const roundedClass = isStartDate
                                  ? 'rounded-l-xl'
                                  : isEndDate
                                  ? 'rounded-r-xl'
                                  : '';

                                return (
                                  <Link
                                    href={`/private/owner/reservation/${reservation.id}`}
                                    className={` bg-p600/80  relative text-white text-xs w-full h-[18px] lg:h-2/3  lg:py-1 ${roundedClass} ${
                                      (isStartDate &&
                                        reservations.length === 1 &&
                                        'ml-16') ||
                                      (isEndDate &&
                                        reservations.length === 1 &&
                                        'mr-16')
                                    }`}
                                    key={reservation.id}
                                    style={{ whiteSpace: 'nowrap' }}
                                    onMouseEnter={() =>
                                      setShowDetails(reservation.id)
                                    }
                                    onMouseLeave={() => setShowDetails(null)}
                                  >
                                    {showDetails === reservation.id && (
                                      <BookingDetail
                                        bookingId={reservation.id}
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
                              reservation.checkInDate
                            ).startOf('day');
                            let endDate = moment(
                              reservation.checkOutDate
                            ).startOf('day');

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
                                  moment(reservation.checkInDate).startOf('day')
                                );
                                const isEndDate = date.isSame(
                                  moment(reservation.checkOutDate).startOf(
                                    'day'
                                  )
                                );

                                const roundedClass = isStartDate
                                  ? 'rounded-l-xl'
                                  : isEndDate
                                  ? 'rounded-r-xl'
                                  : '';

                                return (
                                  <Link
                                    href={`/private/owner/reservation/${reservation.id}`}
                                    className={` bg-p600/80  relative text-white text-xs w-full h-[18px] lg:h-2/3  lg:py-1 ${roundedClass} ${
                                      (isStartDate &&
                                        reservations.length === 1 &&
                                        'ml-16') ||
                                      (isEndDate &&
                                        reservations.length === 1 &&
                                        'mr-16')
                                    }`}
                                    key={reservation.id}
                                    style={{ whiteSpace: 'nowrap' }}
                                    onMouseEnter={() =>
                                      setShowDetails(reservation.id)
                                    }
                                    onMouseLeave={() => setShowDetails(null)}
                                  >
                                    {showDetails === reservation.id && (
                                      <BookingDetail
                                        bookingId={reservation.id}
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
                    {dictionary.ownerDashboard?.previousButton}
                  </button>

                  <button
                    className='flex items-center justify-center ml-4 text-p800 font-semibold'
                    onClick={goToNextMonth}
                  >
                    {dictionary.ownerDashboard?.nextButton}
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
              className='hidden lg:flex p-2 relative z-10 text-white bg-p600/80 ml-3 -bottom-[205px]'
            >
              <AiOutlineArrowRight />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
