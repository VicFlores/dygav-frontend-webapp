import Link from 'next/link';
import React from 'react';
import { AlquilerVacacional, HelpYouForm, LicenciasTuristicas } from '..';
import { CityImages } from './CityImages';
import { LicencesIcons } from './LicencesIcons';

const images = [
  {
    src: 'https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649693/Dygav%20Images/Gavin/63_dh3nuj_rmxogj.jpg',
    alt: 'Licencias turísticas: Gavin ciudad',
  },
];

export const GavinInfo = () => {
  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h1 className='text-center text-2xl md:text-3xl pb-4 mb-6 font-semibold border-b-4 border-b-p600 w-auto md:px-10'>
        Licencias Turísticas en Gavin
      </h1>

      <div className='text-justify lg:text-start text-sm md:text-lg pt-4 space-y-4 mb-10'>
        <p>
          Gavin, un encantador pueblo en los Pirineos Aragoneses, ofrece una
          experiencia única para los amantes de la montaña y la naturaleza. Este
          tranquilo pueblo se caracteriza por su entorno natural, ideal para
          aquellos que buscan una escapada pacífica lejos del bullicio de los
          grandes centros turísticos. Conseguir una licencia turística en Gavin
          para tu propiedad representa una excelente oportunidad para atraer a
          visitantes interesados en explorar la belleza y serenidad de los
          Pirineos.
        </p>

        <p>
          Este precioso pueblo no solo proporciona un acceso fácil a
          impresionantes senderos de montaña y paisajes naturales, además, su
          proximidad a Biescas hace que también esté imbuido de un rico
          patrimonio cultural. Los visitantes pueden sumergirse en la historia
          local, descubrir antiguas tradiciones, disfrutar de la gastronomía de
          la región y asistir a los eventos que se celebran a lo largo del año
          en Gavin, Biescas y el Valle de Tena en general. Invertir en una
          vivienda de uso turístico en Gavin significa ofrecer una puerta de
          entrada a una experiencia auténtica y tranquila en los Pirineos.
        </p>

        <p>
          A pesar de ser un destino más pequeño, Gavin está comenzando a
          reconocer el valor del turismo, y el gobierno local está adoptando una
          postura positiva hacia el desarrollo turístico. Esto significa que el
          proceso para obtener una licencia turística en Gavin es accesible y
          está adaptado a las necesidades de los propietarios que buscan entrar
          en este mercado prometedor.
        </p>
      </div>

      <CityImages images={images} />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:-mx-36 mt-24'>
        Guía para conseguir una licencia turística en Gavin
      </h2>

      <div className='text-justify lg:text-start text-sm md:text-lg pt-4 space-y-4 mb-10'>
        <p>
          Antes de empezar, es importante familiarizarse con las normativas
          específicas de Gavin y la región más amplia de Aragón. El{' '}
          <strong>Decreto 1/2023 del Gobierno de Aragón</strong> establece un
          marco legal para la regulación de estas propiedades en toda la región.
        </p>

        <p>
          El proceso de obtención de una licencia turística en Gavin implica
          varios pasos clave, desde la comprensión de la normativa hasta la
          inscripción y registro de la propiedad. A continuación, te ofrecemos
          una guía detallada para cada etapa del proceso. Si prefieres
          asistencia profesional, en{' '}
          <strong className='text-p600'>DYGAV</strong>{' '}
          <strong>somos expertos tanto en</strong>{' '}
          <span>
            <Link
              href={'/gestion-viviendas-turisticas'}
              className='underline text-p600'
            >
              gestión de viviendas de uso turístico
            </Link>
          </span>{' '}
          como en la{' '}
          <span>
            <Link
              href={'/licencias-turisticas'}
              className='underline text-p600'
            >
              tramitación de licencias turisticas
            </Link>
          </span>{' '}
          . ¡Contáctanos para más información!
        </p>
      </div>

      <AlquilerVacacional />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-72 lg:px-10 mt-16'>
        Entender la Normativa en Gavin
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Es crucial entender la normativa del Decreto 1/2023 del Gobierno de
        Aragón, que establece requisitos claros para las viviendas de uso
        turístico en Gavin. Estos incluyen normas sobre habitabilidad, seguridad
        y accesibilidad, enfocándose en la calidad y satisfacción del cliente.
        Puedes leer este decreto{' '}
        <span>
          <Link
            href={
              'https://www.boa.aragon.es/cgi-bin/EBOA/BRSCGI?CMD=VEROBJ&MLKOB=1257201622626'
            }
            className='underline text-p600'
            target='_blanck'
          >
            en el Boletín Oficial de Aragón BOA
          </Link>
        </span>
        .
      </p>

      <LicencesIcons image='https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649297/Dygav%20Images/Icons/undraw_file_searching_re_3evy_brkjza_ilcb0a.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Requisitos para una Vivienda de Uso Turístico en Gavin
      </h2>

      <p className='text-justify lg:text-start text-sm lg:self-start md:text-lg my-4'>
        Las viviendas en Gavin deben cumplir con estándares específicos,
        similares a los de otras áreas de Aragón:
      </p>

      <ul className='text-sm md:text-lg px-3 pt-4 list-disc pl-4 md:pl-32 space-y-4'>
        <li>
          <strong>Dormitorios dobles:</strong> mínimo de 10 m² de superficie y
          25 m³ de volumen.
        </li>

        <li>
          <strong>Dormitorios individuales:</strong> mínimo de 6 m² y 15 m³.
        </li>

        <li>
          <strong>Salón-comedor:</strong> mínimo de 14 m² y 35 m³.
        </li>

        <li>
          <strong>Cocina:</strong> mínimo de 6 m² y 15 m³.
        </li>

        <li>
          <strong>Salón-comedor-cocina (unificado):</strong> mínimo de 18 m² y
          45 m³.
        </li>

        <li>
          <strong>Baño:</strong> mínimo de 3 m² y 6 m³.
        </li>

        <li>
          <strong>
            Estudios (dormitorio integrado en salón-comedor-cocina):
          </strong>{' '}
          máximo de 28 m² y 70 m³.
        </li>

        <li>
          <strong>Incluir un botiquín es obligatorio</strong>
        </li>
      </ul>

      <LicencesIcons image='https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649276/Dygav%20Images/Icons/undraw_house_searching_re_stk8_cjs9qi_scufj5.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Proceso de Declaración Responsable
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        La declaración responsable en Gavin te permite comenzar a alquilar la
        propiedad casi inmediatamente, esperando confirmación de Turismo de
        Aragón. Esta declaración debe confirmar el cumplimiento de los
        requisitos de habitabilidad y seguridad.
      </p>

      <LicencesIcons image='https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649269/Dygav%20Images/Icons/undraw_attached_file_re_0n9b_wyqge2_sbuoak.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Inscripción y Registro
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        Tras la declaración responsable, inicia la actividad turística en Gavin,
        sujeta a verificación y registro en el Registro de Turismo de Aragón. Es
        importante tener un plano acotado de la vivienda y estar preparado para
        el pago de la tasa de tramitación.
      </p>

      <LicenciasTuristicas />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Gestión y Mantenimiento de la Vivienda
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        La gestión en Gavin debe enfocarse en la calidad y satisfacción del
        cliente, asegurando que la vivienda cumpla con los estándares para
        ofrecer una experiencia única y acogedora en los Pirineos.
      </p>

      <LicencesIcons image='https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649275/Dygav%20Images/Icons/undraw_buy_house_re_8xq7_obrxnk_so8fsx.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Cumplimiento y Régimen Sancionador
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        El incumplimiento de las normativas en Gavin puede llevar a sanciones.
        Es vital mantenerse informado sobre las normativas locales y regionales
        para asegurar el cumplimiento.
      </p>

      <LicencesIcons image='https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649297/Dygav%20Images/Icons/undraw_file_bundle_re_6q1e_z2q9i8_mizphu.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Conclusión y Recursos Adicionales
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        Ofrecer una vivienda de uso turístico en Gavin es una oportunidad única
        para integrarse en un mercado turístico en desarrollo en los Pirineos.
        Para obtener más información y detalles específicos, puedes contactarnos
        o también consultar las{' '}
        <span>
          <Link
            href={
              'https://www.aragon.es/tramitador/-/tramite/declaracion-responsable-viviendas-turistico'
            }
            className='underline text-p600'
            target='_blanck'
          >
            fuentes oficiales del Gobierno de Aragón
          </Link>
        </span>{' '}
        y las autoridades locales de turismo.
      </p>

      <HelpYouForm />
    </section>
  );
};
