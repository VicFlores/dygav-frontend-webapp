import React from 'react';
import { AboutUsCard } from '..';

export const AboutUs = () => {
  return (
    <section className='w-full h-auto grid mt-[90px]'>
      <div className='self-center justify-self-center'>
        <p className='lg:text-[34px] md:text-[28px] text-center  text-black700'>
          DESCUBRE QUIENES SOMOS
        </p>
        <p className='lg:text-[31px] md:text-[26px] text-center text-black900 pt-1'>
          Sobre nosotros
        </p>
      </div>

      <AboutUsCard />

      <div className='grid items-center justify-center pb-10 pt-10 gap-8'>
        <button
          id='toggle'
          className='bg-p600 text-white w-[402px] h-10 self-center justify-self-center'
        >
          QUIERO SABER MÁS
        </button>

        <p className='text-base text-center text-black900 pt-1'>
          &quot;Nuestro objetivo es optimizar tus ingresos y proteger tu
          inversión, <br /> mientras te brindamos tranquilidad y satisfacción en
          cada paso <br /> del camino&quot;
        </p>
      </div>
    </section>
  );
};
