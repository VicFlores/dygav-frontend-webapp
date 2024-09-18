/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, FC } from 'react';
import { axiosConfig } from '@/utils';
import axios from 'axios';
import { Session } from 'next-auth';
import styles from './OwnersFinanzas.module.css';
import Image from 'next/legacy/image';
import useDictionary from '@/app/hooks/useDictionary';

export const OwnersFinanzas: FC<{ session: Session }> = ({ session }) => {
  const [data, setData] = useState<any[]>([]);
  const [selectedAccommodation, setSelectedAccommodation] = useState<
    any | null
  >(null);
  const [selectedMonth, setSelectedMonth] = useState('August');
  const [reservations, setReservations] = useState(0);
  const [dygavReservation, setDygavReservation] = useState(0);
  const [airbnbReservation, setAirbnbReservation] = useState(0);
  const [bookingReservation, setBookingReservation] = useState(0);
  const [othersReservation, setOthersReservation] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [commission, setCommission] = useState(0);
  const [billing, setBilling] = useState(0);
  const [cleaning, setCleaning] = useState(0);
  const [partnerCommission, setPartnerCommission] = useState(0);
  const [dygavCommission, setDygavCommission] = useState(0);
  const [bookingCommission, setBookingCommission] = useState(0);
  const [othersCommission, setOthersCommission] = useState(0);
  const [airbnbCommission, setAirbnbCommission] = useState(0);
  const [addtionalExpenses, setAdditionalExpenses] = useState(0);
  const [dygavPercentage, setDygavPercentage] = useState(0);
  const [airbnbPercentage, setAirbnbPercentage] = useState(0);
  const [bookingPercentage, setBookingPercentage] = useState(0);
  const [othersPercentage, setOthersPercentage] = useState(0);
  const [dygavBilling, setDygavBilling] = useState(0);
  const [airbnbBilling, setAirbnbBilling] = useState(0);
  const [bookingBilling, setBookingBilling] = useState(0);
  const [pdfUrls, setPdfUrls] = useState<string[]>([]);

  const accommodationValues: Record<string, any> = {
    'VT025 Orense 18, 6-6': {
      reservations: 2,
      dygavReservation: 0,
      airbnbReservation: 0,
      bookingReservation: 2,
      othersReservation: 0,

      percentage: 16 + 1.3 + 15 + 8,
      dygavPercentage: 8,
      airbnbPercentage: 15,
      bookingPercentage: 16 + 1.3,
      othersPercentage: 0,

      commission: 122.76,
      dygavCommission: 0,
      bookingCommission: 122.76,
      othersCommission: 0,
      airbnbCommission: 0,

      billing: 41.56,
      dygavBilling: 0,
      airbnbBilling: 0,
      bookingBilling: 41.56,

      cleaning: 65.0,
      partnerCommission: 122.76,
      additionalExpenses: 0,
      pdfUrls: [
        'https://dygav-storage.nyc3.cdn.digitaloceanspaces.com/dygav_official/025/FACVT-025-001-2024-08%20(1).pdf',
        'https://dygav-storage.nyc3.cdn.digitaloceanspaces.com/dygav_official/025/LIQVT-025-001-2024-08%20(1).pdf',
        'https://dygav-storage.nyc3.cdn.digitaloceanspaces.com/dygav_official/025/1000-1616126140.pdf',
      ],
    },
    'VTM-020 Orense 18 2F': {
      reservations: 3,
      dygavReservation: 0,
      airbnbReservation: 0,
      bookingReservation: 3,
      othersReservation: 0,

      percentage: 16 + 1.1 + 15 + 8,
      dygavPercentage: 8,
      airbnbPercentage: 15,
      bookingPercentage: 16 + 1.1,
      othersPercentage: 0,

      commission: 352.14 + 328.08,
      dygavCommission: 328.08,
      bookingCommission: 352.14,
      othersCommission: 0,
      airbnbCommission: 0,

      billing: 426.06 + 2187.15,
      dygavBilling: 2187.15,
      airbnbBilling: 0,
      bookingBilling: 426.06,

      cleaning: 224.99,
      partnerCommission: 352.14,
      additionalExpenses: 0,
      pdfUrls: [
        'https://dygav-storage.nyc3.cdn.digitaloceanspaces.com/dygav_official/020/FACVT-020-001-2024-08%20(1).pdf',
        'https://dygav-storage.nyc3.cdn.digitaloceanspaces.com/dygav_official/020/LIQVT-020-001-2024-08.pdf',
        'https://dygav-storage.nyc3.cdn.digitaloceanspaces.com/dygav_official/020/invoice-1616126000.pdf',
      ],
    },
    'VT040 Villa Bonavista': {
      reservations: 4,
      dygavReservation: 1,
      airbnbReservation: 0,
      bookingReservation: 3,
      othersReservation: 0,

      percentage: 16 + 1.3 + 15 + 8,
      dygavPercentage: 8,
      airbnbPercentage: 15,
      bookingPercentage: 16 + 1.3,
      othersPercentage: 0,

      commission: 1872.25 + 1430.67,
      dygavCommission: 1872.25,
      bookingCommission: 1430.67,
      othersCommission: 0,
      airbnbCommission: 0,

      billing: 1731.12 + 12481.73,
      dygavBilling: 12481.73,
      airbnbBilling: 0,
      bookingBilling: 1731.12,

      cleaning: 450.01,
      partnerCommission: 1801.12,
      additionalExpenses: 1096.67,
      pdfUrls: [
        'https://dygav-storage.nyc3.cdn.digitaloceanspaces.com/dygav_official/040/FACVT-040-001-2024-08.pdf',
        'https://dygav-storage.nyc3.cdn.digitaloceanspaces.com/dygav_official/040/LIQVT-040-001-2024-08%20_2_.pdf',
        'https://dygav-storage.nyc3.cdn.digitaloceanspaces.com/dygav_official/040/1000-1616330650.pdf',
      ],
    },
    'VT028 Islandia 1, 2C': {
      reservations: 4,
      dygavReservation: 0,
      airbnbReservation: 0,
      bookingReservation: 3,
      othersReservation: 1,

      percentage: 16 + 1.3 + 15 + 8,
      dygavPercentage: 8,
      airbnbPercentage: 15,
      bookingPercentage: 16 + 1.3,
      othersPercentage: 0,

      commission: 340.41 + 313.26,
      dygavCommission: 313.26,
      bookingCommission: 340.41,
      othersCommission: 0,
      airbnbCommission: 0,

      billing: 411.88 + 2088.42,
      dygavBilling: 2088.42,
      airbnbBilling: 0,
      bookingBilling: 411.88,

      cleaning: 260.0,
      partnerCommission: 340.41,
      additionalExpenses: 0,
      pdfUrls: [
        'https://dygav-storage.nyc3.cdn.digitaloceanspaces.com/dygav_official/028/FACVT-028-001-2024-08.pdf',
        'https://dygav-storage.nyc3.cdn.digitaloceanspaces.com/dygav_official/028/LIQVT-028-001-2024-08.pdf',
        'https://dygav-storage.nyc3.cdn.digitaloceanspaces.com/dygav_official/028/1000-1616212973.pdf',
      ],
    },
  };

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
            return {
              id: item.accomodationId,
              name: dataAvaibook.name as keyof typeof accommodationValues,
            };
          })
        );

        setData(accommodationDetails);
        if (accommodationDetails.length > 0) {
          setSelectedAccommodation(accommodationDetails[0]); // Set the first accommodation as the default selected
        }
      } catch (error) {
        console.error('Error fetching accommodations:', error);
      }
    };

    fetchAccommodations();
  }, []);

  useEffect(() => {
    if (selectedAccommodation) {
      const values = accommodationValues[selectedAccommodation.name.toString()];
      if (values) {
        setReservations(values.reservations);
        setPercentage(values.percentage);
        setCommission(values.commission);
        setBilling(values.billing);
        setPdfUrls(values.pdfUrls);
        setCleaning(values.cleaning);
        setPartnerCommission(values.partnerCommission);
        setDygavCommission(values.dygavCommission);
        setAdditionalExpenses(values.additionalExpenses);
        setDygavReservation(values.dygavReservation);
        setAirbnbReservation(values.airbnbReservation);
        setBookingReservation(values.bookingReservation);
        setOthersReservation(values.othersReservation);
        setDygavPercentage(values.dygavPercentage);
        setAirbnbPercentage(values.airbnbPercentage);
        setBookingPercentage(values.bookingPercentage);
        setOthersPercentage(values.othersPercentage);
        setBookingCommission(values.bookingCommission);
        setOthersCommission(values.othersCommission);
        setAirbnbCommission(values.airbnbCommission);
        setDygavBilling(values.dygavBilling);
        setAirbnbBilling(values.airbnbBilling);
        setBookingBilling(values.bookingBilling);
      }
    }
  }, [selectedAccommodation]);

  const handleButtonClick = (accommodation: any) => {
    setSelectedAccommodation(accommodation);
  };

  const generateInvoiceNumber = () => {
    const randomFourDigits = Math.floor(1000 + Math.random() * 9000); // Generates a random 4-digit number
    const currentYear = new Date().getFullYear(); // Gets the current year
    return `VT-${randomFourDigits}-${currentYear}`;
  };

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonth(event.target.value);
  };

  const downloadPDF = (url: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const totalReservations = reservations;
  const totalPercentage = percentage;
  const totalCommission = commission;
  const totalBilling = billing;
  const totalCleaning = cleaning;
  const totalPartnerCommission = partnerCommission;
  const totalDygavCommission = dygavCommission;
  const totalBookingCommission = bookingCommission;
  const totalOthersCommission = othersCommission;
  const totalAirbnbCommission = airbnbCommission;
  const totalAdditionalExpenses = addtionalExpenses;
  const totalDygavReservation = dygavReservation;
  const totalAirbnbReservation = airbnbReservation;
  const totalBookingReservation = bookingReservation;
  const totalOthersReservation = othersReservation;
  const totalDygavPercentage = dygavPercentage;
  const totalAirbnbPercentage = airbnbPercentage;
  const totalBookingPercentage = bookingPercentage;
  const totalOthersPercentage = othersPercentage;
  const totalDygavBilling = dygavBilling;
  const totalAirbnbBilling = airbnbBilling;
  const totalBookingBilling = bookingBilling;

  const dictionary: any = useDictionary('finances');

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
                  key={accommodation.id}
                  className={`${styles.accommodationButton} ${
                    selectedAccommodation?.id === accommodation.id
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
          <p>Loading...</p>
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
            <p className={styles.reservationOne}>{totalBookingReservation}</p>
            <p className={styles.reservationTwo}>{totalAirbnbReservation}</p>
            <p className={styles.reservationThree}>{totalDygavReservation}</p>

            <h4>{dictionary.ownersFinanzas?.percentage}</h4>
            <p className={styles.percentageOne}>
              {totalBookingPercentage.toFixed(2)}%
            </p>
            <p className={styles.percentageTwo}>
              {totalAirbnbPercentage.toFixed(2)}%
            </p>
            <p className={styles.percentageThree}>
              {totalDygavPercentage.toFixed(2)}%
            </p>

            <h4 className={styles.commissionTitle}>
              {dictionary.ownersFinanzas?.commission}
            </h4>
            <p className={styles.commissionOne}>€{totalBookingCommission}</p>
            <p className={styles.commissionTwo}>€{totalAirbnbCommission}</p>
            <p className={styles.commissionThree}>€{totalDygavCommission}</p>

            <h4 className={styles.billingTitle}>
              {dictionary.ownersFinanzas?.facturation}
            </h4>
            <p className={styles.billingOne}>€{totalBookingBilling}</p>
            <p className={styles.billingTwo}>€{totalAirbnbBilling}</p>
            <p className={styles.billingThree}>€{totalDygavBilling}</p>

            <hr className={styles.divider} />

            <div className={styles.totalReservations}>
              <p>{dictionary.ownersFinanzas?.totalReservations}</p>
              <p>{totalReservations}</p>
            </div>

            <div className={styles.totalPercentage}>
              <p>{dictionary.ownersFinanzas?.totalPercentage}</p>
              <p>{totalPercentage.toFixed(2)}%</p>
            </div>

            <div className={styles.totalCommission}>
              <p>{dictionary.ownersFinanzas?.totalCommission}</p>
              <p>€{totalCommission.toFixed(2)}</p>
            </div>

            <div className={styles.totalBilling}>
              <p>{dictionary.ownersFinanzas?.totalFacturation}</p>
              <p>€{totalBilling.toFixed(2)}</p>
            </div>
          </div>

          <div className={styles.totalFinal}>
            <div className={styles.totalFinal__item}>
              <h4>€{totalCleaning}</h4>
              <p>{dictionary.ownersFinanzas?.cleaning}</p>
            </div>

            <div className={styles.totalFinal__item}>
              <h4>€{totalPartnerCommission}</h4>
              <p>{dictionary.ownersFinanzas?.partnerCommission}</p>
            </div>

            <div className={styles.totalFinal__item}>
              <h4>€{totalDygavCommission}</h4>
              <p>{dictionary.ownersFinanzas?.dygavCommission}</p>
            </div>

            <div className={styles.totalFinal__item}>
              <h4>€{totalAdditionalExpenses}</h4>
              <p>{dictionary.ownersFinanzas?.totalAdditional}</p>
            </div>
          </div>

          <div className={styles.billings}>
            <h4>{dictionary.ownersFinanzas?.download}</h4>

            <div className={styles.downloadButtons}>
              <button onClick={() => downloadPDF(pdfUrls[0])}>Dygav 1</button>
              <button>Airbnb 0</button>
              <button onClick={() => downloadPDF(pdfUrls[2])}>Booking 1</button>
              <button onClick={() => downloadPDF(pdfUrls[1])}>Others 1</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
