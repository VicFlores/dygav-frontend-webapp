import React from 'react';
import { AboutUsCard } from '../';
import Link from 'next/link';

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

      <div className='grid items-center justify-center pb-10 pt-10 gap-8'>
        <Link
          href='/owners'
          className='text-center bg-p600 text-white hover:bg-p800 border-[1px] border-p600 rounded-md text-[13px] md:text-sm lg:text-base py-2 px-10 self-center justify-self-center'
        >
          QUIERO SABER MÁS
        </Link>

        <p className='text-xs md:text-base text-center text-black900 pt-1 whitespace-pre-line'>
          {`"Nuestro objetivo es optimizar tus ingresos y proteger tu inversión, 
          mientras te brindamos tranquilidad y satisfacción en cada paso del camino"`}
        </p>
      </div>
    </section>
  );
};
