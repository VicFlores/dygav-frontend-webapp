'use client';

import React, { useState, useEffect, FC } from 'react';
import moment from 'moment';
import styles from './Finanzas.module.css';
import Image from 'next/legacy/image';
import useDictionary from '@/app/hooks/useDictionary';
import { Accommodation, Booking } from '@/app/types';
import { avaibookExtraction } from '@/app/utils/axiosConfig/avaibookExtraction';
import { getAccommodationsInfo, getOwnerAccommodations } from '@/app/utils';
import LoadingPlaceholder from '../../shared/LoadingPlaceholder/LoadingPlaceholder';
import { useLocale } from '@/app/context/LocaleContext';
import axios from 'axios';

interface PlatformFinance {
  platform: string;
  booking_count: number;
  percentage: number;
  commission: number;
  total_amount: number;
}

interface Accounting {
  total_bookings: number;
  cleaning_price: number;
  partner_commission: number;
  dygav_fee: number;
  total_amount: number;
  billing: Billing[];
  platform_finance: PlatformFinance[];
  settlement: number;
  partner_fee: number;
  additional_price: number;
}

interface Billing {
  platform: string;
  document_url: string;
  type: string;
}

interface FinanceData {
  platform_finance: PlatformFinance[];
  accounting: Accounting;
  billing: Billing[];
  booking_count: number;
  airbnb_count: number;
  other_platforms_count: number;
  booking_commission: number;
  airbnb_commission: number;
  other_platforms: number;
  total_amount_booking: number;
  total_amount_airbnb: number;
  total_amount_other_platforms: number;
  cleaning: number;
  partnerfee: number;
  dygavfee: number;
  total_bookings: number;
  partner_commission: number;
  forecast_payment_huesped: number;
}

