import Link from 'next/link';
import React from 'react';
import { AlquilerVacacional, HelpYouForm, LicenciasTuristicas } from '..';
import { CityImages } from './CityImages';
import { LicencesIcons } from './LicencesIcons';

const images = [
  {
    src: 'https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649776/Dygav%20Images/Formigal/C_3_qvufgv_wrxli9.jpg',
    alt: 'Licencias turísticas: Formigal',
  },
];

export const FormigalInfo = () => {
  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h1 className='text-center text-2xl md:text-3xl pb-4 mb-6 font-semibold border-b-4 border-b-p600 w-auto md:px-10'>
        Licencias Turísticas en Formigal
      </h1>

      <div className='text-justify lg:text-start text-sm md:text-lg pt-4 space-y-4 mb-10'>
        <p>
          Formigal, situado en el corazón de los Pirineos Aragoneses, es uno de
          los destinos de montaña más demandados de España. Este pueblecito
          pegado a una impresionante estación de esquí, ofrece una mezcla única
          de aventura, ocio y tranquilidad, atrayendo a esquiadores en invierno
          y a amantes de la naturaleza y el senderismo en verano.{' '}
          <strong>
            Conseguir una licencia turística en Formigal para tu propiedad puede
            ser una oportunidad de oro
          </strong>{' '}
          para sumergirse en el mercado turístico en auge.
        </p>

        <p>
          Formigal no solo brinda escenarios naturales impresionantes, sino que
          también es un centro de actividades culturales y recreativas.{' '}
          <strong>Desde festivales hasta competiciones deportivas</strong>, este
          lugar promete una afluencia constante de visitantes. Al considerar la
          inversión en una vivienda de uso turístico aquí, estás posicionando tu
          propiedad en un lugar privilegiado para los turistas que buscan una
          experiencia auténtica en los Pirineos.
        </p>

        <p>
          La economía local gira en gran medida en torno al turismo, por lo que
          el gobierno municipal es favorable a la inversión en propiedades de
          uso turístico. Esto significa{' '}
          <strong>
            que el proceso de obtención de una licencia turística en Formigal
            está bien establecido y es accesible para los propietarios
          </strong>{' '}
          que deseen entrar en este mercado.
        </p>
      </div>

      <CityImages images={images} />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-40 mt-24'>
        Guia para conseguir una licencia turística en Formigal
      </h2>

      <div className='text-justify lg:text-start text-sm md:text-lg pt-4 space-y-4 mb-10'>
        <p>
          Antes de comenzar el proceso, es esencial familiarizarse con las
          normativas específicas de Formigal y la región más amplia de Aragón.
          El Decreto 1/2023 del Gobierno de Aragón establece un marco legal
          claro para la regulación de estas propiedades en toda la región.
        </p>

        <p>
          <strong>
            El proceso de obtención de una licencia turística en Formigal
            implica varios pasos clave
          </strong>
          , desde la comprensión de la normativa hasta la inscripción y registro
          de la propiedad. En las siguientes secciones, te guiaremos a través de
          cada paso para{' '}
          <strong>
            facilitar tu camino hacia tu propia licencia turística en Formigal
          </strong>{' '}
          pero si lo prefieres en <strong>DYGAV somos expertos en</strong>{' '}
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
              tramitación de licencias turisticas
            </Link>
          </span>
          . ¡Contáctanos y estaremos encantados de ayudarte!
        </p>
      </div>

      <AlquilerVacacional />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-72 lg:px-10 mt-16'>
        Entender la Normativa en Formigal
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4 '>
        En Formigal, es esencial entender la normativa del{' '}
        <strong>Decreto 1/2023 del Gobierno de Aragón</strong>, que establece
        requisitos claros para las viviendas de uso turístico. Estos incluyen
        normas sobre habitabilidad, seguridad, y accesibilidad, con un enfoque
        particular en la calidad y satisfacción del cliente. Puedes leer este
        decreto regulador de viviendas de uso turístico{' '}
        <span>
          <Link
            href={
              'https://www.boa.aragon.es/cgi-bin/EBOA/BRSCGI?CMD=VEROBJ&MLKOB=1257201622626'
            }
            className='underline text-p600'
            target='_blank'
          >
            haciendo click aquí
          </Link>
        </span>{' '}
        en el Boletín Oficial de Aragón BOA
      </p>

      <LicencesIcons image='https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649297/Dygav%20Images/Icons/undraw_file_searching_re_3evy_brkjza_ilcb0a.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Requisitos para una Vivienda de Uso Turístico en Formigal
      </h2>

      <p className='text-justify lg:text-start text-sm lg:self-start md:text-lg my-4'>
        Las viviendas en Formigal deben cumplir con estándares específicos:
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
        Además, debe haber un botiquín y se debe garantizar que la capacidad
        total de la vivienda no exceda la capacidad máxima alojativa permitida,
        evitando la instalación de camas fijas en el salón.
      </p>

      <LicencesIcons image='https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649276/Dygav%20Images/Icons/undraw_house_searching_re_stk8_cjs9qi_scufj5.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Proceso de Declaración Responsable
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        En Formigal, la declaración responsable{' '}
        <strong>
          permite empezar a alquilar la propiedad casi inmediatamente
        </strong>{' '}
        hasta recibir una respuesta por parte de Turismo de Aragón. Esta
        declaración incluirá la confirmación de que la vivienda cumple con los
        requisitos de habitabilidad y seguridad, y que no existen limitaciones
        por parte de la comunidad de propietarios o normativas urbanísticas que
        impidan su uso turístico.
      </p>

      <LicencesIcons image='https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649269/Dygav%20Images/Icons/undraw_attached_file_re_0n9b_wyqge2_sbuoak.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Inscripción y Registro
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        <strong>
          Tras presentar la declaración responsable, se puede iniciar la
          actividad turística
        </strong>
        , sujeta a la verificación posterior y la inscripción en el Registro de
        Turismo de Aragón. Es importante tener un plano acotado de la vivienda y
        estar preparado para el pago de una tasa por la tramitación de esta
        declaración.
      </p>

      <LicenciasTuristicas />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Gestión y Mantenimiento de la Vivienda
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        La gestión en Formigal debe centrarse en la{' '}
        <strong>calidad y satisfacción del huesped</strong>, asegurando que la
        vivienda cumpla con los estándares de comodidad y funcionalidad para
        actividades de montaña y esquí.
      </p>

      <LicencesIcons image='https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649275/Dygav%20Images/Icons/undraw_buy_house_re_8xq7_obrxnk_so8fsx.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Cumplimiento y Régimen Sancionador
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        El incumplimiento de las normativas en Formigal conlleva sanciones.{' '}
        <strong>Es vital mantenerse actualizado</strong> sobre las normativas
        locales y regionales para asegurar el cumplimiento total.
      </p>

      <LicencesIcons image='https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649297/Dygav%20Images/Icons/undraw_file_bundle_re_6q1e_z2q9i8_mizphu.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Conclusión y Recursos Adicionales
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        Ofrecer una vivienda de uso turístico en Formigal{' '}
        <strong>
          es una excelente oportunidad para integrarse en el dinámico mercado
          turístico de los Pirineos
        </strong>
        . Para más información y detalles específicos, puedes contactarnos o
        también puedes{' '}
        <span>
          <Link
            href={
              'https://www.aragon.es/tramitador/-/tramite/declaracion-responsable-viviendas-turistico'
            }
            className='underline text-p600'
            target='_blank'
          >
            consultar las fuentes del Gobierno de Aragón
          </Link>
        </span>{' '}
        y las autoridades locales de turismo.
      </p>

      <HelpYouForm />
    </section>
  );
};
