import Link from 'next/link';
import React from 'react';
import { AlquilerVacacional, HelpYouForm, LicenciasTuristicas } from '..';
import { CityImages } from './CityImages';
import { LicencesIcons } from './LicencesIcons';

const images = [
  {
    src: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/C_37_ew9ynt-scaled.jpg',
    alt: 'Licencias turísticas: Piedrafita de Jaca',
  },
];

export const PiedrafitaDeJacaInfo = () => {
  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h1 className='text-center text-2xl md:text-3xl pb-4 mb-6 font-semibold border-b-4 border-b-p600 w-auto md:px-10'>
        Licencias Turísticas en Piedrafita de Jaca
      </h1>

      <div className='text-justify lg:text-start text-sm md:text-lg pt-4 space-y-4 mb-10'>
        <p>
          Piedrafita de Jaca, situado en el impresionante entorno de los
          Pirineos Aragoneses, se está convirtiendo en un destino cada vez más
          popular para aquellos que buscan la tranquilidad y belleza natural de
          la montaña. Este encantador pueblo, cercano a áreas de senderismo y
          riqueza natural, atrae tanto a entusiastas del aire libre como a
          aquellos que buscan escapar del ajetreo de la vida urbana.{' '}
          <strong>
            Obtener una licencia turística en Piedrafita de Jaca para tu
            propiedad puede ser una excelente oportunidad
          </strong>{' '}
          para aprovechar este mercado turístico en crecimiento.
        </p>

        <p>
          Piedrafita de Jaca no solo ofrece paisajes naturales impresionantes,
          sino también es un lugar para actividades culturales y recreativas
          diversas. Con festivales locales, rutas de senderismo y actividades en
          la naturaleza,{' '}
          <strong>
            el pueblo promete un flujo constante de visitantes durante todo el
            año
          </strong>
          . Invertir en una vivienda de uso turístico aquí te posiciona de
          manera privilegiada para aquellos turistas que buscan una experiencia
          auténtica en los Pirineos.
        </p>

        <p>
          El turismo es un aspecto importante de la economía local, y el
          <strong>
            gobierno municipal apoya la inversión en propiedades de uso
            turístico
          </strong>
          . Esto indica que el proceso para obtener una licencia turística en
          Piedrafita de Jaca es accesible y está bien establecido, facilitando a
          los propietarios entrar en este prometedor mercado.
        </p>
      </div>

      <CityImages images={images} />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:-mx-36 mt-24'>
        Guia para obtener tu licencia turística en Piedrafita de Jaca
      </h2>

      <div className='text-justify lg:text-start text-sm md:text-lg pt-4 space-y-4 mb-10'>
        <p>
          Antes de comenzar el proceso, es fundamental familiarizarse con las
          normativas específicas de Piedrafita de Jaca.. El{' '}
          <strong>Decreto 1/2023 del Gobierno de Aragón</strong> establece un
          marco legal claro para la regulación de estas propiedades.
        </p>

        <p>
          <strong>
            El proceso de obtención de una licencia turística en Piedrafita de
            Jaca involucra varios pasos clave
          </strong>
          , desde comprender la normativa hasta inscribir y registrar la
          propiedad.
        </p>

        <p>
          En las siguientes secciones, te guiaremos a través de cada paso para
          facilitar tu camino hacia{' '}
          <strong>
            la obtención de tu propia licencia turística en Piedrafita de Jaca
          </strong>
          , y si lo prefieres, en <strong className='text-p600'>DYGAV</strong>{' '}
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
          ¡Contáctanos y estaremos encantados de ayudarte!
        </p>
      </div>

      <AlquilerVacacional />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-72 lg:px-10 mt-16'>
        Entender la Normativa
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        En Piedrafita de Jaca, es crucial entender la normativa del{' '}
        <strong>Decreto 1/2023 del Gobierno de Aragón</strong>, que establece
        requisitos claros para las viviendas de uso turístico, incluyendo{' '}
        <strong>normas sobre habitabilidad, seguridad y accesibilidad</strong>,
        con un enfoque en la calidad y satisfacción del cliente. Puedes leer
        este decreto regulador de viviendas de uso turístico{' '}
        <span>
          <Link
            href={
              'https://www.boa.aragon.es/cgi-bin/EBOA/BRSCGI?CMD=VEROBJ&MLKOB=1257201622626'
            }
            className='underline text-p600'
            target='_blanck'
          >
            haciendo click aquí en el Boletín Oficial de Aragón BOA
          </Link>
        </span>
        .
      </p>

      <LicencesIcons image='https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_file_searching_re_3evy_brkjza.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Requisitos para una Vivienda Turística
      </h2>

      <p className='text-justify lg:text-start text-sm lg:self-start md:text-lg my-4'>
        Las viviendas en Piedrafita de Jaca deben cumplir con estándares
        específicos:
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
        Además, debe incluir un botiquín y no exceder la capacidad máxima
        alojativa permitida.
      </p>

      <LicencesIcons image='https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_house_searching_re_stk8_cjs9qi.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Proceso de Declaración Responsable
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        <strong>
          La declaración responsable en Piedrafita de Jaca te permite alquilar
          tu propiedad casi inmediatamente
        </strong>
        , pendiente de una respuesta por parte de Turismo de Aragón. Esta
        declaración incluirá la confirmación de que la vivienda cumple con los
        requisitos de habitabilidad y seguridad.
      </p>

      <LicencesIcons image='https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_attached_file_re_0n9b_wyqge2.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Inscripción y Registro
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        <strong>
          Tras la declaración responsable, se puede iniciar la actividad
          turística en Piedrafita de Jaca
        </strong>
        , sujeta a verificación y registro en el Registro de Turismo de Aragón.
        Es crucial tener un plano acotado de la vivienda y estar preparado para
        el pago de una tasa por la tramitación.
      </p>

      <LicenciasTuristicas />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Gestión y Mantenimiento de la Vivienda
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        La gestión en Piedrafita de Jaca{' '}
        <strong>debe centrarse en la calidad y satisfacción del cliente</strong>
        , asegurando que la vivienda cumpla con los estándares de comodidad y
        funcionalidad para actividades al aire libre y en la naturaleza.
      </p>

      <LicencesIcons image='https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_buy_house_re_8xq7_obrxnk.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Cumplimiento y Régimen Sancionador
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        El incumplimiento de las normativas en Piedrafita de Jaca conlleva
        sanciones. Es <strong>vital mantenerse actualizado</strong> sobre las
        normativas locales y regionales para asegurar el cumplimiento total.
      </p>

      <LicencesIcons image='https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_file_bundle_re_6q1e_z2q9i8.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Conclusión y Recursos Adicionales
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        <strong>
          Ofrecer una vivienda de uso turístico en Piedrafita de Jaca es una
          excelente oportunidad
        </strong>{' '}
        para integrarse en el mercado turístico de los Pirineos. Para más
        información y detalles específicos, puedes contactarnos o también puedes{' '}
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
