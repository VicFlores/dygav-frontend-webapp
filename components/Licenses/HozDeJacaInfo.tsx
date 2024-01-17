import Link from 'next/link';
import React from 'react';
import { AlquilerVacacional, HelpYouForm, LicenciasTuristicas } from '..';
import { CityImages } from './CityImages';
import { LicencesIcons } from './LicencesIcons';

const images = [
  {
    src: 'https://res.cloudinary.com/vicflores11/image/upload/v1705447533/Dygav/Hoz%20De%20Jaca/C_49_jlgfrw.webp',
    alt: 'Licencias turísticas: Hoz de Jaca',
  },
];

export const HozDeJacaInfo = () => {
  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h1 className='text-center text-2xl md:text-3xl pb-4 mb-6 font-semibold border-b-4 border-b-p600 w-auto md:px-10'>
        Licencias Turísticas en Hoz de Jaca
      </h1>

      <div className='text-justify lg:text-start text-sm md:text-lg pt-4 space-y-4 mb-10'>
        <p>
          Hoz de Jaca, un pequeño pueblo que parece salido de un cuento en las
          montañas del Pirineo Aragonés, es un destino encantador conocido por
          su impresionante ubicación y vistas panorámicas del embalse de Búbal.
          Este municipio ofrece una combinación única de serenidad y aventura,
          <strong>
            convirtiéndolo en un lugar idóneo para obtener una licencia
            turística
          </strong>
          . Aquí, los propietarios tienen la oportunidad de sumergirse en un
          mercado turístico que valora tanto la belleza natural como las
          actividades al aire libre.
        </p>

        <p>
          El pueblo, situado en un enclave natural impresionante, es perfecto
          para los visitantes que buscan escapar del ajetreo de la vida
          cotidiana y sumergirse en la tranquilidad de la montaña. Además de las
          actividades al aire libre como el senderismo y el ciclismo, Hoz de
          Jaca es conocido por su tirolina, una de las más largas de Europa, que
          atrae a aventureros de todas partes.
        </p>

        <p>
          <strong>
            Obtener una licencia turística en Hoz de Jaca significa ofrecer a
            los visitantes una experiencia única
          </strong>
          , en la que pueden disfrutar tanto de la paz como de la emoción en un
          mismo lugar. Las propiedades aquí deben ser acogedoras y cómodas,
          proporcionando un refugio después de un día de exploración y aventura.
        </p>
      </div>

      <CityImages images={images} />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:-mx-36 mt-24'>
        Guia para obtener tu licencia turística en Hoz de Jaca
      </h2>

      <div className='text-justify lg:text-start text-sm md:text-lg pt-4 space-y-4 mb-10'>
        <p>
          <strong>
            El proceso para adquirir una licencia turística se rige por el
            Decreto 1/2023 del Gobierno de Aragón
          </strong>
          , que establece normas claras sobre habitabilidad, seguridad y
          accesibilidad. Sin embargo, en Hoz de Jaca, también es crucial que las
          viviendas se integren bien en el entorno natural y mantengan el
          carácter tradicional del pueblo.
        </p>

        <p>
          El turismo en Hoz de Jaca se centra en el respeto por el medio
          ambiente y la promoción de un estilo de vida sostenible. Como
          propietario, es importante que tu propiedad refleje estos valores,
          asegurándote de que tu oferta turística contribuya positivamente a la
          comunidad y al entorno natural.
        </p>

        <p>
          A continuación,{' '}
          <strong>
            te ofrecemos una guía paso a paso para navegar en el proceso de
            obtención de una licencia turística en Hoz de Jaca
          </strong>
          , para que puedas asegurarte de que tu propiedad no solo cumple con
          todas las regulaciones, sino que también se destaque como un destino
          atractivo y respetuoso con el entorno, pero si prefieres que nos
          encarguemos nosotros, en <strong className='text-p600'>DYGAV</strong>{' '}
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
          .
        </p>
      </div>

      <AlquilerVacacional />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-72 lg:px-10 mt-16'>
        Entender la Normativa en Hoz de Jaca
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        En Hoz de Jaca, es esencial comprender el Decreto 1/2023 del Gobierno de
        Aragón, que regula las viviendas de uso turístico. Este decreto
        establece requisitos claros en términos de habitabilidad, seguridad y
        accesibilidad, con un enfoque en la calidad y satisfacción del cliente.
        Para obtener más detalles, se recomienda{' '}
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

      <LicencesIcons image='https://res.cloudinary.com/vicflores11/image/upload/v1705016523/Dygav/undraw_file_searching_re_3evy_brkjza.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Requisitos para una vivienda de uso turístico en Hoz de Jaca
      </h2>

      <p className='text-justify lg:text-start text-sm lg:self-start md:text-lg my-4'>
        Las viviendas turísticas en Hoz de Jaca deben cumplir con los siguientes
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
        Además, es obligatorio incluir un botiquín y garantizar que la capacidad
        total de la vivienda no exceda la capacidad máxima alojativa permitida.
      </p>

      <LicencesIcons image='https://res.cloudinary.com/vicflores11/image/upload/v1705017030/Dygav/undraw_house_searching_re_stk8_cjs9qi.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Proceso de Declaración Responsable
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        La declaración responsable en Hoz de Jaca{' '}
        <strong>
          permite iniciar el alquiler de la propiedad de manera inmediata
        </strong>
        , sujeta a confirmación posterior de Turismo de Aragón. Esta declaración
        debe confirmar el cumplimiento de todos los requisitos de habitabilidad
        y seguridad.
      </p>

      <LicencesIcons image='https://res.cloudinary.com/vicflores11/image/upload/v1705017302/Dygav/undraw_attached_file_re_0n9b_wyqge2.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Inscripción y Registro
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        <strong>
          Tras la declaración responsable, se puede comenzar la actividad
          turística
        </strong>
        , sujeta a verificación y registro en el Registro de Turismo de Aragón.
        Es importante preparar un plano acotado de la vivienda y estar listo
        para el pago de la tasa de tramitación.
      </p>

      <LicenciasTuristicas />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Gestión y Mantenimiento de la Vivienda
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        La gestión de viviendas turísticas en Hoz de Jaca debe enfocarse en
        proporcionar{' '}
        <strong>
          una experiencia de alta calidad y satisfacción a los clientes
        </strong>
        , asegurando que la vivienda cumpla con los estándares necesarios para
        una estancia confortable y agradable.
      </p>

      <LicencesIcons image='https://res.cloudinary.com/vicflores11/image/upload/v1705018501/Dygav/undraw_buy_house_re_8xq7_obrxnk.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Cumplimiento y Régimen Sancionador
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        Es crucial cumplir con las normativas en Hoz de Jaca para evitar
        sanciones. Mantenerse actualizado sobre las normativas locales y
        regionales es esencial para garantizar el cumplimiento total.
      </p>

      <LicencesIcons image='https://res.cloudinary.com/vicflores11/image/upload/v1705018617/Dygav/undraw_file_bundle_re_6q1e_z2q9i8.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Conclusión y Recursos Adicionales
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        Ofrecer una vivienda de uso turístico en Hoz de Jaca es{' '}
        <strong>
          una gran oportunidad para integrarse en un mercado turístico atractivo
          y en crecimiento
        </strong>
        . Para más información y asesoramiento, ponte en contacto con nosotros o
        consulta las{' '}
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
