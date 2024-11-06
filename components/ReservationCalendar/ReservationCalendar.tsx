import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { FC, useEffect, useState } from 'react';
import { TbBrandAirbnb, TbBrandBooking } from 'react-icons/tb';
import axios from 'axios';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import BlockCalendarDaysForm from '../BlockCalendarDaysForm/BlockCalendarDaysForm';
import { useRouter } from 'next/router';
import { GrStatusUnknown } from 'react-icons/gr';
import { axiosConfig } from '@/utils';
import { useSession } from 'next-auth/react';
import { TbLockOff } from 'react-icons/tb';
import styles from './reservationCalendar.module.css';
import useDictionary from '@/app/hooks/useDictionary';

// Set the locale to English
moment.locale('en');

// Initialize the momentLocalizer with the configured moment instance
const localizer = momentLocalizer(moment);

interface ReservationCalendarProps {
  startDate: string;
  endDate: string;
}

type BlockDayProps = {
  unit: string;
  startDate: string;
  endDate: string;
  type: string;
  booking: string;
};

export const ReservationCalendar: FC<{ id: string }> = ({ id }) => {
  const [showForm, setShowForm] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );
  const [accomodationDayBlock, setAccomodationDayBlock] = useState<
    ReservationCalendarProps[]
  >([
    {
      startDate: '',
      endDate: '',
    },
  ]);
  const [listenBlockDate, setlistenBlockDate] = useState<BlockDayProps>({
    unit: '',
    startDate: '',
    endDate: '',
    type: '',
    booking: '',
  });
  const [bookingById, setBookingById] = useState([
    {
      id: '',
      travellerName: '',
      occupiedPeriod: {
        startDate: '',
        endDate: '',
      },
    },
  ]);
  const [isEmailChecked, setIsEmailChecked] = useState(false);

  useEffect(() => {
    const accomodationBlockDay = async (id: string) => {
      if (id) {
        // Initialize variables
        let currentDate = new Date();
        let startDate = new Date(currentDate.getFullYear(), 0, 1); // Start from the beginning of the year
        let endDate;
        let customResponse: any = [];

        // Loop through the year in 90-day increments
        while (startDate.getFullYear() === currentDate.getFullYear()) {
          // Calculate end date as 90 days from start date
          endDate = new Date(startDate);
          endDate.setDate(startDate.getDate() + 90);

          // Adjust end date if it exceeds the end of the year
          if (endDate.getFullYear() !== startDate.getFullYear()) {
            endDate = new Date(currentDate.getFullYear(), 11, 31);
          }

          // Format dates in 'YYYY-MM-DD' format
          let formattedStartDate = startDate.toISOString().split('T')[0];
          let formattedEndDate = endDate.toISOString().split('T')[0];

          // Make API call
          const res = await axios.get(
            `https://api.avaibook.com/api/owner/accommodations/${id}/calendar/?startDate=${formattedStartDate}&endDate=${formattedEndDate}`,
            {
              headers: {
                'Content-Type': 'application/json',
                'X-AUTH-TOKEN': process.env.AVAIBOOK_API_TOKEN,
              },
            }
          );

          // Aggregate results
          customResponse = [...customResponse, ...res.data];

          // Move to the next 90-day period
          startDate = new Date(endDate);
          startDate.setDate(startDate.getDate() + 1);
        }

        // Calculate another 90 days after the last end date
        let anotherEndDate = endDate ? new Date(endDate) : new Date();
        if (endDate) {
          anotherEndDate.setDate(endDate.getDate() + 90);
        }

        // Format dates in 'YYYY-MM-DD' format
        let formattedAnotherStartDate = endDate
          ? endDate.toISOString().split('T')[0]
          : '';
        let formattedAnotherEndDate = anotherEndDate
          .toISOString()
          .split('T')[0];

        // Make API call for another 90 days
        const anotherRes = await axios.get(
          `https://api.avaibook.com/api/owner/accommodations/${id}/calendar/?startDate=${formattedAnotherStartDate}&endDate=${formattedAnotherEndDate}`,
          {
            headers: {
              'Content-Type': 'application/json',
              'X-AUTH-TOKEN': process.env.AVAIBOOK_API_TOKEN,
            },
          }
        );

        // Aggregate results
        customResponse = [...customResponse, ...anotherRes.data];

        // Update state with aggregated results
        setAccomodationDayBlock(customResponse);
      }
    };

    accomodationBlockDay(id);
  }, [id, listenBlockDate]);

  useEffect(() => {
    const getBookingById = async (id: string) => {
      try {
        if (id) {
          const resBooking = await axios.get(
            `https://api.avaibook.com/api/owner/bookings/${id}/`,
            {
              headers: {
                'Content-Type': 'application/json',
                'X-AUTH-TOKEN': process.env.AVAIBOOK_API_TOKEN,
              },
            }
          );

          setBookingById((prevState) => {
            const bookingExists = prevState.some(
              (booking) => booking.id === resBooking.data.id
            );

            if (!bookingExists) {
              // New booking detected
              // if (isEmailChecked) {
              //   axios
              //     .post("/send-email", resBooking.data)
              //     .then(() => console.log("Email sent"))
              //     .catch((error) => console.error("Error sending email:", error));
              // }

              return [...prevState, resBooking.data];
            } else {
              return prevState;
            }
          });
        }
      } catch (error) {
        console.error(`Error fetching booking with ID ${id}:`, error);
      }
    };

    const findBookingById = accomodationDayBlock.map((block: any) => {
      return block.booking;
    });

    findBookingById.forEach((id) => {
      getBookingById(id);
    });
  }, [accomodationDayBlock]);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    if ((session?.user?._id || session?.user?.id) && id) {
      const findUserEmail = async () => {
        try {
          const res = await axiosConfig.get(
            `/api/reservations/usersToSendEmail?userId=${
              session?.user?._id || session?.user?.id
            }&accomodationId=${id}`
          );

          if (res.data) {
            setIsEmailChecked(true);
          }
        } catch (error) {
          console.error('Error fetching user email:', error);
        }
      };

      try {
        findUserEmail();
      } catch (error) {
        console.error('Error calling findUserEmail function:', error);
      }
    }
  }, [session?.user?._id, session?.user?.id, id, isEmailChecked]);

  const handleEventClick = (e: any) => {
    const reservation: any = bookingById.filter((item) => item.id === e.id)[0];

    if (!reservation) return;

    reservation.status === 'CONFIRMED'
      ? router.push(`/private/owner/reservation/${reservation.id}`)
      : reservation.status === 'PENDING_PAYMENT'
      ? router.push(
          `/private/owner/accomodation/${reservation.accommodationId}`
        )
      : null;
  };

  const calculateMarginStart = () => (windowWidth > 768 ? '30px' : '0px');
  const calculateWidthStart = () => (windowWidth > 768 ? '85%' : '100%');

  const calculateMarginEnd = () => (windowWidth > 768 ? '30px' : '0px');
  const calculateWidthEnd = () => (windowWidth > 768 ? '85%' : '100%');

  const mergeReservations = [...bookingById, ...accomodationDayBlock];

  const reservations = mergeReservations.map((booking: any) => {
    if (booking.type === 'BLOCKED') {
      return {
        start: moment(booking.startDate).format('YYYY-MM-DD'),
        end: moment(booking.endDate).add(2, 'days').format('YYYY-MM-DD'),
        title: 'Bloqueado',
        partnerName: 'BLOCKED',
      };
    }

    if (booking.status === 'CONFIRMED') {
      return {
        id: booking.id,
        start: moment(booking.checkInDate).format('YYYY-MM-DD'),
        end: moment(booking.checkOutDate).add(1, 'days').format('YYYY-MM-DD'),
        title: booking.travellerName.toUpperCase(),
        partnerName: booking.partnerName,
      };
    }

    return {};
  });

  const dayStyleGetter = (date: Date) => {
    let style = {
      backgroundColor: 'white', // default color
    };

    accomodationDayBlock.forEach((block) => {
      const blockStart = moment(block.startDate);
      const blockEnd = moment(block.endDate);
      const current = moment(date);

      if (current.isBetween(blockStart, blockEnd, 'day', '[]')) {
        style = {
          backgroundColor: '',
        };
      }
    });

    return {
      style: style,
    };
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleGetNotification = async () => {
    if (isEmailChecked) {
      try {
        await axiosConfig.delete(`/api/reservations/usersToSendEmail`, {
          data: {
            userId: session?.user?._id || session?.user?.id,
            accomodationId: id,
          },
        });

        setIsEmailChecked(false);
      } catch (error) {
        console.error('Error deleting user email:', error);
      }
    } else {
      try {
        await axiosConfig.post(`/api/reservations/usersToSendEmail`, {
          userId: session?.user?._id || session?.user?.id,
          accomodationId: id,
        });

        setIsEmailChecked(true);
      } catch (error) {
        console.error('Error adding user email:', error);
      }
    }
  };

  const dictionary: any = useDictionary('calendar');

  return (
    <div className='px-8 mb-24'>
      {showForm && (
        <BlockCalendarDaysForm
          setlistenBlockDate={setlistenBlockDate}
          id={id}
        />
      )}

      <div className='flex flex-col justify-center items-center lg:flex-row lg:justify-between lg:items-end border-b-[1px] mt-20 mb-8'>
        <p className=' text-black900/[.7] text-2xl text-center md:text-left md:text-3xl lg:text-4xl'>
          {dictionary.calendarOwner?.eachCalendarTitle}
        </p>

        <div className='relative my-4 lg:my-0 lg:mb-2 '>
          <AiOutlineCheckCircle className='w-5 md:h-5 text-white absolute top-1/2 -translate-y-1/2 right-5 md:right-5 lg:right-7' />
          <button
            onClick={toggleForm}
            className='bg-p600 hover:bg-p800 text-center text-[13px] md:text-sm lg:text-base py-2 px-16 w-auto text-white'
          >
            {showForm
              ? `${dictionary.calendarOwner?.hideBlockDays}`
              : `${dictionary.calendarOwner?.showBlockDays}`}
          </button>
        </div>
      </div>

      <div className='flex flex-col md:flex-row items-center mb-10'>
        <div
          className={`relative inline-block w-12 mr-2 rounded-full align-middle select-none transition duration-200 ease-in bg-gray300`}
        >
          <input
            type='checkbox'
            name='toggle'
            id='toggle'
            checked={isEmailChecked}
            onChange={handleGetNotification}
            className={`${styles['toggle-checkbox']} absolute block w-6 h-6 rounded-full bg-p600 appearance-none cursor-pointer`}
          />

          <label
            htmlFor='toggle'
            className={` block overflow-hidden w-6 h-6 rounded-full bg-gray-300 cursor-pointer`}
          ></label>
        </div>

        <label htmlFor='toggle' className='pl-3 mt-4 md:mt-0'>
          {isEmailChecked
            ? `${dictionary.calendarOwner?.receiveEmail}`
            : `${dictionary.calendarOwner?.noReceiveEmail}`}
        </label>
      </div>

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
          agenda: 'Reservaciones',
          month: 'Month',
          today: 'Today',
          previous: 'Prev',
          next: 'Next',
          work_week: 'Semana laboral',
          allDay: 'Todo el dia',
          date: 'Fecha',
          time: 'Hora',
          event: 'Evento',
          noEventsInRange: 'No hay reservaciones en este rango',

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
    </div>
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
        ) : event.partnerName === 'BLOCKED' ? (
          <TbLockOff
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
