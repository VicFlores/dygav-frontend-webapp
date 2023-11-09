import React from 'react';
import { AboutUsCard, AlquilerVacacional } from '../';
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

      <AlquilerVacacional />
    </section>
  );
};
