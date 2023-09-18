import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'


const localizer = momentLocalizer(moment)

export const ReservationCalendar = () => {

  const reservations = [
    {
      start: new Date('2023-09-21T10:00:00'),
      end: new Date('2023-09-25T12:00:00'),
      title: 'Reservacion en playa del carmen',
    },
    {
      start: new Date('2023-09-21T10:00:00'),
      end: new Date('2023-09-25T10:00:00'),
      title: 'Reservacion en ciudad de mexico',
    },
  ];
  

  function handleEventClick() {
    console.log('Click reservation:');
  }


  return (
    <>
      <h1>React calendar</h1>
      <Calendar 
        localizer={localizer}
        events={reservations}
        startAccessor="start"
        endAccessor="end"
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
          showMore: total => `+ Ver mas (${total})`
        }}
        onSelectEvent={() => handleEventClick()}
      />
    </>
  )
}
