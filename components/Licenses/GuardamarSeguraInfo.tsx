import Link from 'next/link';
import React from 'react';
import { AlquilerVacacional, HelpYouForm, LicenciasTuristicas } from '..';
import { CityImages } from './CityImages';
import { CityCardsFooter } from './CityCardsFooter';

const zoneImages = [
  {
    src: 'https://res.cloudinary.com/vicflores11/image/upload/v1700775119/Dygav/GuardamarDelSegura/7_ufiq41.webp',
    alt: 'Licencias turísticas: Zonas permitidas para uso turistico',
  },
  {
    src: 'https://res.cloudinary.com/vicflores11/image/upload/v1700775118/Dygav/GuardamarDelSegura/6_thb42c.webp',
    alt: 'Licencias turísticas: Zonas permitidas para uso turistico',
  },
];

const townHallImages = [
  {
    src: 'https://res.cloudinary.com/vicflores11/image/upload/v1700775116/Dygav/GuardamarDelSegura/1_kqhglr.webp',
    alt: 'Licencias turísticas: Ayuntamiento de Guardamar del Segura',
  },
  {
    src: 'https://res.cloudinary.com/vicflores11/image/upload/v1700774784/Dygav/GuardamarDelSegura/2_g8kxjz.webp',
    alt: 'Licencias turísticas: Guardamar del Segura costa',
  },
];

