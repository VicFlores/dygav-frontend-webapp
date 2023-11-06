import React from 'react';
import { AboutUsCard } from '../';
import Link from 'next/link';
import Image from 'next/legacy/image';

export const AboutUs = () => {
  return (
    <section className='w-full h-auto grid mt-[90px]'>
      <div className='px-10 divide-y-4 divide-p600'>
        <p className='text-[20px] lg:text-[34px] md:text-[28px] text-center text-black700'>
          DESCUBRE QUIENES SOMOS
        </p>
        <p className='text-[18px] lg:text-[31px] md:text-[26px] text-center text-black900 pt-1'>
          Sobre nosotros
        </p>
      </div>

      <AboutUsCard />

      <div className='flex flex-col md:flex-row justify-center items-center mt-16'>
        <figure className='h-44 w-44 md:h-60 md:w-60 lg:h-72 lg:w-72 relative m-0'>
          <Image
            src={
              'https://res.cloudinary.com/vicflores11/image/upload/v1697733791/Dygav/s9cmodybn3ahynipcggt.svg'
            }
            alt={'Map Logo'}
            layout='fill'
            className='rounded-full'
          />
        </figure>

        <div className='space-y-4 text-sm md:text-lg font-semibold text-center md:text-start'>
          <h3 className='text-p600 uppercase'>Nos encargamos nosotros</h3>
          <h3>Gestionamos integralmente tu alquiler vacacional</h3>
          <button className='py-2 px-3 text-white bg-p600 uppercase font-normal'>
            <Link href={'/licencias-turisticas'}>Más información</Link>
          </button>
        </div>
      </div>
    </section>
  );
};
