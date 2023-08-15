import React from 'react';
import { OurCommentsCard } from '..';

export const OurComments = () => {
  return (
    <section className='w-full h-auto grid mt-[40px] mb-[40px]'>
      <div className='self-center justify-self-center'>
        <p className='text-[34px] text-center  text-black700'>
          LO QUE DICEN DE NOSOTROS
        </p>
        <p className='text-[31.25px] text-center text-black900 pt-1'>
          Las experiencias de nuestros propietarios
        </p>
      </div>

      <OurCommentsCard />
    </section>
  );
};
