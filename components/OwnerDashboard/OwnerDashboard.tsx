/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useState } from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import Image from 'next/legacy/image';
import Link from 'next/link';
import { Accomodations } from '@/types';

export const OwnerDashboard: FC<{ data: Accomodations[] }> = ({ data }) => {
  const [error, setError] = useState('');

  return (
    <div className='px-8 space-y-12 mb-24'>
      <p className=' text-black900/[.7] border-b-[1px] mt-10 text-2xl text-center md:text-left md:text-3xl lg:mt-16 lg:text-4xl'>
        Mis Alojamientos
      </p>

      {data.length > 0 ? (
        <div className='grid gap-y-10 md:grid-cols-2 md:gap-y-8 lg:grid-cols-3 '>
          {data.map((item) => (
            <div
              className='rounded-xl space-y-4 justify-self-center border-[1px] border-p600 px-5 py-5 bg-gray300/[.14] w-[300px] md:w-[330px]'
              key={String(item.userId)}
            >
              <figure className='text-center'>
                <Image
                  src={item.image}
                  alt={item.name}
                  height={176}
                  width={267}
                  priority
                  className='rounded-[20px]'
                />
              </figure>

              <div className='space-y-2'>
                <p className='text-lg md:text-xl'>{item.name}</p>
                <p className='text-xs md:text-sm'>{item.description.es}</p>
              </div>

              <div className='flex justify-center items-center relative'>
                <AiOutlineCheckCircle className='w-5 md:h-5 text-p600 absolute top-1/2 -translate-y-1/2 right-5 md:right-12 lg:right-10' />
                <Link
                  href='/private/reservation'
                  passHref
                  className='text-center text-p600 hover:bg-gray300 border-[1px] border-p600 rounded-md text-[13px] md:text-sm lg:text-base py-2 px-4 w-full'
                >
                  Ver detalles
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className='flex justify-center items-center'>
          <div className='flex flex-col justify-center items-center space-y-8 border-[1px] border-dashed h-[266px] w-[717px]'>
            <p className=' text-black900/[.7] lg:text-3xl'>
              ¡Aún no tienes alojamientos!
            </p>

            <div className='relative'>
              <AiOutlineCheckCircle className='w-5 h-5 absolute top-1/2 -translate-y-1/2 right-3 text-white' />
              <button
                id='toggle'
                className='bg-p600 hover:bg-p800 py-2 px-4 w-[250px] text-left text-white justify-self-center self-center'
              >
                Crear un alojamiento
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
