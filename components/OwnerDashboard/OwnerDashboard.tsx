/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useState } from 'react';
import { Session } from 'next-auth';
import { axiosConfig } from '@/utils';
import axios from 'axios';
import { AdminMultiCalendar } from './AdminMultiCalendar';
import styles from './OwnerDashboard.module.css';
import Image from 'next/legacy/image';
import Link from 'next/link';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import useDictionary from '@/app/hooks/useDictionary';

export const OwnerDashboard: FC<{ session: Session }> = ({ session }) => {
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
        const { data: accommodations } = await axiosConfig.get(
          `/api/accomodations/findByUserId/${
            session.user?._id || session.user?.id
          }`
        );

        const accommodationDetails = await Promise.all(
          accommodations.map(async (item: any) => {
            const { data: dataAvaibook } = await axios.get(
              `https://api.avaibook.com/api/owner/accommodations/${item.accomodationId}/`,
              {
                headers: {
                  'Content-Type': 'application/json',
                  'X-AUTH-TOKEN': process.env.AVAIBOOK_API_TOKEN,
                },
              }
            );
            return dataAvaibook;
          })
        );

        setData(accommodationDetails);
      } catch (error) {
        console.error('Error fetching accommodations:', error);
      }
    };

    fetchAccommodations();
  }, []);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        if (data !== undefined && data.length > 0) {
          const bookings: any = await Promise.all(
            data.map(async (item: any) => {
              const { data: bookings } = await axios.get(
                `https://avaibook-data-extraction-production.up.railway.app/api/v1/bookings/${item.id}?startDate=2024-09-1&endDate=2024-09-30`
              );

              const res = bookings.map((booking: any) => {
                return {
                  ...booking,
                  accommodation: item.name,
                  images: item.images,
                };
              });

              return res;
            })
          );

          // Flatten the nested arrays of bookings into a single array
          const flattenedBookings = bookings.flat();
          setBookings(flattenedBookings);

          // Calculate the counts and sums
          const total = flattenedBookings.length;
          const bookingCom = flattenedBookings.filter(
            (booking: any) => booking.partnername === 'Booking.com'
          ).length;
          const airbnb = flattenedBookings.filter(
            (booking: any) => booking.partnername === 'Airbnb'
          ).length;
          const other = flattenedBookings.filter(
            (booking: any) =>
              booking.partnername !== 'Booking.com' &&
              booking.partnername !== 'Airbnb'
          ).length;

          const bookingComSum = flattenedBookings
            .filter((booking: any) => booking.partnername === 'Booking.com')
            .reduce(
              (sum: number, booking: any) => sum + booking.totalamount,
              0
            );
          const airbnbSum = flattenedBookings
            .filter((booking: any) => booking.partnername === 'Airbnb')
            .reduce(
              (sum: number, booking: any) => sum + booking.totalamount,
              0
            );
          const otherSum = flattenedBookings
            .filter(
              (booking: any) =>
                booking.partnername !== 'Booking.com' &&
                booking.partnername !== 'Airbnb'
            )
            .reduce(
              (sum: number, booking: any) => sum + booking.totalamount,
              0
            );

          setBookingCounts({ total, bookingCom, airbnb, other });
          setBookingSums({
            bookingCom: bookingComSum,
            airbnb: airbnbSum,
            other: otherSum,
          });
        }
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchBookings();
  }, [data]);

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
            <AdminMultiCalendar allAccomodationsResponse={data} />
          ) : (
            <div className='flex justify-center items-center mt-10'>
              <div className='flex flex-col justify-center items-center space-y-8 border-[1px] border-dashed md:h-[200px] md:w-[600px] p-10'>
                <p className=' text-black900/[.7] lg:text-xl'>
                  {dictionary.ownerDashboard?.waitingReservationsMessage}
                </p>
              </div>
            </div>
          )}
        </div>

        <div className={styles.news__title}>
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
              bookings.slice(0, 2).map((item: any, index) => (
                <div key={item.booking} className={styles.bookings__card}>
                  <div className={styles.card}>
                    <figure className={styles.bookings__image}>
                      <Image
                        src={item.images[0].ORIGINAL}
                        alt='Accommodation'
                        layout='fill'
                      />
                    </figure>

                    <div className={styles.bookings_cardBody}>
                      <h3 className={styles.bookings_status}>
                        {dictionary.ownerDashboard?.bookingStatus}
                      </h3>

                      <p className={styles.bookings_accommodation}>
                        {item.accommodation}
                      </p>

                      <p className={styles.bookings_accommodation}>
                        {item.traveller_name}
                      </p>

                      <div className={styles.bookings_check}>
                        <p>Check-in: {item.indate}</p>/
                        <p>Check-out: {item.outdate}</p>
                      </div>

                      <div className={styles.bookings_check}>
                        <p>€{item.totalamount}</p>

                        <Link
                          href={`/private/owners/reservation/${item.booking}`}
                          className={styles.bookings_details}
                        >
                          {dictionary.ownerDashboard?.bookinButton}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className='flex justify-center items-center mt-10'>
                <div className='flex flex-col justify-center items-center space-y-8 border-[1px] border-dashed md:h-[200px] md:w-[600px] p-10'>
                  <p className=' text-black900/[.7] lg:text-xl'>
                    {dictionary.ownerDashboard?.waitingReservationsMessage}
                  </p>
                </div>
              </div>
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

const LineChart = () => {
  const dictionary = useDictionary('ownersAccount');

  const months: any = dictionary.ownerDashboard?.monthEarnings;

  const data = {
    labels: [
      `${months?.june}`,
      `${months?.july}`,
      `${months?.august}`,
      `${months?.september}`,
    ],
    datasets: [
      {
        label: `${dictionary.ownerDashboard?.earnings}`,
        data: [500, 1500, 600, 700, 2000],
        fill: false,
        backgroundColor: '#ff385c',
        borderColor: '#ff385c',
        pointBorderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Line data={data} options={options} />;
};
