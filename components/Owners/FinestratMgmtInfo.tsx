import { CityImages } from '../Licenses/CityImages';
import { OwnersIcons } from './OwnersIcons';
import { HelpYouForm, Llamanos } from '..';
import { VacationRentalHome } from './VacationRentalHome';
import Link from 'next/link';

const images = [
  {
    src: 'https://res.cloudinary.com/vicflores11/image/upload/v1701185609/Dygav/Finestrart/15_xpixav.webp',
    alt: 'Gestión de vivendas turísticas en Finestrat',
  },
];

export const FinestratMgmtInfo = () => {
  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h1 className='text-center text-2xl md:text-3xl pb-4 mb-6 font-semibold border-b-4 border-b-p600 w-auto md:px-10'>
        Gestión de Viviendas Turísticas en Finestrat
      </h1>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Finestrat es un encantador municipio en la Costa Blanca, conocido por su
        singular combinación de paisajes montañosos y playas costeras. Con la
        impresionante montaña del Puig Campana como telón de fondo y la popular
        Cala de Finestrat, este lugar ofrece una experiencia única a sus
        visitantes. La arquitectura tradicional de su casco antiguo, sus calles
        empedradas y plazas pintorescas, complementan su atractivo, haciendo de
        Finestrat un destino perfecto para aquellos que buscan una mezcla de
        aventura natural y relajación costera. Todo esto hace de Finestrat el
        <strong>
          lugar ideal para propietarios e inversores que deseen iniciar su
          camino en el mercado del alquiler vacacional
        </strong>
        .
      </p>

      <CityImages images={images} />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Análisis de Mercado Vacacional en Finestrat
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        El mercado vacacional en Finestrat es diverso, atrayendo tanto a los
        amantes de la naturaleza y el senderismo como a aquellos que prefieren
        disfrutar del sol y la playa. Propiedades con vistas a la montaña o
        cercanas a la playa son altamente valoradas.{' '}
        <strong>La demanda es consistente a lo largo del año</strong>, gracias a
        la variedad de actividades disponibles en todas las estaciones.
      </p>

      <OwnersIcons image='https://res.cloudinary.com/vicflores11/image/upload/v1706804882/Dygav/undraw_travelers_re_y25a_zbrkat.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Oportunidades de Inversión en Viviendas Turísticas en Finestrat
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Invertir en Finestrat significa aprovechar la singularidad de su
        geografía. Las propiedades que ofrecen una experiencia de estar en la
        naturaleza, sin estar lejos de las comodidades costeras, son
        especialmente atractivas. Apartamentos modernos o casas tradicionales en
        el casco antiguo ofrecen un gran potencial debido a su encanto y
        ubicación estratégica.
      </p>

      <OwnersIcons image='https://res.cloudinary.com/vicflores11/image/upload/v1706804885/Dygav/undraw_smart_home_re_orvn_rd13cl.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-24'>
        Servicios de Gestión Integral de Viviendas Vacacionales en Finestrat
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4 mb-16'>
        En <strong className='text-p600'>DYGAV</strong>,proporcionamos servicios
        de gestión integral para propiedades en Finestrat, optimizando su
        visibilidad y rentabilidad. Nos encargamos de todo, desde la{' '}
        <span>
          <Link
            href={'/licencias-turisticas/finestrat'}
            className='underline text-p600'
          >
            obtención de la licencia turística en Finestrat
          </Link>
        </span>{' '}
        hasta el mantenimiento, limpieza y gestión de reservas, asegurando que
        cada propiedad se mantenga en perfectas condiciones y sea altamente
        rentable. .
      </p>

      <Llamanos />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-24'>
        ¿Cómo te ayudamos a rentabilizar tu casa de alquiler vacacional?
      </h2>

      <VacationRentalHome typeOfPage='owners' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-24'>
        Maximiza el Rendimiento de tu Propiedad Turística en Finestrat
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Con nuestra experiencia en <strong className='text-p600'>DYGAV</strong>,
        aseguramos que tu inversión en Finestrat no solo sea rentable, sino que
        también ofrezca experiencias únicas a los huéspedes. Nos enfocamos en
        una gestión personalizada que resalta las cualidades únicas de cada
        propiedad, asegurando su óptimo rendimiento y el máximo disfrute tanto
        para los huéspedes como para ti cuando decidas utilizarla.
      </p>

      <HelpYouForm />
    </section>
  );
};
