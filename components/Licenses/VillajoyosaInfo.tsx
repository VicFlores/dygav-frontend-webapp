import Link from 'next/link';
import React from 'react';
import { AlquilerVacacional, HelpYouForm, LicenciasTuristicas } from '..';
import { CityImages } from './CityImages';
import { CityCardsFooter } from './CityCardsFooter';

const images = [
  {
    src: 'https://res.cloudinary.com/vicflores11/image/upload/v1701107925/Dygav/Villajoyosa/13_uy8c99.webp',
    alt: '',
  },
  {
    src: 'https://res.cloudinary.com/vicflores11/image/upload/v1701107745/Dygav/Villajoyosa/12_niq9fq.webp',
    alt: '',
  },
];

export const VillajoyosaInfo = () => {
  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h1 className='text-center text-2xl md:text-3xl pb-4 mb-6 font-semibold border-b-4 border-b-p600 w-auto md:px-10'>
        Licencias turísticas en Villajoyosa
      </h1>

      <div className='text-justify text-sm md:text-lg pt-4 space-y-4 mb-10'>
        <p>
          En el municipio de Villajoyosa, situado en la idílica Costa Blanca, el
          alquiler vacacional ha ido ganando popularidad, ofreciendo
          oportunidades interesantes tanto para residentes locales como para
          inversores. Con su rica historia, playas pintorescas y un ambiente
          acogedor, Villajoyosa atrae a numerosos visitantes cada año,{' '}
          <strong>
            creando una demanda considerable de alojamientos turísticos
          </strong>
          .
        </p>

        <p>
          Sin embargo, para capitalizar esta oportunidad y transformar una
          propiedad en un exitoso alquiler vacacional, es crucial entender y
          cumplir con las regulaciones locales. Al igual que en otras partes de
          la Comunidad Valenciana, en{' '}
          <strong>
            Villajoyosa es obligatorio contar con una licencia turística
          </strong>{' '}
          para garantizar que los alquileres vacacionales cumplan con los
          estándares de calidad y seguridad y operen dentro del marco legal. De
          acuerdo con los Decretos 92/2009, de 3 de julio, y 75/2015, de 15 de
          mayo, emitidos por el Consell de la Comunitat Valenciana, es un
          requisito fundamental que todas las propiedades destinadas al alquiler
          turístico estén debidamente acreditadas con una licencia turística. La
          ausencia de dicha licencia es considerada una infracción de las
          normativas de turismo y conlleva responsabilidades legales.
        </p>

        <p>
          Además, la posesión de una licencia turística{' '}
          <strong>
            es vital para publicitar y ofrecer la propiedad en plataformas
            digitales dedicadas al alquiler vacacional
          </strong>
          , como Airbnb, Booking y otras similares. Es obligatorio que cada
          anuncio de la propiedad incluya el número de registro proporcionado y
          la categoría específica de la vivienda.
        </p>
      </div>

      <AlquilerVacacional />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-40 mt-24'>
        ¿Quién regula la concesión de licencias turísticas para alquileres
        vacacionales en Villajoyosa?
      </h2>

      <p className='md:self-start text-sm md:text-lg md:px-20 mt-4'>
        La concesión de licencias turísticas para alquileres vacacionales en
        Villajoyosa se rige por las normativas establecidas por la Comunidad
        Valenciana y las disposiciones municipales específicas.{' '}
        <strong>
          El Ayuntamiento de Villajoyosa es la entidad final que otorga las
          licencias turísticas
        </strong>
        , asegurándose de que todas las propiedades cumplan con las normativas y
        los estándares locales. Este enfoque colaborativo entre las autoridades
        autonómicas y municipales asegura un desarrollo equilibrado y sostenible
        del turismo en la región.
      </p>

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        ¿Qué requisitos debe cumplir una vivienda de alquiler vacacional en
        Villajoyosa?
      </h2>

      <p className='md:self-start text-sm md:text-lg md:px-20 mt-4'>
        Para que una propiedad en Villajoyosa sea apta para el alquiler
        vacacional, debe cumplir con una serie de requisitos fundamentales:
      </p>

      <ul className='text-sm md:text-lg px-3 pt-4 list-disc pl-4 md:pl-32 space-y-4'>
        <li>
          <strong>Certificado de primera o segunda ocupación:</strong> Este
          documento acredita que la vivienda cumple con las normativas de
          habitabilidad y seguridad vigentes.
        </li>

        <li>
          <strong>Certificado de compatibilidad urbanística:</strong> Esencial
          para verificar que la vivienda se ajusta a las normativas urbanísticas
          de Villajoyosa.
        </li>

        <li>
          <strong>Certificado energético:</strong> Aunque no es obligatorio para
          la obtención de la licencia si lo es para operar en el mercado de
          alquiler vacacional.
        </li>

        <li>
          <strong>Seguro de responsabilidad civil:</strong> Proporciona
          protección tanto para el propietario como para los huéspedes en caso
          de incidentes y es necesario que cubra hasta 150.000€ y esté destinado
          a vivienda de uso turístico.
        </li>

        <li>
          <strong>Fotografías actualizadas de la vivienda:</strong> Necesarias
          para el proceso de solicitud y para mostrar el estado actual de la
          propiedad.
        </li>
      </ul>

      <p className='md:self-start text-sm md:text-lg md:px-20 mt-4'>
        Antes de solicitar la licencia, es importante verificar que la propiedad
        esté ubicada en una zona que permita el alquiler turístico, de acuerdo
        con el plan urbanístico de Villajoyosa.
      </p>

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-72 lg:px-10 mt-16'>
        Solicitud de Compatibilidad Urbanística
      </h2>

      <p className='md:self-start text-sm md:text-lg md:px-20 mt-4'>
        El primer paso es solicitar este certificado en el Ayuntamiento de
        Villajoyosa, utilizando el{' '}
        <span>
          <Link
            href={
              'https://www.villajoyosa.com/documentos/archivos/lavila_190720180.pdf'
            }
            className='underline text-p600'
            target='_blank'
          >
            formulario disponible en su sitio web
          </Link>
        </span>{' '}
        o en las oficinas municipales.
      </p>

      <CityImages images={images} />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-72 lg:px-10 mt-16'>
        Tramitación de Licencia Turística
      </h2>

      <p className='md:self-start text-sm md:text-lg md:px-20 mt-4'>
        Con el certificado de compatibilidad urbanística en mano, el siguiente
        paso es{' '}
        <span>
          <Link
            href={
              'https://www.gva.es/es/inicio/procedimientos?id_proc=19207&version=amp'
            }
            className='underline text-p600'
            target='_blank'
          >
            solicitar la licencia turística a través de la plataforma online
          </Link>
        </span>{' '}
        o en las oficinas de turismo de la Comunidad Valenciana, presentando la
        documentación requerida.
      </p>

      <LicenciasTuristicas />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-40 lg:px-10 mt-16'>
        ¿Cuánto tiempo se tarda en conseguir la licencia turística en
        Villajoyosa?
      </h2>

      <div className='text-justify text-sm md:text-lg pt-4 space-y-4 mb-10'>
        <p>
          El proceso para{' '}
          <strong>
            obtener una licencia turística en Villajoyosa suele durar entre 4 y
            5 meses
          </strong>
          , aunque este período puede variar dependiendo de factores como la
          eficiencia administrativa del Ayuntamiento y la exactitud en la
          presentación de la documentación necesaria. Es aconsejable iniciar el
          proceso con tiempo suficiente y asegurarse de proporcionar toda la
          información y documentación de manera precisa para evitar demoras
          innecesarias.
        </p>

        <p>
          Si bien puede haber desafíos para obtener una licencia turística en
          Villajoyosa, el mercado del alquiler vacacional representa una valiosa
          oportunidad para los propietarios e inversores que quieran entrar en
          el. En <strong className='text-p600'>DYGAV</strong>, nos dedicamos a
          asistirte en cada paso. Para más información y asesoramiento a medida,
          contáctanos.
        </p>
      </div>

      <HelpYouForm />

      <CityCardsFooter />
    </section>
  );
};
