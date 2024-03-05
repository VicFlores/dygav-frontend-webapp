import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/es";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { FC, useEffect, useState } from "react";
import { ReservationAvaibook } from "@/types";
import axios from "axios";
import { AiOutlineCheckCircle } from "react-icons/ai";
import BlockCalendarDaysForm from "../BlockCalendarDaysForm/BlockCalendarDaysForm";
import { useRouter } from "next/router";

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
  const router = useRouter();
  const [isEmailChecked, setIsEmailChecked] = useState(false);
  const [accomodationDayBlock, setAccomodationDayBlock] = useState<
    ReservationCalendarProps[]
  >([
    {
      startDate: "",
      endDate: "",
    },
  ]);
  const [listenBlockDate, setlistenBlockDate] = useState<BlockDayProps>({
    unit: "",
    startDate: "",
    endDate: "",
    type: "",
    booking: "",
  });
  const [bookingById, setBookingById] = useState([
    {
      id: "",
      travellerName: "",
      occupiedPeriod: {
        startDate: "",
        endDate: "",
      },
    },
  ]);

  useEffect(() => {
    const accomodationBlockDay = async (id: string) => {
      if (id) {
        const res = await axios.get(
          `https://api.avaibook.com/api/owner/accommodations/${id}/calendar/`,
          {
            headers: {
              "Content-Type": "application/json",
              "X-AUTH-TOKEN": process.env.AVAIBOOK_API_TOKEN,
            },
          }
        );

        setAccomodationDayBlock(res.data);
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
                "Content-Type": "application/json",
                "X-AUTH-TOKEN": process.env.AVAIBOOK_API_TOKEN,
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

  const handleEventClick = (e: any) => {
    const reservation: any = bookingById.filter((item) => item.id === e.id)[0];

    reservation.status === "CONFIRMED"
      ? router.push(`/private/owner/reservation/${reservation.id}`)
      : reservation.status === "PENDING_PAYMENT"
      ? router.push(
          `/private/owner/accomodation/${reservation.accommodationId}`
        )
      : null;
  };

  const reservations = bookingById.map((booking: any) => {
    return {
      id: booking.id,
      start: moment(booking.occupiedPeriod.startDate).format("YYYY-MM-DD"),
      end: moment(booking.occupiedPeriod.endDate)
        .add(2, "days")
        .format("YYYY-MM-DD"),
      title: booking.travellerName,
    };
  });

  const dayStyleGetter = (date: Date) => {
    let style = {
      backgroundColor: "white", // default color
    };

    accomodationDayBlock.forEach((block) => {
      const blockStart = moment(block.startDate);
      const blockEnd = moment(block.endDate);
      const current = moment(date);

      if (current.isBetween(blockStart, blockEnd, "day", "[]")) {
        style = {
          backgroundColor: "#D4D4D4",
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

  return (
    <div className="px-8 mb-24">
      {showForm && (
        <BlockCalendarDaysForm
          setlistenBlockDate={setlistenBlockDate}
          id={id}
        />
      )}

      <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-between lg:items-end border-b-[1px] mt-20 mb-8">
        <p className=" text-black900/[.7] text-2xl text-center md:text-left md:text-3xl lg:text-4xl">
          Reservas en mi alojamiento
        </p>

        <div className="relative my-4 lg:my-0 lg:mb-2 ">
          <AiOutlineCheckCircle className="w-5 md:h-5 text-white absolute top-1/2 -translate-y-1/2 right-5 md:right-5 lg:right-7" />
          <button
            onClick={toggleForm}
            className="bg-p600 hover:bg-p800 text-center text-[13px] md:text-sm lg:text-base py-2 px-16 w-auto text-white"
          >
            {showForm ? "Ocultar Bloquear Dia" : "Ver Bloquear Dia"}
          </button>
        </div>
      </div>

      {/* <div className="mb-10">
        <input
          type="checkbox"
          checked={isEmailChecked}
          onChange={(e) => setIsEmailChecked(e.target.checked)}
        />
        <label className="pl-4">
          Recibir notificaciones por correo electrónico de nuevas reservas
        </label>
      </div> */}

      <Calendar
        dayPropGetter={dayStyleGetter}
        localizer={localizer}
        events={reservations}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        views={["month"]}
        messages={{
          agenda: "Reservaciones",
          month: "Mes",
          today: "Hoy",
          previous: "Anterior",
          next: "Siguiente",
          work_week: "Semana laboral",
          allDay: "Todo el dia",
          date: "Fecha",
          time: "Hora",
          event: "Evento",
          noEventsInRange: "No hay reservaciones en este rango",

          showMore: (total) => `+ Ver mas (${total})`,
        }}
        onSelectEvent={(e) => handleEventClick(e)}
        eventPropGetter={(event, start, end, isSelected) => {
          let newStyle: React.CSSProperties = {
            background: "linear-gradient(to right, lightblue 70%, #F4511E 30%)",
            color: "white",
            fontSize: "14px",
            paddingRight: "0px",
            width: "0px",
            textAlign: "center",
          };

          if (event.start && event.end) {
            newStyle.paddingRight = "20px";
            newStyle.width = "80%";
            newStyle.textAlign = "right";
            newStyle.background =
              "linear-gradient(to right, rgba(255,0,0,0) 20%, #F4511E 5%, #F4511E 20%, #F4511E 55%)";
          }

          return {
            className: "",
            style: newStyle,
          };
        }}
      />
    </div>
  );
};
