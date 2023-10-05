import { AiOutlineCheckCircle } from 'react-icons/ai';
import React, { FC } from 'react';
import Link from 'next/link';

type Reservation = {
  id: number;
  src?: string[];
  imgUrl?: string;
  title: string;
  information: string;
  currentsReservations: {
    start: string;
    end: string;
    checkin: string;
    checkout: string;
    paymentStatus: string;
  }[];
  reservationHistorial: {
    start: string;
    end: string;
    checkin: string;
    checkout: string;
    paymentStatus: string;
  }[];
};

export const TouristAccomodations: FC<Reservation> = (reservation) => {
  return (
    <>
      <div className='flex flex-col items-center lg:flex-row lg:justify-between lg:items-end mx-8 mb-24 border-b-[1px]'>
        <p className=' text-black900/[.7] mt-10 text-2xl text-center md:text-left md:text-3xl lg:mt-16 lg:text-4xl'>
          Mis reservas actuales
        </p>

        <div className='relative my-6 lg:mb-3'>
          <AiOutlineCheckCircle className='w-5 md:h-5 text-white absolute top-1/2 -translate-y-1/2 right-5 md:right-5 lg:right-7' />
          <Link
            href={`/private/tourist/reservationHistorial/${reservation.id}`}
            className='bg-p600 hover:bg-p800 text-center text-[13px] md:text-sm lg:text-base py-2 px-16 w-auto text-white'
          >
            Historial de reservas
          </Link>
        </div>
      </div>
      {reservation ? (
        <div className='grid grid-col-1 gap-y-8 md:grid-cols-2 lg:grid-cols-3 mb-12'>
          {reservation.currentsReservations.map((currentReservation, index) => (
            <div
              key={index}
              className='justify-self-center h-fit rounded-xl border-[1px] border-p600 px-8 py-8 bg-gray300/[.14] w-auto'
            >
              <div className='space-y-4'>
                <p className='text-xs md:text-sm lg:text-lg'>
                  <span className='font-semibold'>Fecha de entrada: </span>
                  {currentReservation.start}
                </p>
                <p className='text-xs md:text-sm lg:text-lg'>
                  <span className='font-semibold'>Fecha de salida: </span>
                  {currentReservation.end}
                </p>
                <p className='text-xs md:text-sm lg:text-lg'>
                  <span className='font-semibold'>Hora de entrada: </span>
                  {currentReservation.checkin}
                </p>
                <p className='text-xs md:text-sm lg:text-lg'>
                  <span className='font-semibold'>Hora de salida: </span>
                  {currentReservation.checkout}
                </p>
                <p className='text-xs md:text-sm lg:text-lg'>
                  <span className='font-semibold'>Estado de pago: </span>
                  {currentReservation.paymentStatus}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className='flex justify-center items-center mt-16'>
          <div className='flex flex-col justify-center items-center space-y-8 border-[1px] border-dashed h-[266px] w-[717px]'>
            <p className=' text-black900/[.7] lg:text-3xl'>
              ¡Aún no tienes reservas!
            </p>
          </div>
        </div>
      )}
    </>
  );
};
