import Link from 'next/link';
import React from 'react';
import { AlquilerVacacional, HelpYouForm, LicenciasTuristicas } from '..';
import { CityImages } from './CityImages';
import { CityCardsFooter } from './CityCardsFooter';

const images = [
  {
    src: 'https://res.cloudinary.com/vicflores11/image/upload/v1701357921/Dygav/Altea/7_dezkye.webp',
    alt: 'Licencias turísticas: Altea ciudad',
  },
  {
    src: 'https://res.cloudinary.com/vicflores11/image/upload/v1701357904/Dygav/Altea/11_jlgqfy.webp',
    alt: 'Licencias turísticas: Altea costa',
  },
];

export const AlteaInfo = () => {
  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h1 className='text-center text-2xl md:text-3xl pb-4 mb-6 font-semibold border-b-4 border-b-p600 w-auto md:px-10'>
        Licencias Turísticas en Altea
      </h1>

      <div className='text-justify text-sm md:text-lg pt-4 space-y-4 mb-10'>
        <p>
          Altea, con su encanto único y su ubicación privilegiada en la Costa
          Blanca, se ha establecido como un destino turístico deseado. Para los
          propietarios en esta región, el alquiler vacacional ofrece una
          oportunidad notable para beneficiarse de la afluencia turística a esta
          bonita localidad. Sin embargo, es fundamental entender y adherirse a
          las regulaciones locales para operar legalmente y con éxito.
        </p>

        <p>
          Con base en los Decretos 92/2009 y 75/2015 del Consell de la Comunitat
          Valenciana, se requiere que{' '}
          <strong>
            todas las propiedades destinadas a alquiler turístico en Altea
            dispongan de una licencia turística válida
          </strong>
          . No poseer dicha licencia es considerado una infracción de las leyes
          de turismo, acarreando responsabilidades legales para el propietario.
          Es más,{' '}
          <strong>
            la licencia turística es fundamental para anunciar las propiedades
            en plataformas online de alquiler vacacional
          </strong>{' '}
          como Airbnb y Booking, y cada anuncio debe incluir el número de
          registro y la categoría de la vivienda. Este paso garantiza no solo la
          legalidad del alquiler, sino que también proporciona seguridad y
          confianza a quienes buscan alojamiento en Altea.
        </p>
      </div>

      <AlquilerVacacional />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-40 mt-24'>
        ¿Quién regula la concesión de licencias turísticas para alquileres
        vacacionales en Altea?
      </h2>

      <p className='md:self-start text-sm md:text-lg md:px-20 mt-4'>
        La regulación y concesión de licencias turísticas en Altea se rige por
        las normativas de la Comunidad Valenciana, con el Ayuntamiento de Altea
        <strong>
          siendo el ente encargado de la aplicación y otorgamiento de estas
          licencias
        </strong>
        . Este sistema de regulación asegura que todas las propiedades de
        alquiler vacacional en Altea cumplan con los estándares de seguridad,
        calidad y respeten las normativas urbanísticas locales.
      </p>

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        ¿Qué requisitos debe cumplir una vivienda de alquiler vacacional en
        Altea?
      </h2>

      <p className='md:self-start text-sm md:text-lg md:px-20 mt-4'>
        Para que una vivienda en Altea sea elegible para alquiler vacacional,
        debe satisfacer los siguientes requisitos:
      </p>

      <ul className='text-sm md:text-lg px-3 pt-4 list-disc pl-4 md:pl-32 space-y-4'>
        <li>
          Certificado de primera o segunda ocupación: Este certificado confirma
          que la propiedad satisface las normativas de habitabilidad y
          seguridad.
        </li>

        <li>
          Certificado de compatibilidad urbanística: Asegura que la vivienda se
          ajusta a las regulaciones urbanísticas de Altea.
        </li>

        <li>
          Certificado energético: Necesario para operar en el mercado de
          alquiler vacacional si bien no es necesario para la tramitación de la
          licencia turística.
        </li>

        <li>
          Seguro de responsabilidad civil: Fundamental para proteger tanto al
          propietario como a los huéspedes. Debe cubrir un mínimo de 150.000€ y
          estar destinado a vivienda de uso turístico.
        </li>

        <li>
          Fotografías actualizadas de la propiedad: Importantes para el proceso
          de solicitud, mostrando el estado y características actuales de la
          vivienda.
        </li>
      </ul>

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-72 lg:px-10 mt-16'>
        Pasos para obtener una licencia turística en Altea
      </h2>

      <p className='md:self-start text-sm md:text-lg md:px-20 mt-4'>
        Antes de iniciar el trámite, es crucial confirmar que la propiedad esté
        ubicada en una zona permitida para el alquiler turístico según el plan
        urbanístico de Altea.
      </p>

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-72 lg:px-10 mt-16'>
        Solicitud de Compatibilidad Urbanística
      </h2>

      <p className='md:self-start text-sm md:text-lg md:px-20 mt-4'>
        Este trámite se lleva a cabo en el Ayuntamiento de Altea, presentando un
        formulario de solicitud que está disponible tanto en la{' '}
        <span>
          <Link
            href={
              'http://www.pilardelahoradada.org/sites/default/files/solicitudes/1532335616320114016.pdf'
            }
            className='underline text-p600'
            target='_blank'
          >
            web municipal
          </Link>
        </span>{' '}
        como en sus oficinas.
      </p>

      <CityImages images={images} />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-72 lg:px-10 mt-16'>
        Tramitación de la Licencia Turística
      </h2>

      <p className='md:self-start text-sm md:text-lg md:px-20 mt-4'>
        Con el certificado de compatibilidad urbanística obtenido, el siguiente
        paso es{' '}
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
        o en las oficinas de turismo, adjuntando la documentación necesaria.
      </p>

      <LicenciasTuristicas />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-40 lg:px-10 mt-16'>
        ¿Cuánto tiempo se tarda en conseguir la licencia turística en Altea?
      </h2>

      <div className='text-justify text-sm md:text-lg pt-4 space-y-4 mb-10'>
        <p>
          El tiempo estimado para{' '}
          <strong>
            adquirir una licencia turística en Altea generalmente oscila entre 4
            y 5 meses
          </strong>
          . Este período puede variar dependiendo de factores como la demanda y
          la eficiencia del proceso administrativo en el Ayuntamiento. Se
          recomienda comenzar el proceso con anticipación y asegurarse de que
          toda la documentación esté completa y correctamente presentada para
          agilizar el trámite.
        </p>

        <p>
          Obtener una licencia turística en Altea, aunque conlleva ciertos
          desafíos, es una oportunidad significativa para los propietarios e
          inversores que decidan invertir en el mercado del alquiler vacacional
          en esta parte de la Costa Blanca. En{' '}
          <strong className='text-p600'>DYGAV</strong>, estamos a tu disposición
          para apoyarte en cada paso de este camino. Contáctanos para un
          asesoramiento personalizado y para obtener más información.
        </p>
      </div>

      <HelpYouForm />

      <CityCardsFooter />
    </section>
  );
};
