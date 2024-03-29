import Link from 'next/link';
import React from 'react';
import { AlquilerVacacional, HelpYouForm, LicenciasTuristicas } from '..';
import { CityImages } from './CityImages';

const images = [
  {
    src: 'https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649797/Dygav%20Images/El%20Campello/1_tnweqi_pexgks.png',
    alt: 'Licencias turísticas: Ayuntamiento de El Campello',
  },
  {
    src: 'https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649797/Dygav%20Images/El%20Campello/2_fldo0n_vmao7x.png',
    alt: 'Licencias turísticas: El Campello costa',
  },
];

export const ElCampelloInfo = () => {
  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h1 className='text-center text-2xl md:text-3xl pb-4 mb-6 font-semibold border-b-4 border-b-p600 w-auto md:px-10'>
        Licencias turísticas en El Campello
      </h1>

      <div className='text-justify lg:text-start text-sm md:text-lg pt-4 space-y-4 mb-10'>
        <p>
          El Campello, un destino turístico atractivo en la Comunidad
          Valenciana, ofrece oportunidades únicas para el alquiler vacacional
          gracias a su hermoso litoral, clima agradable y rica cultura.
          Aprovechar el potencial turístico de esta área requiere no solo visión
          empresarial, sino también un conocimiento profundo de las normativas
          locales.
        </p>

        <p>
          Conforme a lo establecido en los Decretos 92/2009 y 75/2015 del
          Consell de la Comunitat Valenciana, todas las viviendas destinadas a
          alquiler turístico en Campello deben estar correctamente licenciadas.
          La ausencia de esta licencia constituye una infracción a las
          regulaciones turísticas y acarrea responsabilidades legales para el
          propietario. Asimismo,{' '}
          <strong>
            es crucial tener una licencia turística para publicitar propiedades
            en plataformas online
          </strong>{' '}
          como Airbnb y Booking, incluyendo en cada anuncio el número de
          registro y la categoría de la vivienda.
        </p>
      </div>

      <AlquilerVacacional />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-40 mt-24'>
        ¿Quién regula la concesión de licencias turísticas para alquileres
        vacacionales en El Campello?
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg md:px-20 mt-4'>
        La concesión de licencias turísticas para alquileres vacacionales en El
        Campello es un proceso regulado por la Comunidad Valenciana y
        administrado por el Ayuntamiento de El Campello. Si bien la comunidad
        autónoma establece las directrices generales,{' '}
        <strong>es el ayuntamiento quien otorga las licencias</strong>,
        asegurando que todas las propiedades cumplan con las normativas y
        estándares específicos del municipio.
      </p>

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        ¿Qué requisitos debe cumplir una vivienda de alquiler vacacional en El
        Campello?
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg md:px-20 mt-4'>
        Para que una propiedad sea apta para el alquiler vacacional en El
        Campello, debe cumplir con ciertos requisitos esenciales:
      </p>

      <ul className='text-sm md:text-lg px-3 pt-4 list-disc pl-4 md:pl-32 space-y-4'>
        <li>
          <strong>Certificado de primera o segunda ocupación:</strong> Este
          documento confirma que la propiedad cumple con las normativas de
          habitabilidad y seguridad.
        </li>

        <li>
          <strong>Certificado de compatibilidad urbanística:</strong> Necesario
          para garantizar que la vivienda está en conformidad con las
          regulaciones urbanísticas de El Campello.
        </li>

        <li>
          <strong>Certificado energético:</strong> Aunque no es obligatorio para
          el trámite de obtención de la licencia, es obligatorio para evaluar la
          eficiencia energética de la propiedad.
        </li>

        <li>
          <strong>Seguro de responsabilidad civil:</strong> Fundamental para
          proteger al propietario y a los huéspedes ante posibles incidentes.
          Debe cubrir un mínimo de 150.000€ en daños y estar destinado a
          vivienda de uso turístico.
        </li>

        <li>
          <strong>Fotografías actualizadas de la vivienda:</strong> Importantes
          para el proceso de solicitud y para mostrar el estado actual del
          inmueble.
        </li>
      </ul>

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-72 lg:px-10 mt-16'>
        Pasos para obtener una licencia turística en El Campello
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg md:px-20 mt-4'>
        El primer paso es verificar que la propiedad cumpla con las normativas
        de zonificación y urbanismo específicas de El Campello antes de comenzar
        el trámite.
      </p>

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-72 lg:px-10 mt-16'>
        Solicitud de Compatibilidad Urbanística
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg md:px-20 mt-4'>
        Este trámite se realiza en el Ayuntamiento de El Campello, donde se debe
        presentar la documentación necesaria, que incluye un{' '}
        <span>
          <Link
            href={
              'https://www.elcampello.es/upload/areas_ficheros/territorio_y_vivienda/modelo_solicitud_ccu_solicitante_julio2016.pdf'
            }
            className='underline text-p600'
            target='_blank'
          >
            formulario de solicitud disponible en la página web del ayuntamiento
          </Link>
        </span>{' '}
        o en sus oficinas.
      </p>

      <CityImages images={images} />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-72 lg:px-10 mt-16'>
        Tramitación de la Licencia Turística
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg md:px-20 mt-4'>
        Una vez obtenido el certificado de compatibilidad urbanística, se
        procede a{' '}
        <span>
          <Link
            href={
              'https://www.gva.es/es/inicio/procedimientos?id_proc=19207&version=amp'
            }
            className='underline text-p600'
            target='_blank'
          >
            solicitar la licencia turística a través de la plataforma online de
            la Comunidad Valenciana
          </Link>
        </span>{' '}
        o en las oficinas de turismo, presentando la documentación requerida.
      </p>

      <LicenciasTuristicas />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-40 lg:px-10 mt-16'>
        ¿Cuánto tiempo se tarda en conseguir la licencia turística en El
        Campello?
      </h2>

      <div className='text-justify text-sm md:text-lg pt-4 space-y-4 mb-10'>
        <p>
          El tiempo estimado para obtener una licencia turística en El Campello
          suele ser de 4 a 5 meses, aunque este período puede variar en función
          de la demanda y la eficiencia administrativa del Ayuntamiento. Se
          recomienda a los propietarios que se anticipen y preparen todos los
          documentos necesarios para facilitar el proceso y conseguir que la
          tramitación de la licencia sea ágil y sin contratiempos.
        </p>

        <p>
          Obtener una licencia turística en Campello, a pesar de sus desafíos,
          es una oportunidad para propietarios e inversores. En{' '}
          <strong className='text-p600'>DYGAV</strong>, estamos listos para
          apoyarte a lo largo de todo este proceso. Para más información y
          asesoramiento personal, no dudes en contactarnos.
        </p>
      </div>

      <HelpYouForm />
    </section>
  );
};
