import { CityImages } from '../Licenses/CityImages';
import { OwnersIcons } from './OwnersIcons';
import { HelpYouForm, Llamanos } from '..';
import { VacationRentalHome } from './VacationRentalHome';
import Link from 'next/link';

const images = [
  {
    src: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/c_2_m0pzih.png',
    alt: 'Gestión de vivendas turísticas en La Mata',
  },
];

export const LaMataMgmtInfo = () => {
  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h1 className='text-center text-2xl md:text-3xl pb-4 mb-6 font-semibold border-b-4 border-b-p600 w-auto md:px-10'>
        Gestión de Viviendas Turísticas en La Mata
      </h1>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        La Mata, conocida por su impresionante playa y su parque natural, es un
        destino turístico idílico en la Costa Blanca. Este tranquilo pueblo
        ofrece una combinación perfecta de naturaleza y relax, con su famosa
        playa de arena dorada y el Parque Natural de La Mata-Torrevieja, un
        lugar ideal para los amantes del ecoturismo y la observación de aves. La
        Mata es un destino perfecto para aquellos que buscan una experiencia
        vacacional más serena y en contacto con la naturaleza.Todo esto hace de
        <strong>
          {' '}
          La Mata un lugar idóneo para la inversión en propiedades de alquiler
          vacacional
        </strong>
        .
      </p>

      <CityImages images={images} />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Análisis de Mercado Vacacional en La Mata
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        La Mata atrae principalmente a turistas que buscan disfrutar de la
        belleza natural y la tranquilidad. La demanda de alojamiento vacacional
        es bastante estacional, especialmente alta durante los meses de verano,
        pero también hay{' '}
        <strong>
          un interés creciente en la temporada baja debido a su parque natural y
          agradable clima
        </strong>{' '}
        durante todo el año. Las propiedades con vistas al mar o aquellas
        cercanas al parque natural son altamente demandadas.
      </p>

      <OwnersIcons image='https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_travelers_re_y25a_zbrkat.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Oportunidades de Inversión en Viviendas Turísticas en La Mata
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Invertir en La Mata es ideal para aquellos que buscan{' '}
        <strong>un mercado turístico más tranquilo</strong>. Las propiedades que
        ofrecen acceso fácil a la playa y al parque natural, así como aquellas
        con características sostenibles y respetuosas con el entorno, tienen un
        gran potencial. Las viviendas que combinan comodidad y un toque
        auténtico de la vida en la costa mediterránea son especialmente
        atractivas para los visitantes.
      </p>

      <OwnersIcons image='https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_buy_house_re_8xq7_obrxnk.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-24'>
        Servicios de Gestión Integral de Viviendas Vacacionales en La Mata
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4 mb-16'>
        En <strong className='text-p600'>DYGAV</strong>, ofrecemos una gestión
        integral de propiedades turísticas en La Mata, enfocándonos en maximizar
        la rentabilidad de cada inversión. Nos ocupamos de todo, desde la {''}
        <span>
          <Link
            className='text-p600 underline'
            href={'/licencias-turisticas/torrevieja'}
          >
            obtención de la licencia turística en el ayuntamiento de Torrevieja
          </Link>
        </span>
        , hasta la promoción, gestión de reservas, limpieza y mantenimiento,
        asegurando que cada propiedad alcance su máximo potencial y mantenga su
        valor a largo plazo.
      </p>

      <Llamanos />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-24'>
        ¿Cómo te ayudamos a rentabilizar tu casa de alquiler vacacional?
      </h2>

      <VacationRentalHome />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-24'>
        Maximiza el Rendimiento de tu Propiedad Turística en La Mata
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Nuestro compromiso en <strong className='text-p600'>DYGAV</strong> es
        brindar una gestión personalizada y detallada para cada propiedad en La
        Mata. Nos dedicamos a garantizar que cada vivienda no solo genere
        ingresos, sino que también{' '}
        <strong>ofrezca una experiencia excepcional a los huéspedes</strong>, lo
        que se traduce en un alto nivel de satisfacción y posibles reservas
        repetidas. Con <strong className='text-p600'>DYGAV</strong>, tu
        inversión está en manos expertas, garantizando que tu propiedad esté
        <strong>
          siempre en las mejores condiciones para tus huéspedes y para ti cuando
          quieras utilizarla
        </strong>
        .
      </p>

      <HelpYouForm />
    </section>
  );
};
