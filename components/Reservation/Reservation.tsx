import { TReservation } from '@/types';
import axios from 'axios';
import { FC, useEffect, useState } from 'react';

export const Reservation: FC<{ id: string }> = ({ id }) => {
  const [reservationInfo, setReservationInfo] = useState<TReservation>();

  useEffect(() => {
    const accomodationByUnitId = async () => {
      const res = await axios.get(
        `https://api.avaibook.biz/api/owner/bookings/${id}/`,
        {
          headers: {
            'Content-Type': 'application/json',
            'X-AUTH-TOKEN':
              '7fd52cc3b7e215ac8e5173cd1a0d176eabe0ced50fdf1dd346676fd36d051920',
          },
        }
      );

      setReservationInfo(res.data);
    };

    accomodationByUnitId();
  }, [id]);

  console.log(reservationInfo);

  return (
    <div className='px-8 space-y-12 mb-24'>
      <div className='flex flex-col md:flex-row justify-center items-center md:justify-between md:items-end border-b-[1px]'>
        <p className=' text-black900/[.7]  mt-10 text-2xl text-center md:text-left md:text-3xl lg:mt-16 lg:text-4xl'>
          Detalles de reservacion
        </p>
      </div>

      {reservationInfo ? (
        <div className='flex justify-center items-center'>
          <div className='text-center h-fit rounded-xl space-y-4  border-[1px] border-p600 px-5 py-5 bg-gray300/[.14] w-auto'>
            <div className='grid grid-cols-1 justify-center items-center md:grid-cols-3 gap-4'>
              <span>
                <p className='text-base md:text-lg font-semibold'>
                  Nombre del alojamiento:
                </p>
                <p className='text-sm md:text-base'>
                  {reservationInfo.accommodationName}
                </p>
              </span>

              <span>
                <p className='text-base md:text-lg font-semibold'>
                  Plataforma de reserva:
                </p>
                <p className='text-sm md:text-base'>{reservationInfo.origin}</p>
              </span>

              <span>
                <p className='text-base md:text-lg font-semibold'>Huespedes:</p>
                <p className='text-sm md:text-base'>
                  {reservationInfo.numberOfguests} personas
                </p>
              </span>

              <span>
                <p className='text-base md:text-lg font-semibold'>
                  Dia de entrada - Dia de salida:
                </p>
                <p className='text-sm md:text-base'>
                  {reservationInfo.checkInDate.toString()} -{' '}
                  {reservationInfo.checkOutDate.toString()}
                </p>
              </span>

              <span>
                <p className='text-base md:text-lg font-semibold'>
                  Hora de entrada - Hora de salida
                </p>
                <p className='text-sm md:text-base'>
                  {reservationInfo.checkinTime} - {reservationInfo.checkoutTime}
                </p>
              </span>

              <span>
                <p className='text-base md:text-lg font-semibold'>
                  Comision de plataforma vacacional:
                </p>
                <p className='text-sm md:text-base'>
                  ${reservationInfo.partnerFee}
                </p>
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
                <p className='text-base md:text-lg font-semibold'>
                  Correo electronico del viajero:
                </p>
                <p className='text-sm md:text-base'>
                  {reservationInfo.travellerEmail}
                </p>
              </span>

              <span>
                <p className='text-base md:text-lg font-semibold'>
                  Telefono del viajero:
                </p>
                <p className='text-sm md:text-base'>
                  {reservationInfo.defaultLeaderPhone}
                </p>
              </span>

              <span>
                <p className='text-base md:text-lg font-semibold'>
                  Primer pago:
                </p>
                <p className='text-sm md:text-base'>
                  ${reservationInfo.advance}
                </p>
              </span>

              <span>
                <p className='text-base md:text-lg font-semibold'>
                  Pago restante:
                </p>
                <p className='text-sm md:text-base'>
                  ${reservationInfo.secondPayment}
                </p>
              </span>

              <span>
                <p className='text-base md:text-lg font-semibold'>
                  Total a pagar:
                </p>
                <p className='text-sm md:text-base'>
                  ${reservationInfo.totalAmount}
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
