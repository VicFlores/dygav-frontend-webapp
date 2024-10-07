import { BookingDetail } from '@/components/AdminMultiCalendar/BookingDetail';
import moment from 'moment';
import Link from 'next/link';
import { FC } from 'react';
import { FaAirbnb } from 'react-icons/fa6';
import { GrStatusUnknown } from 'react-icons/gr';
import { TbBrandBooking } from 'react-icons/tb';

interface Reservation {
  id: string;
  checkInDate: string;
  checkOutDate: string;
  partnerName: string;
  travellerName: string;
}

interface ReservationLinkProps {
  reservation: Reservation;
  date: moment.Moment;
  showDetails: string | null;
  setShowDetails: (id: string | null) => void;
}

const ReservationLink: FC<ReservationLinkProps> = ({
  reservation,
  date,
  showDetails,
  setShowDetails,
}) => {
  const isStartDate = date.isSame(
    moment(reservation.checkInDate).startOf('day')
  );
  const isEndDate = date.isSame(
    moment(reservation.checkOutDate).startOf('day')
  );

  const roundedClass = isStartDate
    ? 'rounded-l-xl'
    : isEndDate
    ? 'rounded-r-xl'
    : '';
  const marginClass = (isStartDate && 'ml-16') || (isEndDate && 'mr-16') || '';

  return (
    <Link
      href={`/private/owners/reservation/${reservation.id}`}
      className={`bg-p600/80 relative text-white text-xs w-full h-[18px] lg:h-2/3 lg:py-1 ${roundedClass} ${marginClass}`}
      key={reservation.id}
      style={{ whiteSpace: 'nowrap' }}
      onMouseEnter={() => setShowDetails(reservation.id)}
      onMouseLeave={() => setShowDetails(null)}
    >
      {showDetails === reservation.id && (
        <BookingDetail bookingId={reservation.id} />
      )}

      <span className='flex items-center absolute z-10 left-2'>
        {isStartDate &&
          (reservation.partnerName === 'Airbnb' ? (
            <FaAirbnb className='mr-1' />
          ) : reservation.partnerName === 'Booking.com' ? (
            <TbBrandBooking className='mr-1 h-4 w-4' />
          ) : (
            <GrStatusUnknown className='mr-1 w-4 h-4' />
          ))}

        {isStartDate &&
          (reservation.travellerName.toUpperCase() === ''
            ? 'Desconocido'
            : reservation.travellerName.substring(0, 17).toUpperCase())}
      </span>
    </Link>
  );
};

export default ReservationLink;
