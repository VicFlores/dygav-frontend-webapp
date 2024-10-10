import { FC, useEffect, useState } from 'react';
import styles from './AdminMultiCalendar.module.css';
import axios from 'axios';
import { TReservation } from '@/types';
import moment from 'moment';

export const BookingDetail: FC<{ bookingId: string }> = ({ bookingId }) => {
  const [bookingInfo, setBookingInfo] = useState<TReservation>(
    {} as TReservation
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getBookingById = async (id: string) => {
      try {
        if (id) {
          setLoading(true);

          const resBooking = await axios.get(
            `https://api.avaibook.com/api/owner/bookings/${id}/`,
            {
              headers: {
                'Content-Type': 'application/json',
                'X-AUTH-TOKEN': process.env.AVAIBOOK_API_TOKEN,
              },
            }
          );

          setBookingInfo(resBooking.data);

          setLoading(false);
        }
      } catch (error) {
        console.error(`Error fetching booking with ID ${id}:`, error);

        setLoading(false);
      }
    };

    getBookingById(bookingId);
  }, [bookingId]);

  return (
    <div className={styles.tooltip}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className='space-y-2 p-2'>
          <p>
            <strong className='text-p800'>Viajero:</strong>{' '}
            {bookingInfo.travellerName || 'Desconocido'}
          </p>
          <p>
            <strong className='text-p800'>Precio total:</strong> €
            {bookingInfo.totalAmount}
          </p>
          <p>
            <strong className='text-p800'>Huespedes:</strong>{' '}
            {bookingInfo.travellers?.standard}
          </p>
          <p>
            <strong className='text-p800'>Check-in:</strong>{' '}
            {bookingInfo?.checkInDate
              ? moment(bookingInfo.checkInDate).format('ddd D MMM YYYY')
              : 'N/A'}
            {''} - {''}
            {bookingInfo.checkinTime}
          </p>
          <p>
            <strong className='text-p800'>Check-out:</strong>{' '}
            {bookingInfo?.checkOutDate
              ? moment(bookingInfo.checkOutDate).format('ddd D MMM YYYY')
              : 'N/A'}
            {''} - {''}
            {bookingInfo.checkoutTime}
          </p>
        </div>
      )}
    </div>
  );
};
