'use client';

import { TReservation } from '@/types';
import axios from 'axios';
import { FC, useEffect, useState } from 'react';

export const ReservationDetails: FC<{ id: string }> = ({ id }) => {
  const [reservationInfo, setReservationInfo] = useState<TReservation>();

  useEffect(() => {
    const accomodationByUnitId = async () => {
      const res = await axios.get(
        `https://api.avaibook.com/api/owner/bookings/${id}/`,
        {
          headers: {
            'Content-Type': 'application/json',
            'X-AUTH-TOKEN': process.env.AVAIBOOK_API_TOKEN,
          },
        }
      );

      setReservationInfo(res.data);
    };

    accomodationByUnitId();
  }, [id]);

  return (
    <div className='px-8 space-y-12 mb-24'>
      <div className='flex flex-col md:flex-row justify-center items-center md:justify-between md:items-end border-b-[1px]'>
        <p className=' text-black900/[.7]  mt-10 text-2xl text-center md:text-left md:text-3xl lg:mt-16 lg:text-4xl'>
          Detalles de la reserva
        </p>
      </div>

      {reservationInfo ? (
        <div className='flex justify-center items-center'>
          <div className='text-center h-fit rounded-xl space-y-4 border-[1px] border-p600 px-5 py-5 bg-gray300/[.14] w-auto'>
            <p className='text-base md:text-2xl font-semibold'>
              {reservationInfo.accommodationName}
            </p>

            <p className='text-base md:text-lg font-semibold'>Fechas:</p>
            <p className='text-sm md:text-base'>
              Check-In: {reservationInfo.checkInDate.toString()} - Check-Out:{' '}
              {''}
              {reservationInfo.checkOutDate.toString()}
            </p>

            <div className='grid grid-cols-1 justify-center items-center md:grid-cols-3 gap-4'>
              <span>
                <p className='text-base md:text-lg font-semibold'>
                  Plataforma de reserva:
                </p>
                <p className='text-sm md:text-base'>{reservationInfo.origin}</p>
              </span>

              <span>
                <p className='text-base md:text-lg font-semibold'>
                  Nombre del viajero:
                </p>
                <p className='text-sm md:text-base'>
                  {reservationInfo.travellerName}
                </p>
              </span>

              <span>
                <p className='text-base md:text-lg font-semibold'>Huéspedes:</p>
                <p className='text-sm md:text-base'>
                  {reservationInfo.numberOfguests} personas
                </p>
              </span>

              <span>
                <p className='text-base md:text-lg font-semibold'>Check-In</p>
                <p className='text-sm md:text-base font-semibold'>
                  {reservationInfo.checkinTime}
                </p>
              </span>
              <span>
                <p className='text-base md:text-lg font-semibold'>Check-Out</p>
                <p className='text-sm md:text-base font-semibold'>
                  {reservationInfo.checkoutTime}
                </p>
              </span>

              <span>
                <p className='text-base md:text-lg font-semibold'>
                  Total estancia:
                </p>
                <p className='text-sm md:text-base'>
                  €{reservationInfo.totalAmount}
                </p>
              </span>

              <span>
                <p className='text-base md:text-lg font-semibold'>Anticipo:</p>
                <p className='text-sm md:text-base'>
                  €{reservationInfo.advance}
                </p>
              </span>

              <span>
                <p className='text-base md:text-lg font-semibold'>
                  Resto a pagar:
                </p>
                <p className='text-sm md:text-base'>
                  €{reservationInfo.secondPayment}
                </p>
              </span>

              <span>
                <p className='text-base md:text-lg font-semibold'>
                  Comision de plataforma vacacional:
                </p>
                <p className='text-sm md:text-base'>
                  €{reservationInfo.partnerFee}
                </p>
              </span>

              <span>
                <p className='text-base md:text-lg font-semibold'>
                  Comision de DYGAV:
                </p>
                <p className='text-sm md:text-base'>
                  €{(reservationInfo.totalAmount * 0.15).toFixed(2)}
                </p>
              </span>
            </div>
          </div>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};
