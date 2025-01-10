import { ReservationAvaibook } from '@/types';
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import axios from 'axios';
import styles from '../../../../components/AdminMultiCalendar/AdminMultiCalendar.module.css';
import moment from 'moment';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import useDictionary from '@/app/hooks/useDictionary';
import { Accommodation } from '@/app/types';
import ReservationLink from './ReservationLink';
import LoadingPlaceholder from '../../shared/LoadingPlaceholder/LoadingPlaceholder';

export const OwnerMultiCalendar = ({ allAccomodationsResponse }: any) => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [loading, setLoading] = useState(false);
  const [showDetails, setShowDetails] = useState<null | string>(null);
  const [accomodations, setAccomodations] = useState<Accommodation[]>();
  const [scrollContainer, setScrollContainer] = useState<HTMLDivElement | null>(
    null
  );
  const dictionary = useDictionary('ownersAccount');

  const fetchBookings = async (startDate: string, endDate: string) => {
    const response = await axios.get(
      `https://api.avaibook.com/api/owner/bookings/?checkinStartDate=${startDate}&checkinEndDate=${endDate}`,
      {
        headers: {
          'Content-Type': 'application/json',
          'X-AUTH-TOKEN': process.env.AVAIBOOK_API_TOKEN,
        },
      }
    );
    return response.data;
  };

  const fetchAccomodationsAndReservations = useCallback(async () => {
    setLoading(true);

    if (allAccomodationsResponse && allAccomodationsResponse.length > 0) {
      const currentDay = moment().startOf('day').format('YYYY-MM-DD');
      const nextDay = moment(currentDay).add(1, 'days').format('YYYY-MM-DD');
      const firstDaySixMonthsAgo = moment()
        .subtract(6, 'months')
        .startOf('month')
        .format('YYYY-MM-DD');
      const nextNinetyDays = moment(nextDay)
        .add(90, 'days')
        .format('YYYY-MM-DD');

      try {
        const [twelveMonthsAgoBookings, ninetyDaysBookings] = await Promise.all(
          [
            fetchBookings(firstDaySixMonthsAgo, currentDay),
            fetchBookings(nextDay, nextNinetyDays),
          ]
        );

        const updatedAccomodations = allAccomodationsResponse.map(
          (accomodation: Accommodation) => {
            const pastReservations = twelveMonthsAgoBookings.filter(
              (booking: ReservationAvaibook) =>
                booking.accommodationId === accomodation.accomodationid &&
                booking.status === 'CONFIRMED'
            );

            const futureReservations = ninetyDaysBookings.filter(
              (booking: ReservationAvaibook) =>
                booking.accommodationId === accomodation.accomodationid &&
                booking.status === 'CONFIRMED'
            );

            return {
              ...accomodation,
              reservations: [...pastReservations, ...futureReservations],
            };
          }
        );

        setAccomodations(updatedAccomodations);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    }

    setLoading(false);
  }, [allAccomodationsResponse]);

  useEffect(() => {
    fetchAccomodationsAndReservations();
  }, [fetchAccomodationsAndReservations]);

  useEffect(() => {
    if (scrollContainer) {
      const today = new Date().getDate();
      const dayCellWidth = 144;
      const scrollPosition = dayCellWidth * (today - 1);
      scrollContainer.scrollLeft = scrollPosition;
    }
  }, [scrollContainer]);

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
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
    }
  };

  const goToPreviousMonth = () => {
    const { month, year } = getPreviousMonthAndYear(currentMonth, currentYear);
    setCurrentMonth(month);
    setCurrentYear(year);
    if (scrollContainer) {
      scrollContainer.scrollLeft = 0;
    }
  };

  const daysInCurrentMonth = useMemo(
    () => getDaysInMonth(currentMonth, currentYear),
    [currentMonth, currentYear]
  );

  const daysOfWeekInCurrentMonth = useMemo(() => {
    return Array.from({ length: daysInCurrentMonth }, (_, i) => {
      const date = new Date(currentYear, currentMonth, i + 1);
      return getDayOfWeek(date);
    });
  }, [daysInCurrentMonth, currentMonth, currentYear]);

  const { month: nextMonth, year: nextYear } = getNextMonthAndYear(
    currentMonth,
    currentYear
  );

  const daysInNextMonth = useMemo(
    () => getDaysInMonth(nextMonth, nextYear),
    [nextMonth, nextYear]
  );

  const daysOfWeekInNextMonth = useMemo(() => {
    return Array.from({ length: daysInNextMonth }, (_, i) => {
      const date = new Date(nextYear, nextMonth, i + 1);
      return getDayOfWeek(date);
    });
  }, [daysInNextMonth, nextMonth, nextYear]);

  const scrollLeft = () => {
    if (scrollContainer) {
      scrollContainer.scrollLeft -= 70;
    }
  };

  const scrollRight = () => {
    if (scrollContainer) {
      scrollContainer.scrollLeft += 70;
    }
  };

  return (
    <section className='px-2 lg:px-10 mt-12 mb-16'>
      {loading ? (
        <LoadingPlaceholder
          message={dictionary.ownerDashboard?.loadingAccommodations}
        />
      ) : (
        <div>
          <div className='flex items-center'>
            <button
              onClick={scrollLeft}
              className='hidden lg:flex p-2 relative z-10 text-white bg-p600/80 mr-3 -bottom-[100px]'
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
                    key={accomodation.accomodationid}
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
                              (reservation: any, reservationIndex) => (
                                <ReservationLink
                                  key={`${index}-${reservation.id}`}
                                  reservation={reservation}
                                  date={date}
                                  showDetails={showDetails}
                                  setShowDetails={setShowDetails}
                                />
                              )
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
                              (reservation: any, reservationIndex) => (
                                <ReservationLink
                                  key={`${index}-${reservation.id}`}
                                  reservation={reservation}
                                  date={date}
                                  showDetails={showDetails}
                                  setShowDetails={setShowDetails}
                                />
                              )
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
              className='hidden lg:flex p-2 relative z-10 text-white bg-p600/80 ml-3 -bottom-[100px]'
            >
              <AiOutlineArrowRight />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
