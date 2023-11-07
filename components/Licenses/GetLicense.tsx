import Image from 'next/legacy/image';
import Link from 'next/link';
import React from 'react';
import { BiPhoneCall } from 'react-icons/bi';

export const GetLicense = () => {
  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32'>
      <p className='text-center text-2xl px-14 md:text-3xl text-black700 pb-4 font-semibold'>
        ¡Tú Licencia Turística Más Cerca de lo que Crees!
      </p>

      <div className='w-auto border-t-4 border-t-p600 pt-5  text-black900 pr-3 pl-3 text-xs md:text-sm lg:text-lg mb-14'>
        <p className='mb-4'>
          En DYGAV, estamos a tu lado en cada paso del camino hacia la obtención
          de la licencia turística para tu piso. Nos convertimos en tu aliado y
          guía, asegurándonos de que el proceso sea fluido y exitoso.
        </p>

        <p className='mb-4'>
          Desde el asesoramiento inicial hasta la presentación de la
          documentación necesaria, nos encargamos de todo el papeleo y daremos
          seguimiento constante a todos los trámites para que tú puedas
          concentrarte en lo más importante:
        </p>

        <Link href='/gestion-integral-apartamentos-turisticos' passHref>
          <span className='text-p600 pt-4'>
            Preparar tu alojamiento para recibir a tus huéspedes.
          </span>
        </Link>
      </div>

      <div className='flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-14'>
        <figure className='relative w-52 h-52 md:w-64 md:h-64'>
          <Image
            src={
              'https://res.cloudinary.com/vicflores11/image/upload/v1698162186/Dygav/undraw_personal_email_re_4lx7_c7oydo.svg'
            }
            alt='Contact Us Image'
            layout='fill'
          />
        </figure>

        <div className='flex-col space-y-4 md:justify-evenly items-center'>
          <p className='text-center text-2xl px-14 md:text-3xl text-black700'>
            ¡Llámanos!
          </p>

          <div className='relative'>
            <BiPhoneCall className='w-4 h-4 md:w-5 md:h-5 text-white absolute top-1/2 -translate-y-1/2 right-14 md:right-16 lg:right-12' />
            <a href='tel:+34614165736'>
              <button
                id='toggle'
                className='bg-p600 hover:bg-p800 text-center text-xs md:text-sm lg:text-base py-2 px-4 w-[220px] md:w-[240px] lg:w-[280px] text-white justify-self-center self-center'
              >
                +34 614 165 736
              </button>
            </a>
          </div>

          <div className='relative'>
            <BiPhoneCall className='w-4 h-4 md:w-5 md:h-5 text-white absolute top-1/2 -translate-y-1/2 right-14 md:right-16 lg:right-12' />
            <a href='tel:+34614214250'>
              <button
                id='toggle'
                className='bg-p600 hover:bg-p800 text-center text-xs md:text-sm lg:text-base py-2 px-4 w-[220px] md:w-[240px] lg:w-[280px] text-white justify-self-center self-center'
              >
                +34 614 214 250
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
