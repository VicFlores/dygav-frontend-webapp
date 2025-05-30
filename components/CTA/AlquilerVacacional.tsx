import useDictionary from '@/app/hooks/useDictionary';
import Image from 'next/legacy/image';
import Link from 'next/link';
import React from 'react';

export const AlquilerVacacional = () => {
  const dictionary = useDictionary('home');

  return (
    <div className='flex justify-center items-center pt-16 '>
      <div className='flex flex-col md:flex-row justify-center items-center bg-gray300/40 border border-p600 rounded-xl px-10 py-10 md:py-5'>
        <figure className='h-44 w-44 md:h-60 md:w-60 lg:h-72 lg:w-72 relative m-0'>
          <Image
            src={
              'https://multimedia.dygav.es/wp-content/uploads/2024/04/s9cmodybn3ahynipcggt.svg'
            }
            alt={'Map Logo'}
            layout='fill'
            className='rounded-full'
          />
        </figure>

        <div className='space-y-4 text-sm md:text-lg font-semibold text-center md:text-start '>
          <h3 className='text-p600 uppercase'>
            {dictionary.alquilerVacacional?.title}
          </h3>
          <h3>{dictionary.alquilerVacacional?.subtitle}</h3>
          <button className='py-2 px-3 text-white bg-p600 uppercase font-normal'>
            <Link href={'/gestion-integral-apartamentos-turisticos'}>
              {dictionary.alquilerVacacional?.button}
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
