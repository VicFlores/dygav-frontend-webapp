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
import { pirineosAragonImages } from '@/utils/static/licenseImages';
import { OwnersIcons } from '../Owners/OwnersIcons';
import Image from 'next/legacy/image';

const images = [
  {
    src: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/C_61_uuqgip-scaled.jpg',
    alt: 'Licencias turísticas: Pirineo Aragonés',
  },
];

export const PirineoAragonesInfo = () => {
  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h1 className='text-center text-2xl md:text-3xl pb-4 mb-6 font-semibold border-b-4 border-b-p600 w-auto md:px-10'>
        Licencias Turísticas en el Pirineo Aragonés
      </h1>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        El Pirineo Aragonés, con su rica diversidad de paisajes, desde las
        impresionantes cimas nevadas hasta los valles verdes y profundos, ofrece
        un marco incomparable para el turismo de naturaleza, aventura y esquí.
        Abarcando destinos clave como Formigal, Panticosa, Sabiñánigo y Jaca,
        este territorio se ha convertido en uno de los puntos más atractivos
        para los inversores en el sector turístico. La tramitación de{' '}
        <strong>
          una licencia turística en esta región es necesaria para operar en el
          mercado del alquiler vacacional
        </strong>{' '}
        garantizando una oferta de alojamiento de calidad que cumpla con todos
        los requisitos legales y expectativas de los visitantes.
      </p>

      <CityImages images={images} />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Servicio de Tramitación de Licencias Turísticas
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4 mb-10'>
        <strong className='text-p600'>DYGAV</strong>{' '}
        <strong>
          ofrece un servicio completo de tramitación de licencias turísticas en
          el Pirineo Aragonés
        </strong>
        , facilitando a los propietarios la entrada en este lucrativo mercado.
        Desde el encanto de Formigal hasta Jaca, pasando por Sabiñánigo, nuestro
        conocimiento local y experiencia garantizan una tramitación eficiente y
        conforme a la normativa vigente.
      </p>

      <Llamanos />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Expertos en Licencias Turísticas
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Nos especializamos en navegar por el complejo entramado normativo
        establecido por el Decreto 1/2023 del Gobierno de Aragón, asegurando que
        cada vivienda no solo cumpla con los estándares de habitabilidad,
        seguridad y accesibilidad requeridos, sino que también maximice su
        potencial de atractivo para los visitantes.{' '}
        <strong>
          Entender y aplicar correctamente estas regulaciones es fundamental
          para el éxito de tu inversión turística
        </strong>
        .
      </p>

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
        Proceso de Obtención de Licencias Turísticas en el Pirineo Aragonés
      </h2>

      <div className='text-justify lg:text-start text-sm md:text-lg pt-4 space-y-4'>
        <p>
          Nuestro equipo en <strong className='text-p600'>DYGAV</strong> guía a
          los propietarios a través de cada paso del proceso de obtención de
          licencias turísticas, desde la preparación de la documentación
          necesaria hasta la inscripción y registro final en el Registro de
          Turismo de Aragón. Ofrecemos soporte en la{' '}
          <strong>
            elaboración de la declaración responsable, la inspección y
            verificación de la propiedad, y la gestión de cualquier aspecto
            relacionado con el cumplimiento de las normas locales y regionales
          </strong>
          .
        </p>

        <p>
          Para mayor comodidad para ti,{' '}
          <strong>
            hemos preparado unas guías con la información que necesitas
          </strong>{' '}
          de cada municipio para poder conseguir tu licencia turística:
        </p>
      </div>

      <div className='w-full h-auto grid md:grid-cols-2 lg:grid-cols-3 mt-10 md:mt-10 px-6 md:px-2 lg:px-0 gap-x-4 mb-14'>
        <div className='md:self-center md:justify-self-center divide-y-4 divide-p600 text-center md:text-start'>
          <h2 className='text-2xl lg:text-[31px] md:text-[26px]'>
            GUÍAS ACTUALIZADAS <br /> POR MUNICIPIOS
          </h2>

          <h3 className='text-center md:text-start text-2xl  md:text-3xl font-semibold pt-3'>
            ¿Cómo obtener una licencia turística en el Pirineo Aragonés?
          </h3>
        </div>

        <CityCards images={pirineosAragonImages} />
      </div>

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Comprometidos con Tu Éxito
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        La gestión y el mantenimiento de la vivienda turística son aspectos
        clave que abordamos con el máximo cuidado, enfocándonos en mantener y
        mejorar la calidad y la satisfacción del huésped. Nuestro objetivo es
        asegurar{' '}
        <strong>
          que cada propiedad gestionada por nosotros cumpla con los requisitos
          legales
        </strong>
        .
      </p>

      <OwnersIcons image='https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_happy_announcement_re_tsm0.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Tu Aliado en el Mercado Turístico del Pirineo Aragonés
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Con <strong className='text-p600'>DYGAV</strong>, te unes a un equipo de
        profesionales dedicados a maximizar el potencial de tu propiedad
        turística en el Pirineo Aragonés. Desde la tramitación de licencias
        hasta la {''}
        <Link
          href={'/gestion-viviendas-turisticas/pirineo-aragones'}
          className='text-p600 underline'
        >
          gestión integral de tu vivienda turística en el Pirineo Aragonés
        </Link>{' '}
        el mantenimiento, promoción y optimización de tu inversión, estamos aquí
        para ayudarte a navegar con éxito en el dinámico mercado turístico de la
        región.{' '}
        <strong>
          Contáctanos para empezar a transformar tu propiedad en un exitoso
          alojamiento turístico
        </strong>
        .
      </p>

      <OwnersIcons image='https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_progress_data_re_rv4p.svg' />

      <HelpYouForm />
    </section>
  );
};
