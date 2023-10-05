import React, { FC } from 'react';

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

export const TouristReservationsHistorial: FC<Reservation> = (reservation) => {
  return (
    <>
      <div className='mx-8 mb-24 border-b-[1px]'>
        <p className=' text-black900/[.7] mt-10 text-2xl text-center md:text-left md:text-3xl lg:mt-16 lg:text-4xl'>
          Mis historial de reservas
        </p>
      </div>
      {reservation ? (
        <div className='grid grid-col-1 gap-y-8 md:grid-cols-2 lg:grid-cols-3 mb-12'>
          {reservation.reservationHistorial.map(
            (historialReservation, index) => (
              <div
                key={index}
                className='justify-self-center h-fit rounded-xl border-[1px] border-p600 px-8 py-8 bg-gray300/[.14] w-auto'
              >
                <div className='space-y-4'>
                  <p className='text-xs md:text-sm lg:text-lg'>
                    <span className='font-semibold'>Fecha de entrada: </span>
                    {historialReservation.start}
                  </p>
                  <p className='text-xs md:text-sm lg:text-lg'>
                    <span className='font-semibold'>Fecha de salida: </span>
                    {historialReservation.end}
                  </p>
                  <p className='text-xs md:text-sm lg:text-lg'>
                    <span className='font-semibold'>Hora de entrada: </span>
                    {historialReservation.checkin}
                  </p>
                  <p className='text-xs md:text-sm lg:text-lg'>
                    <span className='font-semibold'>Hora de salida: </span>
                    {historialReservation.checkout}
                  </p>
                  <p className='text-xs md:text-sm lg:text-lg'>
                    <span className='font-semibold'>Estado de pago: </span>
                    {historialReservation.paymentStatus}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      ) : (
        <div className='flex justify-center items-center mt-16'>
          <div className='flex flex-col justify-center items-center space-y-8 border-[1px] border-dashed h-[266px] w-[717px]'>
            <p className=' text-black900/[.7] lg:text-3xl'>
              ¡Aún no tienes hisotrial de reservas!
            </p>
          </div>
        </div>
      )}
    </>
  );
};