export const Finanzas = () => {
  const { locale } = useLocale();
  const [monthNames, setMonthNames] = useState<string[]>([]);
  const [year, setYear] = useState(new Date().getFullYear());
  const [ivaPriceCheck, setIvaPriceCheck] = useState(false);
  const [data, setData] = useState<any[]>([]);
  const [selectedAccommodation, setSelectedAccommodation] = useState<
    any | null
  >(null);
  const [selectedMonth, setSelectedMonth] = useState(moment().format('MMMM'));
  const [selectedDocumentType, setSelectedDocumentType] =
    useState('Select Document');
  const [financeData, setFinanceData] = useState<FinanceData>();

  const dictionary: any = useDictionary('finances');

  useEffect(() => {
    if (locale === 'es') {
      moment.locale('es');
    } else {
      moment.locale('en');
    }
    setSelectedMonth(moment().format('MMMM'));

    const allMonths = moment.months();
    const currentMonthIndex = moment().month();
    const sixMonthsAgoIndex = (currentMonthIndex - 5 + 12) % 12; // Calculate the index for six months ago
    const filteredMonths = [];

    for (let i = 0; i < 6; i++) {
      filteredMonths.push(allMonths[(sixMonthsAgoIndex + i) % 12]);
    }

    setMonthNames(filteredMonths);
  }, [locale]);

  useEffect(() => {
    const fetchAccommodations = async () => {
      try {
        const accommodations = await getOwnerAccommodations();

        const accommodationDetails = await fetchAccommodationDetails(
          accommodations
        );

        if (!selectedAccommodation) {
          setSelectedAccommodation(accommodationDetails[0]);
        }
        setData(accommodationDetails);
      } catch (error) {
        console.error('Error fetching accommodations:', error);
      }
    };

    fetchAccommodations();
  }, [selectedMonth]);

  useEffect(() => {
    const fetchFinanceData = async () => {
      try {
        const monthMapping = {
          January: 1,
          February: 2,
          March: 3,
          April: 4,
          May: 5,
          June: 6,
          July: 7,
          August: 8,
          September: 9,
          October: 10,
          November: 11,
          December: 12,
          enero: 1,
          febrero: 2,
          marzo: 3,
          abril: 4,
          mayo: 5,
          junio: 6,
          julio: 7,
          agosto: 8,
          septiembre: 9,
          octubre: 10,
          noviembre: 11,
          diciembre: 12,
        };

        const selectedMonthNumber =
          monthMapping[selectedMonth as keyof typeof monthMapping];
        const currentMonthNumber = moment().month() + 1; // moment().month() is zero-based

        let response;

        if (selectedMonthNumber === currentMonthNumber) {
          response = await axios.get(
            `https://aviabook-data-extraction-llv4d.ondigitalocean.app/api/v1/accumulated_by_month/${selectedAccommodation.accomodationid}?month=${selectedMonthNumber}`
          );

          setFinanceData(response.data);
        } else {
          response = await axios.get(
            `https://seahorse-app-9q52a.ondigitalocean.app/api/v1/finances/${selectedMonthNumber}/2024/${selectedAccommodation.accomodationid}`
          );

          setFinanceData(response.data.data[0]);
        }
      } catch (error) {
        console.error('Error fetching finance data:', error);
        setFinanceData(undefined);
      }
    };

    if (selectedAccommodation && selectedMonth) {
      fetchFinanceData();
    }
  }, [selectedAccommodation, selectedMonth]);

  const fetchAccommodationDetails = async (
    accommodations: any[]
  ): Promise<Accommodation[]> => {
    const details = await Promise.all(
      accommodations.map(async (item) => {
        const { data } = await avaibookExtraction.get(
          `/accomodation/${item.aviabook_id}/`
        );

        const accommodationByCrm = await getAccommodationsInfo(
          item.aviabook_id
        );

        const firstName = accommodationByCrm.owner.name.split(' ')[0];
        const lastName = accommodationByCrm.owner.lastname.split(' ')[0];

        return {
          ...data[0],
          license: accommodationByCrm.finance.license,
          ownerName: `${firstName} ${lastName}`,
        };
      })
    );
    return details.flat();
  };

  const handleButtonClick = (accommodation: any) => {
    setSelectedAccommodation(accommodation);
  };

  const handleMonthChange = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const month = event.target.value;
    setSelectedMonth(month);
  };

  const handleIvaPriceCheck = () => {
    setIvaPriceCheck(!ivaPriceCheck);
  };

  const handleDownload = (url: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.click();

    setSelectedDocumentType('Select Document');
  };

  const hasDocuments = (platform: string, type?: string) => {
    return financeData?.accounting?.billing.some(
      (bill) => bill.platform === platform && (!type || bill.type === type)
    );
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedUrl = e.target.value;
    setSelectedDocumentType(selectedUrl);
    if (selectedUrl && selectedUrl !== 'Select Document') {
      handleDownload(selectedUrl);
    }
  };

  const airbnbInvoices = financeData?.accounting?.billing.filter(
    (bill) => bill.platform === 'AIRBNB' && bill.type === 'INVOICE'
  );
  const dygavInvoices = financeData?.accounting?.billing.filter(
    (bill) => bill.platform === 'DYGAV' && bill.type === 'INVOICE'
  );
  const dygavLiquidations = financeData?.accounting?.billing.filter(
    (bill) => bill.platform === 'DYGAV' && bill.type === 'SETTLEMENT'
  );
  const bookingDocuments = financeData?.accounting?.billing.filter(
    (bill) => bill.platform === 'BOOKING'
  );

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

      <div className='flex flex-col md:flex-row items-center mb-10 mt-10'>
        <div
          className={`relative inline-block w-12 mr-2 rounded-full align-middle select-none transition duration-200 ease-in bg-gray300`}
        >
          <input
            type='checkbox'
            name='toggle'
            checked={ivaPriceCheck}
            onChange={handleIvaPriceCheck}
            id='toggle'
            className={`${styles['toggle-checkbox']} absolute block w-6 h-6 rounded-full bg-p600 appearance-none cursor-pointer`}
          />

          <label
            htmlFor='toggle'
            className={` block overflow-hidden w-6 h-6 rounded-full bg-gray-300 cursor-pointer`}
          ></label>
        </div>

        <label htmlFor='toggle' className='pl-3 mt-4 md:mt-0'>
          {ivaPriceCheck ? 'Precio con IVA' : 'Precio sin IVA'}
        </label>
      </div>

      {selectedAccommodation && (
        <div>
          <div className={styles.invoiceContainer}>
            <div className={styles.invoiceInfo}>
              <h4>{dictionary.ownersFinanzas?.invoiceNumber}</h4>
              <p>
                {selectedAccommodation.license ?? 'No license number available'}
              </p>
            </div>

            <div className={styles.invoiceInfo}>
              <h4>{dictionary.ownersFinanzas?.accommodation}</h4>
              <p>{selectedAccommodation.name.toString()}</p>
            </div>

            <div className={styles.invoiceInfo}>
              <h4>{dictionary.ownersFinanzas?.owner}</h4>
              <p>
                {selectedAccommodation.ownerName ?? 'No owner name available'}
              </p>
            </div>

            <div className={styles.invoiceInfo}>
              <h4>{dictionary.ownersFinanzas?.month}</h4>

              <select value={selectedMonth} onChange={handleMonthChange}>
                {monthNames.map((month, index) => (
                  <option key={index} value={month}>
                    {month}{' '}
                    {month === 'january' || month === 'enero' ? 2025 : 2024}
                  </option>
                ))}
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

            <div className={styles.partneFour}>
              <p>{dictionary.ownersFinanzas?.additionalPlatform}</p>
            </div>

            <h4>{dictionary.ownersFinanzas?.reservations}</h4>

            {selectedAccommodation && (
              <>
                <p className={styles.reservationOne}>
                  {financeData?.accounting?.platform_finance?.find(
                    (p: any) => p.platform === 'BOOKING'
                  )?.booking_count ||
                    financeData?.booking_count ||
                    0}
                </p>

                <p className={styles.reservationTwo}>
                  {financeData?.accounting?.platform_finance?.find(
                    (p: any) => p.platform === 'AIRBNB'
                  )?.booking_count ||
                    financeData?.airbnb_count ||
                    0}
                </p>

                <p className={styles.reservationThree}>
                  {financeData?.accounting?.platform_finance?.find(
                    (p: any) => p.platform === 'DYGAV'
                  )?.booking_count ||
                    financeData?.other_platforms_count ||
                    0}
                </p>

                <p className={styles.reservationFour}>0</p>
              </>
            )}

            <h4>{dictionary.ownersFinanzas?.percentage}</h4>
            <p className={styles.percentageOne}>
              {ivaPriceCheck
                ? Math.round(
                    (financeData?.accounting?.platform_finance?.find(
                      (p: any) => p.platform === 'BOOKING'
                    )?.percentage ?? 0) * 1.21
                  )
                : financeData?.accounting?.platform_finance?.find(
                    (p: any) => p.platform === 'BOOKING'
                  )?.percentage ?? 0}{' '}
              %
            </p>

            <p className={styles.percentageTwo}>
              {(ivaPriceCheck
                ? (financeData?.accounting?.platform_finance?.find(
                    (p: any) => p.platform === 'AIRBNB'
                  )?.percentage ?? 0) * 1.21
                : financeData?.accounting?.platform_finance?.find(
                    (p: any) => p.platform === 'AIRBNB'
                  )?.percentage ?? 0
              ).toFixed(2)}{' '}
              %
            </p>

            <p className={styles.percentageThree}>
              {ivaPriceCheck
                ? Math.round(
                    (financeData?.accounting?.platform_finance?.find(
                      (p: any) => p.platform === 'DYGAV'
                    )?.percentage ?? 0) * 1.21
                  )
                : financeData?.accounting?.platform_finance?.find(
                    (p: any) => p.platform === 'DYGAV'
                  )?.percentage ?? 0}{' '}
              %
            </p>

            <h4>{dictionary.ownersFinanzas?.commission}</h4>
            <p className={styles.commissionOne}>
              {Number(
                ivaPriceCheck
                  ? ((financeData?.accounting?.platform_finance?.find(
                      (p: any) => p.platform === 'BOOKING'
                    )?.commission ||
                      financeData?.booking_commission ||
                      0) *
                      21) /
                      100 +
                      (financeData?.accounting?.platform_finance?.find(
                        (p: any) => p.platform === 'BOOKING'
                      )?.commission ||
                        financeData?.booking_commission ||
                        0)
                  : financeData?.accounting?.platform_finance?.find(
                      (p: any) => p.platform === 'BOOKING'
                    )?.commission ||
                      financeData?.booking_commission ||
                      0
              ).toFixed(2)}{' '}
              €
            </p>

            <p className={styles.commissionTwo}>
              {(ivaPriceCheck
                ? (financeData?.accounting?.platform_finance?.find(
                    (p: any) => p.platform === 'AIRBNB'
                  )?.commission ||
                    financeData?.airbnb_commission ||
                    0) * 1.21
                : financeData?.accounting?.platform_finance?.find(
                    (p: any) => p.platform === 'AIRBNB'
                  )?.commission ||
                  financeData?.airbnb_commission ||
                  0
              ).toFixed(2)}{' '}
              €
            </p>

            <p className={styles.commissionThree}>
              {(ivaPriceCheck
                ? (financeData?.accounting?.platform_finance?.find(
                    (p: any) => p.platform === 'DYGAV'
                  )?.commission ||
                    financeData?.other_platforms ||
                    0) * 1.21
                : financeData?.accounting?.platform_finance?.find(
                    (p: any) => p.platform === 'DYGAV'
                  )?.commission ||
                  financeData?.other_platforms ||
                  0
              ).toFixed(2)}{' '}
              €
            </p>

            <p className={styles.commissionFour}>0</p>

            <h4>{dictionary.ownersFinanzas?.facturation}</h4>

            <p className={styles.billingOne}>
              {(
                financeData?.accounting?.platform_finance?.find(
                  (p: any) => p.platform === 'BOOKING'
                )?.total_amount ||
                financeData?.total_amount_booking ||
                0
              ).toFixed(2)}{' '}
              €
            </p>

            <p className={styles.billingTwo}>
              {(
                financeData?.accounting?.platform_finance?.find(
                  (p: any) => p.platform === 'AIRBNB'
                )?.total_amount ||
                financeData?.total_amount_airbnb ||
                0
              ).toFixed(2)}{' '}
              €
            </p>

            <p className={styles.billingThree}>
              {(
                financeData?.accounting?.platform_finance?.find(
                  (p: any) => p.platform === 'DYGAV'
                )?.total_amount ||
                financeData?.total_amount_other_platforms ||
                0
              ).toFixed(2)}{' '}
              €
            </p>

            <p className={styles.billingFour}>0</p>

            <hr className={styles.divider} />

            <div className={styles.totalReservations}>
              <p>{dictionary.ownersFinanzas?.totalReservations}</p>
              <p>
                {financeData?.accounting?.total_bookings ||
                  financeData?.total_bookings ||
                  0}
              </p>
            </div>

            {/* <div className={styles.totalPercentage}>
              <p>{dictionary.ownersFinanzas?.totalPercentage}</p>
              <p>0</p>
            </div> */}

            <div className={styles.totalCommission}>
              <p>{dictionary.ownersFinanzas?.totalCommission}</p>
              <p>
                {Number(
                  (ivaPriceCheck
                    ? (financeData?.accounting?.partner_fee ?? 0) * 1.21
                    : financeData?.accounting?.partner_fee) ||
                    (ivaPriceCheck
                      ? (financeData?.partner_commission ?? 0) * 1.21
                      : financeData?.partner_commission) ||
                    0
                ).toFixed(2)}{' '}
                €
              </p>
            </div>

            <div className={styles.totalBilling}>
              <p>{dictionary.ownersFinanzas?.facturationAmount}</p>

              <p>{financeData?.accounting?.total_amount} €</p>
            </div>
          </div>

          <div className={styles.totalFinal}>
            <div className={styles.totalFinal__item}>
              <h4>
                {(ivaPriceCheck
                  ? (financeData?.accounting?.cleaning_price ||
                      financeData?.cleaning ||
                      0) * 1.21
                  : financeData?.accounting?.cleaning_price ||
                    financeData?.cleaning ||
                    0
                ).toFixed(2)}{' '}
                €
              </h4>
              <p>{dictionary.ownersFinanzas?.cleaning}</p>
            </div>

            <div className={styles.totalFinal__item}>
              <h4>
                {Number(
                  (ivaPriceCheck
                    ? (financeData?.accounting?.partner_fee ?? 0) * 1.21
                    : financeData?.accounting?.partner_fee) ||
                    (ivaPriceCheck
                      ? (financeData?.partnerfee ?? 0) * 1.21
                      : financeData?.partnerfee) ||
                    0
                ).toFixed(2)}{' '}
                €
              </h4>
              <p>{dictionary.ownersFinanzas?.partnerCommission}</p>
            </div>

            <div className={styles.totalFinal__item}>
              <h4>
                {(ivaPriceCheck
                  ? (financeData?.accounting?.dygav_fee ||
                      financeData?.dygavfee ||
                      0) * 1.21
                  : financeData?.accounting?.dygav_fee ||
                    financeData?.dygavfee ||
                    0
                ).toFixed(2)}{' '}
                €
              </h4>
              <p>{dictionary.ownersFinanzas?.dygavCommission}</p>
            </div>

            <div className={styles.totalFinal__item}>
              <h4>
                {ivaPriceCheck
                  ? (financeData?.accounting?.additional_price || 0).toFixed(2)
                  : (
                      (financeData?.accounting?.additional_price || 0) / 1.21
                    ).toFixed(2)}{' '}
                €
              </h4>

              <p>{dictionary.ownersFinanzas?.totalAdditional}</p>
            </div>

            <div className={styles.totalFinal__item}>
              <h4>
                {financeData?.accounting?.settlement ||
                  financeData?.forecast_payment_huesped ||
                  0}
                €
              </h4>
              <p>
                {selectedMonth === moment().format('MMMM')
                  ? `${dictionary.ownersFinanzas?.paymentForecast}`
                  : `${dictionary.ownersFinanzas?.totalFacturation} ${selectedMonth}`}
              </p>
            </div>
          </div>

          <div className={styles.billings}>
            <h4>{dictionary.ownersFinanzas?.download}</h4>

            <div className={styles.downloadButtons}>
              <select
                value={selectedDocumentType}
                onChange={handleSelectChange}
                disabled={!hasDocuments('DYGAV')}
              >
                <option value='Select Document'>
                  {dictionary.ownersFinanzas?.selectDocument}
                </option>
                {dygavInvoices?.map((invoice, index) => (
                  <option key={index} value={invoice.document_url}>
                    Dygav Invoice {index + 1}
                  </option>
                ))}
                {dygavLiquidations?.map((liquidation, index) => (
                  <option key={index} value={liquidation.document_url}>
                    Dygav Liquidation {index + 1}
                  </option>
                ))}
              </select>

              <select
                value={selectedDocumentType}
                onChange={handleSelectChange}
                disabled={!hasDocuments('AIRBNB')}
              >
                <option value='Select Document'>
                  {dictionary.ownersFinanzas?.selectDocument}
                </option>
                {airbnbInvoices?.map((invoice, index) => (
                  <option key={index} value={invoice.document_url}>
                    Airbnb {index + 1}
                  </option>
                ))}
              </select>

              {bookingDocuments?.map((document, index) => (
                <button
                  key={index}
                  onClick={() => handleDownload(document.document_url)}
                  disabled={!hasDocuments('BOOKING')}
                >
                  Booking {index + 1}
                </button>
              ))}

              <button disabled={!hasDocuments('OTHERS')}>Otros 0</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
