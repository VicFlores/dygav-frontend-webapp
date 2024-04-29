import { CityImages } from '../Licenses/CityImages';
import { OwnersIcons } from './OwnersIcons';
import { HelpYouForm, Llamanos } from '..';
import { VacationRentalHome } from './VacationRentalHome';
import Link from 'next/link';

const images = [
  {
    src: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/27_tfsmto.png',
    alt: 'Gestión de vivendas turísticas en Calpe',
  },
];

export const CalpeMgmtInfo = () => {
  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h1 className='text-center text-2xl md:text-3xl pb-4 mb-6 font-semibold border-b-4 border-b-p600 w-auto md:px-10'>
        Gestión de Viviendas Turísticas en Calpe
      </h1>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Calpe, con su icónico Peñón de Ifach dominando el horizonte, es una joya
        del Mediterráneo en la Costa Blanca. Este destino combina bellezas
        naturales, como sus impresionantes playas y calas, con un rico
        patrimonio histórico visible en sus calles empedradas y yacimientos
        arqueológicos. Calpe es el lugar ideal para aquellos que buscan desde
        una escapada tranquila en contacto con la naturaleza hasta una
        experiencia cultural única, pasando por la práctica de deportes
        acuáticos y aventura.{' '}
        <strong>
          Para los propietarios e inversores, Calpe ofrece un mercado de
          alquiler vacacional en constante crecimiento
        </strong>
        , donde la demanda de estancias de calidad supera la oferta,
        especialmente durante los meses de verano.
      </p>

      <CityImages images={images} />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Análisis de Mercado Vacacional en Calpe
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        El mercado vacacional en Calpe es dinámico y atractivo, atrayendo a
        visitantes durante todo el año gracias a su clima privilegiado y
        diversidad de atractivos. La alta temporada ve una demanda significativa
        de alojamientos cerca del mar y del Peñón de Ifach, mientras que el
        encanto de la ciudad y sus eventos culturales mantienen a Calpe como un
        destino preferido también en meses menos concurridos.{' '}
        <strong>
          Propiedades con vistas panorámicas, acceso directo a las playas o
          aquellos lugares que permiten a los turistas sumergirse en la historia
          local gozan de una demanda particularmente alta
        </strong>
        .
      </p>

      <OwnersIcons image='https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_travelers_re_y25a_zbrkat.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Oportunidades de Inversión en Viviendas Turísticas en Calpe
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Invertir en Calpe significa acceder a un mercado con potencial constante
        de crecimiento. Las viviendas que destacan por su ubicación, ya sea por
        ofrecer impresionantes vistas al Peñón de Ifach o por su cercanía a las
        emblemáticas playas de la zona, presentan una oportunidad de inversión
        sin igual. La inversión en{' '}
        <strong>
          propiedades que combinan el encanto local con comodidades modernas y
          servicios adicionales
        </strong>
        , como piscinas privadas, espacios al aire libre y acceso a actividades
        recreativas, aseguran atraer un amplio espectro de huéspedes.
      </p>

      <OwnersIcons image='https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_buy_house_re_8xq7_obrxnk.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-24'>
        Servicios de Gestión Integral de Viviendas Vacacionales en Calpe
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4 mb-16'>
        En <strong className='text-p600'>DYGAV</strong> nos especializamos en la
        gestión integral de propiedades vacacionales en Calpe, asegurando que tu
        inversión alcance su máximo potencial. Desde la {''}
        <span>
          <Link
            className='text-p600 underline'
            href={'/licencias-turisticas/calpe'}
          >
            obtención de licencias turísticas en Calpe
          </Link>
        </span>{' '}
        hasta estrategias de marketing efectivas, gestión de reservas, servicios
        de limpieza y mantenimiento, nuestro equipo cubre todos los aspectos
        necesarios para el éxito de tu propiedad. Nos comprometemos a optimizar
        tus ingresos mientras mantenemos tu vivienda en perfectas condiciones,
        <strong>
          {' '}
          lista para recibir a huéspedes o para tu disfrute personal en
          cualquier momento
        </strong>
        .
      </p>

      <Llamanos />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-24'>
        ¿Cómo te ayudamos a rentabilizar tu casa de alquiler vacacional?
      </h2>

      <VacationRentalHome />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-24'>
        Maximiza el Rendimiento de tu Propiedad Turística en Calpe
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Al elegir <strong className='text-p600'>DYGAV</strong> para la gestión
        de tu propiedad en Calpe, te aseguras de que cada detalle sea cuidado
        con la máxima profesionalidad y eficiencia. Nuestro enfoque se centra en
        mantener tu propiedad en condiciones óptimas, asegurando{' '}
        <strong>
          una gestión de reservas fluida y brindando una experiencia excepcional
          a cada huésped
        </strong>
        . Con una atención meticulosa y un servicio personalizado, garantizamos
        que tu inversión no solo sea rentable, sino que también esté siempre
        lista para acogerte a ti y a tus invitados en el paraíso mediterráneo de
        Calpe.
      </p>

      <HelpYouForm />
    </section>
  );
};
