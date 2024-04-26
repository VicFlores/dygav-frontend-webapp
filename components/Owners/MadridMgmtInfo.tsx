import { CityImages } from '../Licenses/CityImages';
import { OwnersIcons } from './OwnersIcons';
import { HelpYouForm, Llamanos } from '..';
import { VacationRentalHome } from './VacationRentalHome';
import Link from 'next/link';

const images = [
  {
    src: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/0077-6499120373912739351-77.png',
    alt: 'Gestión de vivendas turísticas en Madrid',
  },
];

export const MadridMgmtInfo = () => {
  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h1 className='text-center text-2xl md:text-3xl pb-4 mb-6 font-semibold border-b-4 border-b-p600 w-auto md:px-10'>
        Expertos en Gestión de Viviendas Turísticas en Madrid
      </h1>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Madrid, la capital de España, se despliega como un tapiz de cultura,
        historia y modernidad. Esta metrópoli, que palpita al ritmo de sus
        plazas bulliciosas, sus calles llenas de historia y sus espacios verdes,
        tan necesarios para los madrileños para poder desconectar de su agitado
        día a día, ofrece un sinfín de experiencias para viajeros de todo tipo.
        En <strong className='text-p600'>DYGAV</strong>, nos especializamos en
        realzar la estancia de cada visitante mediante una gestión de viviendas
        turísticas impecable. Nuestro compromiso es asegurar que cada propiedad
        no solo cumpla con las expectativas de los huéspedes sino que las
        supere, proporcionando a los propietarios la tranquilidad de saber que
        su inversión es cuidada con la máxima profesionalidad y dedicación en la
        capital de España.{' '}
        <strong>
          Rentabiliza tu propiedad mientras no la utilizas y disfruta de ella
          cuando tú decidas.
        </strong>
      </p>

      <CityImages images={images} />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Servicio Integral de Gestión de Viviendas Turísticas
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4 mb-16'>
        Nuestro conocimiento profundo de Madrid y su mercado turístico nos
        permite ofrecer{' '}
        <strong>
          un servicio de gestión integral de viviendas turísticas adaptado a la
          dinámica de la ciudad
        </strong>
        . Además de ayudarte a{' '}
        <Link
          href={'/licencias-turisticas/madrid'}
          className='text-p600 underline'
        >
          tramitar tu licencia turística en Madrid
        </Link>
        , desarrollamos estrategias de marketing personalizadas, gestionamos
        eficientemente las reservas, y nos encargamos del mantenimiento y la
        limpieza con los más altos estándares de calidad. Nuestro objetivo es{' '}
        {''}
        <strong>maximizar la ocupación y los ingresos</strong>, realzando el
        atractivo de tu propiedad en el contexto de una ciudad tan rica y
        diversa.
      </p>

      <Llamanos />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        DYGAV en Madrid
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Al elegir <strong className='text-p600'>DYGAV</strong> para la gestión
        de tu vivienda turística en Madrid, estás optando por un líder del
        mercado con una visión local única y un alto estándar de servicio. Nos
        aseguramos de que cada propiedad que gestionamos sirva como el punto de
        partida ideal para que los huéspedes exploren la capital, desde sus
        famosos museos y sitios históricos hasta su exquisita gastronomía y su
        inagotable oferta cultural y de entretenimiento.
      </p>

      <OwnersIcons image='https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_city_girl_ccpd.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Una Estrategia de Gestión Personalizada para Tu Vivienda Vacacional
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Entendemos que gestionar una vivienda turística en Madrid es crear
        oportunidades para experiencias inolvidables y asegurar rendimientos
        significativos para los propietarios. Por eso, ofrecemos{' '}
        <strong>una estrategia de gestión a medida para cada propiedad</strong>,
        asegurando que se destaque en el mercado y atraiga a una amplia gama de
        visitantes nacionales e internacionales.
      </p>

      <OwnersIcons image='https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_house_searching_re_stk8_cjs9qi.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Todos Nuestros Servicios de Gestión Integral
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Ofrecemos{' '}
        <strong>
          un servicio completo de gestión integral para tu vivienda turística en
          Madrid
        </strong>
        , incluyendo asesoramiento en inversiones y mejoras, reportajes
        fotográficos profesionales, marketing y promoción en todas las
        plataformas de alquiler vacacional, y optimización de precios con
        inteligencia artificial. Además, facilitamos un proceso de check-in y
        check-out digitalizado, brindamos atención al cliente 24/7, y nos
        ocupamos de la limpieza y el mantenimiento. También gestionamos seguros
        y fianzas, y desarrollamos estrategias para maximizar las reseñas
        positivas,{' '}
        <strong>
          garantizando así la máxima rentabilidad de tu inversión y la plena
          satisfacción de tus huéspedes
        </strong>
        .
      </p>

      <VacationRentalHome />

      <HelpYouForm />
    </section>
  );
};
