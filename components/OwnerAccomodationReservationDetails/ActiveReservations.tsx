import Link from 'next/link';
import React, { FC } from 'react';
import moment from 'moment';
import { AiOutlineCheckCircle } from 'react-icons/ai';

interface IBookingId {
  id: string;
  travellerName: string;
  accommodationName: string;
  status: string;
  occupiedPeriod: {
    startDate: string;
    endDate: string;
  };
}

export const ActiveReservations: FC<{
  bookings: IBookingId[];
  status: string;
}> = ({ bookings, status }) => {
  bookings.sort((a, b) => {
    if (!a.occupiedPeriod || !b.occupiedPeriod) {
      return 0;
    }
    return (
      new Date(a.occupiedPeriod.startDate).getTime() -
      new Date(b.occupiedPeriod.startDate).getTime()
    );
  });

  return (
    <>
      {bookings.length > 0 ? (
        <div className='grid gap-y-10 md:grid-cols-2 md:gap-y-8 lg:grid-cols-3'>
          {status === 'CONFIRMED'
            ? bookings.map((booking) =>
                booking.status === 'CONFIRMED' ? (
                  <div
                    key={booking.id}
                    className='text-center h-fit rounded-xl space-y-4 justify-self-center border-[1px] border-p600 px-5 py-5 bg-gray300/[.14] w-[280px] md:w-[300px]'
                  >
                    <div className='space-y-2'>
                      <p className='text-base md:text-lg font-semibold'>
                        Nombre del alojamiento:
                      </p>
                      <p className='text-sm md:text-base'>
                        {booking.accommodationName}
                      </p>

                      <p className='text-base md:text-lg font-semibold'>
                        Periodo de reserva:
                      </p>

                      {booking.occupiedPeriod && booking.occupiedPeriod ? (
                        <p className='text-sm md:text-base'>
                          {(() => {
                            let startDate = moment(
                              booking.occupiedPeriod.startDate
                            );
                            let endDate = moment(
                              booking.occupiedPeriod.endDate
                            ).add(1, 'days');

                            return `${startDate.format(
                              'DD/MM/YYYY'
                            )} - ${endDate.format('DD/MM/YYYY')}`;
                          })()}
                        </p>
                      ) : (
                        <p className='text-sm md:text-base'>
                          No asignado debido a su cancelacion
                        </p>
                      )}

                      <p className='text-base md:text-lg font-semibold'>
                        Estado:
                      </p>

                      <p className='text-sm md:text-base'>Confirmado</p>
                      <p className='text-base md:text-lg font-semibold'>
                        Mas informacion:
                      </p>
                      <div className='flex justify-center bookings-center relative'>
                        <AiOutlineCheckCircle className='w-5 md:h-5 text-p600 absolute top-1/2 -translate-y-1/2 right-5 md:right-12 lg:right-12' />
                        <Link
                          href={`/private/owner/reservation/${booking.id}`}
                          passHref
                          className='text-center text-p600 hover:bg-gray300 border-[1px] border-p600 rounded-md text-[13px] md:text-sm lg:text-base py-2 px-4 w-full'
                        >
                          Ver detalles
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : booking.status === 'PENDING_PAYMENT' ? (
                  <div
                    key={booking.id}
                    className='text-center h-fit rounded-xl space-y-4 justify-self-center border-[1px] border-p600 px-5 py-5 bg-gray300/[.14] w-[280px] md:w-[300px]'
                  >
                    <div className='space-y-2'>
                      <p className='text-base md:text-lg font-semibold'>
                        Nombre del alojamiento:
                      </p>
                      <p className='text-sm md:text-base'>
                        {booking.accommodationName}
                      </p>

                      <p className='text-base md:text-lg font-semibold'>
                        Periodo de reserva:
                      </p>

                      {booking.occupiedPeriod && booking.occupiedPeriod ? (
                        <p className='text-sm md:text-base'>
                          {moment(booking.occupiedPeriod.startDate).format(
                            'DD/MM/YYYY'
                          )}{' '}
                          -{' '}
                          {moment(booking.occupiedPeriod.endDate)
                            .add(1, 'days')
                            .format('DD/MM/YYYY')}{' '}
                        </p>
                      ) : (
                        <p className='text-sm md:text-base'>
                          No asignado debido a su cancelacion
                        </p>
                      )}

                      <p className='text-base md:text-lg font-semibold'>
                        Estado:
                      </p>

                      <p className='text-sm md:text-base'>Pago pendiente</p>
                      <p className='text-base md:text-lg font-semibold'>
                        Mas informacion:
                      </p>
                      <p className='text-sm md:text-base'>
                        Esperando pago, para ver detalles
                      </p>
                    </div>
                  </div>
                ) : null
              )
            : null}
        </div>
      ) : (
        <div className='flex justify-center items-center'>
          <div className='flex justify-center items-center px-4 border-[1px] border-dashed h-[266px] w-[717px]'>
            <p className=' text-black900/[.7] lg:text-3xl text-center'>
              ¡Aún no tienes reservaciones en tu alojamiento!
            </p>
          </div>
        </div>
      )}
    </>
  );
};
