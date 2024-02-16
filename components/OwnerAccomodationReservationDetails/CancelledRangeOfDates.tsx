import register from '@/pages/register';
import axios from 'axios';
import moment from 'moment';
import error from 'next/error';
import Link from 'next/link';
import React, { FC, useMemo, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { BsCalendar2DateFill } from 'react-icons/bs';

type FormValues = {
  startDateForm: string;
  endDateForm: string;
};

interface IBookingId {
  id: string;
  travellerName: string;
  accommodationName: string;
  status: string;
  occupiedPeriod: {
    startDate: string;
    endDate: string;
  };
  cancelledDate: string;
}

export const CancelledRangeOfDates: FC<{ id: string }> = ({ id }) => {
  const { register, handleSubmit } = useForm<FormValues>();
  const [error, setError] = useState('');
  const [bookings, setBookings] = useState<IBookingId[]>([]);

  const onSubmit: SubmitHandler<FormValues> = async ({
    startDateForm,
    endDateForm,
  }) => {
    setError('');
    if (startDateForm === '' || endDateForm === '') {
      setError('Porfavor llenar todos los campos');
      return;
    }

    if (startDateForm > endDateForm) {
      setError('La fecha de inicio no puede ser mayor a la fecha de fin');
      return;
    }

    const startDate = new Date(startDateForm);
    const endDate = new Date(endDateForm);
    const daysDifference = Math.floor(
      (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24)
    );

    if (daysDifference > 90) {
      setError('El rango entre fechas no puede ser mayor a 90 días');
      return;
    }

    const res = await axios.get(
      `https://api.avaibook.com/api/owner/bookings/?cancelledStartDate=${startDateForm}&cancelledEndDate=${endDateForm}`,
      {
        headers: {
          'Content-Type': 'application/json',
          'X-AUTH-TOKEN': process.env.AVAIBOOK_API_TOKEN,
        },
      }
    );

    res.data.filter((booking: any) => {
      if (booking.accommodationId === Number(id)) {
        setBookings((prev) => {
          const bookingExists = prev.some(
            (prevBooking) => prevBooking.id === booking.id
          );

          if (!bookingExists) {
            return [...prev, booking];
          }

          return prev;
        });
      }
    });
  };

  console.log(bookings);

  return (
    <div>
      <div className='flex justify-center items-center mt-10 mb-24'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col justify-center items-center md:grid md:grid-cols-2 mt-4 bg-gray300/50 rounded-xl w-[420px] pl-4 pr-4 md:w-[500px] md:pl-8 md:pr-8 py-8 gap-10'
        >
          <div className='mb-4'>
            <p className='pb-2 font-semibold text-center'>Fecha de inicio</p>
            <label
              className='text-gray-700 font-semibold block mb-2 text-center relative'
              htmlFor='name'
            >
              <BsCalendar2DateFill className='w-5 h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900' />
              <input
                className='text-center rounded-lg pl-10 pr-4 lg:w-full lg:h-11 md:w-96 w-[215px] bg-transparent shadow appearance-none h-10 bg-white border border-white  py-2 text-black900 leading-tight focus:outline-none focus:shadow-outline'
                type='date'
                {...register('startDateForm')}
              />
            </label>
          </div>

          <div className='mb-4'>
            <p className='pb-2 font-semibold text-center'>Fecha final</p>
            <label
              className='text-gray-700 font-semibold block mb-2 text-center relative'
              htmlFor='name'
            >
              <BsCalendar2DateFill className='w-5 h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900' />
              <input
                className='text-center rounded-lg pl-10 pr-4 lg:w-full lg:h-11 md:w-96 w-[215px] bg-transparent shadow appearance-none h-10 bg-white border border-white placeholder:text-black900 py-2 text-black900 leading-tight focus:outline-none focus:shadow-outline'
                type='date'
                {...register('endDateForm')}
              />
            </label>
          </div>

          <button
            className='bg-blue-500 bg-p600 self-center justify-self-center text-white py-2 px-10 rounded-lg hover:bg-blue-600 col-start-1 col-end-3'
            type='submit'
          >
            Buscar Rango
          </button>

          <span className='text-center col-start-1 col-end-3'>{error}</span>
        </form>
      </div>

      {bookings.length > 0 ? (
        <div className='grid gap-y-10 md:grid-cols-2 md:gap-y-8 lg:grid-cols-3'>
          {bookings.map((item) => (
            <div
              key={item.id}
              className='text-center h-fit rounded-xl space-y-4 justify-self-center border-[1px] border-p600 px-5 py-5 bg-gray300/[.14] w-[280px] md:w-[300px]'
            >
              <div className='space-y-3'>
                <p className='text-base md:text-lg font-semibold'>
                  Nombre del alojamiento:
                </p>
                <p className='text-sm md:text-base'>{item.accommodationName}</p>

                <p className='text-base md:text-lg font-semibold'>
                  Fecha de Cancelacion
                </p>

                <p className='text-sm md:text-base'>
                  {moment(item.cancelledDate).format('MM-DD-YYYY')}
                </p>

                <p className='text-base md:text-lg font-semibold'>
                  Nombre de viajero
                </p>
                <p className='text-sm md:text-base'>
                  {item.travellerName ? item.travellerName : 'Desconocido'}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className='flex justify-center items-center'>
          <div className='flex justify-center items-center px-4 border-[1px] border-dashed h-[266px] w-[717px]'>
            <p className=' text-black900/[.7] lg:text-3xl text-center'>
              ¡Aún no tienes reservaciones canceladas en tu alojamiento!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
