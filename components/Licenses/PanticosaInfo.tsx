import Link from 'next/link';
import React from 'react';
import { AlquilerVacacional, HelpYouForm, LicenciasTuristicas } from '..';
import { CityImages } from './CityImages';
import { LicencesIcons } from './LicencesIcons';

const images = [
  {
    src: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/C_23_oi71uu-scaled.jpg',
    alt: 'Licencias turísticas: Panticosa ciudad',
  },
];

export const PanticosaInfo = () => {
  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h1 className='text-center text-2xl md:text-3xl pb-4 mb-6 font-semibold border-b-4 border-b-p600 w-auto md:px-10'>
        Licencias Turísticas en Panticosa
      </h1>

      <div className='text-justify lg:text-start text-sm md:text-lg pt-4 space-y-4 mb-10'>
        <p>
          Panticosa, un encantador pueblo al pie de las montañas del Pirineo
          Aragonés, es un destino turístico que destaca por su impresionante
          entorno natural y su rica historia. Conocido por su famoso balneario y
          las cercanas estaciones de esquí,{' '}
          <strong>
            Panticosa es un lugar ideal para aquellos que buscan obtener una
            licencia turística en un área con gran atractivo turístico durante
            todo el año
          </strong>
          .
        </p>

        <p>
          Este pueblo ofrece un equilibrio perfecto entre el turismo activo y el
          descanso, lo que lo hace atractivo para una amplia variedad de
          visitantes. En invierno, las pistas de esquí cercanas son el gran
          atractivo, mientras que en verano, los senderos para caminatas y las
          actividades al aire libre atraen a los amantes de la naturaleza y la
          aventura. Además, el balneario de Panticosa es un punto de referencia
          para el bienestar y la relajación, atrayendo a aquellos que buscan un
          retiro de salud en un entorno natural.
        </p>

        <p>
          <strong>
            {' '}
            Al buscar una licencia turística en Panticosa, es esencial
            considerar cómo tu propiedad puede complementar estas diversas
            atracciones turísticas
          </strong>
          . Las viviendas de uso turístico aquí deben ofrecer comodidad y
          accesibilidad, al tiempo que reflejan el encanto rústico y la
          tranquilidad del pueblo.
        </p>
      </div>

      <CityImages images={images} />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:-mx-36 mt-24'>
        Guia para obtener una licencia turística en Panticosa
      </h2>

      <div className='text-justify lg:text-start text-sm md:text-lg pt-4 space-y-4 mb-10'>
        <p>
          <strong>
            El proceso de obtención de una licencia turística en Panticosa está
            alineado con el Decreto 1/2023 del Gobierno de Aragón
          </strong>{' '}
          y requiere cumplir con los estándares de habitabilidad, seguridad y
          accesibilidad. Además, es importante que las viviendas se integren
          armoniosamente en el entorno natural y cultural del pueblo.
        </p>

        <p>
          Panticosa, con su entorno montañoso y su compromiso con la
          sostenibilidad, es un lugar donde el turismo responsable y respetuoso
          con el medio ambiente es esencial. Como propietario, deberás
          asegurarte de que tu propiedad contribuya a la preservación del
          paisaje y la cultura local.
        </p>

        <p>
          A continuación,{' '}
          <strong>
            te proporcionamos una guía detallada sobre cómo navegar en el
            proceso de obtención de una licencia turística en Panticosa
          </strong>{' '}
          para que te asegures de que tu vivienda sea no solo un lugar de
          descanso para los turistas, sino también un reflejo del encanto único
          de este pueblo de montaña. Entendemos que este proceso puede ser
          complicado y si prefieres que te ayudemos nosotros, en{' '}
          <strong className='text-p600'>DYGAV</strong>{' '}
          <strong>somos expertos en</strong>{' '}
          <span>
            <Link
              href={'/gestion-viviendas-turisticas'}
              className='underline text-p600'
            >
              gestión de viviendas de uso turístico
            </Link>
          </span>{' '}
          <strong>y en la</strong>{' '}
          <span>
            <Link
              href={'/licencias-turisticas'}
              className='underline text-p600'
            >
              tramitación de licencias turísticas
            </Link>
          </span>
          .
        </p>
      </div>

      <AlquilerVacacional />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-72 lg:px-10 mt-16'>
        Entender la Normativa en Panticosa
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        En Panticosa, es vital comprender el Decreto 1/2023 del Gobierno de
        Aragón, que regula las viviendas de uso turístico. Este decreto
        establece normativas específicas en cuanto a habitabilidad, seguridad y
        accesibilidad, priorizando la calidad y la satisfacción de los clientes.
        Se puede acceder a{' '}
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

      <LicencesIcons image='https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649297/Dygav%20Images/Icons/undraw_file_searching_re_3evy_brkjza_ilcb0a.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Requisitos de una vivienda de uso turístico en Panticosa
      </h2>

      <p className='text-justify lg:text-start text-sm lg:self-start md:text-lg my-4'>
        Las propiedades en Panticosa deben cumplir con los siguientes estándares
        mínimos:
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
        Es importante incluir un botiquín y no exceder la capacidad máxima
        alojativa permitida en la vivienda.
      </p>

      <LicencesIcons image='https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649276/Dygav%20Images/Icons/undraw_house_searching_re_stk8_cjs9qi_scufj5.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Proceso de Declaración Responsable
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        La declaración responsable en Panticosa{' '}
        <strong>
          te permite comenzar a alquilar tu propiedad casi inmediatamente
        </strong>
        , sujeta a una verificación posterior por parte de Turismo de Aragón.
        Esta declaración debe confirmar que la vivienda cumple con los
        requisitos de habitabilidad y seguridad.
      </p>

      <LicencesIcons image='https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649269/Dygav%20Images/Icons/undraw_attached_file_re_0n9b_wyqge2_sbuoak.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Inscripción y Registro
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        <strong>
          Después de realizar la declaración responsable, se puede iniciar la
          actividad turística
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
        La gestión de viviendas turísticas en Panticosa debe enfocarse en
        proporcionar una experiencia de alta calidad y satisfacción al cliente,
        asegurando que las propiedades cumplan con los estándares necesarios
        para una experiencia turística ideal.
      </p>

      <LicencesIcons image='https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649275/Dygav%20Images/Icons/undraw_buy_house_re_8xq7_obrxnk_so8fsx.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Cumplimiento y Régimen Sancionador
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        Cumplir con las normativas en Panticosa es crucial para evitar
        sanciones. Es importante mantenerse informado sobre las normativas
        locales y regionales aplicables.
      </p>

      <LicencesIcons image='https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649297/Dygav%20Images/Icons/undraw_file_bundle_re_6q1e_z2q9i8_mizphu.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Conclusión y Recursos Adicionales
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        Ofrecer una vivienda de uso turístico en Panticosa representa una
        excelente oportunidad en un destino turístico popular. Para obtener más
        detalles y asesoramiento, contáctanos a nosotros o consulta las{' '}
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
