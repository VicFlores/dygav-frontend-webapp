import { CityImages } from '../Licenses/CityImages';
import { OwnersIcons } from './OwnersIcons';
import { HelpYouForm, Llamanos } from '..';
import { VacationRentalHome } from './VacationRentalHome';
import Link from 'next/link';

const images = [
  {
    src: 'https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649818/Dygav%20Images/Alicante/4_zlt2r6_ytfmy5.webp',
    alt: 'Gestión de vivendas turísticas en Alicante',
  },
];

export const AlicanteMgmtInfo = () => {
  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h1 className='text-center text-2xl md:text-3xl pb-4 mb-6 font-semibold border-b-4 border-b-p600 w-auto md:px-10'>
        Gestión de Viviendas Turísticas en Alicante
      </h1>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Alicante, una ciudad vibrante y dinámica en la Costa Blanca, es famosa
        por su balance perfecto entre historia, cultura y modernidad. Con el
        emblemático Castillo de Santa Bárbara que se eleva sobre la ciudad,
        playas impresionantes como el Postiguet, y un bullicioso paseo marítimo
        lleno de restaurantes y bares, Alicante atrae a una amplia gama de
        turistas. La ciudad es una fusión de experiencias, ofreciendo desde
        tranquilas tardes en sus playas doradas hasta una animada vida nocturna
        y un centro histórico lleno de encanto. Toda esta cantidad de
        atracciones y actividades hacen de Alicante{' '}
        <strong>
          un lugar ideal para propietarios e inversores que deseen iniciarse en
          el mercado del alquiler turístico
        </strong>
        .
      </p>

      <CityImages images={images} />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Análisis de Mercado Vacacional en Alicante
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        El mercado vacacional en Alicante es robusto y diverso, atrayendo tanto
        a turistas que buscan sol y playa como a aquellos interesados en la
        cultura y la historia. La{' '}
        <strong>demanda es fuerte durante todo el año</strong>, con un pico en
        los meses de verano. Propiedades situadas cerca de la playa o en el
        casco antiguo son particularmente atractivas para los visitantes.
      </p>

      <OwnersIcons image='https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649266/Dygav%20Images/Icons/undraw_travelers_re_y25a_zbrkat_ihdtj8.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Oportunidades de Inversión en Viviendas Turísticas en Alicante
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Alicante ofrece{' '}
        <strong>
          excelentes oportunidades de inversión en el mercado de viviendas
          turísticas
        </strong>
        . Invertir en propiedades que ofrezcan vistas al mar o que estén
        ubicadas cerca de atracciones clave como el Castillo de Santa Bárbara o
        el centro de la ciudad puede resultar muy rentable. La ciudad también es
        ideal para aquellos que buscan invertir en propiedades que ofrezcan una
        mezcla de encanto tradicional y comodidades modernas.
      </p>

      <OwnersIcons image='https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649275/Dygav%20Images/Icons/undraw_buy_house_re_8xq7_obrxnk_so8fsx.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-24'>
        Servicios de Gestión Integral de Viviendas Vacacionales en Alicante
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4 mb-16'>
        En <strong className='text-p600'>DYGAV</strong>, proporcionamos una
        gestión integral de propiedades en Alicante, asegurando que cada
        vivienda no solo cumpla con las expectativas de los turistas, sino que
        también genere un retorno de inversión óptimo. Nos ocupamos de todo,
        desde la promoción y gestión de reservas hasta el mantenimiento y
        limpieza de las propiedades. Si lo necesitas, también podemos ayudarte a
        <span>
          <Link
            href={'/licencias-turisticas/alicante'}
            className='underline text-p600'
          >
            conseguir la licencia turistica en Alicante
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
        Maximiza el Rendimiento de tu Propiedad Turística en Alicante
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Con <strong className='text-p600'>DYGAV</strong>, tu propiedad en
        Alicante estará <strong>gestionada profesionalmente</strong>,
        enfocándonos en resaltar sus características únicas y dándole la mayor
        visibilidad online posible a través de los diferentes portales de
        alquiler vacacional. Nos dedicamos a optimizar la rentabilidad de tu
        inversión, asegurando que tu propiedad esté siempre en las mejores
        condiciones para tus huéspedes y para ti cuando desees utilizarla.
      </p>

      <HelpYouForm />
    </section>
  );
};
