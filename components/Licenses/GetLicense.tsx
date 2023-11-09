import Image from 'next/legacy/image';
import Link from 'next/link';
import React from 'react';
import { BiPhoneCall } from 'react-icons/bi';
import { Llamanos } from '..';

export const GetLicense = () => {
  return (
    <section className='mt-16 md:mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h2 className='text-center text-2xl md:text-3xl mt-16 pb-4 font-semibold border-b-4 border-b-p600 w-[85%] md:w-3/4 lg:w-4/5'>
        ¡Tú Licencia Turística Más Cerca de lo que Crees!
      </h2>

      <div className='w-auto pt-5  text-black900 pr-3 pl-3 text-xs md:text-sm lg:text-lg mb-14'>
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

      <Llamanos paddingX='px-36' />
    </section>
  );
};
