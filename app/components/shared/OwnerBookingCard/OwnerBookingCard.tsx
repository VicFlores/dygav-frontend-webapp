import { FC } from 'react';

import Link from 'next/link';
import Image from 'next/legacy/image';
import styles from '../../Owners/Dashboard/OwnerDashboard.module.css';

type BookingCardProps = {
  booking: any;
  dictionary: any;
};

const OwnerBookingCard: FC<BookingCardProps> = ({ booking, dictionary }) => {
  return (
    <div key={booking.booking} className={styles.bookings__card}>
      <div className={styles.card}>
        <figure className={styles.bookings__image}>
          <Image
            src={booking.images[0].ORIGINAL}
            alt='Accommodation'
            layout='fill'
            priority
          />
        </figure>

        <div className={styles.bookings_cardBody}>
          <h3 className={styles.bookings_status}>
            {dictionary.ownerDashboard?.bookingStatus}
          </h3>

          <p className={styles.bookings_accommodation}>
            {booking.accommodation}
          </p>

          <p className={styles.bookings_accommodation}>
            {booking.traveller_name}
          </p>

          <div className={styles.bookings_check}>
            <p>Check-in: {booking.indate}</p>/
            <p>Check-out: {booking.outdate}</p>
          </div>

          <div className={styles.bookings_check}>
            <p>€{booking.totalamount}</p>

            <Link
              href={`/private/owners/reservation/${booking.booking}`}
              className={styles.bookings_details}
            >
              {dictionary.ownerDashboard?.bookinButton}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerBookingCard;
