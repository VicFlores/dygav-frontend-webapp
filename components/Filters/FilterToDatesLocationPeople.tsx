import { FaLocationDot } from 'react-icons/fa6';
import { BsPeopleFill } from 'react-icons/bs';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { SubmitHandler, useForm } from 'react-hook-form';
import { DateRangePicker } from 'rsuite';
import { useRouter } from 'next/router';
import { useState } from 'react';
import moment from 'moment';
import 'rsuite/DateRangePicker/styles/index.css';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { CustomProvider } from 'rsuite';
import esES from 'rsuite/locales/es_ES';
import useDictionary from '@/app/hooks/useDictionary';

interface FormData {
  ubicacion: string;
  huespedes: number;
}

export const FilterToDatesLocationPeople = () => {
  const [selectedOption, setSelectedOption] = useState('default');
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const { register, handleSubmit } = useForm<FormData>();
  const router = useRouter();
  const dictionary = useDictionary('home');

  const capitalizeFirstLetterOfEachWord = (string: string) => {
    return string
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };

  const onSubmit: SubmitHandler<FormData> = ({ ubicacion, huespedes }) => {
    const capitalizedUbicacion = capitalizeFirstLetterOfEachWord(ubicacion);

    if (!startDate || !endDate) {
      return alert('Por favor, selecciona las fechas de reserva');
    }

    router.push({
      pathname: `/apartamentos-turisticos/${capitalizedUbicacion}`,
      query: {
        ubicacion: capitalizedUbicacion,
        checkin: moment(startDate).format('YYYY-MM-DD'),
        checkout: moment(endDate).format('YYYY-MM-DD'),
        huespedes,
      },
    });
  };

  const { beforeToday } = DateRangePicker;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='grid grid-cols-1 lg:grid-cols-4 lg:gap-0 md:gap-8 gap-6 py-6 mt-16 bg-p600/50'
    >
      <div className='text-center self-center justify-self-center'>
        <p className='pb-2 font-semibold'>
          {dictionary.filterToDatesLocationPeople?.inputCity}
        </p>
        <label className='relative'>
          <FaLocationDot className='w-5 h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900' />
          <select
            {...register('ubicacion', { required: true })}
            className='rounded-lg pl-10 pr-4 lg:w-[275px] lg:h-11 md:w-96 w-[240px] bg-transparent shadow appearance-none bg-white border border-white placeholder:text-black900 py-2 text-black900 leading-tight focus:outline-none focus:shadow-outline'
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value='default' disabled>
              {dictionary.filterToDatesLocationPeople?.city}
            </option>
            <option value='torrevieja'>Torrevieja</option>
            <option value='madrid'>Madrid</option>
            <option value='puerto de mazarron'>Puerto De Mazarron</option>
            <option value='lo pagan'>Lo Pagan</option>
            <option value='finestrat'>Finestrat</option>
          </select>
        </label>
      </div>

      <div className='text-center self-center justify-self-center'>
        <p className='pb-2 font-semibold'>Checkin - Checkout</p>
        <div className='relative'>
          <FaRegCalendarAlt className='w-5 h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900 z-10' />

          <CustomProvider locale={esES}>
            <DateRangePicker
              isoWeek
              showOneCalendar
              ranges={[]}
              placeholder={dictionary.filterToDatesLocationPeople?.dates}
              size='md'
              caretAs={null}
              showHeader={false}
              shouldDisableDate={beforeToday()}
              format='dd-MM-yyyy'
              onChange={(dates) => {
                if (dates) {
                  setStartDate(dates[0]);
                  setEndDate(dates[1]);
                }
              }}
              className='rounded-lg lg:w-[275px] md:w-96 w-[240px] bg-white py-1'
            />
          </CustomProvider>
        </div>
      </div>

      <div className='text-center self-center justify-self-center'>
        <p className='pb-2 font-semibold'>
          {dictionary.filterToDatesLocationPeople?.inputTravellers}
        </p>
        <label className='relative'>
          <BsPeopleFill className='w-5 h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900' />
          <input
            {...register('huespedes', { required: true })}
            type='number'
            placeholder={dictionary.filterToDatesLocationPeople?.guests}
            className='rounded-lg pl-10 pr-4 lg:w-[275px] lg:h-11 md:w-96 w-[240px] bg-transparent shadow appearance-none bg-white border border-white placeholder:text-black900 py-2 text-black900 leading-tight focus:outline-none focus:shadow-outline'
          />
        </label>
      </div>

      <div className='self-end justify-self-center relative'>
        <div className='relative'>
          <AiOutlineCheckCircle className='w-5 h-5 absolute top-1/2 -translate-y-1/2 right-7' />
          <button
            type='submit'
            className='bg-p600 hover:bg-p800 py-2 px-4 w-[180px] lg:w-[130px] text-left text-white justify-self-center self-center'
          >
            {dictionary.filterToDatesLocationPeople?.searchButton}
          </button>
        </div>
      </div>
    </form>
  );
};
