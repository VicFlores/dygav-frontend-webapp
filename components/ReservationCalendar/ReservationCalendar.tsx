import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { FC, useEffect, useState } from 'react';
import { ReservationAvaibook } from '@/types';
import axios from 'axios';
import { useRouter } from 'next/router';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import BlockCalendarDaysForm from '../BlockCalendarDaysForm/BlockCalendarDaysForm';

const localizer = momentLocalizer(moment);

interface ReservationCalendarProps {
  start: string;
  end: string;
}

export const ReservationCalendar: FC<{ id: string }> = ({ id }) => {
  const [showForm, setShowForm] = useState(false);
  const [accomodationDayBlock, setAccomodationDayBlock] = useState<
    ReservationCalendarProps[]
  >([
    {
      start: '',
      end: '',
    },
  ]);
  const [listenBlockDate, setlistenBlockDate] = useState(null);
  const [accomodationByReservation, setAccomodationByReservation] = useState<
    ReservationAvaibook[]
  >([]);
  const [bookingById, setbookingById] = useState({
    id: '',
  });

  const router = useRouter();

  useEffect(() => {
    const filterByAccomodationId = async () => {
      const res = await axios.get(
        `https://api.avaibook.com/api/owner/bookings/`,
        {
          headers: {
            'Content-Type': 'application/json',
            'X-AUTH-TOKEN': process.env.AVAIBOOK_API_TOKEN,
          },
        }
      );

      const accomodationById = res.data.filter(
        (item: any) => item.accommodationId === Number(id)
      );

      setAccomodationByReservation(accomodationById);
    };

    const accomodationBlockDay = async (id: string) => {
      if (id) {
        const res = await axios.get(
          `https://api.avaibook.com/api/owner/accommodations/${id}/calendar/`,
          {
            headers: {
              'Content-Type': 'application/json',
              'X-AUTH-TOKEN': process.env.AVAIBOOK_API_TOKEN,
            },
          }
        );

        setAccomodationDayBlock(res.data);

        res.data.map(async (item: any) => {
          const resBooking = await axios.get(
            `https://api.avaibook.com/api/owner/bookings/${item.booking}/`,
            {
              headers: {
                'Content-Type': 'application/json',
                'X-AUTH-TOKEN': process.env.AVAIBOOK_API_TOKEN,
              },
            }
          );

          setbookingById(resBooking.data);
        });
      }
    };

    filterByAccomodationId();
    accomodationBlockDay(id);
  }, [id, listenBlockDate]);

  const handleEventClick = (e: any) => {
    const reservation = accomodationByReservation.filter((item) => {
      if (
        item.occupiedPeriod?.startDate !== undefined &&
        item.occupiedPeriod?.endDate !== undefined
      ) {
        return (
          item.occupiedPeriod.startDate === e.start &&
          item.occupiedPeriod.endDate === e.end
        );
      }
    });

    /*  reservation.map((item) => {
      item.status === 'CONFIRMED'
        ? router.push(`/private/owner/reservation/${item.id}`)
        : item.status === 'PENDING_PAYMENT'
        ? router.push(`/private/owner/accomodation/${item.accommodationId}`)
        : null;
    }); */
  };

  console.log(bookingById);

  const reservations = accomodationDayBlock.map((block: any) => {
    return {
      start: moment(block.startDate).format('YYYY-MM-DD'),
      end: moment(block.endDate).add(1, 'days').format('YYYY-MM-DD'),
    };
  });

  const dayPropGetter = (date: Date) => {
    const isBlocked = accomodationDayBlock.some((block: any) =>
      moment(date).isBetween(block.startDate, block.endDate, undefined, '[]')
    );

    if (isBlocked) {
      return {
        style: disabledStyle,
        onClick: (e: any) => e.preventDefault(),
      };
    }

    return {};
  };

  const disabledStyle = {
    backgroundColor: 'red',
    color: 'white',
    opacity: 0.5,
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className='px-8 mb-24'>
      {showForm && (
        <BlockCalendarDaysForm setlistenBlockDate={setlistenBlockDate} />
      )}

      <div className='flex justify-between items-end border-b-[1px] mt-20 mb-14'>
        <p className=' text-black900/[.7] text-2xl text-center md:text-left md:text-3xl lg:text-4xl'>
          Reservaciones en mi alojamiento
        </p>

        <div className='relative mb-2'>
          <AiOutlineCheckCircle className='w-5 md:h-5 text-white absolute top-1/2 -translate-y-1/2 right-5 md:right-5 lg:right-7' />
          <button
            onClick={toggleForm}
            className='bg-p600 hover:bg-p800 text-center text-[13px] md:text-sm lg:text-base py-2 px-16 w-auto text-white'
          >
            {showForm ? 'Ocultar Bloquear Dia' : 'Ver Bloquear Dia'}
          </button>
        </div>
      </div>

      <Calendar
        localizer={localizer}
        events={reservations}
        startAccessor='start'
        endAccessor='end'
        style={{ height: 500 }}
        messages={{
          agenda: 'Reservaciones',
          month: 'Mes',
          day: 'Dia',
          today: 'Hoy',
          previous: 'Anterior',
          next: 'Siguiente',
          week: 'Semana',
          work_week: 'Semana laboral',
          allDay: 'Todo el dia',
          date: 'Fecha',
          time: 'Hora',
          event: 'Evento',
          noEventsInRange: 'No hay reservaciones en este rango',
          showMore: (total) => `+ Ver mas (${total})`,
        }}
        onSelectEvent={(e) => handleEventClick(e)}
      />
    </div>
  );
};
