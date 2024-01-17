import Link from 'next/link';
import React from 'react';
import { AlquilerVacacional, HelpYouForm, LicenciasTuristicas } from '..';
import { CityImages } from './CityImages';

const images = [
  {
    src: 'https://res.cloudinary.com/vicflores11/image/upload/v1700840375/Dygav/Santa%20Pola/No_usada_todavia_usar_7_yuxl7h.webp',
    alt: 'Licencias turísticas: Ayuntamiento de Santa Pola',
  },
  {
    src: 'https://res.cloudinary.com/vicflores11/image/upload/v1700840376/Dygav/Santa%20Pola/Puerto_de_Santa_Pola_z22c85.webp',
    alt: 'Licencias turísticas: Santa Pola muelle',
  },
];

export const SantaPolaInfo = () => {
  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h1 className='text-center text-2xl md:text-3xl pb-4 mb-6 font-semibold border-b-4 border-b-p600 w-auto md:px-10'>
        Licencias turísticas en Santa Pola
      </h1>

      <div className='text-justify lg:text-start text-sm md:text-lg pt-2 space-y-4 mb-14'>
        <p>
          En el municipio de Santa Pola, ubicado en la costa de la Comunidad
          Valenciana, el alquiler vacacional se ha convertido en una opción cada
          vez más popular y lucrativa tanto para locales como para inversores
          extranjeros que quieren aprovechar el boom del mercado de alquiler
          vacacional. Con sus playas encantadoras, un clima agradable durante
          todo el año y una rica oferta cultural y gastronómica, Santa Pola
          atrae a una gran cantidad de turistas, creando una{' '}
          <strong>demanda constante de alojamientos turísticos</strong>.
        </p>

        <p>
          Sin embargo, para aprovechar este potencial y convertir una propiedad
          en un exitoso alquiler vacacional, es fundamental entender y cumplir
          con las regulaciones locales. En Santa Pola, como en el resto de la
          Comunidad Valenciana,{' '}
          <strong>
            las licencias turísticas son obligatorias para garantizar que los
            alquileres cumplan con los estándares de calidad y seguridad
          </strong>
          , y operen dentro del marco legal.
        </p>

        <p>
          Conforme a lo establecido en los Decretos 92/2009, del 3 de julio, y
          75/2015, del 15 de mayo, promulgados por el Consell de la Comunitat
          Valenciana, es requisito indispensable que todas las propiedades
          ofrecidas para alquiler turístico posean una{' '}
          <strong>licencia turística válida</strong>. No disponer de esta
          licencia se considera una violación a las leyes de turismo y acarrea
          las responsabilidades legales correspondientes.
        </p>

        <p>
          Asimismo,{' '}
          <strong>
            contar con una licencia turística es esencial para poder anunciar y
            promocionar la propiedad en plataformas de alquiler vacacional
          </strong>{' '}
          en línea como Airbnb, Booking, entre otras. En todos los anuncios de
          la pro
        </p>

        <p>
          Nuestra guía está diseñada para proporcionar{' '}
          <strong>
            una visión clara y detallada del proceso de obtención de estas
            licencias en Santa Pola
          </strong>
          . Cubriremos desde los requisitos iniciales hasta la tramitación final
          de la licencia, asegurando que los propietarios puedan navegar con
          confianza por el marco regulatorio y maximizar el potencial de sus
          propiedades. Con el asesoramiento adecuado y una planificación
          cuidadosa,{' '}
          <strong>
            obtener una licencia turística en Santa Pola puede ser un proceso
            relativamente sencillo
          </strong>
          .
        </p>
      </div>

      <AlquilerVacacional />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-40 mt-16'>
        ¿Quién regula la concesión de licencias turísticas para alquileres
        vacacionales en Santa Pola?
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg md:px-20 mt-4'>
        En Santa Pola, como en otros municipios de la Comunidad Valenciana, la
        regulación y concesión de licencias turísticas para alquileres
        vacacionales es un proceso que se rige tanto por la normativa autonómica
        como por las disposiciones municipales específicas. Mientras que la
        Comunidad Valenciana establece el marco legal general,{' '}
        <strong>
          el Ayuntamiento de Santa Pola es quien tiene la autoridad final para
          otorgar las licencias turísticas
        </strong>
        , asegurándose de que se cumplan todas las normativas locales
        pertinentes. Este enfoque garantiza que el alquiler vacacional se
        desarrolle de manera sostenible y coherente con el plan urbanístico y
        turístico de Santa Pola.
      </p>

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        ¿Qué requisitos debe cumplir una vivienda de alquiler vacacional en
        Santa Pola?
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg md:px-20 mt-4'>
        Para que una vivienda en Santa Pola sea apta para el alquiler
        vacacional, debe cumplir con varios requisitos clave:
      </p>

      <ul className='text-sm md:text-lg px-3 pt-4 list-disc pl-4 md:pl-32 space-y-4'>
        <li>
          <strong>Certificado de primera o segunda ocupación:</strong> Este
          certificado es una prueba de que la vivienda cumple con las normativas
          de habitabilidad y seguridad.
        </li>

        <li>
          <strong>Certificado de compatibilidad urbanística:</strong> Necesario
          para asegurar que la vivienda está en línea con las regulaciones
          urbanísticas de Santa Pola.
        </li>

        <li>
          <strong>Certificado energético:</strong> Aunque no es obligatorio para
          obtener la licencia turística, si que lo es para operar en el mercado
          de alquiler vacacional.
        </li>

        <li>
          <strong>Seguro de responsabilidad civil:</strong> Fundamental para
          proteger tanto al propietario como a los huéspedes ante posibles
          incidentes. Este seguro de responsabilidad civil tiene que cubrir al
          menos 150.000 euros en gastos y estar dirigido a viviendas de uso
          turístico.
        </li>

        <li>
          <strong>Fotografías actualizadas de la vivienda:</strong> Necesarias
          para el proceso de solicitud.
        </li>
      </ul>

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-72 lg:px-10 mt-16'>
        Pasos para obtener una licencia turística en Santa Pola
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg md:px-20 mt-4'>
        Antes de solicitar la licencia, es esencial verificar que la propiedad
        está ubicada en una zona apta para alquiler turístico según el plan
        urbanístico de Santa Pola.
      </p>

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-72 lg:px-10 mt-16'>
        Solicitud de Compatibilidad Urbanística
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg md:px-20 mt-4'>
        Para comenzar el proceso de obtener el Certificado de Compatibilidad
        Urbanística en Santa Pola, se aconseja utilizar el{' '}
        <span>
          <Link
            href={
              'https://www.santapola.es/wp-content/uploads/bsk-pdf-manager/2017/07/SOLICITUD-CERTIFICADO-COMPATIBILIDAD-URBANISTICA.pdf'
            }
            className='underline text-p600'
            target='_blank'
          >
            formulario de solicitud que está disponible en el sitio web del
            Ayuntamiento de Santa Pola
          </Link>
        </span>{' '}
        o directamente en sus oficinas municipales situadas en Plaza
        Constitución, 1, 03130 Santa Pola, Alicante
      </p>

      <CityImages images={images} />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-72 lg:px-10 mt-16'>
        Tramitación de Licencia Turística
      </h2>

      <div className='text-justify text-sm md:text-lg pt-4 space-y-4 mb-4'>
        <p>
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
              solicitar la licencia turística a través de la plataforma
            </Link>
          </span>{' '}
          en línea o en las oficinas de{' '}
          <strong>turismo de la Comunidad Valenciana</strong>.
        </p>

        <p>
          Se deben presentar todos los documentos requeridos, incluyendo la
          fotocopia del DNI, la acreditación de la propiedad, el certificado de
          compatibilidad urbanística, la cédula de habitabilidad y el seguro de
          responsabilidad civil.
        </p>

        <p>
          Cada uno de estos pasos requiere atención al detalle y cumplimiento de
          las regulaciones específicas para{' '}
          <strong>
            asegurar una tramitación de la licencia exitosa en Santa Pola
          </strong>
          . La asistencia{' '}
          <span>
            <Link
              href={'http://dygav.es/licencias-turisticas'}
              className='underline text-p600'
            >
              de un profesional especializado en gestión de propiedades y
              licencias turísticas
            </Link>
          </span>{' '}
          puede ser de gran ayuda para facilitar este proceso. En{' '}
          <strong className='text-p600'>DYGAV</strong>, estamos comprometidos a
          guiarte en cada etapa de este proceso. Contáctanos para obtener más
          detalles y asesoramiento a medida
        </p>
      </div>

      <LicenciasTuristicas />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-40 lg:px-10 mt-16'>
        ¿Cuánto tiempo se tarda en conseguir la licencia turística en Santa
        Pola?
      </h2>

      <div className='text-justify text-sm md:text-lg pt-4 space-y-4 mb-4'>
        <p>
          El tiempo necesario para{' '}
          <strong>
            obtener una licencia turística en Santa Pola generalmente se
            extiende entre 4 y 5 meses
          </strong>
          . Este período puede variar según diversos factores, como la
          eficiencia administrativa del Ayuntamiento de Santa Pola, el volumen
          de solicitudes en trámite y la exactitud y completitud de la
          documentación presentada por el solicitante.
        </p>

        <p>
          Es fundamental tener en cuenta que, aunque este es el plazo promedio,
          ciertas épocas del año pueden experimentar una mayor demanda, lo cual
          podría alargar el tiempo de procesamiento. Por lo tanto, se aconseja a
          los propietarios que inicien el proceso con antelación y se aseguren
          de proporcionar toda la información y documentación requerida de
          manera precisa para facilitar una tramitación fluida y sin
          contratiempos.
        </p>
      </div>

      <HelpYouForm />
    </section>
  );
};
