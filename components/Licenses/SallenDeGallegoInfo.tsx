import Link from 'next/link';
import React from 'react';
import { AlquilerVacacional, HelpYouForm, LicenciasTuristicas } from '..';
import { CityImages } from './CityImages';
import { CityCardsFooter } from './CityCardsFooter';

const images = [
  {
    src: 'https://res.cloudinary.com/vicflores11/image/upload/v1704984189/Dygav/Sallent%20%20De%20G%C3%A1llego/C_9_yy7q0h.webp',
    alt: 'Licencias turísticas: Formigal',
  },
];

export const SallenDeGallegoInfo = () => {
  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h1 className='text-center text-2xl md:text-3xl pb-4 mb-6 font-semibold border-b-4 border-b-p600 w-auto md:px-10'>
        Licencias Turísticas en Sallent de Gállego
      </h1>

      <div className='text-justify lg:text-start text-sm md:text-lg pt-4 space-y-4 mb-10'>
        <p>
          Sallent de Gállego,{' '}
          <strong>
            ubicado en el valle de Tena en el corazón del Pirineo Aragonés
          </strong>
          , es una joya para el turismo rural y de naturaleza. Este pueblo al
          pie de las montañas es conocido por su impresionante paisaje, sus
          aguas cristalinas y su rica cultura pirenaica.{' '}
          <strong>
            Conseguir una licencia turística en Sallent de Gállego representa
            una oportunidad única para los propietarios
          </strong>{' '}
          que buscan capitalizar el creciente interés en el turismo de montaña y
          aventura.
        </p>

        <p>
          Sallent de Gállego, con su proximidad a renombradas estaciones de
          esquí y rutas de senderismo,{' '}
          <strong>
            atrae a una gran variedad de visitantes durante todo el año
          </strong>
          . En invierno, es un destino predilecto para los amantes del esquí y
          los deportes de nieve, mientras que en verano, se convierte en un
          paraíso para los senderistas, escaladores y amantes de la naturaleza.
          Esta diversidad de actividades{' '}
          <strong>
            asegura una demanda constante de alojamiento turístico
          </strong>
          .
        </p>

        <p>
          Este municipio no solo es un lugar de paso para los aventureros, sino
          que también es un centro de cultura y tradiciones locales. Los
          festivales, la gastronomía y las celebraciones culturales son aspectos
          fundamentales de la vida en Sallent de Gállego, ofreciendo a los
          turistas una experiencia auténtica y enriquecedora.
        </p>
      </div>

      <CityImages images={images} />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:-mx-36 mt-24'>
        Guia para conseguir una licencia turística en Sallent de Gállego
      </h2>

      <div className='text-justify lg:text-start text-sm md:text-lg pt-4 space-y-4 mb-10'>
        <p>
          Al buscar una licencia turística en Sallent de Gállego, es importante
          considerar la armonía entre tu propiedad y el entorno natural y
          cultural.{' '}
          <strong>
            Las viviendas de uso turístico en este área deben reflejar el
            encanto rústico de la región, a la vez que ofrecen todas las
            comodidades modernas
          </strong>
          .
        </p>

        <p>
          El gobierno local de Sallent de Gállego facilita el proceso de
          obtención de licencias turísticas, con el objetivo de promover el
          turismo sostenible y de calidad. Sin embargo, es{' '}
          <strong>
            esencial estar al tanto de las normativas específicas del municipio,
            así como de las directrices generales del Decreto 1/2023 del
            Gobierno de Aragón.
          </strong>
        </p>

        <p>
          En las siguientes secciones,{' '}
          <strong>
            te guiaremos a través de los pasos esenciales para obtener una
            licencia turística en Sallent de Gállego
          </strong>
          , para que puedas asegurarte de que tu propiedad no solo cumpla con
          todas las regulaciones, sino que también ofrezca una experiencia única
          a tus huéspedes pero si lo prefieres en{' '}
          <strong>DYGAV somos expertos en</strong>{' '}
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
          . ¡Contáctanos y estaremos encantados de ayudarte!.
        </p>
      </div>

      <AlquilerVacacional />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-72 lg:px-10 mt-16'>
        Entender la Normativa
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg md:px-20 mt-4'>
        Para operar una vivienda turística en Sallent de Gállego, es esencial
        comprender el <strong>Decreto 1/2023 del Gobierno de Aragón</strong>.
        Este decreto establece requisitos específicos de habitabilidad,
        seguridad y accesibilidad, enfocándose en la calidad y satisfacción del
        cliente. Para más detalles sobre este decreto{' '}
        <span>
          <Link
            href={
              'https://www.boa.aragon.es/cgi-bin/EBOA/BRSCGI?CMD=VEROBJ&MLKOB=1257201622626'
            }
            className='underline text-p600'
            target='_blanck'
          >
            puedes consultarlo en el Boletín Oficial de Aragón BOA
          </Link>
        </span>
        .
      </p>

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Requisitos de la Propiedad en Sallent de Gállego
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg md:px-20 mt-4'>
        Las viviendas en Sallent de Gállego deben cumplir con los siguientes
        estándares específicos:
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

      <p className='text-justify lg:text-start text-sm md:text-lg md:px-20 mt-8'>
        Además, es obligatorio incluir un botiquín y asegurarse de que la
        capacidad total de la vivienda no exceda la capacidad máxima alojativa
        permitida.
      </p>

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Proceso de Declaración Responsable en Sallent de Gállego
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg md:px-20 mt-8'>
        En Sallent de Gállego, la declaración responsable te permite alquilar la
        propiedad de inmediato, sujeta a la confirmación posterior de Turismo de
        Aragón. Esta declaración debe confirmar que la vivienda cumple con los
        requisitos de habitabilidad y seguridad.
      </p>

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Inscripción y Registro
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg md:px-20 mt-8'>
        Tras la declaración responsable, puedes iniciar la actividad turística,
        sujeta a verificación y registro en el Registro de Turismo de Aragón.
        <strong>
          Ten preparado un plano acotado de la vivienda y la tasa por la
          tramitación de esta declaración
        </strong>
        .
      </p>

      <LicenciasTuristicas />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Gestión y Mantenimiento de la Vivienda
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg md:px-20 mt-8'>
        La gestión en Sallent de Gállego debe centrarse en garantizar la calidad
        y satisfacción del cliente, con viviendas adecuadas para las necesidades
        de los turistas que visitan la región.
      </p>

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Cumplimiento y Régimen Sancionador
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg md:px-20 mt-8'>
        Es crucial cumplir con las normativas en Sallent de Gállego para evitar
        sanciones. Mantente informado sobre las normativas locales y regionales
        relevantes.
      </p>

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-44 mt-16'>
        Conclusión y Recursos Adicionales
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg md:px-20 mt-8'>
        Ofrecer una vivienda de uso turístico en Sallent de Gállego es una
        oportunidad fantástica en un destino turístico muy popular. Para más
        información,contáctanos o{' '}
        <span>
          <Link
            href={
              'https://www.aragon.es/tramitador/-/tramite/declaracion-responsable-viviendas-turistico'
            }
            className='underline text-p600'
            target='_blanck'
          >
            consulta las fuentes del Gobierno de Aragón
          </Link>
        </span>{' '}
        y las autoridades locales de turismo.
      </p>

      <HelpYouForm />
    </section>
  );
};
