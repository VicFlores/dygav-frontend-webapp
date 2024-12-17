import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { GrStatusUnknown } from 'react-icons/gr';
import { TbLock } from 'react-icons/tb';
import { TbBrandBooking, TbBrandAirbnb } from 'react-icons/tb';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { TAvaibookAccomodations, TReservations } from '@/types';

import 'moment/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useRouter } from 'next/router';

const localizer = momentLocalizer(moment);

export const AccomodationsCalendar = (accomodation: TAvaibookAccomodations) => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  const router = useRouter();

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const calculateMarginStart = () => (windowWidth > 768 ? '20px' : '0px');
  const calculateWidthStart = () => (windowWidth > 768 ? '85%' : '100%');

  const calculateMarginEnd = () => (windowWidth > 768 ? '20px' : '0px');
  const calculateWidthEnd = () => (windowWidth > 768 ? '85%' : '100%');

  const handleEventClick = (e: any) => {
    if (e.partnerName !== 'Bloqueado') {
      router.push(`/private/owners/reservation/${e.id}`);
    }
  };

  const dayStyleGetter = () => {
    return {
      style: {
        backgroundColor: 'white',
      },
    };
  };

  const reservations = accomodation.reservations.map(
    (booking: TReservations) => {
      return {
        id: booking.booking,
        start: moment(booking.startDate).format('YYYY-MM-DD'),
        end: moment(booking.endDate).add(2, 'days').format('YYYY-MM-DD'),
        title: booking.travellerName
          ? booking.travellerName
          : booking.type === 'BLOCKED'
          ? 'Bloqueado'
          : 'Desconocido',
        partnerName: booking.partnerName
          ? booking.partnerName
          : booking.type === 'BLOCKED'
          ? 'Bloqueado'
          : 'Desconocido',
      };
    }
  );

  return (
    <section className='mt-10 ml-0 lg:ml-20 flex-1'>
      <Calendar
        dayPropGetter={dayStyleGetter}
        localizer={localizer}
        events={reservations}
        components={{
          event: CustomEvent,
        }}
        startAccessor='start'
        endAccessor='end'
        style={{ height: 500 }}
        views={['month']}
        messages={{
          agenda: 'reservas',
          month: 'Mes',
          today: 'Hoy',
          previous: 'Anterior',
          next: 'Siguiente',
          work_week: 'Semana laboral',
          allDay: 'Todo el dia',
          date: 'Fecha',
          time: 'Hora',
          event: 'Evento',
          noEventsInRange: 'No hay reservas en este rango',

          showMore: (total) => `+ Ver mas (${total})`,
        }}
        onSelectEvent={(e) => handleEventClick(e)}
        eventPropGetter={(event, start, end, isSelected) => {
          let newStyle: React.CSSProperties = {
            borderRadius: '15px',
            backgroundColor: '#F4511E',
            width: '100%',
          };

          if (event.start) {
            newStyle.marginLeft = calculateMarginStart();
            newStyle.width = calculateWidthStart();
          }

          if (event.end) {
            newStyle.marginRight = calculateMarginEnd();
            newStyle.width = calculateWidthEnd();
          }

          return {
            className: '',
            style: newStyle,
          };
        }}
      />
    </section>
  );
};

const CustomEvent = ({ event }: any) => (
  <div className='text-white lg:text-[14px] text-[10px]'>
    <div className='flex justify-center items-center '>
      <div className=''>
        {event.partnerName === 'Booking.com' ? (
          <TbBrandBooking
            color='white'
            className='mr-0 lg:mr-2 text-[20px] lg:text-[26px]'
          />
        ) : event.partnerName === 'Airbnb' ? (
          <TbBrandAirbnb
            color='white'
            className='mr-0 lg:mr-2 text-[20px] lg:text-[26px]'
          />
        ) : event.partnerName === 'Bloqueado' ? (
          <TbLock
            color='white'
            className='mr-0 lg:mr-2 text-[20px] lg:text-[26px]'
          />
        ) : (
          <GrStatusUnknown
            color='white'
            className='mr-0 lg:mr-2 text-[20px] lg:text-[26px]'
          />
        )}
      </div>

      <figure>{event.title}</figure>
    </div>
  </div>
);
