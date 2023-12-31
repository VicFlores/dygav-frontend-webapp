import Link from 'next/link';
import React from 'react';
import { AlquilerVacacional, HelpYouForm, LicenciasTuristicas } from '..';
import { CityImages } from './CityImages';
import { CityCardsFooter } from './CityCardsFooter';

const images = [
  {
    src: 'https://res.cloudinary.com/vicflores11/image/upload/v1701292959/Dygav/Calpe/28_iosuwn.webp',
    alt: 'Licencias turísticas: Ayuntamiento de Calpe',
  },
  {
    src: 'https://res.cloudinary.com/vicflores11/image/upload/v1701292956/Dygav/Calpe/29_c3w9ej.webp',
    alt: 'Licencias turísticas: Calpe Ciudad',
  },
];

export const CalpeInfo = () => {
  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h1 className='text-center text-2xl md:text-3xl pb-4 mb-6 font-semibold border-b-4 border-b-p600 w-auto md:px-10'>
        Licencias Turísticas en Calpe
      </h1>

      <div className='text-justify lg:text-start text-sm md:text-lg pt-4 space-y-4 mb-10'>
        <p>
          Calpe, un pintoresco municipio en la Costa Blanca de la Comunidad
          Valenciana, se ha convertido en un destino privilegiado para el
          turismo y, por ende, para el mercado del alquiler vacacional. Con sus
          impresionantes vistas al Peñón de Ifach, sus playas doradas y un
          ambiente cultural enriquecedor, Calpe atrae a una amplia gama de
          turistas cada año. Para los propietarios que buscan aprovechar este
          auge turístico,{' '}
          <strong>
            es esencial navegar con éxito por el proceso de obtención de
            licencias turísticas
          </strong>
          , un paso crítico para que sus propiedades vacacionales operen con
          legalidad.
        </p>

        <p>
          Según lo estipulado por los Decretos 92/2009 y 75/2015 del Consell de
          la Comunitat Valenciana, es imprescindible que cada propiedad ofrecida
          para{' '}
          <strong>
            alquiler turístico en Calpe cuente con una licencia turística en
            regla
          </strong>
          . La omisión de esta licencia se considera una infracción a las
          normativas de turismo, implicando responsabilidades legales para el
          propietario. Esencialmente,{' '}
          <strong>
            para publicitar alojamientos en plataformas digitales como Airbnb y
            Booking, se requiere esta licencia turística
          </strong>
          . Cada anuncio debe especificar claramente el número de registro y la
          clasificación de la propiedad, asegurando la transparencia y el
          cumplimiento normativo. Este requisito no sólo valida la legalidad del
          alquiler, sino que también aumenta la
        </p>
      </div>

      <AlquilerVacacional />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-40 mt-24'>
        ¿Quién regula la concesión de licencias turísticas para alquileres
        vacacionales en Calpe?
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg md:px-20 mt-4'>
        En Calpe, la concesión de licencias turísticas para propiedades de
        alquiler vacacional es un proceso supervisado tanto por la Comunidad
        Valenciana como por las autoridades locales. Aunque la comunidad
        autónoma dicta las directrices generales,{' '}
        <strong>
          el Ayuntamiento de Calpe es responsable de implementar estas
          regulaciones y otorgar las licencias turísticas
        </strong>
        . Este proceso garantiza que las propiedades de alquiler vacacional en
        Calpe cumplan con todos los estándares y normativas establecidos.
      </p>

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        ¿Qué requisitos debe cumplir una vivienda de alquiler vacacional en
        Calpe?
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg md:px-20 mt-4'>
        Para que una vivienda en Calpe se considere apta para el alquiler
        vacacional, debe satisfacer varios criterios clave:
      </p>

      <ul className='text-sm md:text-lg px-3 pt-4 list-disc pl-4 md:pl-32 space-y-4'>
        <li>
          <strong>Certificado de primera o segunda ocupación:</strong> Un
          documento oficial que certifica que la propiedad cumple con las
          normativas de habitabilidad y seguridad vigentes.
        </li>

        <li>
          <strong>Certificado de compatibilidad urbanística:</strong> Esencial
          para asegurar que la propiedad se alinea con las regulaciones
          urbanísticas de Calpe.
        </li>

        <li>
          <strong>Certificado energético:</strong> Necesario para operar en el
          mercado de alquiler vacacional, aunque no para el trámite de la
          licencia en sí mismo.
        </li>

        <li>
          <strong>Seguro de responsabilidad civil:</strong> Es necesario que el
          seguro cubra hasta 150.000€ en daños y esté destinado a vivienda de
          uso turístico. Protege al propietario y a los huéspedes ante cualquier
          eventualidad o daño.
        </li>

        <li>
          <strong>Fotografías actualizadas de la propiedad:</strong> Un
          requisito para el proceso de solicitud que ayuda a presentar el estado
          actual de la vivienda.
        </li>
      </ul>

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-72 lg:px-10 mt-16'>
        Pasos para obtener una licencia turística en Calpe
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg md:px-20 mt-4'>
        Antes de iniciar el proceso, es crucial verificar que la vivienda cumpla
        con las normativas de zonificación y urbanismo de Calpe.
      </p>

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-72 lg:px-10 mt-16'>
        Solicitud de Compatibilidad Urbanística
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg md:px-20 mt-4'>
        Este trámite se inicia en el Ayuntamiento de Calpe, donde se presenta el
        formulario de solicitud, disponible tanto{' '}
        <span>
          <Link
            href={'https://www.calp.es/'}
            className='underline text-p600'
            target='_blank'
          >
            en su sitio web
          </Link>
        </span>{' '}
        como en las oficinas municipales.
      </p>

      <CityImages images={images} />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-72 lg:px-10 mt-16'>
        Tramitación de la Licencia Turística
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg md:px-20 mt-4'>
        Una vez obtenido el certificado de compatibilidad urbanística, el
        siguiente paso es{' '}
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
        o en las oficinas de turismo, proporcionando toda la documentación
        necesaria.
      </p>

      <LicenciasTuristicas />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-40 lg:px-10 mt-16'>
        ¿Cuánto tiempo se tarda en conseguir la licencia turística en Calpe?
      </h2>

      <div className='text-justify text-sm md:text-lg pt-4 space-y-4 mb-10'>
        <p>
          El proceso para adquirir una licencia turística en Calpe{' '}
          <strong>generalmente toma entre 4 y 5 meses</strong>. Sin embargo,
          este período puede variar en función de factores como la demanda y la
          carga de trabajo del Ayuntamiento. Se recomienda a los propietarios{' '}
          <strong>
            iniciar el proceso con suficiente antelación y con toda la
            documentación necesaria
          </strong>
          , para facilitar un trámite eficiente y sin demoras.
        </p>

        <p>
          Enfrentar los retos para conseguir una licencia turística en Calpe
          ofrece una oportunidad inigualable para propietarios e inversores. En{' '}
          <strong className='text-p600'>DYGAV</strong>, nos comprometemos a
          ayudarte en cada etapa del proceso. Para obtener más información y
          asesoramiento personalizado, comunícate con nosotros.
        </p>
      </div>

      <HelpYouForm />
    </section>
  );
};
