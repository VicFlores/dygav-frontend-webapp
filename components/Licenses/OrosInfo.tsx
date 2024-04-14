import Link from 'next/link';
import React from 'react';
import { AlquilerVacacional, HelpYouForm, LicenciasTuristicas } from '..';
import { CityImages } from './CityImages';
import { LicencesIcons } from './LicencesIcons';

const images = [
  {
    src: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/C_64_sxdtov-scaled.jpg',
    alt: 'Licencias turísticas: Orós',
  },
];

export const OrosInfo = () => {
  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h1 className='text-center text-2xl md:text-3xl pb-4 mb-6 font-semibold border-b-4 border-b-p600 w-auto md:px-10'>
        Licencias Turísticas en Orós
      </h1>

      <div className='text-justify lg:text-start text-sm md:text-lg pt-4 space-y-4 mb-10'>
        <p>
          Orós, un pintoresco y apacible pueblo enclavado en los Pirineos
          Aragoneses, se destaca por su encanto rural y su impresionante paisaje
          natural. Este destino es ideal para aquellos que buscan una escapada
          tranquila lejos de las multitudes, ofreciendo una experiencia
          auténtica de la vida en la montaña. Con su proximidad a senderos
          naturales, ríos serenos y una rica historia local, Orós se está
          convirtiendo en un atractivo destino para el turismo de naturaleza y
          cultural. Obtener una licencia turística en Orós ofrece la oportunidad
          de participar en un mercado turístico emergente, atrayendo a
          visitantes que buscan paz, naturaleza y autenticidad.
        </p>

        <p>
          Orós, con su ambiente relajado y su entorno natural, es perfecto para
          actividades como el senderismo, la observación de aves y la
          exploración de la herencia cultural de la región. Los visitantes
          pueden disfrutar de la tranquilidad de los paisajes montañosos y
          descubrir pequeñas joyas ocultas en el área, como iglesias antiguas,
          arquitectura tradicional y festivales locales que reflejan la rica
          cultura de los Pirineos.
        </p>

        <p>
          La economía local, aunque modesta, está comenzando a reconocer el
          potencial del turismo. Por lo tanto, el gobierno municipal está
          adoptando una postura favorable hacia la inversión en propiedades
          turísticas. Esto implica que obtener una licencia turística en Orós es
          un proceso accesible y prometedor para los propietarios interesados en
          explorar este creciente sector.
        </p>
      </div>

      <CityImages images={images} />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:-mx-36 mt-24'>
        Guia para obtener tu licencia turística en Hoz de Jaca
      </h2>

      <div className='text-justify lg:text-start text-sm md:text-lg pt-4 space-y-4 mb-10'>
        <p>
          Antes de iniciar el proceso, es importante conocer las normativas
          específicas de Orós y la región más amplia de Aragón. El{' '}
          <strong>Decreto 1/2023 del Gobierno de Aragón</strong> provee un marco
          legal claro para la regulación de estas propiedades.
        </p>

        <p>
          El proceso de obtención de una licencia turística en Orós implica
          pasos importantes, desde entender la normativa hasta registrar la
          propiedad. A continuación, ofrecemos una guía detallada para cada
          etapa del proceso. Si prefieres asistencia profesional, en{' '}
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
        Entender la Normativa en Orós
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Es crucial entender la normativa del Decreto 1/2023 del Gobierno de
        Aragón, que establece requisitos claros para las viviendas de uso
        turístico en Orós. Estos incluyen normas sobre habitabilidad, seguridad
        y accesibilidad, enfocándose en la calidad y satisfacción del cliente.{' '}
        <span>
          <Link
            href={
              'https://www.boa.aragon.es/cgi-bin/EBOA/BRSCGI?CMD=VEROBJ&MLKOB=1257201622626'
            }
            className='underline text-p600'
            target='_blanck'
          >
            Puedes leer este decreto en el Boletín Oficial de Aragón BOA
          </Link>
        </span>
        .
      </p>

      <LicencesIcons image='https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_file_searching_re_3evy_brkjza.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Requisitos para una Vivienda de Uso Turístico en Orós
      </h2>

      <p className='text-justify lg:text-start text-sm lg:self-start md:text-lg my-4'>
        Las viviendas en Orós deben cumplir con estándares específicos,
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
      </ul>

      <LicencesIcons image='https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_house_searching_re_stk8_cjs9qi.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Proceso de Declaración Responsable
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        En Orós, la declaración responsable permite empezar a alquilar la
        propiedad casi inmediatamente, esperando confirmación de Turismo de
        Aragón. Debe confirmar el cumplimiento de todos los requisitos de
        habitabilidad y seguridad.
      </p>

      <LicencesIcons image='https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_attached_file_re_0n9b_wyqge2.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Inscripción y Registro
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        Tras la declaración responsable, puedes iniciar la actividad turística
        en Orós, sujeta a verificación y registro en el Registro de Turismo de
        Aragón. Es importante tener un plano acotado de la vivienda y estar
        preparado para el pago de la tasa de tramitación.
      </p>

      <LicenciasTuristicas />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Gestión y Mantenimiento de la Vivienda
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        La gestión en Orós debe centrarse en la calidad y satisfacción del
        cliente, asegurando que la vivienda cumpla con los estándares para una
        experiencia turística enriquecedora y cómoda.
      </p>

      <LicencesIcons image='https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_buy_house_re_8xq7_obrxnk.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Cumplimiento y Régimen Sancionador
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        El incumplimiento de las normativas en Orós puede llevar a sanciones. Es
        vital mantenerse actualizado sobre las normativas locales y regionales
        para asegurar el cumplimiento.
      </p>

      <LicencesIcons image='https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_file_bundle_re_6q1e_z2q9i8.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Conclusión y Recursos Adicionales
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        Ofrecer una vivienda de uso turístico en Orós es una oportunidad única
        para integrarse en el creciente mercado turístico de los Pirineos. Para
        más información y detalles específicos, puedes contactarnos o también
        puedes{' '}
        <span>
          <Link
            href={
              'https://www.aragon.es/tramitador/-/tramite/declaracion-responsable-viviendas-turistico'
            }
            className='underline text-p600'
            target='_blanck'
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
