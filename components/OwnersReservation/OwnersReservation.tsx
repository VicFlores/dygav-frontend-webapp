import { axiosConfig } from '@/utils';
import axios from 'axios';
import { Session } from 'next-auth';
import Image from 'next/legacy/image';
import Link from 'next/link';
import React, { FC, useEffect, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import styles from '../OwnerDashboard/OwnerDashboard.module.css';
import stylesOwner from './OwnersReservation.module.css';
import { SubmitHandler, useForm } from 'react-hook-form';

interface IFormInput {
  accommodation: string;
  startDate: Date;
  endDate: Date;
  status: string;
}

export const OwnersReservation: FC<{ session: Session }> = ({ session }) => {
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
        if (data.length > 0) {
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

          const flattenedBookings = bookings.flat();
          setBookings(flattenedBookings);
          setOriginalBookings(flattenedBookings); // Store the original bookings
        }
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchBookings();
  }, [data]);

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

  return (
    <div className={stylesOwner.controlPanel}>
      <h1 className={styles.controlPanel__title}>Upcoming bookings</h1>

      <p className={styles.controlPanel__subtitle}>
        These are the latest reservations in your accommodations
      </p>

      <div className={stylesOwner.formContainer}>
        <form onSubmit={handleSubmit(onSubmit)} className={stylesOwner.form}>
          <div className={stylesOwner.form_inputContainer}>
            <label htmlFor='accommodation'>Accommodation</label>
            <select
              id='accommodation'
              {...register('accommodation', { required: true })}
            >
              <option value=''>Select Accommodation</option>
              {data.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
            {errors.accommodation && <span>This field is required</span>}
          </div>

          <div className={stylesOwner.form_inputContainer}>
            <label htmlFor='startDate'>Start Date</label>
            <input
              type='date'
              id='startDate'
              {...register('startDate', { required: true })}
            />
            {errors.startDate && <span>This field is required</span>}
          </div>

          <div className={stylesOwner.form_inputContainer}>
            <label htmlFor='endDate'>End Date</label>
            <input
              type='date'
              id='endDate'
              {...register('endDate', { required: true })}
            />
            {errors.endDate && <span>This field is required</span>}
          </div>

          <div className={stylesOwner.form_inputContainer}>
            <label htmlFor='status'>Status</label>
            <select id='status' {...register('status', { required: true })}>
              <option value='CONFIRMED'>Confirmed</option>
              <option value='CANCELLED'>Cancelled</option>
            </select>
            {errors.status && <span>This field is required</span>}
          </div>

          <div className={stylesOwner.form_buttons}>
            <button type='submit'>Search</button>
            <button type='button' onClick={clearSearch}>
              Clear
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
                <h3 className={styles.bookings_status}>Active booking</h3>

                <p className={styles.bookings_accommodation}>
                  {item.accommodation}
                </p>

                <p className={styles.bookings_accommodation}>
                  {item.traveller_name}
                </p>

                <div className={styles.bookings_check}>
                  <p>Check-in: {item.indate}</p>

                  <p>Check-out: {item.outdate}</p>
                </div>

                <div className={styles.bookings_check}>
                  <p>€{item.totalamount}</p>

                  {item.status === 'CONFIRMED' ? (
                    <Link
                      href={`/private/owner/reservation/${item.booking}`}
                      className={styles.bookings_details}
                    >
                      Detalles de reservacion
                    </Link>
                  ) : (
                    <p className={styles.bookings_status}>Cancelada</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className='flex justify-center items-center mt-10'>
          <div className='flex flex-col justify-center items-center space-y-8 border-[1px] border-dashed md:h-[200px] md:w-[600px] p-10'>
            <p className=' text-black900/[.7] lg:text-xl'>
              You don&apos;t have reservations yet!
            </p>
          </div>
        </div>
      )}

      <div className={stylesOwner.pagination}>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};
