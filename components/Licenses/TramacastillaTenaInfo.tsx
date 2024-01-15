import Link from 'next/link';
import React from 'react';
import { AlquilerVacacional, HelpYouForm, LicenciasTuristicas } from '..';
import { CityImages } from './CityImages';
import { CityCardsFooter } from './CityCardsFooter';
import { LicencesIcons } from './LicencesIcons';

const images = [
  {
    src: 'https://res.cloudinary.com/vicflores11/image/upload/v1705335018/Dygav/Tramacastilla%20de%20Tena/C_20_o7wnqn.webp',
    alt: 'Licencias turísticas: Lanuza',
  },
];

export const TramacastillaTenaInfo = () => {
  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h1 className='text-center text-2xl md:text-3xl pb-4 mb-6 font-semibold border-b-4 border-b-p600 w-auto md:px-10'>
        Licencias Turísticas en Tramacastilla de Tena
      </h1>

      <div className='text-justify lg:text-start text-sm md:text-lg pt-4 space-y-4 mb-10'>
        <p>
          Tramacastilla de Tena, un acogedor pueblo en el Valle de Tena, es una
          joya escondida en los Pirineos Aragoneses. Conocido por su entorno
          natural impresionante y su rica cultura pirenaica,{' '}
          <strong>
            Tramacastilla de Tena es un destino ideal para aquellos interesados
            en obtener una licencia turística
          </strong>
          . La combinación de belleza natural, patrimonio histórico y la calidez
          de su comunidad local hace de este pueblo un lugar perfecto para
          ofrecer una experiencia turística auténtica y memorable.
        </p>

        <p>
          Este encantador pueblo se caracteriza por sus estrechas calles
          empedradas y casas de piedra que evocan una sensación de tiempos
          pasados. Rodeado de montañas, ríos y una naturaleza exuberante,
          <strong>
            Tramacastilla de Tena es un destino atractivo durante todo el año
          </strong>
          . En invierno, es un punto de partida ideal para los deportes de
          nieve, mientras que en verano, se convierte en un paraíso para
          senderistas, ciclistas y amantes de la naturaleza.
        </p>

        <p>
          Además, Tramacastilla de Tena es un centro de cultura y tradición. Los
          eventos locales y festivales son una parte esencial de la vida en el
          pueblo, ofreciendo a los visitantes la oportunidad de sumergirse en la
          cultura aragonesa. Este enfoque en la cultura y la tradición es un
          gran atractivo para los turistas que buscan una experiencia más
          profunda y enriquecedora.
        </p>
      </div>

      <CityImages images={images} />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:-mx-36 mt-24'>
        Guia para conseguir una licencia turística en Tramacastilla
      </h2>

      <div className='text-justify lg:text-start text-sm md:text-lg pt-4 space-y-4 mb-10'>
        <p>
          <strong>
            Para obtener una licencia turística en Tramacastilla de Tena, es
            fundamental cumplir con las normativas establecidas en el Decreto
            1/2023 del Gobierno de Aragón
          </strong>
          . Estas regulaciones aseguran que las viviendas de uso turístico
          ofrezcan altos estándares de calidad, seguridad y confort. Al mismo
          tiempo, es importante que las propiedades reflejen el carácter único
          del pueblo, proporcionando a los huéspedes una experiencia genuina y
          acogedora.
        </p>

        <p>
          <strong>
            El proceso para obtener una licencia turística en Tramacastilla de
            Tena es accesible y bien definido
          </strong>
          , con el apoyo del gobierno local que ve en el turismo una manera de
          enriquecer la comunidad y preservar su patrimonio. Sin embargo,
          siempre es recomendable estar al tanto de cualquier normativa local
          específica que pueda aplicarse.
        </p>

        <p>
          <strong>
            En las siguientes secciones de esta guía, te proporcionaremos una
            visión detallada de los pasos necesarios para obtener una licencia
            turística en Tramacastilla de Tena
          </strong>
          , desde entender la normativa hasta la gestión y mantenimiento de tu
          propiedad, pero si prefieres que te ayudemos nosotros, en{' '}
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
              tramitación de licencias turisticas
            </Link>
          </span>
          .
        </p>
      </div>

      <AlquilerVacacional />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-72 lg:px-10 mt-16'>
        Entender la Normativa En Tramacastilla
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Para los propietarios en Tramacastilla de Tena, es esencial comprender
        el Decreto 1/2023 del Gobierno de Aragón que regula las viviendas de uso
        turístico. Este decreto aborda aspectos importantes como habitabilidad,
        seguridad y accesibilidad, enfocándose en la calidad y la satisfacción
        del cliente. Se recomienda revisar{' '}
        <span>
          <Link
            href={
              'https://www.boa.aragon.es/cgi-bin/EBOA/BRSCGI?CMD=VEROBJ&MLKOB=1257201622626'
            }
            className='underline text-p600'
            target='_blanck'
          >
            este decreto en detalle en el Boletín Oficial de Aragón BOA
          </Link>
        </span>
        .
      </p>

      <LicencesIcons image='https://res.cloudinary.com/vicflores11/image/upload/v1705016523/Dygav/undraw_file_searching_re_3evy_brkjza.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Requisitos de una vivienda de uso turístico en Tramacastilla
      </h2>

      <p className='text-justify lg:text-start text-sm lg:self-start md:text-lg my-4'>
        Las viviendas turísticas en Tramacastilla de Tena deben cumplir con los
        siguientes requisitos mínimos:
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
        Asegúrate de incluir un botiquín y de no superar la capacidad máxima
        alojativa permitida.
      </p>

      <LicencesIcons image='https://res.cloudinary.com/vicflores11/image/upload/v1705017030/Dygav/undraw_house_searching_re_stk8_cjs9qi.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Proceso de Declaración Responsable
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        En Tramacastilla de Tena, la declaración responsable te permite comenzar
        a alquilar tu propiedad inmediatamente, sujeta a confirmación posterior
        de Turismo de Aragón. Esta declaración debe confirmar que la vivienda
        cumple con todos los requisitos necesarios.
      </p>

      <LicencesIcons image='https://res.cloudinary.com/vicflores11/image/upload/v1705017302/Dygav/undraw_attached_file_re_0n9b_wyqge2.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Inscripción y Registro
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        Tras realizar la declaración responsable, puedes iniciar la actividad
        turística, sujeta a verificación y registro en el Registro de Turismo de
        Aragón. Ten en cuenta la{' '}
        <strong>necesidad de un plano acotado de la vivienda</strong> y
        prepárate para el pago de la tasa de tramitación.
      </p>

      <LicenciasTuristicas />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Gestión y Mantenimiento de la Vivienda
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        La gestión en Tramacastilla de Tena debe enfocarse en ofrecer una alta
        calidad y satisfacción al cliente, garantizando que la vivienda cumpla
        con los estándares necesarios para una experiencia turística acogedora y
        confortable.
      </p>

      <LicencesIcons image='https://res.cloudinary.com/vicflores11/image/upload/v1705018501/Dygav/undraw_buy_house_re_8xq7_obrxnk.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Cumplimiento y Régimen Sancionador
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        Es crucial cumplir con las normativas en Tramacastilla de Tena para
        evitar posibles sanciones. Mantente actualizado sobre las normativas
        locales y regionales relevantes.
      </p>

      <LicencesIcons image='https://res.cloudinary.com/vicflores11/image/upload/v1705018617/Dygav/undraw_file_bundle_re_6q1e_z2q9i8.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Conclusión y Recursos Adicionales
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        Ofrecer una vivienda de uso turístico en Tramacastilla de Tena es una
        oportunidad valiosa en un mercado turístico atractivo y en crecimiento.
        Para obtener más información y asesoramiento, contáctanos o consulta las{' '}
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
