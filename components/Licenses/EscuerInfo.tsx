import Link from 'next/link';
import React from 'react';
import { AlquilerVacacional, HelpYouForm, LicenciasTuristicas } from '..';
import { CityImages } from './CityImages';
import { LicencesIcons } from './LicencesIcons';

const images = [
  {
    src: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/C_66_puqrlj.png',
    alt: 'Licencias turísticas: Escuer ciudad',
  },
];

export const EscuerInfo = () => {
  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h1 className='text-center text-2xl md:text-3xl pb-4 mb-6 font-semibold border-b-4 border-b-p600 w-auto md:px-10'>
        Licencias Turísticas en Escuer
      </h1>

      <div className='text-justify lg:text-start text-sm md:text-lg pt-4 space-y-4 mb-10'>
        <p>
          Escuer, ubicado en la entrada del Valle de Tena y rodeado de la
          belleza de los Pirineos Aragoneses, es un destino tranquilo y
          encantador, ideal para quienes buscan una experiencia de montaña más
          íntima y auténtica. Este pequeño pueblo, que ofrece un entorno natural
          espectacular y acceso a actividades al aire libre, es perfecto para
          los amantes de la naturaleza y el senderismo. Conseguir una licencia
          turística en Escuer para tu propiedad puede ser una excelente
          oportunidad para adentrarse en un nicho de mercado turístico
          emergente.
        </p>

        <p>
          Escuer, aunque más pequeño y menos conocido que otras poblaciones del
          valle, ofrece su propia mezcla única de paz, belleza natural y
          oportunidades para el ocio. Al invertir en una vivienda de uso
          turístico aquí, estás abriendo las puertas a un mercado turístico que
          valora la tranquilidad y la autenticidad, ideal para aquellos que
          buscan una experiencia más personal en los Pirineos.
        </p>

        <p>
          La economía local está evolucionando y el gobierno municipal aprecia
          la inversión en propiedades turísticas. Esto implica que el proceso
          para obtener una licencia turística en Escuer es accesible, brindando
          oportunidades para los propietarios que deseen explorar este mercado.
        </p>
      </div>

      <CityImages images={images} />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:-mx-36 mt-24'>
        Guía para conseguir una licencia turística en Escuer
      </h2>

      <div className='text-justify lg:text-start text-sm md:text-lg pt-4 space-y-4 mb-10'>
        <p>
          Antes de empezar, es vital conocer las normativas específicas de
          Escuer y la región más amplia de Aragón.{' '}
          <strong>El Decreto 1/2023 del Gobierno de Aragón</strong> proporciona
          un marco legal para la regulación de estas propiedades en toda la
          región.
        </p>

        <p>
          <strong>
            El proceso de obtención de una licencia turística en Escuer incluye
            pasos importantes
          </strong>
          , desde entender la normativa hasta inscribir y registrar la
          propiedad. A continuación, te guiaremos en cada etapa para{' '}
          <strong>
            facilitar el camino hacia tu licencia turística en Escuer
          </strong>
          . Si lo prefieres, en <strong className='text-p600'>DYGAV</strong>{' '}
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
        Entender la Normativa en Escuer
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Es crucial entender la normativa del{' '}
        <strong>Decreto 1/2023 del Gobierno de Aragón</strong>, que establece
        requisitos claros para las viviendas de uso turístico. Estos incluyen
        <strong>normas sobre habitabilidad, seguridad y accesibilidad</strong>,
        con un enfoque en la calidad y satisfacción del cliente. Puedes leer
        este decreto{' '}
        <span>
          <Link
            href={
              'https://www.boa.aragon.es/cgi-bin/EBOA/BRSCGI?CMD=VEROBJ&MLKOB=1257201622626'
            }
            className='underline text-p600'
            target='_blanck'
          >
            aquí en el Boletín Oficial de Aragón BOA
          </Link>
        </span>
        .
      </p>

      <LicencesIcons image='https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_file_searching_re_3evy_brkjza.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Requisitos para una Vivienda de Uso Turístico en Escuer
      </h2>

      <p className='text-justify lg:text-start text-sm lg:self-start md:text-lg my-4'>
        Las viviendas en Escuer deben cumplir con estándares específicos
        similares a los de Formigal:
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
        Incluye un botiquín y asegura que la capacidad total de la vivienda no
        exceda lo permitido.
      </p>

      <LicencesIcons image='https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_house_searching_re_stk8_cjs9qi.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Proceso de Declaración Responsable
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        <strong>
          En Escuer, la declaración responsable permite comenzar a alquilar la
          propiedad casi inmediatamente
        </strong>
        , sujeta a una respuesta posterior de Turismo de Aragón. Debe confirmar
        el cumplimiento de los requisitos de habitabilidad y seguridad.
      </p>

      <LicencesIcons image='https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_attached_file_re_0n9b_wyqge2.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Inscripción y Registro
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        <strong>
          Tras la declaración responsable, inicia la actividad turística en
          Escuer
        </strong>
        , sujeta a verificación y registro en el Registro de Turismo de Aragón.
        Ten un plano acotado de la vivienda y prepárate para el pago de la tasa
        de tramitación.
      </p>

      <LicenciasTuristicas />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Gestión y Mantenimiento de la Vivienda
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        La gestión en Escuer{' '}
        <strong>debe enfocarse en la calidad y satisfacción del cliente</strong>
        , asegurando que la vivienda cumpla con los estándares para una
        experiencia acogedora y única en los Pirineos.
      </p>

      <LicencesIcons image='https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_buy_house_re_8xq7_obrxnk.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Cumplimiento y Régimen Sancionador
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        El incumplimiento de las normativas en Escuer puede llevar a sanciones.
        <strong>
          Es vital mantenerse actualizado sobre las normativas locales y
          regionales
        </strong>{' '}
        para asegurar el cumplimiento.
      </p>

      <LicencesIcons image='https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_file_bundle_re_6q1e_z2q9i8.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Conclusión y Recursos Adicionales
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        Ofrecer una vivienda de uso turístico en Escuer es una oportunidad
        valiosa para integrarse en el creciente mercado turístico de los
        Pirineos. Para más información y detalles, puedes contactarnos o{' '}
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
