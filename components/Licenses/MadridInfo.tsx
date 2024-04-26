import Link from 'next/link';
import {
  AlquilerVacacional,
  HelpYouForm,
  LicenciasTuristicas,
  Llamanos,
} from '..';
import { CityImages } from './CityImages';
import { OwnersIcons } from '../Owners/OwnersIcons';
import Image from 'next/legacy/image';

const images = [
  {
    src: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/0082-6499120373912739351-82.png',
    alt: 'Licencias turísticas: Madrid Ciudad',
  },
];

export const MadridInfo = () => {
  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h1 className='text-center text-2xl md:text-3xl pb-4 mb-6 font-semibold border-b-4 border-b-p600 w-auto md:px-10'>
        Licencias turísticas en Madrid
      </h1>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Madrid, la capital de España, es una ciudad que desborda vida, cultura y
        historia, convirtiéndola en uno de los destinos turísticos más
        atractivos y dinámicos de Europa. Con su mezcla única de tradición y
        modernidad, Madrid ofrece una experiencia inolvidable para visitantes de
        todo el mundo. Desde los majestuosos monumentos y museos, como el Prado
        y el Palacio Real, hasta sus vibrantes barrios llenos de vida nocturna,
        arte callejero y gastronomía exquisita, Madrid es un tesoro de
        experiencias. Con todo esto,{' '}
        <strong>
          Madrid presenta un panorama único en cuanto a las licencias turísticas
        </strong>
        . En los últimos años, la Comunidad de Madrid ha implementado
        regulaciones específicas para controlar y regular el mercado de alquiler
        vacacional, con un enfoque particular en preservar el equilibrio
        residencial y turístico de la ciudad.
      </p>

      <CityImages images={images} />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Restricciones en la Concesión de Licencias Turísticas en Madrid
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        En Madrid, la concesión de licencias turísticas{' '}
        <strong>se ha restringido significativamente</strong>, especialmente
        para apartamentos en edificios residenciales. Según las normativas
        actuales, es más probable que se concedan licencias a{' '}
        <strong>casas unifamiliares o con acceso independiente</strong>, debido
        a la preocupación por el impacto del turismo en la vida residencial y la
        disponibilidad de vivienda para los residentes locales. Esta restricción
        busca equilibrar el turismo con la calidad de vida de los madrileños.
      </p>

      <OwnersIcons image='https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_thought_process_re_om58.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Leyes y Regulaciones Relevantes en Madrid
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4 mb-10'>
        <strong> La regulación de las viviendas de uso turístico</strong> en
        Madrid se rige por normativas como el Decreto 79/2014, de 10 de julio,
        que establece las condiciones para el desarrollo de la actividad de
        alojamiento turístico en la Comunidad de Madrid. Este decreto, junto con
        modificaciones y normativas municipales posteriores, define los
        criterios y requisitos para la obtención de licencias turísticas.
      </p>

      <OwnersIcons image='https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_os_upgrade_re_r0qa.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Certificado de Compatibilidad Urbanística en Madrid
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4 mb-10'>
        Un aspecto crucial en el{' '}
        <strong>proceso de obtención de licencias turísticas en Madrid</strong>{' '}
        es el <strong>Certificado de Compatibilidad Urbanística</strong>. Este
        documento, que se debe obtener en el Ayuntamiento de Madrid, confirma
        que la propiedad cumple con los planes urbanísticos y es adecuada para
        el uso turístico. Aunque este certificado es especialmente relevante
        para propiedades situadas en ciertas zonas o con características
        específicas, es un paso importante para{' '}
        <strong>
          garantizar el cumplimiento de todas las normativas urbanísticas de la
          ciudad
        </strong>
        . Puedes pedir la compatibilidad urbanística rellenando este formulario
        disponible en la página web del Ayuntamiento de Madrid
      </p>

      <figure className='relative w-52 h-52 md:w-72 md:h-72 self-center mt-6'>
        <Image
          src={
            'https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_certificate_re_yadi.svg'
          }
          alt='Dygav icon'
          layout='fill'
        />
      </figure>

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Requisitos Específicos para Viviendas de Uso Turístico en Madrid
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Para que una vivienda sea considerada apta para el alquiler vacacional
        en Madrid, debe satisfacer varios requisitos, incluyendo:
      </p>

      <ul className='text-sm md:text-lg px-3 pt-4 md:pt-8 list-disc pl-4 md:pl-32 space-y-4'>
        <li>
          <strong>Licencia de primera o segunda ocupación:</strong> Acredita que
          la vivienda cumple con las normativas de construcción y habitabilidad.
        </li>
        <li>
          <strong>Certificado de Compatibilidad Urbanística:</strong>Es
          necesario registrar la vivienda turística en el Ayuntamiento de Madrid
          y asegurarse de que cumpla con todas las regulaciones locales
          pertinentes para obtener este certificado.
        </li>
        <li>
          <strong>Seguro de responsabilidad civil:</strong> Para proteger tanto
          al propietario como a los huéspedes.
        </li>
        <li>
          <strong>
            Cumplimiento de normativas de seguridad y accesibilidad:
          </strong>{' '}
          Las viviendas deben cumplir con todas las regulaciones municipales
          respecto a accesibilidad
        </li>
      </ul>

      <OwnersIcons image='https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_subscriptions_re_k7jj.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Proceso de Obtención de Licencias Turísticas en Madrid
      </h2>

      <ul className='text-sm md:text-lg px-3 pt-4 md:pt-8 list-disc pl-4 md:pl-32 space-y-4 mb-10'>
        <li>
          <strong>Evaluación de Elegibilidad:</strong> Antes de solicitar una
          licencia, es esencial verificar si la propiedad está en una zona que
          permite el alquiler turístico y si cumple con los requisitos
          necesarios.
        </li>
        <li>
          <strong>
            Obtención del Certificado de Compatibilidad Urbanística:
          </strong>
          Este documento se solicita en el Ayuntamiento de Madrid y es un
          requisito previo para el proceso de licencia turística.
        </li>
        <li>
          <strong>Solicitud de Licencia Turística:</strong> Con todos los
          documentos en regla, incluyendo el Certificado de Compatibilidad
          Urbanística, se procede a la solicitud formal de la licencia turística
          en los medios telemáticos de Turismo de la Comunidad de Madrid.
        </li>
      </ul>

      <Llamanos />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Tiempo Estimado para la Obtención de la Licencia en Madrid
      </h2>

      <div className='text-justify lg:text-start text-sm md:text-lg pt-4 space-y-4'>
        <p>
          El tiempo para{' '}
          <strong>obtener la licencia turística definitiva en Madrid</strong>
          puede variar, dependiendo del tipo de propiedad y de la carga de
          trabajo en el Ayuntamiento pero normalmente todo el proceso suele
          durar entre 2 y 5 meses. Es importante iniciar el proceso con
          suficiente antelación y preparar meticulosamente toda la documentación
          necesaria.
        </p>

        <p>
          Sin embargo al ser una declaración Responsable en Madrid{' '}
          <strong>
            se puede comenzar a operar bastante antes de que recibamos la
            licencia definitiva
          </strong>
          .
        </p>

        <p>
          Aunque el proceso para obtener una licencia turística en Madrid puede
          ser complejo, representa una oportunidad significativa para los
          propietarios de propiedades adecuadas. En{' '}
          <strong className='text-p600'>DYGAV</strong>, estamos listos para
          <strong>
            ayudarte en cada paso de este proceso, ofreciéndote asesoramiento
            personalizado tanto en la obtención de la licencia como en la
          </strong>{' '}
          <Link
            href={'/gestion-viviendas-turisticas/madrid'}
            className='text-p600 underline'
          >
            gestión integral de tu vivienda turística en Madrid
          </Link>{' '}
          . Contáctanos para más información.
        </p>
      </div>

      <HelpYouForm />
    </section>
  );
};
