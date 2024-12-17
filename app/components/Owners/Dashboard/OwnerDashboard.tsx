'use client';

import { FC, useEffect, useState } from 'react';
import { OwnerMultiCalendar } from './OwnerMultiCalendar';
import { getOwnerAccommodations, getOwnerInfo } from '@/app/utils';
import { avaibookExtraction } from '@/app/utils/axiosConfig/avaibookExtraction';
import { Accommodation, Booking } from '@/app/types';
import useDictionary from '@/app/hooks/useDictionary';
import styles from './OwnerDashboard.module.css';
import 'chart.js/auto';
import OwnerBookingCard from '../../shared/OwnerBookingCard/OwnerBookingCard';
import WaitingReservationsOrAccommodations from '../../shared/WaitingReservationsOrAccommodations/WaitingReservationsOrAccommodations';
import { LineChart } from './LineChart';

export const OwnerDashboard = () => {
  const [data, setData] = useState<any[]>();
  const [bookings, setBookings] = useState<any[]>([]);
  const [bookingCounts, setBookingCounts] = useState({
    total: 0,
    bookingCom: 0,
    airbnb: 0,
    other: 0,
  });
  const [bookingSums, setBookingSums] = useState({
    bookingCom: 0,
    airbnb: 0,
    other: 0,
  });
  const dictionary = useDictionary('ownersAccount');

  useEffect(() => {
    const fetchAccommodations = async () => {
      try {
        const accommodations = await getOwnerAccommodations();
        const accommodationDetails = await fetchAccommodationDetails(
          accommodations
        );

        setData(accommodationDetails);

        if (accommodationDetails.length > 0) {
          const bookings = await fetchBookings(accommodationDetails);

          setBookings(bookings);

          const { counts, sums } = calculateBookingStats(bookings);

          setBookingCounts(counts);
          setBookingSums(sums);
        }
      } catch (error) {
        console.error('Error fetching accommodations:', error);
      }
    };

    fetchAccommodations();
  }, []);

  const fetchAccommodationDetails = async (
    accommodations: any[]
  ): Promise<Accommodation[]> => {
    const details = await Promise.all(
      accommodations.map(async (item) => {
        const { data } = await avaibookExtraction.get(
          `/accomodation/${item.aviabook_id}/`
        );
        return data;
      })
    );
    return details.flat();
  };

  const fetchBookings = async (
    accommodations: Accommodation[]
  ): Promise<Booking[]> => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // getMonth() returns 0-based month
    const startDate = `${year}-${month}-01`;

    // Add one month to the current date
    const nextMonth = new Date(year, now.getMonth() + 1, 1);
    const nextYear = nextMonth.getFullYear();
    const nextMonthStr = String(nextMonth.getMonth() + 1).padStart(2, '0');
    const endDate = `${nextYear}-${nextMonthStr}-${new Date(
      nextYear,
      nextMonth.getMonth() + 1,
      0
    ).getDate()}`;

    const bookings = await Promise.all(
      accommodations.map(async (item) => {
        const { data } = await avaibookExtraction.get(
          `/bookings/${item.accomodationid}?startDate=${startDate}&endDate=${endDate}`
        );

        return data
          .filter((booking: any) => booking.status !== 'CANCELLED')
          .map((booking: any) => ({
            ...booking,
            accommodation: item.name,
            images: item.images,
          }));
      })
    );

    return bookings.flat();
  };

  const calculateBookingStats = (bookings: Booking[]) => {
    const total = bookings.length;
    const bookingCom = bookings.filter(
      (b) => b.partnername === 'Booking.com'
    ).length;
    const airbnb = bookings.filter((b) => b.partnername === 'Airbnb').length;
    const other = bookings.filter(
      (b) => b.partnername !== 'Booking.com' && b.partnername !== 'Airbnb'
    ).length;

    const bookingComSum = bookings
      .filter((b) => b.partnername === 'Booking.com')
      .reduce((sum, b) => sum + b.totalamount, 0);
    const airbnbSum = bookings
      .filter((b) => b.partnername === 'Airbnb')
      .reduce((sum, b) => sum + b.totalamount, 0);
    const otherSum = bookings
      .filter(
        (b) => b.partnername !== 'Booking.com' && b.partnername !== 'Airbnb'
      )
      .reduce((sum, b) => sum + b.totalamount, 0);

    return {
      counts: { total, bookingCom, airbnb, other },
      sums: { bookingCom: bookingComSum, airbnb: airbnbSum, other: otherSum },
    };
  };

  // Function to generate the conic-gradient string
  const calculateGradient = (bookingCounts: any) => {
    const total = bookingCounts.total;

    if (total === 0) return 'conic-gradient(#fff 0%, #fff 100%)';

    const bookingComPercentage = (bookingCounts.bookingCom / total) * 100;
    const airbnbPercentage = (bookingCounts.airbnb / total) * 100;
    const otherPercentage = (bookingCounts.other / total) * 100;

    return `conic-gradient(
      #003b95 ${bookingComPercentage}%,
      #ff385c ${bookingComPercentage}% ${
      bookingComPercentage + airbnbPercentage
    }%,
      #f4511e ${bookingComPercentage + airbnbPercentage}% ${
      bookingComPercentage + airbnbPercentage + otherPercentage
    }%,
      #00aaff ${bookingComPercentage + airbnbPercentage + otherPercentage}% 100%
    )`;
  };

  return (
    <section>
      <div className={styles.controlPanel}>
        <h1 className={styles.controlPanel__title}>
          {dictionary.ownerDashboard?.controlPanelTitle}
        </h1>

        <p className={styles.controlPanel__subtitle}>
          {dictionary.ownerDashboard?.controlPanelSubtitle}
        </p>

        <div>
          {data !== undefined && data.length > 0 ? (
            <OwnerMultiCalendar allAccomodationsResponse={data} />
          ) : (
            <WaitingReservationsOrAccommodations
              message={dictionary.ownerDashboard?.waitingReservationsMessage}
            />
          )}
        </div>

        <div>
          <h1 className={styles.controlPanel__title}>
            {dictionary.ownerDashboard?.lastUpdateTitle}
          </h1>

          <p className={styles.controlPanel__subtitle}>
            {dictionary.ownerDashboard?.lastUpdateSubtitle}
          </p>

          <div className={styles.news}>
            <div className={styles.news__card}>
              <div className={styles.news__cardTitle}>
                <h3>{dictionary.ownerDashboard?.newUpdateTitle}</h3>

                <p>{dictionary.ownerDashboard?.newUpdateDate}</p>
              </div>

              <div className={styles.news__cardTitle}>
                <h3>{dictionary.ownerDashboard?.newUpdateSubtitle}</h3>

                <p>Version 1.5</p>
              </div>

              <p>{dictionary.ownerDashboard?.newsOne}</p>
            </div>

            <div className={styles.news__card}>
              <div className={styles.news__cardTitle}>
                <h3>New update available</h3>

                <p>{dictionary.ownerDashboard?.newUpdateDate}</p>
              </div>

              <div className={styles.news__cardTitle}>
                <h3>{dictionary.ownerDashboard?.newUpdateSubtitle}</h3>

                <p>Version 1.5</p>
              </div>

              <p>{dictionary.ownerDashboard?.newsTwo}</p>
            </div>

            <div className={styles.news__card}>
              <div className={styles.news__cardTitle}>
                <h3>New update available</h3>

                <p>{dictionary.ownerDashboard?.newUpdateDate}</p>
              </div>

              <div className={styles.news__cardTitle}>
                <h3>{dictionary.ownerDashboard?.newUpdateSubtitle}</h3>

                <p>Version 1.5</p>
              </div>

              <p>{dictionary.ownerDashboard?.newsThree}</p>
            </div>

            <div className={styles.news__card}>
              <div className={styles.news__cardTitle}>
                <h3>New update available</h3>

                <p>{dictionary.ownerDashboard?.newUpdateDate}</p>
              </div>

              <div className={styles.news__cardTitle}>
                <h3>{dictionary.ownerDashboard?.newUpdateSubtitle}</h3>

                <p>Version 1.5</p>
              </div>

              <p>{dictionary.ownerDashboard?.newsFour}</p>
            </div>
          </div>

          <div>
            <h1 className={styles.controlPanel__title}>
              {dictionary.ownerDashboard?.upcomingBookingsTitle}
            </h1>

            <p className={styles.controlPanel__subtitle}>
              {dictionary.ownerDashboard?.upcomingBookingsSubtitle}
            </p>

            {bookings.length > 0 ? (
              bookings
                .slice(0, 2)
                .map((item: any, index) => (
                  <OwnerBookingCard
                    key={item.booking}
                    booking={item}
                    dictionary={dictionary}
                  />
                ))
            ) : (
              <WaitingReservationsOrAccommodations
                message={dictionary.ownerDashboard?.waitingReservationsMessage}
              />
            )}
          </div>
        </div>

        <div className={styles.stadistics}>
          <div>
            <h1 className={styles.controlPanel__title}>
              {dictionary.ownerDashboard?.bookingPlatformTitle}
            </h1>

            <p className={styles.controlPanel__subtitle}>
              {dictionary.ownerDashboard?.bookingPlatformSubtitle}
            </p>
          </div>

          <div className={styles.graph}>
            <div className={styles.donutContainer}>
              <div
                className={styles.donut}
                style={{
                  background: calculateGradient(bookingCounts),
                }}
              >
                <div className={styles.donutText}>
                  {bookingCounts.total} {dictionary.ownerDashboard?.quantity}
                </div>
              </div>
            </div>

            <div className={styles.graphInfo}>
              <div className={styles.platform}>
                <p className={styles.circleInfo}>
                  <span
                    className={styles.circle + ' ' + styles.bookingcom}
                  ></span>
                  {dictionary.ownerDashboard?.bookingReservation}
                </p>

                <p className={styles.circleData}>
                  €{bookingSums.bookingCom.toFixed(2)}
                </p>
              </div>

              <div className={styles.platform}>
                <p className={styles.circleInfo}>
                  <span className={styles.circle + ' ' + styles.airbnb}></span>
                  {dictionary.ownerDashboard?.AirbnbReservation}
                </p>

                <p className={styles.circleData}>
                  €{bookingSums.airbnb.toFixed(2)}
                </p>
              </div>

              <div className={styles.platform}>
                <p className={styles.circleInfo}>
                  <span className={styles.circle + ' ' + styles.other}></span>
                  {dictionary.ownerDashboard?.otherReservation}
                </p>

                <p className={styles.circleData}>
                  €{bookingSums.other.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.graphLine}>
          <h1 className={styles.controlPanel__title}>
            {dictionary.ownerDashboard?.earningsTitle}
          </h1>
          <p className={styles.controlPanel__subtitle}>
            {dictionary.ownerDashboard?.earningsSubtitle}
          </p>

          <div className={styles.chartContainer}>
            <div className={styles.chart}>
              <LineChart />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
