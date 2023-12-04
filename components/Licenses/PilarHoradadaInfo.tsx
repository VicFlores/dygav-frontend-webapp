import Link from 'next/link';
import React from 'react';
import { AlquilerVacacional, HelpYouForm, LicenciasTuristicas } from '..';
import { CityImages } from './CityImages';
import { CityCardsFooter } from './CityCardsFooter';

const images = [
  {
    src: 'https://res.cloudinary.com/vicflores11/image/upload/v1701294255/Dygav/Pilar%20de%20la%20Horadada/19_ihezqq.webp',
    alt: 'Licencias turísticas: Ayuntamiento de Pilar de la Horadada',
  },
  {
    src: 'https://res.cloudinary.com/vicflores11/image/upload/v1701294252/Dygav/Pilar%20de%20la%20Horadada/Licencias_Tur%C3%ADsticas__Torre_de_la_Horadada_maxhac.webp',
    alt: 'Licencias turísticas: Pilar de la Horadadada torre en costa',
  },
];

export const PilarHoradadaInfo = () => {
  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h1 className='text-center text-2xl md:text-3xl pb-4 mb-6 font-semibold border-b-4 border-b-p600 w-auto md:px-10'>
        Licencias Turísticas en Pilar de la Horadada
      </h1>

      <div className='text-justify lg:text-start text-sm md:text-lg pt-4 space-y-4 mb-10'>
        <p>
          Pilar de la Horadada, situado en el extremo sur de la Costa Blanca en
          la Comunidad Valenciana, es un destino turístico cada vez más
          atractivo y deseado. Con sus playas idílicas, su clima cálido y una
          atmósfera relajante, se ha convertido en un lugar ideal para los
          alquileres vacacionales. Para los propietarios interesados en explorar
          este mercado, es crucial entender y cumplir con las normativas locales
          sobre licencias turísticas, un paso esencial para garantizar la
          legalidad y el éxito de sus propiedades de alquiler.
        </p>

        <p>
          De acuerdo con los Decretos 92/2009 y 75/2015 del Consell de la
          Comunitat Valenciana,{' '}
          <strong>
            es obligatorio que todas las viviendas destinadas al alquiler
            turístico en Pilar de la Horadada posean una licencia turística
            válida
          </strong>
          . La ausencia de esta licencia representa una contravención de las
          leyes turísticas, con consecuencias legales para el propietario.
          Además,{' '}
          <strong>
            es necesario contar con una licencia turística para promocionar
            propiedades en plataformas de alquiler vacacional online
          </strong>
          como Airbnb y Booking. En cada anuncio, es necesario incluir el número
          de registro y la categoría de la vivienda, lo que garantiza
          transparencia y cumple con las normativas vigentes. Este paso no solo
          asegura la legalidad del alquiler, sino que también brinda una
          sensación de seguridad y confianza a quienes buscan alojamiento en
          Pilar de la Horadada
        </p>
      </div>

      <AlquilerVacacional />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-40 mt-24'>
        ¿Quién regula la concesión de licencias turísticas para alquileres
        vacacionales en Pilar de la Horadada?
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg md:px-20 mt-4'>
        La regulación y concesión de licencias turísticas en Pilar de la
        Horadada es administrada por la Comunidad Valenciana, con{' '}
        <strong>
          el Ayuntamiento de Pilar de la Horadada encargado de implementar estas
          normativas
        </strong>
        . Este sistema garantiza que las propiedades de alquiler vacacional en
        el municipio cumplan con los estándares de calidad y seguridad, operando
        de acuerdo con las leyes y regulaciones locales.
      </p>

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        ¿Qué requisitos debe cumplir una vivienda de alquiler vacacional en
        Pilar de la Horadada?
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg md:px-20 mt-4'>
        Las viviendas destinadas a alquileres vacacionales en Pilar de la
        Horadada deben cumplir con los siguientes requisitos:
      </p>

      <ul className='text-sm md:text-lg px-3 pt-4 list-disc pl-4 md:pl-32 space-y-4'>
        <li>
          <strong>Certificado de primera o segunda ocupación:</strong> Acredita
          que la propiedad cumple con los estándares de habitabilidad y
          seguridad.
        </li>

        <li>
          <strong>Certificado de compatibilidad urbanística:</strong> Verifica
          que la vivienda cumple con las normativas urbanísticas de Pilar de la
          Horadada.
        </li>

        <li>
          <strong>Certificado energético:</strong> Aunque no es un requisito
          obligatorio para la tramitación de la licencia, si que lo es para
          poder operar.
        </li>

        <li>
          <strong>Seguro de responsabilidad civil:</strong> Es necesario que
          cubra hasta 150.000€ y esté destinado a vivienda de uso turístico.
          Brinda protección frente a posibles incidentes o accidentes.
        </li>

        <li>
          <strong>Fotografías recientes de la propiedad:</strong> Necesarias
          para el proceso de solicitud y para mostrar el estado actual del
          inmueble.
        </li>
      </ul>

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-72 lg:px-10 mt-16'>
        Pasos para obtener una licencia turística en Pilar de la Horadada
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg md:px-20 mt-4'>
        Antes de solicitar la licencia, es importante asegurarse de que la
        propiedad esté ubicada en una zona que permita el alquiler turístico
        según el plan urbanístico de Pilar de la Horadada.
      </p>

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-72 lg:px-10 mt-16'>
        Solicitud de Compatibilidad Urbanística
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg md:px-20 mt-4'>
        Este trámite se realiza en el Ayuntamiento de Pilar de la Horadada. Se
        debe completar y presentar un{' '}
        <span>
          <Link
            href={
              'http://www.pilardelahoradada.org/sites/default/files/solicitudes/1532335616320114016.pdf'
            }
            className='underline text-p600'
            target='_blank'
          >
            formulario de solicitud
          </Link>
        </span>{' '}
        , que está disponible en la web municipal o en las oficinas municipales.
      </p>

      <CityImages images={images} />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-72 lg:px-10 mt-16'>
        Tramitación de la Licencia Turística
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg md:px-20 mt-4'>
        Con el certificado de compatibilidad urbanística, el siguiente paso es{' '}
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
        o en las oficinas de turismo, presentando toda la documentación
        necesaria.
      </p>

      <LicenciasTuristicas />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-40 lg:px-10 mt-16'>
        ¿Cuánto tiempo se tarda en conseguir la licencia turística en Pilar de
        la Horadada?
      </h2>

      <div className='text-justify text-sm md:text-lg pt-4 space-y-4 mb-10'>
        <p>
          Obtener una licencia turística en Pilar de la Horadada{' '}
          <strong>puede llevar entre 4 y 5 meses</strong>, aunque este tiempo
          puede variar según la demanda y la eficiencia del proceso
          administrativo en el Ayuntamiento. Por ello, es recomendable iniciar
          los trámites con suficiente antelación y presentar todos los
          documentos de forma precisa y completa para evitar retrasos.
        </p>

        <p>
          A pesar de los retos, adquirir una licencia turística en Pilar de la
          Horadada es una oportunidad valiosa para propietarios e inversores
          interesados en el mercado de alquiler vacacional. En{' '}
          <strong className='text-p600'>DYGAV</strong>, te brindamos apoyo en
          cada fase de este proceso. Contáctanos para asesoramiento
          personalizado y más información.
        </p>
      </div>

      <HelpYouForm />

      <CityCardsFooter />
    </section>
  );
};