export const GuardamarSeguraInfo = () => {
  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h1 className='text-center text-2xl md:text-3xl pb-4 mb-6 font-semibold border-b-4 border-b-p600 w-auto md:px-10'>
        Licencias turísticas en Guardamar del Segura
      </h1>

      <div className='text-justify lg:text-start text-sm md:text-lg pt-4 space-y-4 mb-14'>
        <p>
          Obtener una licencia turística en Guardamar, un municipio con un
          encanto único en la Comunidad Valenciana, presenta desafíos
          específicos debido a su estricto plan urbanístico. A diferencia de
          otros municipios,{' '}
          <strong>
            la concesión de licencias turísticas en Guardamar del Segura se
            limita a ciertas zonas
          </strong>
          , lo que requiere una atención y enfoque especializados.
        </p>

        <p>
          En <strong className='text-p600'>DYGAV</strong>, nos especializamos en
          ayudar a los propietarios a navegar por este complicado proceso,
          ofreciendo asesoramiento y estrategias adaptadas a las normativas
          locales.{' '}
        </p>

        <p>
          Esta guía explica detalladamente{' '}
          <strong>
            cómo abordar el proceso de solicitud de licencia turística en
            Guardamar
          </strong>
          , destacando las áreas permitidas y proporcionando una visión integral
          del proceso. De acuerdo con lo estipulado en los Decretos 92/2009, del
          3 de julio, y 75/2015, del 15 de mayo, dictados por el Consell de la
          Comunitat Valenciana, es obligatorio que todas las propiedades
          ofrecidas para alquiler turístico posean una licencia turística
          válida. La omisión de esta licencia es considerada una violación de
          las regulaciones de turismo y conlleva responsabilidades legales.
        </p>

        <p>
          Asimismo, para anunciar una propiedad en plataformas digitales de
          alquiler vacacional como Airbnb, Booking, entre otras,{' '}
          <strong>es esencial disponer de la licencia turística</strong>. Toda
          publicidad de la propiedad debe, por tanto, incluir el número de
          registro otorgado y la categoría correspondiente de la vivienda.
        </p>
      </div>

      <AlquilerVacacional />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-52 lg:px-2 mt-16'>
        ¿Quién regula la concesión de licencias turísticas para alquileres
        vacacionales en Guardamar?
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg md:px-20 mt-4'>
        En España, cada comunidad autónoma establece sus propias normativas, y
        dentro de estas, son{' '}
        <strong>los ayuntamientos quienes deciden en última instancia</strong>.
        Es crucial cumplir con las{' '}
        <strong>
          regulaciones específicas de la Comunidad Valenciana y del Ayuntamiento
          de Guardamar
        </strong>{' '}
        para poder operar legalmente una vivienda vacacional.
      </p>

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-56 lg:px-4 mt-16'>
        ¿Qué requisitos debe cumplir una vivienda de alquiler vacacional en
        Guardamar?
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg md:px-20 mt-4'>
        Para que una propiedad en Guardamar califique para el alquiler
        vacacional, debe cumplir con ciertos criterios esenciales:
      </p>

      <ul className='text-justify lg:text-start text-sm md:text-lg px-3 pt-4 list-disc pl-4 md:pl-32 space-y-4'>
        <li>
          <strong>Certificado de primera o segunda ocupación:</strong> Un
          documento que confirma que la vivienda satisface las normativas de
          habitabilidad y seguridad.
        </li>

        <li>
          <strong>Certificado de compatibilidad urbanística:</strong> Esencial
          para verificar que la vivienda cumple con las regulaciones
          urbanísticas de Guardamar.
        </li>

        <li>
          <strong>Certificado energético:</strong> Aunque no es un requisito
          obligatorio para el proceso de obtención de la licencia turística, se
          recomienda para evaluar la eficiencia energética de la propiedad y es
          obligatorio para operar en el mercado de alquiler vacacional.
        </li>

        <li>
          <strong>Seguro de responsabilidad civil:</strong> Proporciona
          protección al propietario y a los huéspedes en caso de incidentes. Es
          necesario que este seguro cubra 150.000€ y esté destinado a vivienda
          de uso turístico.
        </li>

        <li>
          <strong>Fotografías actuales de la vivienda:</strong> Importantes para
          el proceso de solicitud, mostrando el estado y las características
          actuales de la vivienda.
        </li>
      </ul>

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-72 lg:px-10 mt-16'>
        Pasos para obtener una licencia turística en Guardamar
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg md:px-20 mt-4'>
        Antes de comenzar, es crucial asegurarse de que la propiedad esté
        ubicada en una de las zonas permitidas para el alquiler turístico según
        el plan urbanístico de Guardamar.
      </p>

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-72 lg:px-10 mt-16'>
        Solicitud de Compatibilidad Urbanística
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg md:px-20 mt-4'>
        Este trámite se inicia en el Ayuntamiento de Guardamar, donde se
        presenta la documentación necesaria, incluyendo el{' '}
        <span>
          <Link
            href={
              'https://www.guardamardelsegura.es/wp-content/uploads/2017/02/UA-9-SOLICITUD-DE-COMPAT-URBANISTICA-LEY-6-2014.pdf'
            }
            className='underline text-p600'
            target='_blank'
          >
            formulario de solicitud disponible en la web municipal
          </Link>
        </span>{' '}
        o en las oficinas.
      </p>

      <CityImages images={townHallImages} />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-72 lg:px-10 mt-16'>
        Tramitación de la Licencia Turística
      </h2>

      <div className='text-justify lg:text-start text-sm md:text-lg pt-4 space-y-4 mb-4'>
        <p>
          Con el certificado de compatibilidad urbanística en mano, el siguiente
          paso es solicitar la licencia turística a través de{' '}
          <span>
            <Link
              href={
                'https://www.gva.es/es/inicio/procedimientos?id_proc=19207&version=amp'
              }
              className='underline text-p600'
              target='_blank'
            >
              la plataforma online de la Comunidad Valenciana
            </Link>
          </span>{' '}
          o en las oficinas de turismo, presentando todos los documentos
          requeridos.
        </p>

        <p className='pb-14'>
          Estas son las zonas donde el actual plan urbanístico de Guardamar
          permite las viviendas de uso turístico.
        </p>

        <CityImages images={zoneImages} />

        <p className='pt-14'>
          El proceso de solicitud para obtener una licencia turística para una
          casa unifamiliar individual sigue los mismos pasos que para otros
          tipos de propiedades en Guardamar. Sin embargo, la probabilidad de
          aprobación puede ser más alta debido a la naturaleza independiente de
          estas casas.
        </p>
      </div>

      <LicenciasTuristicas />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-72 lg:px-10 mt-16'>
        ¿Cuanto tiempo tardan en conceder la licencia turistica en Guardamar?
      </h2>

      <div className='text-justify lg:text-start text-sm md:text-lg pt-4 space-y-4 mb-4'>
        <p>
          El proceso de obtención de una licencia turística en Guardamar, debido
          a sus específicas restricciones urbanísticas, puede ser más prolongado
          que en otros municipios,{' '}
          <strong>tomando generalmente entre 3 y 6 meses</strong>. Este lapso
          puede variar dependiendo de la demanda y la eficiencia administrativa
          del Ayuntamiento. Es importante para los solicitantes estar preparados
          para esta espera y planificar en consecuencia, asegurando que todos
          los trámites y documentaciones necesarias estén completos y
          presentados correctamente desde el principio.
        </p>

        <p>
          A pesar de los desafíos, obtener una licencia turística en Guardamar
          es una oportunidad valiosa para los propietarios de inmuebles en las
          zonas permitidas. En <strong className='text-p600'>DYGAV</strong>,
          estamos aquí para apoyarte en cada paso de este proceso. Contáctanos
          para más información y asesoramiento personalizado.
        </p>
      </div>

      <HelpYouForm />

      <CityCardsFooter />
    </section>
  );
};
