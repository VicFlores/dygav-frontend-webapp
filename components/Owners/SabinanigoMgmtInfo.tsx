import { CityImages } from '../Licenses/CityImages';
import { OwnersIcons } from './OwnersIcons';
import { HelpYouForm, Llamanos } from '..';
import { VacationRentalHome } from './VacationRentalHome';
import Link from 'next/link';

const images = [
  {
    src: 'https://res.cloudinary.com/vicflores11/image/upload/v1705508212/Dygav/Sabi%C3%B1%C3%A1nigo/C_65_xnbci2.webp',
    alt: 'Gestión de vivendas turísticas en Sabiñánigo',
  },
];

export const SabinanigoMgmtInfo = () => {
  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h1 className='text-center text-2xl md:text-3xl pb-4 mb-6 font-semibold border-b-4 border-b-p600 w-auto md:px-10'>
        Gestión de viviendas turísticas en Sabiñánigo
      </h1>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Sabiñánigo, situado al pie del Valle de Tena y conocido como el corazón
        de la comarca de El Serrablo, es un{' '}
        <strong>
          destino turístico destacado en la región de Alto Gállego, Aragón
        </strong>
        . La localidad, con una rica historia que se refleja en sus
        edificaciones mozárabes y románicas, brinda una experiencia única para
        quienes buscan combinar cultura e historia con la belleza de la
        naturaleza. Los turistas pueden disfrutar de la ruta de Serrablo, que
        ofrece un conjunto arquitectónico único de iglesias y construcciones
        mozárabes y románicas. Además, Sabiñánigo es un punto estratégico para
        acceder a las estaciones de esquí de Formigal y Panticosa, así como al
        Parque Nacional de Ordesa y Monte Perdido, lo que{' '}
        <strong>
          lo convierte en un destino atractivo tanto en invierno como en verano
        </strong>
        .
      </p>

      <CityImages images={images} />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Análisis de Mercado Vacacional en Sabiñánigo
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        El mercado vacacional en Sabiñánigo se caracteriza por su diversidad. La
        combinación de atracciones culturales y naturales, junto con su
        proximidad a populares destinos de esquí y rutas de senderismo, atrae a
        un amplio espectro de turistas. Esto crea una{' '}
        <strong>
          alta demanda de alojamiento vacacional durante todo el año
        </strong>
        , ofreciendo a los propietarios la oportunidad de obtener un rendimiento
        atractivo de sus inversiones.
      </p>

      <OwnersIcons image='https://res.cloudinary.com/vicflores11/image/upload/v1706283993/Dygav/navigator_n1cspg.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Oportunidades de Inversión en Viviendas Turísticas en Sabiñánigo
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Invertir en Sabiñánigo implica reconocer el potencial de una localidad
        que combina historia, cultura y acceso a actividades al aire libre. Las
        propiedades cercanas a los puntos de interés históricos y naturales, así
        como aquellas que ofrecen comodidades modernas, tienden a ser más
        atractivas para los turistas. Una inversión en propiedades aquí puede
        ser beneficiosa, especialmente si se consideran las{' '}
        <strong>
          tendencias y preferencias actuales del mercado turístico
        </strong>
        .
      </p>

      <OwnersIcons image='https://res.cloudinary.com/vicflores11/image/upload/v1706281157/Dygav/ownersicon_tumwiv.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-8'>
        Gestión Integral de Viviendas Vacacionales en Sabiñánigo
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4 mb-16'>
        En <strong className='text-p600'>DYGAV</strong>, ofrecemos una gestión
        integral de las viviendas vacacionales en Sabiñánigo. Nos encargamos de
        todo, desde{' '}
        <span>
          <Link
            href={'/licencias-turisticas/sabinanigo'}
            className='underline text-p600'
          >
            la obtención de la licencia turística en Sabiñanigo
          </Link>
        </span>
        , hasta la promoción en plataformas de alquiler, la atención a los
        huéspedes y el mantenimiento de la propiedad. Nuestro objetivo es
        <strong>
          maximizar tus ingresos y asegurar una experiencia excepcional
        </strong>{' '}
        para huéspedes y propietarios.
      </p>

      <Llamanos />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-24'>
        ¿Cómo te ayudamos a rentabilizar tu casa de alquiler vacacional?
      </h2>

      <VacationRentalHome />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-10'>
        Maximiza el Rendimiento de tu Propiedad Turística en Sabiñánigo
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Con un enfoque personalizado, en{' '}
        <strong className='text-p600'>DYGAV</strong> adaptamos nuestros
        servicios a tus necesidades específicas para{' '}
        <strong>optimizar el rendimiento de tu inversión</strong>. Desde
        estrategias de marketing digital hasta el mantenimiento diario, nos
        dedicamos a asegurar que tu propiedad en Sabiñánigo no solo genere
        ingresos sino que también se mantenga en perfecto estado para cuando
        decidas utilizarlal.
      </p>

      <HelpYouForm />
    </section>
  );
};
