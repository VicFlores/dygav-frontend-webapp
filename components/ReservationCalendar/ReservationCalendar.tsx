import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { FC, useEffect, useState } from 'react';
import { ReservationAvaibook } from '@/types';
import axios from 'axios';
import { useRouter } from 'next/router';

const localizer = momentLocalizer(moment);

export const ReservationCalendar: FC<{ id: string }> = ({ id }) => {
  const [accomodationByReservation, setAccomodationByReservation] = useState<
    ReservationAvaibook[]
  >([]);
  const router = useRouter();

  useEffect(() => {
    const accomodationByUnitId = async () => {
      const res = await axios.get(
        'https://api.avaibook.biz/api/owner/bookings/',
        {
          headers: {
            'Content-Type': 'application/json',
            'X-AUTH-TOKEN':
              '7fd52cc3b7e215ac8e5173cd1a0d176eabe0ced50fdf1dd346676fd36d051920',
          },
        }
      );

      setAccomodationByReservation(
        res.data.filter((item: any) => item.accommodationId === Number(id))
      );
    };

    accomodationByUnitId();
  }, [id]);

  const reservations = accomodationByReservation.map((item) => {
    if (item.status === 'CONFIRMED') {
      return {
        start: item.occupiedPeriod.startDate,
        end: item.occupiedPeriod.endDate,
        title: item.accommodationName,
      };
    } else {
      return {
        start: new Date().getDate(),
        end: new Date().getDate(),
        title: '',
      };
    }
  });

  const handleEventClick = (e: any) => {
    const reservation = accomodationByReservation.filter(
      (item: any) =>
        item.occupiedPeriod.startDate === e.start &&
        item.occupiedPeriod.endDate === e.end
    );

    reservation.map((item) => {
      item.status === 'CONFIRMED'
        ? router.push(`/private/owner/reservation/${item.id}`)
        : item.status === 'PENDING_PAYMENT'
        ? router.push(`/private/owner/accomodation/${item.accommodationId}`)
        : null;
    });
  };

  return (
    <div className='px-8 space-y-12 mb-24'>
      <div className='flex flex-col md:flex-row justify-center items-center md:justify-between md:items-end border-b-[1px]'>
        <p className=' text-black900/[.7]  mt-10 text-2xl text-center md:text-left md:text-3xl lg:mt-16 lg:text-4xl'>
          Reservaciones en mi alojamiento
        </p>
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
