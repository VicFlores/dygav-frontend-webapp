import Link from 'next/link';
import React from 'react';
import {
  AlquilerVacacional,
  HelpYouForm,
  LicenciasTuristicas,
  Llamanos,
} from '..';
import { CityImages } from './CityImages';
import { LicencesIcons } from './LicencesIcons';
import { CityCards } from './CityCards';
import { costaBlancaImages } from '@/utils/static/licenseImages';
import { OwnersIcons } from '../Owners/OwnersIcons';
import Image from 'next/legacy/image';

const images = [
  {
    src: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/Copia_de_2_doz1la.png',
    alt: 'Licencias turísticas: Costa Blanca',
  },
];

export const CostaBlancaInfo = () => {
  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h1 className='text-center text-2xl md:text-3xl pb-4 mb-6 font-semibold border-b-4 border-b-p600 w-auto md:px-10'>
        Licencias Turísticas en el Costa Blanca
      </h1>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        La Costa Blanca, reconocida por sus kilómetros de playas doradas, climas
        soleados durante todo el año y una vibrante mezcla de cultura y ocio, se
        presenta como un destino turístico de primer orden en España. Este
        entorno privilegiado ofrece a los propietarios de viviendas la
        oportunidad de participar en el floreciente mercado de alquiler
        vacacional.{' '}
        <strong>
          La correcta gestión de licencias turísticas en la Costa Blanca es
          fundamental para asegurar que las propiedades no solo cumplan con la
          legislación vigente sino que también respondan a las altas
          expectativas de los visitantes
        </strong>
        .
      </p>

      <CityImages images={images} />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16 mb-10'>
        Servicio de Gestión de Licencias Turísticas
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        <strong className='text-p600'>DYGAV</strong> proporciona un servicio
        exhaustivo de gestión de licencias turísticas en la Costa Blanca,
        allanando el camino para que los propietarios puedan integrarse
        eficazmente en este mercado competitivo. Nuestra experiencia y
        conocimiento profundo de las regulaciones locales aseguran un proceso
        fluido y conforme a las normativas, permitiendo a las propiedades
        destacar en este destino turístico tan codiciado.
      </p>

      <Llamanos />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Expertos en Licencias Turísticas
      </h2>

      <div className='text-justify lg:text-start text-sm md:text-lg pt-4 space-y-4'>
        <p>
          Navegamos por el complejo marco normativo que, desde 2018, ha venido
          introduciendo restricciones y requisitos más estrictos para la
          obtención de licencias turísticas.{' '}
          <strong>
            Entender y adaptarse adecuadamente a estas regulaciones, que varían
            significativamente entre diferentes zonas
          </strong>{' '}
          de la Costa Blanca y la región de Murcia,
          <strong>
            {' '}
            es crucial para el éxito y la legalidad de tu inversión
          </strong>
          .
        </p>

        <p className='text-p600 underline'>
          <Link
            href={'https://dogv.gva.es/datos/2021/02/08/pdf/2021_999.pdf'}
            target='_blanck'
          >
            Ver normativa
          </Link>
        </p>
      </div>

      <figure className='relative w-52 h-52 md:w-72 md:h-72 self-center mt-6'>
        <Image
          src={
            'https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_certificate_re_yadi.svg'
          }
          alt='Dygav icon'
          layout='fill'
        />
      </figure>

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Proceso de Obtención de Licencias Turísticas en la Costa Blanca
      </h2>

      <div className='text-justify lg:text-start text-sm md:text-lg pt-4 space-y-4'>
        <p>
          El equipo de <strong className='text-p600'>DYGAV</strong>{' '}
          <strong>
            guía a los propietarios en cada etapa del proceso de obtención de la
            licencia turística
          </strong>
          , desde la preparación y presentación de la documentación necesaria
          hasta la inscripción definitiva en el registro turístico
          correspondiente. Nuestro soporte abarca la elaboración de la
          declaración responsable, verificación de la propiedad, y asesoramiento
          en el cumplimiento de las normas de habitabilidad, seguridad,
          accesibilidad, y calidad.
        </p>

        <p>
          Para tu comodidad,{' '}
          <strong>
            hemos desarrollado guías actualizadas que detallan la información
            necesaria para obtener tu licencia turística en la Costa Blanca
          </strong>
          .
        </p>
      </div>

      <div className='w-full h-auto grid md:grid-cols-2 lg:grid-cols-3 mt-10 md:mt-10 px-6 md:px-2 lg:px-0 gap-x-4 mb-14'>
        <div className='md:self-center md:justify-self-center divide-y-4 divide-p600 text-center md:text-start'>
          <h2 className='text-2xl lg:text-[31px] md:text-[26px]'>
            GUÍAS ACTUALIZADAS <br /> POR MUNICIPIOS
          </h2>

          <h3 className='text-center md:text-start text-2xl  md:text-3xl font-semibold pt-3'>
            ¿Cómo obtener una licencia turística en la Costa Blanca
          </h3>
        </div>

        <CityCards images={costaBlancaImages} />
      </div>

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Comprometidos con Tu Éxito
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        La gestión y el mantenimiento de la vivienda turística se llevan a cabo
        con la mayor atención al detalle, con el objetivo de mantener y elevar
        la calidad y satisfacción de los huéspedes. Nos esforzamos por asegurar
        que{' '}
        <strong>
          cada propiedad bajo nuestra gestión no solo cumpla con los estándares
          legales sino que también ofrezca experiencias vacacionales memorables
        </strong>
        .
      </p>

      <OwnersIcons image='https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_happy_announcement_re_tsm0.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Tu Aliado en el Mercado Turístico de la Costa Blanca
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Al elegir <strong className='text-p600'>DYGAV</strong>, te asocias con
        un equipo de profesionales dedicados a optimizar el rendimiento de tu
        vivienda turística en la Costa Blanca. Desde la tramitación de licencias
        hasta la {''}
        <Link
          href={'/gestion-viviendas-turisticas/costa-blanca'}
          className='text-p600 underline'
        >
          gestión integral de tu vivienda turística en la Costa Blanca
        </Link>{' '}
        , incluido el mantenimiento y la promoción, estamos comprometidos a
        ayudarte a prosperar en el dinámico mercado turístico de esta región.{' '}
        {''}
        <strong>
          Contáctanos para comenzar a transformar tu propiedad en un exitoso
          alojamiento turístico
        </strong>
        .
      </p>

      <OwnersIcons image='https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_progress_data_re_rv4p.svg' />

      <HelpYouForm />
    </section>
  );
};
