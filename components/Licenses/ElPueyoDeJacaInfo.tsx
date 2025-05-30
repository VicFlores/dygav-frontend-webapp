import Link from 'next/link';
import React from 'react';
import { AlquilerVacacional, HelpYouForm, LicenciasTuristicas } from '..';
import { CityImages } from './CityImages';
import { LicencesIcons } from './LicencesIcons';

const images = [
  {
    src: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/C_12_y69nh5.png',
    alt: 'Licencias turísticas: El Pueyo de Jaca ciudad',
  },
];

export const ElPueyoDeJacaInfo = () => {
  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h1 className='text-center text-2xl md:text-3xl pb-4 mb-6 font-semibold border-b-4 border-b-p600 w-auto md:px-10'>
        Licencias Turísticas en El Pueyo de Jaca
      </h1>

      <div className='text-justify lg:text-start text-sm md:text-lg pt-4 space-y-4 mb-10'>
        <p>
          El Pueyo de Jaca, un encantador pueblo situado en el Valle de Tena, es
          una joya de los Pirineos Aragoneses que ofrece un equilibrio perfecto
          entre belleza natural y acceso a actividades recreativas.{' '}
          <strong>
            Este lugar es ideal para quienes buscan obtener una licencia
            turística en un área que atrae a visitantes durante todo el año
          </strong>
          . El Pueyo de Jaca, con su proximidad al embalse de Búbal y las
          estaciones de esquí, es un destino fascinante para una amplia gama de
          turistas.
        </p>

        <p>
          El pueblo se destaca por su entorno idílico, rodeado de montañas y
          ríos, lo que lo convierte en un lugar perfecto para actividades como
          senderismo, ciclismo, pesca y deportes acuáticos en verano. En
          invierno, se transforma en un paraíso para los amantes de los deportes
          de nieve, gracias a su cercanía a algunas de las mejores estaciones de
          esquí de la región.
        </p>

        <p>
          <strong>
            Al buscar una licencia turística en El Pueyo de Jaca, es importante
            considerar cómo tu propiedad puede complementar estas atracciones
          </strong>
          . Las viviendas de uso turístico aquí deben ser cómodas y acogedoras,
          proporcionando un hogar lejos del hogar para los visitantes, al tiempo
          que reflejan la esencia rústica y encantadora del pueblo.
        </p>
      </div>

      <CityImages images={images} />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:-mx-36 mt-24'>
        Guia para obtener una licencia turística en Pueyo de Jaca
      </h2>

      <div className='text-justify lg:text-start text-sm md:text-lg pt-4 space-y-4 mb-10'>
        <p>
          <strong>
            El proceso para obtener una licencia turística está regido por el
            Decreto 1/2023 del Gobierno de Aragón
          </strong>
          , que establece normas claras sobre habitabilidad, seguridad y
          accesibilidad. Además, dado que El Pueyo de Jaca se enorgullece de su
          entorno natural, es fundamental que las propiedades se integren de
          manera sostenible en el paisaje y respeten el patrimonio local.
        </p>

        <p>
          Este pueblo ofrece{' '}
          <strong>
            una oportunidad única para los propietarios de viviendas de uso
            turístico
          </strong>{' '}
          para participar en un turismo que valora la autenticidad y la conexión
          con la naturaleza y la cultura local. Como propietario, tendrás la
          responsabilidad de asegurarte de que tu propiedad contribuya
          positivamente a la comunidad y al entorno.
        </p>

        <p>
          En las siguientes secciones, te proporcionaremos{' '}
          <strong>
            una guía detallada sobre los pasos necesarios para obtener una
            licencia turística en El Pueyo de Jaca
          </strong>
          , para que te asegures de que tu propiedad no solo cumpla con todas
          las regulaciones, sino que también sea un refugio acogedor para los
          visitante. Pero si prefieres que nos encarguemos nosotros, en{' '}
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
          <strong>como en la</strong>{' '}
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
        Entender la Normativa en El Pueyo de Jaca
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        En El Pueyo de Jaca, es fundamental comprender{' '}
        <strong>
          el Decreto 1/2023 del Gobierno de Aragón que regula las viviendas de
          uso turístico
        </strong>
        . Este decreto especifica normas sobre{' '}
        <strong>habitabilidad, seguridad y accesibilidad</strong>, enfocándose
        en la calidad y la satisfacción del cliente. Para más detalles,{' '}
        <span>
          <Link
            href={
              'https://www.boa.aragon.es/cgi-bin/EBOA/BRSCGI?CMD=VEROBJ&MLKOB=1257201622626'
            }
            className='underline text-p600'
            target='_blanck'
          >
            consulta el Boletín Oficial de Aragón BOA
          </Link>
        </span>
        .
      </p>

      <LicencesIcons image='https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_file_searching_re_3evy_brkjza.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Requisitos de una vivienda de uso turístico en el Pueyo de Jaca
      </h2>

      <p className='text-justify lg:text-start text-sm lg:self-start md:text-lg my-4'>
        Las viviendas turísticas en El Pueyo de Jaca deben cumplir con los
        siguientes estándares mínimos:
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
        Es importante incluir un botiquín y asegurarse de no superar la
        capacidad máxima alojativa permitida.
      </p>

      <LicencesIcons image='https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_house_searching_re_stk8_cjs9qi.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Proceso de Declaración Responsable
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        La declaración responsable en El Pueyo de Jaca{' '}
        <strong>
          te permite comenzar a alquilar la propiedad de manera inmediata
        </strong>
        , a la espera de la confirmación posterior por parte de Turismo de
        Aragón. Esta declaración debe confirmar que la vivienda cumple con los
        requisitos de habitabilidad y seguridad.
      </p>

      <LicencesIcons image='https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_attached_file_re_0n9b_wyqge2.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Inscripción y Registro
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        <strong>
          Tras la declaración responsable, puedes comenzar la actividad
          turística
        </strong>
        , sujeta a verificación y registro en el Registro de Turismo de Aragón.
        Prepárate para presentar un plano acotado de la vivienda y para el pago
        de la tasa correspondiente.
      </p>

      <LicenciasTuristicas />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Gestión y Mantenimiento de la Vivienda
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        La gestión de viviendas turísticas en El Pueyo de Jaca debe centrarse en
        proporcionar una experiencia de alta calidad y satisfacción al cliente.{' '}
        <strong>
          Asegúrate de que la vivienda cumpla con los estándares
          necesariosAsegúrate de que la vivienda cumpla con los estándares
          adecuados
        </strong>{' '}
        para una estancia agradable y confortable
      </p>

      <LicencesIcons image='https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_buy_house_re_8xq7_obrxnk.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Cumplimiento y Régimen Sancionador
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        El cumplimiento de las normativas en El Pueyo de Jaca{' '}
        <strong>es crucial para evitar sanciones</strong>. Mantente informado
        sobre las normativas locales y regionales aplicables.
      </p>

      <LicencesIcons image='https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_file_bundle_re_6q1e_z2q9i8.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Conclusión y Recursos Adicionales
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        Ofrecer{' '}
        <strong>
          una vivienda de uso turístico en El Pueyo de Jaca es una excelente
          oportunidad
        </strong>{' '}
        para participar en un mercado turístico diversificado y en crecimiento.
        Para obtener más detalles y asesoramiento, puedes contactarnos o
        consultar las{' '}
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
