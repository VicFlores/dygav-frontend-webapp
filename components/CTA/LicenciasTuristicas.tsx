import Image from 'next/legacy/image';
import Link from 'next/link';
import React from 'react';

export const LicenciasTuristicas = () => {
  return (
    <div className='flex justify-center items-center mt-16 mb-10'>
      <div className='flex flex-col md:flex-row justify-center items-center bg-gray300/40 border border-p600 rounded-xl p-10 lg:px-32 md:py-5'>
        <figure className='h-40 w-40 md:h-44 md:w-44 lg:h-60 lg:w-60 relative m-0'>
          <Image
            src={
              'https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649292/Dygav%20Images/Icons/undraw_certification_re_ifll_a0xzch_rzbevy.svg'
            }
            alt={'Map Logo'}
            layout='fill'
            className='rounded-full'
          />
        </figure>

        <div className='space-y-4 md:space-y-2 text-center md:text-start'>
          <h3 className='text-p600 uppercase text-sm md:text-lg font-semibold'>
            Ahorra tiempo
          </h3>
          <h3 className='text-sm md:text-lg font-semibold'>
            Gestionamos la licencia turistica <br /> para tu alquiler vacacional
          </h3>
          <button className='py-2 px-3 text-white bg-p600 uppercase'>
            <Link href={'#formulario'}>¿Te ayudamos?</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
