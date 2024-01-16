import Link from 'next/link';
import React from 'react';
import { AlquilerVacacional, HelpYouForm, LicenciasTuristicas } from '..';
import { CityImages } from './CityImages';
import { CityCardsFooter } from './CityCardsFooter';
import { LicencesIcons } from './LicencesIcons';

const images = [
  {
    src: 'https://res.cloudinary.com/vicflores11/image/upload/v1705427061/Dygav/Escarilla/C_14_ojdm9d.webp',
    alt: 'Licencias turísticas: Lanuza',
  },
];

export const EscarrillaInfo = () => {
  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h1 className='text-center text-2xl md:text-3xl pb-4 mb-6 font-semibold border-b-4 border-b-p600 w-auto md:px-10'>
        Licencias Turísticas en Escarrilla
      </h1>

      <div className='text-justify lg:text-start text-sm md:text-lg pt-4 space-y-4 mb-10'>
        <p>
          Escarrilla, un precioso pueblo situado en el mismo centro del Valle de
          Tena, es un destino muy demandado en los Pirineos Aragoneses. Este
          lugar es perfecto para quienes buscan una experiencia turística
          auténtica y tranquila, combinando la belleza de la naturaleza con la
          rica cultura de montaña.{' '}
          <strong>Conseguir una licencia turística en Escarrilla</strong> ofrece
          la oportunidad de captar un segmento del mercado que valora tanto la
          serenidad como el acceso a actividades al aire libre.
        </p>

        <p>
          Escarrilla se distingue por su ambiente pacífico y su entorno natural
          impresionante, con ríos cristalinos y vistas a las majestuosas
          montañas. Es un destino ideal para los amantes de actividades como la
          pesca, el senderismo y el ciclismo en verano, mientras que en
          invierno, su cercanía a las estaciones de esquí atrae a entusiastas de
          los deportes de nieve.
        </p>

        <p>
          Este pueblo es perfecto para aquellos que buscan ofrecer una
          experiencia turística que se aleje del bullicio de las grandes
          estaciones de esquí, brindando un refugio tranquilo y auténtico. Las
          propiedades aquí deben ofrecer comodidad y una conexión con el entorno
          natural, permitiendo a los huéspedes desconectarse y relajarse.
        </p>
      </div>

      <CityImages images={images} />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:-mx-36 mt-24'>
        Guia para obtener una licencia turística en Escarrilla
      </h2>

      <div className='text-justify lg:text-start text-sm md:text-lg pt-4 space-y-4 mb-10'>
        <p>
          <strong>
            El proceso de obtención de una licencia turística en Escarrilla se
            rige por el Decreto 1/2023 del Gobierno de Aragón
          </strong>
          , que establece las normas sobre habitabilidad, seguridad y
          accesibilidad. Es esencial que tu propiedad cumpla con estos
          estándares y refleje el carácter único de la región.
        </p>

        <p>
          Además, Escarrilla, con su compromiso con el turismo sostenible, es un
          lugar donde las propiedades deben integrarse armoniosamente con el
          entorno natural. Como propietario, tendrás la oportunidad de
          contribuir al desarrollo turístico del pueblo, respetando y
          promoviendo su patrimonio natural y cultural.
        </p>

        <p>
          A continuación,{' '}
          <strong>
            encontrarás una guía detallada sobre cómo obtener una licencia
            turística en Escarrilla
          </strong>
          , asegurándote de que tu vivienda no solo cumpla con las regulaciones,
          sino que también se convierta en un destino preferido para los
          visitantes. Pero si prefieres que nos encarguemos nosotros, en{' '}
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
          y estaremos encantados de ayudarte.
        </p>
      </div>

      <AlquilerVacacional />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-72 lg:px-10 mt-16'>
        Entender la Normativa en Escarrilla
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Para los propietarios en Escarrilla, es crucial comprender el Decreto
        1/2023 del Gobierno de Aragón que regula las viviendas de uso turístico.
        Este decreto establece normativas claras sobre habitabilidad, seguridad
        y accesibilidad, centrándose en la calidad y satisfacción del cliente.
        Para más información, se recomienda{' '}
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
        Requisitos de una vivienda de uso turístico en Escarrilla
      </h2>

      <p className='text-justify lg:text-start text-sm lg:self-start md:text-lg my-4'>
        Las viviendas turísticas en Escarrilla deben cumplir con los siguientes
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
        Además, es importante incluir un botiquín y no exceder la capacidad
        máxima alojativa permitida.
      </p>

      <LicencesIcons image='https://res.cloudinary.com/vicflores11/image/upload/v1705017030/Dygav/undraw_house_searching_re_stk8_cjs9qi.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Proceso de Declaración Responsable
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        En Escarrilla,{' '}
        <strong>
          la declaración responsable te permite empezar a alquilar la propiedad
          inmediatamente
        </strong>
        , pendiente de confirmación por parte de Turismo de Aragón. Esta
        declaración debe asegurar que la vivienda cumple con los requisitos de
        habitabilidad y seguridad.
      </p>

      <LicencesIcons image='https://res.cloudinary.com/vicflores11/image/upload/v1705017302/Dygav/undraw_attached_file_re_0n9b_wyqge2.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Inscripción y Registro
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        <strong>
          Tras la declaración responsable, puedes iniciar la actividad turística
          en Escarrilla
        </strong>
        , sujeta a verificación y registro en el Registro de Turismo de Aragón.
        Es importante tener un plano acotado de la vivienda y estar preparado
        para el pago de la tasa correspondiente.
      </p>

      <LicenciasTuristicas />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Gestión y Mantenimiento de la Vivienda
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        La gestión de viviendas turísticas en Escarrilla debe enfocarse en la
        calidad y satisfacción del cliente.{' '}
        <strong>
          Asegúrate de que la vivienda cumpla con los estándares adecuados
        </strong>{' '}
        para proporcionar una experiencia turística atractiva y confortable.
      </p>

      <LicencesIcons image='https://res.cloudinary.com/vicflores11/image/upload/v1705018501/Dygav/undraw_buy_house_re_8xq7_obrxnk.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Cumplimiento y Régimen Sancionador
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        Cumplir con las normativas en Escarrilla es esencial para evitar
        sanciones. Mantente al día con las normativas locales y regionales
        relevantes.
      </p>

      <LicencesIcons image='https://res.cloudinary.com/vicflores11/image/upload/v1705018617/Dygav/undraw_file_bundle_re_6q1e_z2q9i8.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Conclusión y Recursos Adicionales
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        <strong>
          Ofrecer una vivienda de uso turístico en Escarrilla es una excelente
          oportunidad
        </strong>{' '}
        para participar en un mercado turístico diverso y en crecimiento. Para
        obtener más información y asesoramiento, ponte en contacto con nosotros
        o consulta las{' '}
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
