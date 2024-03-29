import Link from 'next/link';
import React from 'react';
import { AlquilerVacacional, HelpYouForm, LicenciasTuristicas } from '..';
import { CityImages } from './CityImages';
import { LicencesIcons } from './LicencesIcons';

const images = [
  {
    src: 'https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649679/Dygav%20Images/Jaca/C_49_jlgfrw_xmfikz.jpg',
    alt: 'Licencias turísticas: Jaca',
  },
];

export const JacaInfo = () => {
  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h1 className='text-center text-2xl md:text-3xl pb-4 mb-6 font-semibold border-b-4 border-b-p600 w-auto md:px-10'>
        Licencias Turísticas Jaca
      </h1>

      <div className='text-justify lg:text-start text-sm md:text-lg pt-4 space-y-4 mb-10'>
        <p>
          Jaca, una ciudad histórica en los Pirineos Aragoneses, es un destino
          turístico destacado, conocido por su rica historia, cultura y su
          proximidad a las impresionantes montañas y estaciones de esquí.
          <strong>
            Conseguir una licencia turística en Jaca ofrece la oportunidad de
            sumergirse en un mercado turístico diverso y activo
          </strong>
          , ideal para quienes buscan capitalizar la mezcla única de actividades
          culturales, históricas y de aventura al aire libre que ofrece la
          ciudad.
        </p>

        <p>
          Jaca, a menudo considerada la capital del Pirineo Aragonés, es famosa
          por su icónica catedral, fortificaciones antiguas y el Museo Diocesano
          de Arte Medieval. Estos hitos históricos, junto con eventos culturales
          regulares, atraen a un gran número de turistas interesados en la
          cultura y la historia de la región. Además, la ciudad es un punto de
          partida ideal para explorar los valles y montañas circundantes, lo que
          la convierte en un destino popular para los amantes de la naturaleza y
          los deportes de invierno.
        </p>

        <p>
          <strong>
            Al buscar una licencia turística en Jaca, es crucial considerar cómo
            tu propiedad puede proporcionar una experiencia única
          </strong>{' '}
          que combine la comodidad moderna con el encanto histórico y cultural
          de la ciudad.
        </p>
      </div>

      <CityImages images={images} />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:-mx-36 mt-24'>
        Guia para obtener tu licencia turística en Jaca
      </h2>

      <div className='text-justify lg:text-start text-sm md:text-lg pt-4 space-y-4 mb-10'>
        <p>
          <strong>
            El proceso de obtención de una licencia turística en Jaca se rige
            por el Decreto 1/2023 del Gobierno de Aragón
          </strong>
          , que establece requisitos claros en cuanto a habitabilidad, seguridad
          y accesibilidad. Además, dada la importancia histórica y cultural de
          Jaca, es importante que las viviendas turísticas se integren bien en
          el tejido urbano y respeten el patrimonio arquitectónico de la ciudad.
        </p>

        <p>
          Jaca ofrece una{' '}
          <strong>
            oportunidad excepcional para los propietarios de viviendas de uso
            turístico
          </strong>{' '}
          para participar en un turismo que valora la historia, la cultura y la
          naturaleza. Como propietario, tendrás la responsabilidad de asegurarte
          de que tu propiedad no solo cumpla con las regulaciones, sino que
          también contribuya a la rica experiencia turística de Jaca.
        </p>

        <p>
          En las siguientes secciones de esta guía, te proporcionaremos
          información detallada sobre cómo navegar en el proceso de obtención de
          una licencia turística en Jaca. Pero si prefieres que nos encarguemos
          nosotros, en <strong className='text-p600'>DYGAV</strong>{' '}
          <strong>somos expertos en</strong>{' '}
          <span>
            <Link
              href={'/gestion-viviendas-turisticas'}
              className='underline text-p600'
            >
              gestión de viviendas de uso turístico
            </Link>
          </span>{' '}
          y en la{' '}
          <span>
            <Link
              href={'/licencias-turisticas'}
              className='underline text-p600'
            >
              tramitación de licencias turisticas
            </Link>
          </span>
          y estaremos encantados de ayudarte con todo el proceso.
        </p>
      </div>

      <AlquilerVacacional />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-72 lg:px-10 mt-16'>
        Entender la Normativa en Jaca
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        En Jaca, es crucial entender el{' '}
        <strong>Decreto 1/2023 del Gobierno de Aragón</strong>, que regula las
        viviendas de uso turístico. Este decreto{' '}
        <strong>
          establece requisitos de habitabilidad, seguridad y accesibilidad
        </strong>
        , con un enfoque en la calidad y satisfacción del cliente. Para obtener
        más información, se recomienda{' '}
        <span>
          <Link
            href={
              'https://www.boa.aragon.es/cgi-bin/EBOA/BRSCGI?CMD=VEROBJ&MLKOB=1257201622626'
            }
            className='underline text-p600'
            target='_blanck'
          >
            consultar el Boletín Oficial de Aragón BOA
          </Link>
        </span>
        .
      </p>

      <LicencesIcons image='https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649297/Dygav%20Images/Icons/undraw_file_searching_re_3evy_brkjza_ilcb0a.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Requisitos para una vivienda de uso turístico en Jaca
      </h2>

      <p className='text-justify lg:text-start text-sm lg:self-start md:text-lg my-4'>
        Las viviendas turísticas en Jaca deben cumplir con los siguientes
        estándares mínimos:
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
      </ul>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        Incluir un botiquín es obligatorio y la capacidad total de la vivienda
        no debe exceder la permitida.
      </p>

      <LicencesIcons image='https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649276/Dygav%20Images/Icons/undraw_house_searching_re_stk8_cjs9qi_scufj5.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Proceso de Declaración Responsable
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        <strong>
          La declaración responsable en Jaca te permite comenzar a alquilar la
          propiedad de inmediato
        </strong>
        , sujeta a confirmación posterior de Turismo de Aragón. Esta declaración
        debe confirmar que la vivienda cumple con los requisitos de
        habitabilidad y seguridad.
      </p>

      <LicencesIcons image='https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649269/Dygav%20Images/Icons/undraw_attached_file_re_0n9b_wyqge2_sbuoak.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Inscripción y Registro
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        <strong>
          Tras presentar la declaración responsable, puedes iniciar la actividad
          turística
        </strong>
        , sujeta a verificación y registro en el Registro de Turismo de Aragón.
        Prepárate para presentar un plano acotado de la vivienda y para el pago
        de la tasa de tramitación.
      </p>

      <LicenciasTuristicas />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Gestión y Mantenimiento de la Vivienda
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        <strong>
          La gestión de viviendas turísticas en Jaca debe enfocarse en ofrecer
          una experiencia de alta calidad y satisfacción al cliente
        </strong>
        . Asegúrate de que la vivienda cumpla con los estándares necesarios para
        una estancia confortable y agradable.
      </p>

      <LicencesIcons image='https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649275/Dygav%20Images/Icons/undraw_buy_house_re_8xq7_obrxnk_so8fsx.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Cumplimiento y Régimen Sancionador
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        El cumplimiento de las normativas en Jaca es vital para evitar
        sanciones. Mantente al día con las normativas locales y regionales
        relevantes.
      </p>

      <LicencesIcons image='https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649297/Dygav%20Images/Icons/undraw_file_bundle_re_6q1e_z2q9i8_mizphu.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Conclusión y Recursos Adicionales
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        Ofrecer{' '}
        <strong>
          una vivienda de uso turístico en Jaca representa una excelente
          oportunidad para participar en un mercado turístico
        </strong>{' '}
        dinámico y diversificado. Para obtener más detalles y asesoramiento,
        ponte en contacto con nosotros o consulta las{' '}
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
