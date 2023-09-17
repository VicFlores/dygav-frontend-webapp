import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { ReservationAvaibook } from '@/types';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import Link from 'next/link';

export const OwnerAccomodationReservationDetails: FC<{ id: string }> = ({
  id,
}) => {
  const [accomodationByReservation, setAccomodationByReservation] = useState<
    ReservationAvaibook[]
  >([]);

  useEffect(() => {
    const accomodationByUnitId = async () => {
      const res = await axios.get(
        'https://api.avaibook.biz/api/owner/bookings/',
        {
          headers: {
            'Content-Type': 'application/json',
            'X-AUTH-TOKEN':
              '7fd52cc3b7e215ac8e5173cd1a0d176eabe0ced50fdf1dd346676fd36d051920',
          },
        }
      );

      setAccomodationByReservation(
        res.data.filter((item: any) => item.accommodationId === Number(id))
      );
    };

    accomodationByUnitId();
  }, [id]);

  console.log(accomodationByReservation);

  return (
    <div className='px-8 space-y-12 mb-24'>
      <div className='flex flex-col md:flex-row justify-center items-center md:justify-between md:items-end border-b-[1px]'>
        <p className=' text-black900/[.7]  mt-10 text-2xl text-center md:text-left md:text-3xl lg:mt-16 lg:text-4xl'>
          Reservaciones en mi alojamiento
        </p>
      </div>

      {accomodationByReservation.length > 0 ? (
        <div className='grid gap-y-10 md:grid-cols-2 md:gap-y-8 lg:grid-cols-3'>
          {accomodationByReservation.map((item) => (
            <div
              key={item.id}
              className='text-center h-fit rounded-xl space-y-4 justify-self-center border-[1px] border-p600 px-5 py-5 bg-gray300/[.14] w-[280px] md:w-[300px]'
            >
              <div className='space-y-2'>
                <p className='text-base md:text-lg font-semibold'>
                  Nombre del alojamiento:
                </p>
                <p className='text-sm md:text-base'>{item.accommodationName}</p>

                <p className='text-base md:text-lg font-semibold'>
                  Periodo de reserva:
                </p>

                {item.occupiedPeriod && item.occupiedPeriod ? (
                  <p className='text-sm md:text-base'>
                    {item.occupiedPeriod.startDate.toString()} /{' '}
                    {item.occupiedPeriod.endDate.toString()}{' '}
                  </p>
                ) : (
                  <p className='text-sm md:text-base'>
                    No asignado debido a su cancelacion
                  </p>
                )}

                <p className='text-base md:text-lg font-semibold'>Estado:</p>
                <p className='text-sm md:text-base'>{item.status}</p>

                {item.status !== 'CANCELLED' ? (
                  <>
                    <p className='text-base md:text-lg font-semibold'>
                      Link de pago:
                    </p>
                    <div className='flex justify-center items-center relative'>
                      <AiOutlineCheckCircle className='w-5 md:h-5 text-p600 absolute top-1/2 -translate-y-1/2 right-5 md:right-12 lg:right-10' />
                      <Link
                        href={item.paymentUrl}
                        target='_blank'
                        passHref
                        className='text-center text-p600 hover:bg-gray300 border-[1px] border-p600 rounded-md text-[13px] md:text-sm lg:text-base py-2 px-4 w-full'
                      >
                        Ver link
                      </Link>
                    </div>
                  </>
                ) : (
                  <>
                    <p className='text-base md:text-lg font-semibold'>
                      Mas informacion:
                    </p>
                    <div className='flex justify-center items-center relative'>
                      <AiOutlineCheckCircle className='w-5 md:h-5 text-p600 absolute top-1/2 -translate-y-1/2 right-5 md:right-12 lg:right-10' />
                      <Link
                        href={item.paymentUrl}
                        target='_blank'
                        passHref
                        className='text-center text-p600 hover:bg-gray300 border-[1px] border-p600 rounded-md text-[13px] md:text-sm lg:text-base py-2 px-4 w-full'
                      >
                        Ver link
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
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
    </div>
  );
};
