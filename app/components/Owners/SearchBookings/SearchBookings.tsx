'use client';

import Image from 'next/legacy/image';
import Link from 'next/link';
import React, { FC, useEffect, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import styles from '../Dashboard/OwnerDashboard.module.css';
import stylesOwner from './SearchBookings.module.css';
import { SubmitHandler, useForm } from 'react-hook-form';
import useDictionary from '@/app/hooks/useDictionary';
import { Accommodation, Booking } from '@/app/types';
import { avaibookExtraction } from '@/app/utils/axiosConfig/avaibookExtraction';
import { getOwnerAccommodations } from '@/app/utils';

interface IFormInput {
  accommodation: string;
  startDate: Date;
  endDate: Date;
  status: string;
}

export const SearchBookings = () => {
  const [data, setData] = useState<any[]>([]);
  const [bookings, setBookings] = useState<any[]>([]);
  const [originalBookings, setOriginalBookings] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>();

  const itemsPerPage = 3;

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
          setOriginalBookings(bookings); // Store the original bookings
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
        return data.map((booking: any) => ({
          ...booking,
          accommodation: item.name,
          images: item.images,
        }));
      })
    );
    return bookings.flat();
  };

  const indexOfLastBooking = currentPage * itemsPerPage;
  const indexOfFirstBooking = indexOfLastBooking - itemsPerPage;
  const currentBookings = bookings.slice(
    indexOfFirstBooking,
    indexOfLastBooking
  );

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(bookings.length / itemsPerPage);

  const onSubmit: SubmitHandler<IFormInput> = async (formData) => {
    try {
      const { accommodation, startDate, endDate, status } = formData;

      // Convert startDate and endDate to Date objects for comparison
      const start = new Date(startDate);
      const end = new Date(endDate);

      // Filter bookings strictly within the selected date range and matching accommodation ID
      const filteredBookings = originalBookings.filter((booking) => {
        const inDate = new Date(booking.indate);
        const outDate = new Date(booking.outdate);

        return (
          booking.accomodationid === parseInt(accommodation) &&
          booking.status === status &&
          inDate >= start &&
          outDate <= end
        );
      });

      setBookings(filteredBookings);
      setCurrentPage(1);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  const clearSearch = () => {
    setBookings(originalBookings);
    setCurrentPage(1);
    reset(); // Reset the form fields
  };

  const dictionary = useDictionary('ownersAccount');

  return (
    <div className={stylesOwner.controlPanel}>
      <h1 className={styles.controlPanel__title}>
        {dictionary.ownerDashboard?.upcomingBookingsTitle}
      </h1>

      <p className={styles.controlPanel__subtitle}>
        {dictionary.ownerDashboard?.upcomingBookingsSubtitle}
      </p>

      <div className={stylesOwner.formContainer}>
        <form onSubmit={handleSubmit(onSubmit)} className={stylesOwner.form}>
          <div className={stylesOwner.form_inputContainer}>
            <label htmlFor='accommodation'>
              {dictionary.ownerDashboard?.accommodationFilter}
            </label>
            <select
              id='accommodation'
              {...register('accommodation', { required: true })}
            >
              <option value=''>
                {dictionary.ownerDashboard?.selectAccommodation}
              </option>
              {data.map((item) => (
                <option key={item.accomodationid} value={item.accomodationid}>
                  {item.name}
                </option>
              ))}
            </select>
            {errors.accommodation && <span>This field is required</span>}
          </div>

          <div className={stylesOwner.form_inputContainer}>
            <label htmlFor='startDate'>
              {dictionary.ownerDashboard?.startDate}
            </label>
            <input
              type='date'
              id='startDate'
              {...register('startDate', { required: true })}
            />
            {errors.startDate && <span>This field is required</span>}
          </div>

          <div className={stylesOwner.form_inputContainer}>
            <label htmlFor='endDate'>
              {dictionary.ownerDashboard?.endDate}
            </label>
            <input
              type='date'
              id='endDate'
              {...register('endDate', { required: true })}
            />
            {errors.endDate && <span>This field is required</span>}
          </div>

          <div className={stylesOwner.form_inputContainer}>
            <label htmlFor='status'>{dictionary.ownerDashboard?.status}</label>
            <select id='status' {...register('status', { required: true })}>
              <option value='CONFIRMED'>
                {dictionary.ownerDashboard?.confirmStatus}
              </option>
              <option value='CANCELLED'>
                {dictionary.ownerDashboard?.cancelledStatus}
              </option>
            </select>
            {errors.status && <span>This field is required</span>}
          </div>

          <div className={stylesOwner.form_buttons}>
            <button type='submit'>
              {dictionary.ownerDashboard?.searchButton}
            </button>
            <button type='button' onClick={clearSearch}>
              {dictionary.ownerDashboard?.clearButton}
            </button>
          </div>
        </form>
      </div>

      {currentBookings.length > 0 ? (
        currentBookings.map((item: any, index) => (
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

      <div className={stylesOwner.pagination}>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          {dictionary.ownerDashboard?.previousButton}
        </button>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          {dictionary.ownerDashboard?.nextButton}
        </button>
      </div>
    </div>
  );
};
