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

export const SabiñánigoInfo = () => {
  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h1 className='text-center text-2xl md:text-3xl pb-4 mb-6 font-semibold border-b-4 border-b-p600 w-auto md:px-10'>
        Licencias Turísticas en Sabiñánigo
      </h1>

      <div className='text-justify lg:text-start text-sm md:text-lg pt-4 space-y-4 mb-10'>
        <p>
          Sabiñánigo, un municipio lleno de vida y el centro neurálgico del
          Valle de Tena, es una{' '}
          <strong>
            excelente ubicación para aquellos interesados en obtener una
            licencia turística
          </strong>
          . Con su mezcla de modernidad y tradición, Sabiñánigo ofrece un
          atractivo único como destino turístico. Aquí, los visitantes pueden
          disfrutar de una amplia gama de actividades culturales y al aire
          libre, lo que lo convierte en un lugar ideal para la inversión en
          turismo.
        </p>

        <p>
          Este municipio es conocido por su rica historia y patrimonio cultural,
          incluyendo numerosos festivales y eventos que se celebran a lo largo
          del año. Estas festividades atraen a una gran cantidad de turistas, lo
          que{' '}
          <strong>
            representa una oportunidad significativa para los propietarios de
            viviendas de uso turístico
          </strong>
          .
        </p>

        <p>
          Sabiñánigo también es un punto de partida perfecto para explorar los
          Pirineos, ofreciendo acceso a rutas de senderismo, ciclismo y a las
          famosas estaciones de esquí cercanas. Esto asegura una{' '}
          <strong>
            demanda constante de alojamiento turístico durante todo el año
          </strong>
          .
        </p>

        <p>
          <strong>Optar por una licencia turística en Sabiñánigo</strong>{' '}
          significa poder ofrecer alojamiento en un área que equilibra la vida
          urbana con el acceso a la naturaleza. Es importante que las viviendas
          de uso turístico en este municipio no solo ofrezcan comodidad y
          modernidad, sino que también reflejen el espíritu cultural y natural
          de la región.
        </p>
      </div>

      <CityImages images={images} />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:-mx-36 mt-24'>
        Guia para obtener una licencia turística en Sabiñánigo
      </h2>

      <div className='text-justify lg:text-start text-sm md:text-lg pt-4 space-y-4 mb-10'>
        <p>
          <strong>
            El proceso para obtener una licencia turística en Sabiñánigo sigue
            el marco del Decreto 1/2023 del Gobierno de Aragón
          </strong>
          . Este decreto establece requisitos claros en cuanto a habitabilidad,
          seguridad y accesibilidad. Además, se debe tener en cuenta la
          integración de las propiedades en el tejido urbano y social del
          municipio.
        </p>

        <p>
          Sabiñánigo, con su enfoque en el desarrollo sostenible y el turismo
          responsable, ofrece una oportunidad para los propietarios de viviendas
          de uso turístico para contribuir al crecimiento de la comunidad local
          y al mismo tiempo beneficiarse del atractivo turístico del área.
        </p>

        <p>
          En esta guía,{' '}
          <strong>
            te proporcionaremos una visión detallada de los pasos necesarios
            para obtener una licencia turística en Sabiñánigo
          </strong>
          . Pero si prefieres que nos encarguemos nosotros, en{' '}
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
          y estaremos encantados de ayudarte y acompañarte durante todo el
          camino.
        </p>
      </div>

      <AlquilerVacacional />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-72 lg:px-10 mt-16'>
        Entender la Normativa en Sabiñánigo
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        En Sabiñánigo, es crucial comprender el{' '}
        <strong>Decreto 1/2023 del Gobierno de Aragón</strong> que regula las
        viviendas de uso turístico. Este decreto establece{' '}
        <strong>
          normativas específicas sobre habitabilidad, seguridad y accesibilidad
        </strong>
        , enfocadas en la calidad y satisfacción del huésped. Se puede{' '}
        <span>
          <Link
            href={
              'https://www.boa.aragon.es/cgi-bin/EBOA/BRSCGI?CMD=VEROBJ&MLKOB=1257201622626'
            }
            className='underline text-p600'
            target='_blanck'
          >
            acceder a más información sobre este decreto en el Boletín Oficial
            de Aragón BOA
          </Link>
        </span>
        .
      </p>

      <LicencesIcons image='https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_file_searching_re_3evy_brkjza.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Requisitos para una vivienda de uso turístico en Sabiñánigo
      </h2>

      <p className='text-justify lg:text-start text-sm lg:self-start md:text-lg my-4'>
        Las viviendas turísticas en Sabiñánigo deben cumplir con los siguientes
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
        Es necesario incluir un botiquín y no exceder la capacidad máxima
        alojativa permitida.
      </p>

      <LicencesIcons image='https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_house_searching_re_stk8_cjs9qi.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Proceso de Declaración Responsable
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        <strong>
          La declaración responsable en Sabiñánigo permite comenzar a alquilar
          la propiedad casi inmediatamente
        </strong>
        , pendiente de confirmación por parte de Turismo de Aragón. Esta
        declaración debe confirmar el cumplimiento de todos los requisitos de
        habitabilidad y seguridad.
      </p>

      <LicencesIcons image='https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_attached_file_re_0n9b_wyqge2.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Inscripción y Registro
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        <strong>
          Después de realizar la declaración responsable, se puede iniciar la
          actividad turística en Sabiñánigo
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
        La gestión de viviendas turísticas en Sabiñánigo debe centrarse en
        proporcionar una experiencia de alta calidad y satisfacción al cliente.
        <strong>
          Asegúrate de que la vivienda cumpla con los estándares de comodidad y
          funcionalidad necesarios
        </strong>{' '}
        para una estancia agradable.
      </p>

      <LicencesIcons image='https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_buy_house_re_8xq7_obrxnk.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Cumplimiento y Régimen Sancionador
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        Es crucial cumplir con las normativas en Sabiñánigo para evitar
        sanciones. Mantente informado sobre las normativas locales y regionales
        para garantizar el cumplimiento total.
      </p>

      <LicencesIcons image='https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_file_bundle_re_6q1e_z2q9i8.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Conclusión y Recursos Adicionales
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        Ofrecer{' '}
        <strong>
          una vivienda de uso turístico en Sabiñánigo representa una oportunidad
          valiosa
        </strong>{' '}
        para participar en un mercado turístico diversificado y en crecimiento.
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
