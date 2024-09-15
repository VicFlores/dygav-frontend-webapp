/* eslint-disable react-hooks/exhaustive-deps */
import { axiosConfig } from '@/utils';
import axios from 'axios';
import { Session } from 'next-auth';
import React, { FC, useEffect, useState } from 'react';
import styles from './OwnersFinanzas.module.css';
import Image from 'next/legacy/image';

export const OwnersFinanzas: FC<{ session: Session }> = ({ session }) => {
  const [data, setData] = useState<any[]>([]);
  const [selectedAccommodation, setSelectedAccommodation] = useState<any>(null);

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
        if (accommodationDetails.length > 0) {
          setSelectedAccommodation(accommodationDetails[0]); // Set the first accommodation as the default selected
        }
      } catch (error) {
        console.error('Error fetching accommodations:', error);
      }
    };

    fetchAccommodations();
  }, []);

  const handleButtonClick = (accommodation: any) => {
    setSelectedAccommodation(accommodation);
  };

  const generateInvoiceNumber = () => {
    const randomFourDigits = Math.floor(1000 + Math.random() * 9000); // Generates a random 4-digit number
    const currentYear = new Date().getFullYear(); // Gets the current year
    return `VT-${randomFourDigits}-${currentYear}`;
  };

  return (
    <div className={styles.controlPanel}>
      <h1 className={styles.controlPanel__title}>Finance</h1>

      <div className={styles.searcher}>
        <p className={styles.controlPanel__subtitle}>Select accommodations</p>

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
                  {accommodation.name}
                </button>
              ))}
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>

      {selectedAccommodation && (
        <div className={styles.invoiceContainer}>
          <div className={styles.invoiceInfo}>
            <h4>Invoice number</h4>

            <p>{generateInvoiceNumber()}</p>
          </div>

          <div className={styles.invoiceInfo}>
            <h4>Accommodation</h4>

            <p>{selectedAccommodation.name}</p>
          </div>

          <div className={styles.invoiceInfo}>
            <h4>Owner</h4>

            <p>Jose Llaneza</p>
          </div>

          <div className={styles.invoiceInfo}>
            <h4>Date</h4>

            <p>September</p>
          </div>
        </div>
      )}

      <div className={styles.invoiceInfoContainer}>
        <h4>Platform</h4>

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
              src='https://multimedia.dygav.es/wp-content/uploads/2024/04/0x0_j8hysr.png'
              alt='Rentalia'
              layout='fill'
            />
          </figure>
        </div>

        <h4>Reservations</h4>

        <p className={styles.reservationOne}>10</p>

        <p className={styles.reservationTwo}>5</p>

        <p className={styles.reservationThree}>3</p>

        <h4>Percentage</h4>

        <p className={styles.percentageOne}>15%</p>

        <p className={styles.percentageTwo}>20%</p>

        <p className={styles.percentageThree}>25%</p>

        <h4 className={styles.commissionTitle}>Commission</h4>

        <p className={styles.commissionOne}>$150</p>

        <p className={styles.commissionTwo}>$200</p>

        <p className={styles.commissionThree}>$250</p>

        <h4 className={styles.billingTitle}>Billing</h4>

        <p className={styles.billingOne}>€1500</p>

        <p className={styles.billingTwo}>€1000</p>

        <p className={styles.billingThree}>€750</p>

        <hr className={styles.divider} />

        <div className={styles.totalReservations}>
          <p>Total reservations</p>
          <p>18</p>
        </div>

        <div className={styles.totalPercentage}>
          <p>Total percentage</p>
          <p>25%</p>
        </div>

        <div className={styles.totalCommission}>
          <p>Total commission</p>
          <p>$600</p>
        </div>

        <div className={styles.totalBilling}>
          <p>Total billing</p>
          <p>$2650</p>
        </div>
      </div>

      <div className={styles.totalFinal}>
        <div className={styles.totalFinal__item}>
          <h4>€1.800</h4>
          <p>Cleanings</p>
        </div>

        <div className={styles.totalFinal__item}>
          <h4>€1.200</h4>
          <p>Partner Commission</p>
        </div>

        <div className={styles.totalFinal__item}>
          <h4>€1.356</h4>
          <p>DYGAV&apos;s Total Commission</p>
        </div>

        <div className={styles.totalFinal__item}>
          <h4>€1.120</h4>
          <p>Total additional expenses</p>
        </div>
      </div>
    </div>
  );
};
