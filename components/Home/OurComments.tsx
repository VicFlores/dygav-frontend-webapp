import React from 'react';
import { OurCommentsCard } from '..';

export const OurComments = () => {
  return (
    <section className='w-full h-auto grid mt-[40px] mb-[40px]'>
      <div className='self-center justify-self-center'>
        <p className='text-[20px] lg:text-[34px] md:text-[28px] text-center  text-black700'>
          LO QUE DICEN DE NOSOTROS
        </p>
        <p className='text-[18px] lg:text-[31px] md:text-[26px] text-center text-black900 pt-1'>
          Las experiencias de nuestros propietarios
        </p>
      </div>

      <OurCommentsCard />
    </section>
  );
};
