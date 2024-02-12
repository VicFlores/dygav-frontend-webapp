import { CityImages } from '../Licenses/CityImages';
import { OwnersIcons } from './OwnersIcons';
import { HelpYouForm, Llamanos } from '..';
import { VacationRentalHome } from './VacationRentalHome';
import Link from 'next/link';

const images = [
  {
    src: 'https://res.cloudinary.com/vicflores11/image/upload/v1699646545/Dygav/Orihuela/Copia_de_7_xhahz0.webp',
    alt: 'Gestión de vivendas turísticas en Orihuela',
  },
];

export const OrihuelaMgmtInfo = () => {
  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h1 className='text-center text-2xl md:text-3xl pb-4 mb-6 font-semibold border-b-4 border-b-p600 w-auto md:px-10'>
        Gestión de Viviendas Turísticas en Orihuela
      </h1>

      <div className='text-justify lg:text-start text-sm md:text-lg pt-4 space-y-4 mb-12'>
        <p>
          Orihuela, ciudad cargada de historia, está salpicada de magníficas
          edificaciones que cuentan su pasado, desde la majestuosa Catedral
          hasta el histórico Palacio Episcopal. Sus calles, que respiran
          historia, están flanqueadas por edificios de estilo gótico,
          renacentista y barroco, lo que la convierte en un museo al aire libre
          para los amantes de la arquitectura y la historia.
        </p>

        <p>
          La ciudad también es conocida por su vibrante vida cultural, marcada
          por festivales y eventos que{' '}
          <strong>atraen a visitantes de todas partes</strong>, como las
          procesiones de Semana Santa, declaradas de Interés Turístico
          Internacional.
        </p>

        <p>
          Orihuela no sólo seduce por su riqueza cultural y artística, sino
          también por su entorno natural. Rodeada por fértiles huertas y cercana
          a la costa, ofrece una mezcla única de experiencias urbanas y
          naturales. Esta dualidad entre lo urbano y lo natural brinda una
          oportunidad única para los visitantes de explorar tanto la vida de una
          ciudad histórica como relajarse en entornos naturales de gran belleza.
        </p>

        <p>
          La gastronomía de Orihuela es otro de sus puntos fuertes, con una
          cocina que mezcla influencias del interior y la costa, ofreciendo
          platos que son un reflejo de su diversidad geográfica y cultural.
        </p>

        <p>
          Todo esto, sumado a la reciente construcción de las líneas de tren de
          alta velocidad, hacen de Orihuela un lugar{' '}
          <strong>
            muy interesante para inversores y propietarios que deseen iniciarse
            en el mercado del alquiler vacacional
          </strong>
          .
        </p>
      </div>

      <CityImages images={images} />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Análisis de Mercado Vacacional en Orihuela
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        El mercado vacacional en Orihuela atrae a un público interesado en la
        cultura, la historia y el arte.{' '}
        <strong>La demanda de alojamientos en el área es alta</strong>,
        especialmente en propiedades que estén cerca de los principales sitios
        históricos y culturales. Además, la ciudad también es conocida por su
        oferta gastronómica y vinícola, lo que suma atractivo para los turistas.
      </p>

      <OwnersIcons image='https://res.cloudinary.com/vicflores11/image/upload/v1706804882/Dygav/undraw_travelers_re_y25a_zbrkat.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Oportunidades de Inversión en Viviendas Turísticas en Orihuela
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Las oportunidades de inversión en Orihuela son diversas, abarcando desde
        viviendas tradicionales en el casco antiguo hasta propiedades modernas
        en las zonas residenciales. Las inversiones en propiedades que conservan
        el encanto arquitectónico de Orihuela, combinado con comodidades
        modernas, son particularmente atractivas para los turistas.
      </p>

      <OwnersIcons image='https://res.cloudinary.com/vicflores11/image/upload/v1705018501/Dygav/undraw_buy_house_re_8xq7_obrxnk.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-24'>
        Servicios de Gestión Integral de Viviendas Vacacionales en Orihuela
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4 mb-16'>
        En <strong className='text-p600'>DYGAV</strong>, proporcionamos una
        gestión integral de propiedades turísticas en Orihuela, asegurando que
        cada vivienda no solo cumpla con las expectativas de los turistas
        interesados en la riqueza cultural de la ciudad, sino que también genere
        un retorno de inversión óptimo. Nos encargamos de la promoción, la
        gestión de reservas y la limpieza y el mantenimiento de las propiedades.
        Si lo necesitas, también podemos ayudarte a{' '}
        <span>
          <Link
            href={'/licencias-turisticas/orihuela'}
            className='underline text-p600'
          >
            conseguir la licencia turistica en Orihuela
          </Link>
        </span>
        .
      </p>

      <Llamanos />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-24'>
        ¿Cómo te ayudamos a rentabilizar tu casa de alquiler vacacional?
      </h2>

      <VacationRentalHome />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-24'>
        Maximiza el Rendimiento de tu Propiedad Turística en Orihuela
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Con <strong className='text-p600'>DYGAV</strong>, tu propiedad en
        Orihuela será cuidada con un enfoque en resaltar sus características
        únicas, asegurando que cada estancia sea una experiencia inolvidable
        para los huéspedes. Nos dedicamos a{' '}
        <strong>optimizar la rentabilidad de tu inversión</strong>, manteniendo
        tu propiedad en las mejores condiciones{' '}
        <strong>
          tanto para tus huéspedes como para ti cuando desees utilizarla
        </strong>
        .
      </p>

      <HelpYouForm />
    </section>
  );
};
