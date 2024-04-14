import Link from 'next/link';
import React from 'react';
import { AlquilerVacacional, HelpYouForm, LicenciasTuristicas } from '..';
import { CityImages } from './CityImages';
import { LicencesIcons } from './LicencesIcons';

const images = [
  {
    src: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/C_44_hehtlu.png',
    alt: 'Licencias turísticas: Biescas ciudad',
  },
];

export const BiescasInfo = () => {
  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h1 className='text-center text-2xl md:text-3xl pb-4 mb-6 font-semibold border-b-4 border-b-p600 w-auto md:px-10'>
        Licencias Turísticas en Biescas
      </h1>

      <div className='text-justify lg:text-start text-sm md:text-lg pt-4 space-y-4 mb-10'>
        <p>
          Biescas, situado en el corazón del Valle de Tena en los Pirineos
          Aragoneses, es un destino encantador y vital para el turismo de
          montaña y naturaleza. Este pueblo, que combina belleza natural,
          riqueza cultural y una tranquila vida comunitaria,{' '}
          <strong>
            es un lugar ideal para quienes buscan obtener una licencia turística
          </strong>
          . Al invertir en una propiedad turística aquí, te sumerges en un
          mercado que atrae a amantes de la naturaleza, aventureros y familias
          que buscan disfrutar de la tranquilidad y la belleza del paisaje
          pirenaico.
        </p>

        <p>
          Biescas es conocido por su proximidad a las estaciones de esquí, sus
          rutas de senderismo y ciclismo, y sus paisajes naturales, que incluyen
          bosques, ríos y montañas. Esta diversidad de atracciones{' '}
          <strong>
            asegura un flujo constante de visitantes durante todo el año
          </strong>
          . En invierno, es un paraíso para esquiadores y entusiastas de los
          deportes de nieve, mientras que en verano atrae a senderistas,
          ciclistas y familias.
        </p>

        <p>
          Además, Biescas celebra numerosas festividades y eventos culturales
          que reflejan la rica tradición y el folklore del Pirineo Aragonés.
          Estos eventos son una gran atracción para los turistas y ofrecen una
          oportunidad única para los propietarios de viviendas de uso turístico
          para integrarse en la comunidad y ofrecer experiencias auténticas a
          sus huéspedes.
        </p>
      </div>

      <CityImages images={images} />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:-mx-36 mt-24'>
        Guia para conseguir una licencia turística en Biescas
      </h2>

      <div className='text-justify lg:text-start text-sm md:text-lg pt-4 space-y-4 mb-10'>
        <p>
          <strong>
            Obtener una licencia turística en Biescas requiere cumplir con las
            regulaciones establecidas por el Decreto 1/2023 del Gobierno de
            Aragón
          </strong>
          , asegurándote de que tu propiedad cumpla con los estándares de
          habitabilidad, seguridad y accesibilidad. Además, es importante que la
          vivienda refleje el encanto y carácter de Biescas, ofreciendo una
          experiencia acogedora y genuina.
        </p>

        <p>
          El gobierno local en Biescas apoya activamente el turismo como un
          medio para impulsar la economía local y preservar su patrimonio
          cultural. Como resultado,{' '}
          <strong>
            encontrarás un proceso de licencia turística accesible y bien
            definido
          </strong>
          , pero es crucial estar al tanto de cualquier normativa local
          específica que pueda aplicarse.
        </p>

        <p>
          En las siguientes secciones,{' '}
          <strong>
            te guiaremos a través de los pasos esenciales para adquirir una
            licencia turística en Biescas
          </strong>
          , asegurándote de que tu propiedad no solo cumpla con todas las
          regulaciones, sino que también se destaque como un destino atractivo y
          acogedor para los visitantes , pero si prefieres que te ayudemos
          nosotros, en <strong className='text-p600'>DYGAV</strong>{' '}
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
        Entender la Normativa en Biescas
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Es crucial para los propietarios en Biescas comprender el Decreto 1/2023
        del Gobierno de Aragón, que establece los requisitos para las viviendas
        de uso turístico. Este decreto aborda aspectos clave como la
        habitabilidad, la seguridad y la accesibilidad, con el objetivo de
        mejorar la calidad y satisfacción de los clientes. Para más información,
        puedes{' '}
        <span>
          <Link
            href={
              'https://www.boa.aragon.es/cgi-bin/EBOA/BRSCGI?CMD=VEROBJ&MLKOB=1257201622626'
            }
            className='underline text-p600'
            target='_blanck'
          >
            consultar el Boletín Oficial de Aragón BOA
          </Link>
        </span>
        .
      </p>

      <LicencesIcons image='https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649297/Dygav%20Images/Icons/undraw_file_searching_re_3evy_brkjza_ilcb0a.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Requisitos de la Propiedad
      </h2>

      <p className='text-justify lg:text-start text-sm lg:self-start md:text-lg my-4'>
        Las viviendas turísticas en Biescas deben cumplir con los siguientes
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
        Es importante incluir un botiquín en la vivienda y asegurarse de que no
        se exceda la capacidad máxima alojativa permitida.
      </p>

      <LicencesIcons image='https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649276/Dygav%20Images/Icons/undraw_house_searching_re_stk8_cjs9qi_scufj5.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Proceso de Declaración Responsable
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        La declaración responsable en Biescas permite iniciar el alquiler de la
        propiedad casi de inmediato, sujeta a la confirmación posterior de
        Turismo de Aragón. Esta declaración debe asegurar que la vivienda cumple
        con todos los requisitos necesarios.
      </p>

      <LicencesIcons image='https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649269/Dygav%20Images/Icons/undraw_attached_file_re_0n9b_wyqge2_sbuoak.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Inscripción y Registro
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        Después de presentar la declaración responsable, puedes comenzar la
        actividad turística en Biescas, sujeta a una verificación posterior y al
        registro en el Registro de Turismo de Aragón. Es crucial tener preparado
        un plano acotado de la vivienda y estar listo para el pago de la tasa de
        tramitación.
      </p>

      <LicenciasTuristicas />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Gestión y Mantenimiento de la Vivienda
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        En Biescas, la gestión de viviendas turísticas debe centrarse en la
        calidad y satisfacción del cliente. Asegúrate de que la vivienda cumpla
        con los estándares necesarios para una experiencia turística atractiva y
        cómoda.
      </p>

      <LicencesIcons image='https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649275/Dygav%20Images/Icons/undraw_buy_house_re_8xq7_obrxnk_so8fsx.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Cumplimiento y Régimen Sancionador
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        El cumplimiento de las normativas en Biescas es fundamental para evitar
        sanciones. Mantente informado sobre las normativas locales y regionales
        pertinentes.
      </p>

      <LicencesIcons image='https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649297/Dygav%20Images/Icons/undraw_file_bundle_re_6q1e_z2q9i8_mizphu.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Conclusión y Recursos Adicionales
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-8'>
        Ofrecer una vivienda de uso turístico en Biescas es una excelente
        oportunidad para participar en un mercado turístico dinámico y diverso.
        Para obtener más detalles y asesoramiento, contáctanos o consulta las{' '}
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
