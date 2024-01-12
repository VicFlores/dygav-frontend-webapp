import Link from 'next/link';
import React from 'react';
import { AlquilerVacacional, HelpYouForm, LicenciasTuristicas } from '..';
import { CityImages } from './CityImages';
import { CityCardsFooter } from './CityCardsFooter';
import { LicencesIcons } from './LicencesIcons';

const images = [
  {
    src: 'https://res.cloudinary.com/vicflores11/image/upload/v1705082424/Dygav/Lanuza/C_7_pucqtv.webp',
    alt: 'Licencias turísticas: Lanuza',
  },
];

export const LanuzaInfo = () => {
  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h1 className='text-center text-2xl md:text-3xl pb-4 mb-6 font-semibold border-b-4 border-b-p600 w-auto md:px-10'>
        Licencias Turísticas en Lanuza
      </h1>

      <div className='text-justify lg:text-start text-sm md:text-lg pt-4 space-y-4 mb-10'>
        <p>
          Lanuza,{' '}
          <strong>
            un encantador pueblo en el Valle de Tena, en el Pirineo Aragonés
          </strong>
          , es un tesoro escondido que ha sabido conservar su identidad y
          patrimonio arquitectónico a pesar del paso del tiempo.{' '}
          <strong>
            Obtener una licencia turística en Lanuza es una oportunidad
            excelente
          </strong>{' '}
          para aquellos que buscan ofrecer una experiencia única en un entorno
          de paz y belleza natural.
        </p>

        <p>
          Este pequeño pueblo, con sus casas de piedra y calles estrechas,
          ofrece una visión auténtica de la vida tradicional en los Pirineos.
          Lanuza es famoso por su embalse, que refleja las cumbres nevadas y los
          cielos azules, creando un paisaje de ensueño para los visitantes.
          Además, el pueblo es sede del conocido Festival Pirineos Sur, lo que
          lo convierte en un centro de atracción cultural durante el verano.
        </p>

        <p>
          Invertir en una vivienda de uso turístico en Lanuza significa no solo
          ofrecer un techo a los turistas sino también una experiencia inmersiva
          en un entorno que combina historia, cultura y naturaleza.{' '}
          <strong>
            La demanda de alojamiento en Lanuza es alta, especialmente durante
            los meses de verano y las temporadas de festivales
          </strong>
          , lo que hace que la obtención de una licencia turística sea una
          inversión atractiva.
        </p>

        <p>
          <strong>
            El proceso de obtención de una licencia turística en Lanuza,
            alineado con el Decreto 1/2023 del Gobierno de Aragón
          </strong>
          , implica cumplir con varios requisitos de habitabilidad, seguridad y
          accesibilidad. Además, es importante que las propiedades mantengan el
          encanto rústico del pueblo, al mismo tiempo que ofrecen todas las
          comodidades modernas.
        </p>
      </div>

      <CityImages images={images} />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:-mx-36 mt-24'>
        Guia para conseguir una licencia turística en Lanuza
      </h2>

      <div className='text-justify lg:text-start text-sm md:text-lg pt-4 space-y-4 mb-10'>
        <p>
          El gobierno local de Lanuza apoya el desarrollo del turismo, pero
          siempre con un enfoque en la sostenibilidad y el respeto por el
          patrimonio cultural y natural. Como propietario, deberás asegurarte de
          que tu propiedad contribuya positivamente a la comunidad y al entorno.
        </p>

        <p>
          <strong>
            La siguiente guía detalla los pasos necesarios para obtener una
            licencia turística en Lanuza
          </strong>
          . Asegúrate de que tu vivienda no solo cumpla con las regulaciones
          locales y regionales, sino que también se destaque como un lugar ideal
          para los visitantes que buscan una experiencia auténtica, pero si
          prefieres que te ayudemos nosotros, en{' '}
          <strong>DYGAV somos expertos en</strong>{' '}
          <span>
            <Link
              href={'/gestion-viviendas-turisticas'}
              className='underline text-p600'
              target='_blanck'
            >
              gestión de viviendas de uso turístico
            </Link>
          </span>{' '}
          <strong>y en la</strong>{' '}
          <span>
            <Link
              href={'/licencias-turisticas'}
              className='underline text-p600'
              target='_blanck'
            >
              tramitación de licencias turisticas
            </Link>
          </span>{' '}
          .
        </p>
      </div>

      <AlquilerVacacional />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-72 lg:px-10 mt-16'>
        Entender la Normativa en Lanuza
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        En Lanuza, es crucial comprender la normativa establecida por el{' '}
        <strong>Decreto 1/2023 del Gobierno de Aragón</strong> para viviendas de
        uso turístico. Estas normas abarcan aspectos de{' '}
        <strong>habitabilidad, seguridad y accesibilidad</strong>, enfocándose
        especialmente en mejorar la calidad y satisfacción de los huéspedes.
        Para obtener más información sobre este decreto, puedes acceder al{' '}
        <span>
          <Link
            href={
              'https://www.boa.aragon.es/cgi-bin/EBOA/BRSCGI?CMD=VEROBJ&MLKOB=1257201622626'
            }
            className='underline text-p600'
            target='_blanck'
          >
            Boletín Oficial de Aragón BOA
          </Link>
        </span>
        .
      </p>

      <LicencesIcons image='https://res.cloudinary.com/vicflores11/image/upload/v1705016523/Dygav/undraw_file_searching_re_3evy_brkjza.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Requisitos para una vivienda de uso turístico en Lanuza
      </h2>

      <p className='text-justify lg:text-start text-sm lg:self-start md:text-lg my-4'>
        Las viviendas turísticas en Lanuza deben cumplir con los siguientes
        requisitos:
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
        Es necesario incluir un botiquín y no exceder la capacidad máxima
        alojativa permitida en la vivienda.
      </p>

      <LicencesIcons image='https://res.cloudinary.com/vicflores11/image/upload/v1705017030/Dygav/undraw_house_searching_re_stk8_cjs9qi.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Proceso de Declaración Responsable en Lanuza
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        La declaración responsable{' '}
        <strong>
          permite iniciar el alquiler de la propiedad en Lanuza casi
          inmediatamente
        </strong>
        , a la espera de la confirmación de Turismo de Aragón. Esta declaración
        debe asegurar que la vivienda cumple con todos los requisitos de
        habitabilidad y seguridad.
      </p>

      <LicencesIcons image='https://res.cloudinary.com/vicflores11/image/upload/v1705017302/Dygav/undraw_attached_file_re_0n9b_wyqge2.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Inscripción y Registro
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        Después de la declaración responsable, se puede comenzar la actividad
        turística, sujeta a una verificación posterior y al registro en el
        Registro de Turismo de Aragón. Es importante preparar un plano acotado
        de la vivienda y estar listo para pagar la tasa de tramitación.
      </p>

      <LicenciasTuristicas />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Gestión y Mantenimiento de la Vivienda
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        La gestión de las viviendas turísticas en Lanuza debe enfocarse en
        proporcionar una alta calidad y satisfacción a los clientes, asegurando
        que las propiedades cumplan con los estándares adecuados para una
        experiencia turística óptima.
      </p>

      <LicencesIcons image='https://res.cloudinary.com/vicflores11/image/upload/v1705018501/Dygav/undraw_buy_house_re_8xq7_obrxnk.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Cumplimiento y Régimen Sancionador
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        El cumplimiento de las normativas en Lanuza es vital para evitar
        sanciones. Se recomienda estar al día con las normativas locales y
        regionales para garantizar el total cumplimiento.
      </p>

      <LicencesIcons image='https://res.cloudinary.com/vicflores11/image/upload/v1705018617/Dygav/undraw_file_bundle_re_6q1e_z2q9i8.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Conclusión y Recursos Adicionales
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        Ofrecer una vivienda de uso turístico en Lanuza representa una excelente
        oportunidad para participar en el atractivo mercado turístico del
        Pirineo Aragonés. Para más detalles y asesoramiento, puedes contactarnos
        o{' '}
        <span>
          <Link
            href={
              'https://www.aragon.es/tramitador/-/tramite/declaracion-responsable-viviendas-turistico'
            }
            className='underline text-p600'
            target='_blanck'
          >
            consultar las fuentes oficiales del Gobierno de Aragón
          </Link>
        </span>{' '}
        y las autoridades locales de turismo.
      </p>

      <HelpYouForm />
    </section>
  );
};
