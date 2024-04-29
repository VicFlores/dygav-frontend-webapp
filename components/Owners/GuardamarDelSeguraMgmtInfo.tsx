import { CityImages } from '../Licenses/CityImages';
import { OwnersIcons } from './OwnersIcons';
import { HelpYouForm, Llamanos } from '..';
import { VacationRentalHome } from './VacationRentalHome';
import Link from 'next/link';

const images = [
  {
    src: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/5_pfqear.png',
    alt: 'Gestión de vivendas turísticas en Guardamar del Segura',
  },
];

export const GuardamarDelSeguraMgmtInfo = () => {
  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h1 className='text-center text-2xl md:text-3xl pb-4 mb-6 font-semibold border-b-4 border-b-p600 w-auto md:px-10'>
        Gestión de Viviendas Turísticas en Guardamar del Segura
      </h1>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Guardamar del Segura es un destino excepcional, ubicado en la
        privilegiada Costa Blanca, donde la naturaleza se une a la historia para
        crear un entorno vacacional sin igual. Con más de 11 kilómetros de
        playas de arena fina y un sistema único de dunas fijadas por un extenso
        bosque de pinos, Guardamar ofrece un oasis de tranquilidad y belleza
        natural. Además, la rica historia de la localidad, visible en sus
        yacimientos arqueológicos y el Castillo de Guardamar, añade una capa de
        profundidad cultural a la experiencia turística. Ideal para familias,
        aventureros y aquellos que buscan desconectar,{' '}
        <strong>
          Guardamar del Segura es una joya por descubrir para inversores
          visionarios en el mercado del alquiler vacacional.
        </strong>
      </p>

      <CityImages images={images} />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Análisis de Mercado Vacacional en Guardamar del Segura
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        El mercado vacacional en Guardamar del Segura es vibrante y diverso,
        atrayendo a una amplia gama de turistas durante todo el año. Durante la
        temporada alta, especialmente{' '}
        <strong>
          en los meses de verano, la demanda de alojamiento vacacional alcanza
          su punto máximo
        </strong>
        , pero gracias a su clima agradable y atractivos naturales, el municipio
        recibe visitantes incluso en los meses más tranquilos. Las propiedades
        bien ubicadas, cerca de la playa, con vistas al mar o en urbanizaciones
        con comodidades como piscinas y áreas recreativas, son altamente
        solicitadas por los turistas.
      </p>

      <OwnersIcons image='https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_travelers_re_y25a_zbrkat.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Oportunidades de Inversión en Viviendas Turísticas en Guardamar del
        Segura
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        <strong>
          {' '}
          Invertir en viviendas turísticas en Guardamar del Segura ofrece
          oportunidades interesantes para obtener buenos retornos de inversión
        </strong>
        . Las propiedades cerca de la playa, en el centro del municipio o en
        zonas residenciales con fácil acceso a las atracciones locales son
        altamente valoradas por los turistas. Además, las inversiones en
        propiedades bien equipadas y con servicios adicionales como piscinas,
        terrazas y jardines pueden atraer a una amplia gama de visitantes.
      </p>

      <OwnersIcons image='https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_buy_house_re_8xq7_obrxnk.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-24'>
        Servicios de Gestión Integral de Viviendas Vacacionales en Guardamar del
        Segura
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4 mb-8'>
        En <strong className='text-p600'>DYGAV</strong>, ofrecemos servicios
        integrales de gestión de propiedades en Guardamar del Segura para
        garantizar el máximo rendimiento de tu inversión. Todo empieza con la{' '}
        {''}
        <span>
          <Link
            className='text-p600 underline'
            href={'/licencias-turisticas/guardamar-del-segura'}
          >
            tramitación de la licencia turística en Guardamar
          </Link>
        </span>{' '}
        para después pasar a la comercialización y promoción de la propiedad
        hasta la gestión de reservas, limpieza y mantenimiento.
      </p>

      <p className='text-justify lg:text-start text-sm md:text-lg mb-16'>
        Nos dedicamos a <strong>maximizar los ingresos de tu inversión</strong>,
        manteniendo tu propiedad en perfecto estado para asegurar{' '}
        <strong>
          la mejor experiencia para tus huéspedes y para ti cuando decidas
          utilizar tu propiedad
        </strong>
        .
      </p>

      <Llamanos />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-24'>
        ¿Cómo te ayudamos a rentabilizar tu casa de alquiler vacacional?
      </h2>

      <VacationRentalHome />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-24'>
        Maximiza el Rendimiento de tu Propiedad Turística en Guardamar del
        Segura
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Con <strong className='text-p600'>DYGAV</strong>, tu propiedad en
        Guardamar del Segura será gestionada de manera profesional y eficiente{' '}
        <strong>para maximizar su rendimiento</strong>. Nos comprometemos a
        mantener tu propiedad en óptimas condiciones, gestionar las reservas de
        manera efectiva y ofrecer un servicio excepcional a los huéspedes.
        Nuestra atención al detalle y enfoque personalizado garantizan que tu
        inversión sea rentable y esté siempre en las mejores manos.
      </p>

      <HelpYouForm />
    </section>
  );
};
