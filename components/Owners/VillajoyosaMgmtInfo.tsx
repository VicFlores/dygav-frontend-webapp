import { CityImages } from '../Licenses/CityImages';
import { OwnersIcons } from './OwnersIcons';
import { HelpYouForm, Llamanos } from '..';
import { VacationRentalHome } from './VacationRentalHome';
import Link from 'next/link';

const images = [
  {
    src: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/9_na4ziy.png',
    alt: 'Gestión de vivendas turísticas en Villajoyosa',
  },
];

export const VillajoyosaMgmtInfo = () => {
  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h1 className='text-center text-2xl md:text-3xl pb-4 mb-6 font-semibold border-b-4 border-b-p600 w-auto md:px-10'>
        Gestión de Viviendas Turísticas en Villajoyosa
      </h1>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Villajoyosa, conocida también como La Vila Joiosa, es una pintoresca
        ciudad en la Costa Blanca famosa por sus coloridas casas frente al mar,
        hermosas playas y un rico patrimonio histórico. Este encantador
        municipio es célebre por su tradición chocolatera y sus festivales
        culturales, ofreciendo una experiencia turística única que combina el
        encanto de un pueblo de pescadores con una rica historia y una vibrante
        vida cultural. Por todos estos motivos{' '}
        <strong>
          Villajoyosa se posiciona como un destino óptimo para la inversión en
          el sector del alquiler vacacional
        </strong>
        .
      </p>

      <CityImages images={images} />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Análisis de Mercado Vacacional en Villajoyosa
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        El mercado vacacional en Villajoyosa atrae a turistas que buscan una
        experiencia auténtica, más allá de las típicas playas de la Costa
        Blanca.{' '}
        <strong>
          La demanda es particularmente alta durante los meses de verano
        </strong>
        , pero también existe un interés creciente durante el resto del año
        debido a sus festivales culturales y atracciones históricas. Las
        propiedades con vistas al mar y aquellas cercanas al casco antiguo y las
        playas son altamente valoradas.
      </p>

      <OwnersIcons image='https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_travelers_re_y25a_zbrkat.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Oportunidades de Inversión en Viviendas Turísticas en Villajoyosa
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Invertir en Villajoyosa significa apostar por un destino con un encanto
        único y autenticidad. Las propiedades que resaltan el carácter
        tradicional de la ciudad, combinadas con comodidades modernas, son muy
        atractivas. Existe un buen potencial en la{' '}
        <strong>renovación de casas antiguas</strong>, así como en la inversión
        en{' '}
        <strong>
          apartamentos modernos que ofrezcan comodidad y accesibilidad a las
          principales atracciones y playas de la ciudad
        </strong>
        .
      </p>

      <OwnersIcons image='https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_buy_house_re_8xq7_obrxnk.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-24'>
        Servicios de Gestión Integral de Viviendas Vacacionales en Villajoyosa
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4 mb-16'>
        En <strong className='text-p600'>DYGAV</strong>,{' '}
        <strong>
          ofrecemos una gestión integral para propiedades en Villajoyosa
        </strong>
        , asegurando que cada vivienda alcance su máximo potencial. Nos ocupamos
        de todos los aspectos, desde la{' '}
        <span>
          <Link
            className='underline text-p600'
            href={'/licencias-turisticas/villajoyosa'}
          >
            obtención de la licencia turística para poder operar en Villajoyosa
          </Link>
        </span>{' '}
        hasta la promoción, gestión de reservas, limpieza y mantenimiento,
        enfocándonos en atraer a turistas que buscan una experiencia más
        auténtica y cultural.
      </p>

      <Llamanos />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-24'>
        ¿Cómo te ayudamos a rentabilizar tu casa de alquiler vacacional?
      </h2>

      <VacationRentalHome />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-24'>
        Maximiza el Rendimiento de tu Propiedad Turística en Villajoyosa
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Con nuestro enfoque en <strong className='text-p600'>DYGAV</strong>,
        cada propiedad en Villajoyosa es cuidada minuciosamente para resaltar su
        encanto y atractivo únicos. Nos dedicamos a{' '}
        <strong>maximizar los ingresos de tu inversión</strong>, manteniendo tu
        propiedad en perfecto estado para asegurar{' '}
        <strong>
          la mejor experiencia para tus huéspedes y para ti cuando decidas
          utilizar tu propiedad
        </strong>
        . Nos esforzamos por lograr una alta tasa de ocupación y satisfacción
        del cliente, lo que se traduce en un alto retorno de inversión.
      </p>

      <HelpYouForm />
    </section>
  );
};
