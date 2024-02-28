import { FaLocationDot } from "react-icons/fa6";
import { BsCalendar2DateFill, BsPeopleFill } from "react-icons/bs";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { SubmitHandler, useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import { es } from "date-fns/locale";
import { useRouter } from "next/router";
import { useState } from "react";
import { addMonths } from "date-fns";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
registerLocale("es", es);

interface FormData {
  ubicacion: string;
  huespedes: number;
}

export const FilterToDatesLocationPeople = () => {
  const [selectedOption, setSelectedOption] = useState("default");
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);
  const [startDate, endDate] = dateRange;
  const { register, handleSubmit } = useForm<FormData>();
  const router = useRouter();

  const capitalizeFirstLetterOfEachWord = (string: string) => {
    return string
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  const onSubmit: SubmitHandler<FormData> = ({ ubicacion, huespedes }) => {
    const capitalizedUbicacion = capitalizeFirstLetterOfEachWord(ubicacion);

    if (!startDate || !endDate) {
      return alert("Por favor, selecciona las fechas de reserva");
    }

    router.push({
      pathname: `/apartamentos-turisticos/${capitalizedUbicacion}`,
      query: {
        ubicacion: capitalizedUbicacion,
        checkin: moment(startDate).format("YYYY-MM-DD"),
        checkout: moment(endDate).format("YYYY-MM-DD"),
        huespedes,
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid lg:grid-cols-4 lg:gap-0 md:gap-8 gap-6 p-[30px] mt-16 bg-p600/50"
    >
      <div className="text-center self-center justify-self-center">
        <p className="pb-2 font-semibold">Escoge tu ciudad</p>
        <label className="relative">
          <FaLocationDot className="w-5 h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900" />
          <select
            {...register("ubicacion", { required: true })}
            className="rounded-lg pl-10 pr-4 lg:w-full lg:h-11 md:w-96 w-full bg-transparent shadow appearance-none bg-white border border-white placeholder:text-black900 py-2 text-black900 leading-tight focus:outline-none focus:shadow-outline"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="default" disabled>
              Ciudad
            </option>
            <option value="torrevieja">Torrevieja</option>
            <option value="madrid">Madrid</option>
            <option value="puerto de mazarron">Puerto De Mazarron</option>
            <option value="lo pagan">Lo Pagan</option>
            <option value="finestrat">Finestrat</option>
          </select>
        </label>
      </div>

      <div className="text-center self-center justify-self-center  ">
        <p className="pb-2 font-semibold">Checkin - Checkout</p>

        <div className="relative">
          <BsCalendar2DateFill className="w-5 h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900 z-10" />
          <DatePicker
            selectsRange={true}
            startDate={startDate}
            minDate={new Date()}
            maxDate={addMonths(new Date(), 12)}
            endDate={endDate}
            onChange={(update) => {
              setDateRange(update);
            }}
            className="rounded-lg pl-10 pr-8 lg:w-[275px] lg:h-11 md:w-96 w-[240px] bg-transparent shadow appearance-none bg-white border border-white placeholder:text-black900 py-2 text-black900 leading-tight focus:outline-none focus:shadow-outline"
            placeholderText="Fechas de reserva"
            isClearable
            locale={es}
          />
        </div>
      </div>

      <div className="text-center self-center justify-self-center">
        <p className="pb-2 font-semibold">Número de Viajeros</p>
        <label className="relative">
          <BsPeopleFill className="w-5 h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900" />
          <input
            {...register("huespedes", { required: true })}
            type="number"
            placeholder="Huéspedes"
            className="rounded-lg pl-10 pr-4 lg:w-48 lg:h-11 md:w-96 w-[215px] bg-transparent shadow appearance-none bg-white border border-white placeholder:text-black900 py-2 text-black900 leading-tight focus:outline-none focus:shadow-outline"
          />
        </label>
      </div>

      <div className="self-end justify-self-center relative">
        <div className="relative">
          <AiOutlineCheckCircle className="w-5 h-5 absolute top-1/2 -translate-y-1/2 right-7" />
          <button
            type="submit"
            className="bg-p600 hover:bg-p800 py-2 px-4 w-[180px] text-left text-white justify-self-center self-center"
          >
            Buscar ahora
          </button>
        </div>
      </div>
    </form>
  );
};
