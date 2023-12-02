import Image from 'next/legacy/image';
import React from 'react';

export const PeachOwners = () => {
  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32 flex flex-col'>
      <h2 className='text-center text-2xl lg:text-3xl text-black700 font-semibold pb-4'>
        Especialistas en Gestión de Viviendas de Alquiler Vacacional
      </h2>

      <div className='w-auto text-xs md:text-sm lg:text-lg border-t-4 border-t-p600 pt-5 space-y-4 text-black900 pr-3 pl-3'>
        <p>
          ¿Tienes una casa de vacaciones o un apartamento en una ciudad
          turística que está vacío la mayor parte del año? Ahora puedes obtener
          un rendimiento económico cuando no la usas, de forma fácil y segura.
        </p>

        <p>
          ¡Deja que tu casa de vacaciones trabaje para ti! Rentabiliza tu
          propiedad mientras no la utilizas y{' '}
          <strong>
            genera ingresos adicionales.¡Es hora de sacarle mayor partido
            económico!
          </strong>
        </p>
      </div>

      <figure className='relative w-52 h-52 md:w-96 md:h-96 self-center'>
        <Image
          src={
            'https://res.cloudinary.com/vicflores11/image/upload/v1701529872/Dygav/undraw_sweet_home_dkhr_b0qc3r.svg'
          }
          alt=''
          layout='fill'
        />
      </figure>
    </section>
  );
};
