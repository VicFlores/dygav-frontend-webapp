'use client';

import React, { useState, useEffect, FC } from 'react';
import moment from 'moment';
import styles from './Finanzas.module.css';
import Image from 'next/legacy/image';
import useDictionary from '@/app/hooks/useDictionary';
import { Accommodation, Booking } from '@/app/types';
import { avaibookExtraction } from '@/app/utils/axiosConfig/avaibookExtraction';
import { getOwnerAccommodations } from '@/app/utils';
import LoadingPlaceholder from '../../shared/LoadingPlaceholder/LoadingPlaceholder';

import 'moment/locale/es';
import 'moment/locale/en-gb';

export const Finanzas: FC<{ accessToken: string }> = ({ accessToken }) => {
  const [data, setData] = useState<any[]>([]);
  const [selectedAccommodation, setSelectedAccommodation] = useState<
    any | null
  >(null);
  const [selectedMonth, setSelectedMonth] = useState(
    `${moment().format('MMMM')}`
  );
  const [bookings, setBookings] = useState<any[]>([]);
  const [pdfUrls, setPdfUrls] = useState<string[]>([]);
  const [platformCounts, setPlatformCounts] = useState<{
    [key: string]: { [key: string]: number };
  }>({});
  const dictionary: any = useDictionary('finances');

  useEffect(() => {
    const fetchAccommodations = async () => {
      try {
        const accommodations = await getOwnerAccommodations(accessToken || '');
        const accommodationDetails = await fetchAccommodationDetails(
          accommodations
        );

        setSelectedAccommodation(accommodationDetails[0]);
        setData(accommodationDetails);

        if (accommodationDetails.length > 0) {
          const bookings = await fetchBookings(
            accommodationDetails,
            selectedMonth
          );
          setBookings(bookings);
          countPlatformBookings(bookings);
        }
      } catch (error) {
        console.error('Error fetching accommodations:', error);
      }
    };

    fetchAccommodations();
  }, [accessToken, selectedMonth]);

  useEffect(() => {
    const fetchBookingsForSelectedMonth = async () => {
      if (data.length > 0) {
        const bookings = await fetchBookings(data, selectedMonth);
        setBookings(bookings);
        countPlatformBookings(bookings);
      }
    };

    fetchBookingsForSelectedMonth();
  }, [selectedMonth, data]);

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
    accommodations: Accommodation[],
    month: string
  ): Promise<Booking[]> => {
    // Detect the language of the month
    const isSpanish = moment(month, 'MMMM', 'es', true).isValid();
    const locale = isSpanish ? 'es' : 'en-gb';

    // Set the locale
    moment.locale(locale);

    const now = moment();
    const year = now.year();
    const monthIndex = moment(month, 'MMMM').month() + 1;
    const startDate = moment(`${year}-${monthIndex}-01`, 'YYYY-M-D').format(
      'YYYY-MM-DD'
    );
    const endDate = moment(startDate).endOf('month').format('YYYY-MM-DD');

    const bookings = await Promise.all(
      accommodations.map(async (item) => {
        const { data } = await avaibookExtraction.get(
          `/bookings/${item.accomodationid}?startDate=${startDate}&endDate=${endDate}`
        );

        return data.map((booking: any) => ({
          ...booking,
          accommodation: item.name,
          images: item.images,
        }));
      })
    );
    return bookings.flat();
  };

  const handleButtonClick = (accommodation: any) => {
    setSelectedAccommodation(accommodation);
  };

  const generateInvoiceNumber = () => {
    const randomFourDigits = Math.floor(1000 + Math.random() * 9000); // Generates a random 4-digit number
    const currentYear = new Date().getFullYear(); // Gets the current year
    return `VT-${randomFourDigits}-${currentYear}`;
  };

  const handleMonthChange = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const month = event.target.value;
    setSelectedMonth(month);
  };

  const downloadPDF = (url: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const countPlatformBookings = (bookings: any) => {
    const platformCounts: Record<string, Record<string, number>> = {};

    bookings.forEach((booking: any) => {
      const { accommodation, partnername, dygavfee, partnerfee, totalamount } =
        booking;

      if (!platformCounts[accommodation]) {
        platformCounts[accommodation] = {
          'Booking.com': 0,
          Airbnb: 0,
          Other: 0,
          totalDygavFee: 0,
          totalPartnerfee: 0,
          totalAmount: 0,
          totalBookingAmount: 0,
          totalAirbnbAmount: 0,
          totalOtherAmount: 0,
          totalReservations: 0,
        };
      }

      if (partnername === 'Booking.com') {
        platformCounts[accommodation]['Booking.com'] += 1;
        platformCounts[accommodation].totalBookingAmount += totalamount;
      } else if (partnername === 'Airbnb') {
        platformCounts[accommodation]['Airbnb'] += 1;
        platformCounts[accommodation].totalAirbnbAmount += totalamount;
      } else {
        platformCounts[accommodation]['Other'] += 1;
        platformCounts[accommodation].totalOtherAmount += totalamount;
      }

      platformCounts[accommodation].totalDygavFee += dygavfee;
      platformCounts[accommodation].totalPartnerfee += partnerfee;
      platformCounts[accommodation].totalAmount += totalamount;
      platformCounts[accommodation].totalReservations += 1;
    });

    setPlatformCounts(platformCounts);
    return platformCounts;
  };

  return (
    <div className={styles.controlPanel}>
      <h1 className={styles.controlPanel__title}>
        {dictionary.ownersFinanzas?.title}
      </h1>

      <div className={styles.searcher}>
        <p className={styles.controlPanel__subtitle}>
          {dictionary.ownersFinanzas?.subtitle}
        </p>

        {data.length > 0 ? (
          <>
            <div className={styles.accommodationNameContainer}>
              {data.map((accommodation) => (
                <button
                  key={accommodation.accomodationid}
                  className={`${styles.accommodationButton} ${
                    selectedAccommodation?.accomodationid ===
                    accommodation.accomodationid
                      ? styles.selectedAccommodationButton
                      : ''
                  }`}
                  onClick={() => handleButtonClick(accommodation)}
                >
                  {accommodation.name.toString()}
                </button>
              ))}
            </div>
          </>
        ) : (
          <LoadingPlaceholder message='Loading' />
        )}
      </div>

      {selectedAccommodation && (
        <div>
          <div className={styles.invoiceContainer}>
            <div className={styles.invoiceInfo}>
              <h4>{dictionary.ownersFinanzas?.invoiceNumber}</h4>
              <p>{generateInvoiceNumber()}</p>
            </div>

            <div className={styles.invoiceInfo}>
              <h4>{dictionary.ownersFinanzas?.accommodation}</h4>
              <p>{selectedAccommodation.name.toString()}</p>
            </div>

            <div className={styles.invoiceInfo}>
              <h4>{dictionary.ownersFinanzas?.owner}</h4>
              <p>Jose Llaneza</p>
            </div>

            <div className={styles.invoiceInfo}>
              <h4>{dictionary.ownersFinanzas?.month}</h4>
              <select value={selectedMonth} onChange={handleMonthChange}>
                {dictionary.ownersFinanzas?.monthName?.map(
                  (month: any, index: any) => (
                    <option key={index} value={month}>
                      {month}
                    </option>
                  )
                )}
              </select>
            </div>
          </div>

          <div className={styles.invoiceInfoContainer}>
            <h4>{dictionary.ownersFinanzas?.platform}</h4>

            <div className={styles.partnerOne}>
              <figure>
                <Image
                  src='https://multimedia.dygav.es/wp-content/uploads/2024/04/Booking-Logo_osnjdx.png'
                  alt='Booking.com'
                  layout='fill'
                />
              </figure>
            </div>

            <div className={styles.partnerTwo}>
              <figure>
                <Image
                  src='https://multimedia.dygav.es/wp-content/uploads/2024/04/ABNB_ugauy3.png'
                  alt='Airbnb'
                  layout='fill'
                />
              </figure>
            </div>

            <div className={styles.partnerThree}>
              <figure>
                <Image
                  src='https://res.cloudinary.com/feraguilar695/image/upload/v1725208668/DYGAV_g6gpci.svg'
                  alt='Dygav'
                  layout='fill'
                />
              </figure>
            </div>

            <h4>{dictionary.ownersFinanzas?.reservations}</h4>

            {selectedAccommodation && (
              <>
                <p className={styles.reservationOne}>
                  {platformCounts[selectedAccommodation.name]?.[
                    'Booking.com'
                  ] || 0}
                </p>

                <p className={styles.reservationTwo}>
                  {platformCounts[selectedAccommodation.name]?.['Airbnb'] || 0}
                </p>

                <p className={styles.reservationThree}>
                  {platformCounts[selectedAccommodation.name]?.['Other'] || 0}
                </p>
              </>
            )}

            <h4>{dictionary.ownersFinanzas?.percentage}</h4>
            <p className={styles.percentageOne}>0</p>
            <p className={styles.percentageTwo}>0</p>
            <p className={styles.percentageThree}>0</p>

            <h4 className={styles.commissionTitle}>
              {dictionary.ownersFinanzas?.commission}
            </h4>
            <p className={styles.commissionOne}>0</p>
            <p className={styles.commissionTwo}>0</p>
            <p className={styles.commissionThree}>0</p>

            <h4 className={styles.billingTitle}>
              {dictionary.ownersFinanzas?.facturation}
            </h4>

            {selectedAccommodation && (
              <>
                <p className={styles.billingOne}>
                  €
                  {platformCounts[
                    selectedAccommodation.name
                  ]?.totalBookingAmount.toFixed(2) || 0}
                </p>
                <p className={styles.billingTwo}>
                  €
                  {platformCounts[
                    selectedAccommodation.name
                  ]?.totalAirbnbAmount.toFixed(2) || 0}
                </p>
                <p className={styles.billingThree}>
                  €
                  {platformCounts[
                    selectedAccommodation.name
                  ]?.totalOtherAmount.toFixed(2) || 0}
                </p>
              </>
            )}

            <hr className={styles.divider} />

            <div className={styles.totalReservations}>
              <p>{dictionary.ownersFinanzas?.totalReservations}</p>
              <p>
                {platformCounts[selectedAccommodation.name]
                  ?.totalReservations || 0}
              </p>
            </div>

            <div className={styles.totalPercentage}>
              <p>{dictionary.ownersFinanzas?.totalPercentage}</p>
              <p>0</p>
            </div>

            <div className={styles.totalCommission}>
              <p>{dictionary.ownersFinanzas?.totalCommission}</p>
              <p>0</p>
            </div>

            <div className={styles.totalBilling}>
              <p>{dictionary.ownersFinanzas?.totalFacturation}</p>
              <p>
                €
                {platformCounts[
                  selectedAccommodation.name
                ]?.totalAmount.toFixed(2) || 0}
              </p>
            </div>
          </div>

          <div className={styles.totalFinal}>
            <div className={styles.totalFinal__item}>
              <h4>€0</h4>
              <p>{dictionary.ownersFinanzas?.cleaning}</p>
            </div>

            <div className={styles.totalFinal__item}>
              <h4>
                €
                {platformCounts[
                  selectedAccommodation.name
                ]?.totalPartnerfee.toFixed(2) || 0}
              </h4>
              <p>{dictionary.ownersFinanzas?.partnerCommission}</p>
            </div>

            <div className={styles.totalFinal__item}>
              <h4>
                €
                {platformCounts[
                  selectedAccommodation.name
                ]?.totalDygavFee.toFixed(2) || 0}
              </h4>
              <p>{dictionary.ownersFinanzas?.dygavCommission}</p>
            </div>

            <div className={styles.totalFinal__item}>
              <h4>€0</h4>
              <p>{dictionary.ownersFinanzas?.totalAdditional}</p>
            </div>
          </div>

          <div className={styles.billings}>
            <h4>{dictionary.ownersFinanzas?.download}</h4>

            <div className={styles.downloadButtons}>
              <button disabled onClick={() => downloadPDF(pdfUrls[0])}>
                Dygav 1
              </button>
              <button disabled>Airbnb 0</button>
              <button disabled onClick={() => downloadPDF(pdfUrls[2])}>
                Booking 1
              </button>
              <button disabled onClick={() => downloadPDF(pdfUrls[1])}>
                Others 1
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
