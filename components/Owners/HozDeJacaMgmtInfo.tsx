import { CityImages } from '../Licenses/CityImages';
import { OwnersIcons } from './OwnersIcons';
import { HelpYouForm, Llamanos } from '..';
import { VacationRentalHome } from './VacationRentalHome';
import Link from 'next/link';

const images = [
  {
    src: 'https://res.cloudinary.com/vicflores11/image/upload/v1705530848/Dygav/Hoz%20De%20Jaca/C_14_wcdaqe.webp',
    alt: 'Gestión de vivendas turísticas en Hoz de Jaca',
  },
];

export const HozDeJacaMgmtInfo = () => {
  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h1 className='text-center text-2xl md:text-3xl pb-4 mb-6 font-semibold border-b-4 border-b-p600 w-auto md:px-10'>
        Gestión de Viviendas Turísticas en Hoz de Jaca
      </h1>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Hoz de Jaca, un pueblo en el Valle de Tena, ofrece una experiencia
        turística única con vistas espectaculares sobre el embalse de Búbal. Con
        senderos naturales que invitan a la exploración, una arquitectura
        popular fascinante y el repique de las campanas de la Iglesia de San
        Lorenzo, Hoz de Jaca es un destino lleno de encanto. Además, el Mirador
        del Muro ofrece una perspectiva impresionante del embalse, y la Tirolina
        Extrema agrega un toque de aventura. Estas características hacen de Hoz
        de Jaca{' '}
        <strong>
          un lugar atractivo para la inversión en viviendas turísticas
        </strong>
        , ofreciendo a los visitantes una mezcla de tranquilidad, belleza
        natural y emoción.
      </p>

      <CityImages images={images} />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Análisis de Mercado Vacacional en Hoz de Jaca
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Hoz de Jaca, con su ubicación privilegiada y vistas panorámicas al
        embalse de Búbal, atrae a visitantes durante todo el año. La proximidad
        a las estaciones de esquí y la oferta de actividades como senderismo,
        ciclismo y la famosa tirolina, generan una demanda constante de
        alojamiento. Esto se traduce en oportunidades para los propietarios de
        viviendas, quienes pueden beneficiarse de{' '}
        <strong>
          una alta tasa de ocupación y un rendimiento atractivo de sus
          inversiones
        </strong>
        .
      </p>

      <OwnersIcons image='https://res.cloudinary.com/vicflores11/image/upload/v1706283993/Dygav/navigator_n1cspg.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Invertir en una Vivienda de Uso Turístico en Hoz de Jaca
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Invertir en Hoz de Jaca significa{' '}
        <strong>apostar por un destino en crecimiento</strong>. Las propiedades
        aquí deben ofrecer comodidad y fácil acceso a las principales
        atracciones. Elegir una vivienda con vistas al embalse o cerca de la
        tirolina puede aumentar su potencial de alquiler. Además, las
        propiedades que ofrecen una experiencia auténtica de pueblo de montaña,
        con comodidades modernas, son especialmente atractivas para los
        turistas.
      </p>

      <OwnersIcons image='https://res.cloudinary.com/vicflores11/image/upload/v1706281157/Dygav/ownersicon_tumwiv.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-8'>
        Servicios de Gestión Integral de Viviendas Vacacionales con DYGAV
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4 mb-16'>
        En <strong className='text-p600'>DYGAV</strong>, ofrecemos una gestión
        completa de tu propiedad en Hoz de Jaca. Nos encargamos de todos los
        detalles, desde{' '}
        <span>
          <Link
            href={'/licencias-turisticas/hoz-de-jaca'}
            className='underline text-p600'
          >
            obtener la licencia turística en Hoz de Jaca
          </Link>
        </span>{' '}
        hasta gestionar la promoción de tus pisos en plataformas de alquiler
        vacacional, reservas, mantenimiento y limpieza. Nuestro objetivo es
        maximizar tus ingresos y asegurarnos de que tanto tú como tus huéspedes
        estén completamente satisfechos con nuestros servicios.
      </p>

      <Llamanos />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-24'>
        ¿Cómo te ayudamos a rentabilizar tu casa de alquiler vacacional?
      </h2>

      <VacationRentalHome />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-10'>
        Maximiza el Rendimiento de tu Propiedad Turística en Hoz de Jaca
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Con <strong className='text-p600'>DYGAV</strong>, cada propiedad es
        única. Personalizamos nuestros servicios para satisfacer tus necesidades
        específicas y las de tus huéspedes. Desde estrategias de marketing
        digital hasta el mantenimiento diario, nuestro equipo de profesionales
        se dedica a <strong>optimizar el rendimiento de tu inversión</strong>.
        Con nosotros, puedes estar seguro de que tu propiedad en Hoz de Jaca no
        solo generará ingresos adicionales, sino que también se mantendrá en
        excelentes condiciones para cuando tú quieras utilizarla.
      </p>

      <HelpYouForm />
    </section>
  );
};
