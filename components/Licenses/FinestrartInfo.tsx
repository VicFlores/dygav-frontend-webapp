import Link from 'next/link';
import React from 'react';
import { AlquilerVacacional, HelpYouForm, LicenciasTuristicas } from '..';
import { CityImages } from './CityImages';
import { CityCardsFooter } from './CityCardsFooter';

const images = [
  {
    src: 'https://res.cloudinary.com/vicflores11/image/upload/v1701186490/Dygav/Finestrart/18_avupj6.webp',
    alt: '',
  },
  {
    src: 'https://res.cloudinary.com/vicflores11/image/upload/v1701186487/Dygav/Finestrart/Copia_de_16_buyb8u.webp',
    alt: '',
  },
];

export const FinestratInfo = () => {
  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h1 className='text-center text-2xl md:text-3xl pb-4 mb-6 font-semibold border-b-4 border-b-p600 w-auto md:px-10'>
        Licencias turísticas en Finestrat
      </h1>

      <div className='text-justify text-sm md:text-lg pt-4 space-y-4 mb-10'>
        <p>
          Finestrat, situado en la pintoresca Costa Blanca de la Comunidad
          Valenciana, se destaca por su encanto único y su atractivo turístico.
          En este contexto, el alquiler vacacional representa una excelente
          oportunidad para propietarios locales e inversores. Para aprovechar al
          máximo esta oportunidad y operar dentro del marco legal,{' '}
          <strong>
            es crucial entender y cumplir con las regulaciones específicas de la
            región
          </strong>
          .
        </p>

        <p>
          De acuerdo con los Decretos 92/2009, de 3 de julio, y 75/2015, de 15
          de mayo, promulgados por el Consell de la Comunitat Valenciana, todas
          las propiedades destinadas al alquiler turístico en Finestrat{' '}
          <strong>deben contar con una licencia turística válida</strong>. La
          falta de esta licencia no solo se considera una infracción a las
          normativas de turismo, sino que también implica responsabilidades
          legales para el propietario.
        </p>

        <p>
          Además,{' '}
          <strong>
            tener una licencia turística es imprescindible para anunciar y
            promocionar las propiedades en plataformas de alquiler vacacional en
            línea
          </strong>
          , como Airbnb, Booking y similares. Todos los anuncios deben incluir
          el número de registro y la categoría de la vivienda, asegurando así
          transparencia y cumplimiento de las normas. Este requisito no solo
          garantiza la legalidad del alquiler, sino que también brinda seguridad
          y confianza a los potenciales inquilinos que buscan alojamiento en
          Finestrat.
        </p>
      </div>

      <AlquilerVacacional />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-40 mt-24'>
        ¿Quién regula la concesión de licencias turísticas para alquileres
        vacacionales en Finestrat?
      </h2>

      <p className='md:self-start text-sm md:text-lg md:px-20 mt-4'>
        En Finestrat, la regulación y concesión de licencias turísticas para
        alquileres vacacionales es supervisada tanto por la Comunidad Valenciana
        como por el Ayuntamiento de Finestrat. Mientras que la normativa
        autonómica establece el marco legal general,{' '}
        <strong>
          es el Ayuntamiento quien tiene la autoridad final para otorgar las
          licencias
        </strong>
        , asegurando que todas las propiedades cumplan con las normativas y
        estándares locales. Este proceso garantiza un desarrollo turístico
        equilibrado y respetuoso con el entorno y la comunidad de Finestrat.
      </p>

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        ¿Qué requisitos debe cumplir una vivienda de alquiler vacacional en
        Finestrat?
      </h2>

      <p className='md:self-start text-sm md:text-lg md:px-20 mt-4'>
        Para calificar para el alquiler vacacional en Finestrat, una propiedad
        debe cumplir con los siguientes requisitos:
      </p>

      <ul className='text-sm md:text-lg px-3 pt-4 list-disc pl-4 md:pl-32 space-y-4'>
        <li>
          <strong>Certificado de primera o segunda ocupación:</strong> Este
          documento verifica que la propiedad cumple con los estándares de
          habitabilidad y seguridad.
        </li>

        <li>
          <strong>Certificado de compatibilidad urbanística:</strong> Necesario
          para confirmar que la vivienda se ajusta a las regulaciones
          urbanísticas de Finestrat.
        </li>

        <li>
          <strong>Certificado energético:</strong> Si bien no es obligatorio
          para la tramitación de la licencia turística, si que lo es para operar
          en el mercado de alquiler vacacional.
        </li>

        <li>
          <strong>Seguro de responsabilidad civil:</strong> Importante para
          proteger al propietario y a los huéspedes en caso de accidentes o
          daños. Debe cubrir 150.000€ y estar destinado a vivienda de uso
          turístico.
        </li>

        <li>
          <strong>Fotografías actualizadas de la propiedad:</strong> Esenciales
          para el proceso de solicitud y para mostrar el estado actual del
          inmueble.
        </li>
      </ul>

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-72 lg:px-10 mt-16'>
        Pasos para obtener una licencia turística en Finestrat
      </h2>

      <p className='md:self-start text-sm md:text-lg md:px-20 mt-4'>
        Antes de iniciar cualquier trámite, es importante verificar que la
        propiedad cumpla con las normativas de zonificación y urbanismo de
        Finestrat.
      </p>

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-72 lg:px-10 mt-16'>
        Solicitud de Compatibilidad Urbanística
      </h2>

      <p className='md:self-start text-sm md:text-lg md:px-20 mt-4'>
        Este trámite se inicia en el Ayuntamiento de Finestrat, donde se
        presenta el{' '}
        <span>
          <Link
            href={
              'https://www.ayto-finestrat.es/download/07-certificado-compatibilidad-uso-turistico-w/'
            }
            className='underline text-p600'
            target='_blank'
          >
            formulario disponible en su página web
          </Link>
        </span>{' '}
        o en las oficinas municipales. Es necesario para ver la adecuación de
        una propiedad con respecto a las normativas y planes urbanísticos
        establecidos por el ayuntamiento de Finestrat. En esencia, un
        certificado de compatibilidad urbanística verifica que la vivienda se
        encuentra en una zona donde el uso turístico está permitido y que cumple
        con todas las regulaciones específicas de urbanismo del municipio.
      </p>

      <CityImages images={images} />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-72 lg:px-10 mt-16'>
        Tramitación de la Licencia Turística
      </h2>

      <p className='md:self-start text-sm md:text-lg md:px-20 mt-4'>
        Con el certificado de compatibilidad urbanística, el siguiente paso es
        solicitar la licencia turística. Esto se realiza a través de la{' '}
        <span>
          <Link
            href={
              'https://www.gva.es/es/inicio/procedimientos?id_proc=19207&version=amp'
            }
            className='underline text-p600'
            target='_blank'
          >
            plataforma online de la Comunidad Valenciana
          </Link>
        </span>{' '}
        o en las oficinas de turismo, presentando la documentación requerida.
      </p>

      <LicenciasTuristicas />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-40 lg:px-10 mt-16'>
        ¿Cuánto tiempo se tarda en conseguir la licencia turística en Finestrat?
      </h2>

      <div className='text-justify text-sm md:text-lg pt-4 space-y-4 mb-10'>
        <p>
          El proceso de obtención de{' '}
          <strong>
            la licencia turística en Finestrat generalmente tarda entre 4 y 5
            meses
          </strong>
          , aunque este tiempo puede variar según la carga de trabajo del
          Ayuntamiento y la eficiencia del proceso administrativo. Es
          recomendable iniciar los trámites con antelación y asegurarse de que
          toda la documentación esté completa y correctamente presentada para
          evitar demoras innecesarias.
        </p>

        <p>
          Lograr una licencia turística en Finestrat, a pesar de los desafíos,
          es una gran oportunidad para los propietarios. En{' '}
          <span className='text-p600'>DYGAV</span>, te ofrecemos nuestro soporte
          y experiencia en cada paso del camino. Ponte en contacto con nosotros
          para más información y para un asesoramiento personalizado
        </p>
      </div>

      <HelpYouForm />

      <CityCardsFooter />
    </section>
  );
};
