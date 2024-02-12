import { CityImages } from '../Licenses/CityImages';
import { OwnersIcons } from './OwnersIcons';
import { HelpYouForm, Llamanos } from '..';
import { VacationRentalHome } from './VacationRentalHome';
import Link from 'next/link';

const images = [
  {
    src: 'https://res.cloudinary.com/vicflores11/image/upload/v1699567164/Dygav/Benidorm/3_ns0pgn.webp',
    alt: 'Gestión de vivendas turísticas en Benidorm',
  },
];

export const BenidormMgmtInfo = () => {
  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h1 className='text-center text-2xl md:text-3xl pb-4 mb-6 font-semibold border-b-4 border-b-p600 w-auto md:px-10'>
        Gestión de Viviendas Turísticas en Benidorm
      </h1>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Benidorm, conocido como el &quot;Manhattan español&quot; por su
        impresionante perfil de rascacielos, es un destino turístico icónico en
        la Costa Blanca. Esta vibrante ciudad atrae visitantes con sus extensas
        playas de arena como Playa de Levante y Playa de Poniente, su animada
        vida nocturna y una variedad de atracciones para todas las edades, como
        el parque temático Terra Mítica y los parques acuáticos Aqualandia y
        Aqua Natura. El mirador del Castillo de Benidorm ofrece vistas
        panorámicas del Mediterráneo, mientras que el casco antiguo conserva un
        encanto más tradicional con sus pintorescas calles y plazas.
        Definitivamente, Benidorm es una ciudad con{' '}
        <strong>un gran potencial para propietarios e inversores</strong> que
        deseen entrar en el mercado de las viviendas de uso turístico.
      </p>

      <CityImages images={images} />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Análisis de Mercado Vacacional en Benidorm
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Benidorm es un mercado turístico dinámico, conocido por su alta demanda
        durante todo el año debido a su clima cálido y su oferta turística. La
        ciudad atrae tanto a{' '}
        <strong>turistas nacionales como internacionales</strong>, incluyendo
        familias, parejas y grupos de amigos. Las propiedades en Benidorm,
        especialmente aquellas con vistas al mar y cercanas a las principales
        atracciones, tienen un alto potencial de alquiler durante todo el año.
      </p>

      <OwnersIcons image='https://res.cloudinary.com/vicflores11/image/upload/v1706804882/Dygav/undraw_travelers_re_y25a_zbrkat.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16 md:mb-0'>
        Oportunidades de Inversión en Viviendas Turísticas en Benidorm
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4 mb-10'>
        Invertir en viviendas turísticas en Benidorm significa apostar por una
        ciudad con un{' '}
        <strong>mercado de alquiler vacacional consolidado</strong>. Las
        propiedades con fácil acceso a las playas y al centro de la ciudad, así
        como aquellas que ofrecen comodidades modernas y vistas al mar, son
        particularmente rentables. Benidorm es ideal para inversiones tanto en
        apartamentos modernos como en propiedades más tradicionales en el casco
        antiguo.
      </p>

      <OwnersIcons
        image='https://res.cloudinary.com/vicflores11/image/upload/v1705018501/Dygav/undraw_buy_house_re_8xq7_obrxnk.svg'
        customWidth='290px'
      />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-24'>
        Servicios de Gestión Integral de Viviendas Vacacionales en Benidorm
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4 mb-16'>
        En <strong className='text-p600'>DYGAV</strong>, ofrecemos una{' '}
        <strong>gestión integral de tu vivienda vacacional en Benidorm</strong>.
        Nos encargamos de todos los aspectos necesarios, desde la{' '}
        <span>
          <Link
            href={'/licencias-turisticas/benidorm'}
            className='underline text-p600'
          >
            obtención de la licencia turística en Benidorm
          </Link>
        </span>{' '}
        hasta la promoción en plataformas de alquiler, la gestión de reservas y
        el mantenimiento de la propiedad. Nuestro enfoque personalizado asegura
        que maximices tus ingresos mientras mantienes tu propiedad en óptimas
        condiciones.
      </p>

      <Llamanos />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-24'>
        ¿Cómo te ayudamos a rentabilizar tu casa de alquiler vacacional?
      </h2>

      <VacationRentalHome />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-24'>
        Maximiza el Rendimiento de tu Propiedad Turística en Benidorm
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Con <strong className='text-p600'>DYGAV</strong>, cada propiedad es
        tratada de manera única. Nos adaptamos a tus necesidades específicas,
        implementando estrategias de marketing digital y garantizando un
        mantenimiento impecable. Nos dedicamos a{' '}
        <strong>optimizar el rendimiento de tu inversión en Benidorm</strong>,
        asegurando que tu propiedad no solo genere ingresos sino que también se
        mantenga en perfecto estado para cuando tú desees utilizarla.
      </p>

      <HelpYouForm />
    </section>
  );
};
