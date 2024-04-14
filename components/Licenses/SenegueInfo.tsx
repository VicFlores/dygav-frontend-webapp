import Link from 'next/link';
import React from 'react';
import { AlquilerVacacional, HelpYouForm, LicenciasTuristicas } from '..';
import { CityImages } from './CityImages';
import { LicencesIcons } from './LicencesIcons';

const images = [
  {
    src: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/C_65_xnbci2-scaled.jpg',
    alt: 'Licencias turísticas: Sabiñánigo ciudad',
  },
];

export const SenegueInfo = () => {
  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h1 className='text-center text-2xl md:text-3xl pb-4 mb-6 font-semibold border-b-4 border-b-p600 w-auto md:px-10'>
        Licencias Turísticas en Senegüé
      </h1>

      <div className='text-justify lg:text-start text-sm md:text-lg pt-4 space-y-4 mb-10'>
        <p>
          Senegüé, un encantador y tranquilo pueblo en los Pirineos Aragoneses,
          es un destino perfecto para aquellos que buscan un retiro pacífico en
          un entorno natural. Este pueblo, conocido por su belleza paisajística
          y su ambiente sereno, es ideal para el turismo rural y de naturaleza.
          Conseguir una licencia turística en Senegüé para tu propiedad ofrece
          una oportunidad única de captar a turistas que buscan una experiencia
          auténtica en la montaña, lejos de los destinos más concurridos.
        </p>

        <p>
          Senegüé se distingue por su proximidad a hermosos senderos, ríos y
          paisajes montañosos, lo que lo convierte en un lugar ideal para
          actividades al aire libre como el senderismo, el ciclismo y la
          observación de la naturaleza. Además, su rica historia local y su
          arquitectura tradicional añaden un encanto único, atractivo para
          aquellos interesados en el patrimonio cultural de la región.
        </p>

        <p>
          La economía de Senegüé, aunque centrada en gran medida en la
          agricultura y la vida rural, está comenzando a abrirse al turismo, con
          el gobierno local apoyando la inversión en propiedades turísticas.
          Esto indica que el proceso de obtención de una licencia turística en
          Senegüé es cada vez más accesible, brindando una excelente oportunidad
          para los propietarios interesados en este sector emergente.
        </p>
      </div>

      <CityImages images={images} />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:-mx-36 mt-24'>
        Guía para conseguir una licencia turística en Senegüé
      </h2>

      <div className='text-justify lg:text-start text-sm md:text-lg pt-4 space-y-4 mb-10'>
        <p>
          Antes de iniciar el proceso, es esencial familiarizarse con las
          normativas específicas de Senegüé y la región de Aragón. El Decreto
          1/2023 del Gobierno de Aragón proporciona un marco legal para la
          regulación de estas propiedades.
        </p>

        <p>
          El proceso para obtener una licencia turística en Senegüé incluye
          pasos importantes, desde entender la normativa hasta inscribir y
          registrar la propiedad. Te guiaremos en cada etapa para facilitar el
          camino hacia tu propia licencia turística en Senegüé. Si prefieres
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
          . ¡Contáctanos para obtener ayuda!
        </p>
      </div>

      <AlquilerVacacional />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-72 lg:px-10 mt-16'>
        Entender la Normativa en Senegüé
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Es crucial entender la normativa del Decreto 1/2023 del Gobierno de
        Aragón, que establece requisitos claros para las viviendas de uso
        turístico en Senegüé. Estos requisitos incluyen normas sobre
        habitabilidad, seguridad y accesibilidad, con un enfoque en la calidad y
        satisfacción del cliente.{' '}
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
        Requisitos para una Vivienda de Uso Turístico en Senegüé
      </h2>

      <p className='text-justify lg:text-start text-sm lg:self-start md:text-lg my-4'>
        Las viviendas en Senegüé deben cumplir con estándares específicos,
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

      <LicencesIcons image='https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_house_searching_re_stk8_cjs9qi.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Proceso de Declaración Responsable
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        La declaración responsable en Senegüé te permite comenzar a alquilar la
        propiedad casi inmediatamente, a la espera de confirmación de Turismo de
        Aragón. Esta declaración debe confirmar el cumplimiento de los
        requisitos de habitabilidad y seguridad.
      </p>

      <LicencesIcons image='https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_attached_file_re_0n9b_wyqge2.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Inscripción y Registro
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        Tras la declaración responsable, puedes iniciar la actividad turística
        en Senegüé, sujeta a verificación y registro en el Registro de Turismo
        de Aragón. Es importante tener un plano acotado de la vivienda y estar
        preparado para el pago de la tasa de tramitación.
      </p>

      <LicenciasTuristicas />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Gestión y Mantenimiento de la Vivienda
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        La gestión en Senegüé debe enfocarse en la calidad y satisfacción del
        cliente, asegurando que la vivienda cumpla con los estándares para una
        experiencia turística enriquecedora y cómoda.
      </p>

      <LicencesIcons image='https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_buy_house_re_8xq7_obrxnk.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Cumplimiento y Régimen Sancionador
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        El incumplimiento de las normativas en Senegüé puede llevar a sanciones.
        Mantenerse informado sobre las normativas locales y regionales es vital
        para asegurar el cumplimiento.
      </p>

      <LicencesIcons image='https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_file_bundle_re_6q1e_z2q9i8.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Conclusión y Recursos Adicionales
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        Ofrecer una vivienda de uso turístico en Senegüé es una oportunidad
        única para participar en un mercado turístico en desarrollo en los
        Pirineos. Para obtener más información y detalles específicos, puedes
        contactarnos o también{' '}
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
