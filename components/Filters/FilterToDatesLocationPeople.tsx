import { FaLocationDot } from 'react-icons/fa6';
import { BsCalendar2DateFill, BsPeopleFill } from 'react-icons/bs';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useState } from 'react';

interface FormData {
  ubicacion: string;
  checkin: string;
  checkout: string;
  huespedes: number;
}

export const FilterToDatesLocationPeople = () => {
  const [selectedOption, setSelectedOption] = useState('default');
  const { register, handleSubmit, formState } = useForm<FormData>();
  const router = useRouter();

  const capitalizeFirstLetterOfEachWord = (string: string) => {
    return string
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };

  const onSubmit: SubmitHandler<FormData> = ({
    ubicacion,
    huespedes,
    checkin,
    checkout,
  }) => {
    const capitalizedUbicacion = capitalizeFirstLetterOfEachWord(ubicacion);

    router.push({
      pathname: `/apartamentos-turisticos/${capitalizedUbicacion}`,
      query: {
        ubicacion: capitalizedUbicacion,
        checkin,
        checkout,
        huespedes,
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='grid lg:grid-cols-5 lg:gap-4 md:gap-8 gap-10 p-[30px] mt-16 bg-p600/50'
    >
      <div className='self-center justify-self-center'>
        <label className='relative'>
          <FaLocationDot className='w-5 h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900' />
          <select
            {...register('ubicacion', { required: true })}
            className='pl-10 pr-4 lg:w-full lg:h-11 md:w-96 w-full bg-transparent shadow appearance-none bg-white border border-white placeholder:text-black900 py-2 text-black900 leading-tight focus:outline-none focus:shadow-outline'
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value='default' disabled>
              Ciudad
            </option>
            <option value='torrevieja'>Torrevieja</option>
            <option value='madrid'>Madrid</option>
            <option value='puerto de mazarron'>Puerto De Mazarron</option>
            <option value='lo pagan'>Lo Pagan</option>
            <option value='finestrat'>Finestrat</option>
          </select>
        </label>
      </div>

      <div className='self-center justify-self-center'>
        <label className='relative'>
          <BsCalendar2DateFill className='w-5 h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900' />
          <input
            {...register('checkin', { required: true })}
            type='text'
            onFocus={(e) => (e.currentTarget.type = 'date')}
            onBlur={(e) => (e.currentTarget.type = 'text')}
            placeholder='Check-in'
            className='pl-10 pr-4 lg:w-full lg:h-11 md:w-96 w-full bg-transparent shadow appearance-none bg-white border border-white placeholder:text-black900 py-2 text-black900 leading-tight focus:outline-none focus:shadow-outline'
          />
        </label>
      </div>

      <div className='self-center justify-self-center'>
        <label className='relative'>
          <BsCalendar2DateFill className='w-5 h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900' />
          <input
            {...register('checkout', { required: true })}
            type='text'
            onFocus={(e) => (e.currentTarget.type = 'date')}
            onBlur={(e) => (e.currentTarget.type = 'text')}
            placeholder='Check-out'
            className='pl-10 pr-4 lg:w-full lg:h-11 md:w-96 w-full bg-transparent shadow appearance-none bg-white border border-white placeholder:text-black900 py-2 text-black900 leading-tight focus:outline-none focus:shadow-outline'
          />
        </label>
      </div>

      <div className='self-center justify-self-center'>
        <label className='relative'>
          <BsPeopleFill className='w-5 h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900' />
          <input
            {...register('huespedes', { required: true })}
            type='number'
            placeholder='Huéspedes'
            className='pl-10 pr-4 lg:w-full lg:h-11 md:w-96 w-full bg-transparent shadow appearance-none bg-white border border-white placeholder:text-black900 py-2 text-black900 leading-tight focus:outline-none focus:shadow-outline'
          />
        </label>
      </div>

      <div className='self-center justify-self-center relative'>
        <div className='relative'>
          <AiOutlineCheckCircle className='w-5 h-5 absolute top-1/2 -translate-y-1/2 right-7' />
          <button
            type='submit'
            className='bg-p600 hover:bg-p800 py-2 px-4 w-[180px] text-left text-white justify-self-center self-center'
          >
            Buscar ahora
          </button>
        </div>
      </div>
    </form>
  );
};
