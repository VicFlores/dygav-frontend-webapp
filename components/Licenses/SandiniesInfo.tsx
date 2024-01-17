import Link from 'next/link';
import React from 'react';
import { AlquilerVacacional, HelpYouForm, LicenciasTuristicas } from '..';
import { CityImages } from './CityImages';
import { LicencesIcons } from './LicencesIcons';

const images = [
  {
    src: 'https://res.cloudinary.com/vicflores11/image/upload/v1705507565/Dygav/Sandini%C3%A9s/C_34_ergopo.webp',
    alt: 'Licencias turísticas: Biescas ciudad',
  },
];

export const SandiniesInfo = () => {
  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h1 className='text-center text-2xl md:text-3xl pb-4 mb-6 font-semibold border-b-4 border-b-p600 w-auto md:px-10'>
        Licencias Turísticas en Sandinies
      </h1>

      <div className='text-justify lg:text-start text-sm md:text-lg pt-4 space-y-4 mb-10'>
        <p>
          Sandiniés, un pequeño y encantador pueblo en el Valle de Tena, es un
          tesoro oculto en los Pirineos Aragoneses,{' '}
          <strong>
            ideal para quienes buscan obtener una licencia turística en un lugar
            tranquilo y pintoresco.
          </strong>{' '}
          Este pueblo se caracteriza por su belleza natural inigualable y su
          atmósfera de tranquilidad, ofreciendo una experiencia irresistible a
          los visitantes que buscan escapar del bullicio de las zonas más
          turísticas.
        </p>

        <p>
          Rodeado de impresionantes paisajes montañosos y ubicado cerca de ríos
          y lagos cristalinos, Sandiniés es el lugar perfecto para actividades
          como senderismo, ciclismo y pesca. Su proximidad a las estaciones de
          esquí también lo convierte en un destino atractivo durante la
          temporada de invierno, con opciones para esquí y snowboard.
        </p>

        <p>
          <strong>
            Optar por una licencia turística en Sandiniés significa brindar a
            los huéspedes una experiencia auténtica en los Pirineos
          </strong>
          . Las viviendas de uso turístico en este pueblo deben combinar
          comodidad y rusticidad, reflejando el encanto único del entorno y
          proporcionando un ambiente acogedor.
        </p>
      </div>

      <CityImages images={images} />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:-mx-36 mt-24'>
        Guía para obtener una licencia turística en Sandinies
      </h2>

      <div className='text-justify lg:text-start text-sm md:text-lg pt-4 space-y-4 mb-10'>
        <p>
          <strong>
            El proceso de obtención de una licencia turística en Sandiniés sigue
            el marco legal establecido por el Decreto 1/2023 del Gobierno de
            Aragón.
          </strong>
          Este decreto establece normativas claras en cuanto a habitabilidad,
          seguridad y accesibilidad, garantizando que las viviendas turísticas
          ofrezcan un alto estándar de calidad.
        </p>

        <p>
          Además, en Sandiniés, hay un fuerte énfasis en la preservación del
          entorno natural y la integración armoniosa de las viviendas turísticas
          en el paisaje. Como propietario, es esencial que tu propiedad respete
          estos valores y contribuya a mantener el carácter tranquilo y natural
          del pueblo.
        </p>

        <p>
          En esta guía,{' '}
          <strong>
            te ofreceremos información detallada sobre cómo obtener una licencia
            turística en Sandiniés
          </strong>
          , asegurando que tu propiedad cumpla con todas las regulaciones y se
          convierta en un destino top para tus huéspedes. Pero si prefieres que
          nos encarguemos nosotros, en{' '}
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
          y estaremos encantados de ayudarte en todas las etapas del proceso.
        </p>
      </div>

      <AlquilerVacacional />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-72 lg:px-10 mt-16'>
        Entender la Normativa en Sandiniés
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        En Sandiniés, es esencial comprender el Decreto 1/2023 del Gobierno de
        Aragón que establece las normativas para viviendas de uso turístico.
        Este decreto incluye requisitos de habitabilidad, seguridad y
        accesibilidad, con un enfoque en la calidad y satisfacción del cliente.
        Se puede obtener{' '}
        <span>
          <Link
            href={
              'https://www.boa.aragon.es/cgi-bin/EBOA/BRSCGI?CMD=VEROBJ&MLKOB=1257201622626'
            }
            className='underline text-p600'
            target='_blanck'
          >
            más información sobre este decreto en el Boletín Oficial de Aragón
            BOA
          </Link>
        </span>
        .
      </p>

      <LicencesIcons image='https://res.cloudinary.com/vicflores11/image/upload/v1705016523/Dygav/undraw_file_searching_re_3evy_brkjza.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Requisitos para una vivienda turística en Sandiniés
      </h2>

      <p className='text-justify lg:text-start text-sm lg:self-start md:text-lg my-4'>
        Las viviendas turísticas en Sandiniés deben cumplir con los siguientes
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
        Además, se debe incluir un botiquín y garantizar que la capacidad total
        de la vivienda no exceda la permitida.
      </p>

      <LicencesIcons image='https://res.cloudinary.com/vicflores11/image/upload/v1705017030/Dygav/undraw_house_searching_re_stk8_cjs9qi.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Proceso de Declaración Responsable
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        La declaración responsable en Sandiniés{' '}
        <strong>
          permite iniciar el alquiler de la propiedad de manera inmediata
        </strong>
        , sujeta a una confirmación posterior por parte de Turismo de Aragón.
        Esta declaración debe confirmar el cumplimiento de todos los requisitos
        de habitabilidad y seguridad.
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
        Es importante tener un plano acotado de la vivienda y estar listo para
        el pago de la tasa correspondiente.
      </p>

      <LicenciasTuristicas />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Gestión y Mantenimiento de la Vivienda
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        <strong>
          La gestión de viviendas turísticas en Sandiniés debe centrarse en
          proporcionar una experiencia de alta calidad
        </strong>{' '}
        y satisfacción al cliente. Asegúrate de que la vivienda cumpla con los
        estándares necesarios para una estancia confortable y agradable.
      </p>

      <LicencesIcons image='https://res.cloudinary.com/vicflores11/image/upload/v1705018501/Dygav/undraw_buy_house_re_8xq7_obrxnk.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Cumplimiento y Régimen Sancionador
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        Cumplir con las normativas en Sandiniés{' '}
        <strong>es vital para evitar sanciones</strong>. Mantente informado
        sobre las normativas locales y regionales para garantizar el
        cumplimiento total.
      </p>

      <LicencesIcons image='https://res.cloudinary.com/vicflores11/image/upload/v1705018617/Dygav/undraw_file_bundle_re_6q1e_z2q9i8.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Conclusión y Recursos Adicionales
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        Ofrecer{' '}
        <strong>
          una vivienda de uso turístico en Sandiniés es una oportunidad
          excelente
        </strong>{' '}
        para integrarse en un mercado turístico atractivo y en crecimiento. Para
        más información y asesoramiento, contáctanos o consulta las{' '}
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
