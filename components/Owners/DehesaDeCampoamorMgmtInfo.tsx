import { CityImages } from '../Licenses/CityImages';
import { OwnersIcons } from './OwnersIcons';
import { HelpYouForm, Llamanos } from '..';
import { VacationRentalHome } from './VacationRentalHome';
import Link from 'next/link';

const images = [
  {
    src: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/6_azqjjg.png',
    alt: 'Gestión de vivendas turísticas en Dehesa de Campoamor',
  },
];

export const DehesaDeCampoamorMgmtInfo = () => {
  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h1 className='text-center text-2xl md:text-3xl pb-4 mb-6 font-semibold border-b-4 border-b-p600 w-auto md:px-10'>
        Gestión de Viviendas Turísticas en Dehesa de Campoamor
      </h1>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        La Dehesa de Campoamor, ubicada en la Costa Blanca, es un exclusivo
        destino turístico conocido por sus impresionantes playas de arena
        blanca, lujosos edificios residenciales y su prestigioso club de golf.
        Este enclave ofrece una combinación de lujo y naturaleza, siendo un
        lugar perfecto para aquellos que buscan una experiencia vacacional de
        alta gama. La tranquilidad de sus playas, junto con la proximidad a
        zonas naturales y campos de golf, hacen de Campoamor un destino
        atractivo tanto para relajarse como para disfrutar de actividades al
        aire libre. Todo esto convierte a Campoamor en{' '}
        <strong>
          una zona idónea para propietarios e inversores que deseen entrar en el
          mercado de las viviendas de uso turístico
        </strong>
        .
      </p>

      <CityImages images={images} />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Análisis de Mercado Vacacional en Campoamor
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        El mercado vacacional en Campoamor atrae principalmente a un segmento de
        alto poder adquisitivo, interesado en el lujo y la exclusividad. La
        demanda es <strong>especialmente alta durante el verano</strong>, pero
        debido al campo de golf y al clima templado de la Costa Blanca{' '}
        <strong>cada vez atrae a más viajeros durante el resto del año</strong>.
        Las propiedades que ofrecen vistas al mar, acceso directo a las playas y
        comodidades de lujo son muy cotizadas en este mercado.
      </p>

      <OwnersIcons image='https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_travelers_re_y25a_zbrkat.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Oportunidades de Inversión en Viviendas Turísticas en Campoamor
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Invertir en Campoamor es{' '}
        <strong>
          ideal para aquellos que buscan entrar en un mercado turístico de alto
          nivel
        </strong>
        . Propiedades como villas de lujo, apartamentos con vistas al mar y
        casas adosadas cerca del campo de golf son inversiones muy atractivas.
        La calidad de construcción y las comodidades adicionales, como piscinas
        privadas, jardines y acceso a servicios de club,{' '}
        <strong>
          pueden aumentar significativamente el valor de la inversión
        </strong>
        .
      </p>

      <OwnersIcons image='https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_buy_house_re_8xq7_obrxnk.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-24'>
        Servicios de Gestión Integral de Viviendas Vacacionales en Campoamor
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4 mb-16'>
        En <strong className='text-p600'>DYGAV</strong>, ofrecemos servicios de
        gestión integral de propiedades en Campoamor, enfocándonos en el
        segmento de lujo del mercado vacacional. Nos encargamos de la promoción
        en canales adecuados para alcanzar al público objetivo, así como de la
        gestión de reservas, mantenimiento y limpieza de alto estándar, y la{' '}
        <span>
          <Link
            className='text-p600 underline'
            href={'/licencias-turisticas/orihuela'}
          >
            obtención de la licencia turística en el ayuntamiento de Orihuela
          </Link>
        </span>
        , asegurando un rendimiento óptimo y manteniendo el alto estándar de las
        propiedades.
      </p>

      <Llamanos />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-24'>
        ¿Cómo te ayudamos a rentabilizar tu casa de alquiler vacacional?
      </h2>

      <VacationRentalHome />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-24'>
        Maximiza el Rendimiento de tu Propiedad Turística en Campoamor
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        <strong>
          Con <strong className='text-p600'>DYGAV</strong>,{' '}
          <strong>
            tu propiedad en Campoamor estará en manos de expertos en el mercado
            vacacional
          </strong>{' '}
          de lujo. Nos dedicamos a ofrecer una experiencia excepcional a los
          huéspedes, manteniendo la propiedad en condiciones impecables y
          asegurando que cada detalle cumpla con los más altos estándares de
          calidad y lujo. Esto no solo maximiza los ingresos, sino que también
          asegura la satisfacción y fidelización de un público exclusivo. Además
          tu casa{' '}
          <strong>
            siempre estará en perfectas condiciones cuando decidas utilizarla
          </strong>
          .
        </strong>
      </p>

      <HelpYouForm />
    </section>
  );
};
