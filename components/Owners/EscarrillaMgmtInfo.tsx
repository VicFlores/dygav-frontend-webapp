import { CityImages } from '../Licenses/CityImages';
import { OwnersIcons } from './OwnersIcons';
import { HelpYouForm, Llamanos } from '..';
import { VacationRentalHome } from './VacationRentalHome';
import Link from 'next/link';

const images = [
  {
    src: 'https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649788/Dygav%20Images/Escarilla/C_35_pg320r_t9yxzq.jpg',
    alt: 'Gestión de vivendas turísticas en Escarrilla',
  },
];

export const EscarrillaMgmtInfo = () => {
  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h1 className='text-center text-2xl md:text-3xl pb-4 mb-6 font-semibold border-b-4 border-b-p600 w-auto md:px-10'>
        Gestión de Viviendas Turísticas en Escarrilla
      </h1>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Escarrilla, un encantador pueblo en el Valle de Tena, se destaca por su
        tranquilidad y proximidad a la naturaleza. Con una ubicación estratégica
        que facilita el acceso a las estaciones de esquí de Formigal y
        Panticosa, Escarrilla se presenta como una opción{' '}
        <strong>atractiva para la inversión en viviendas turísticas</strong>.
        Rodeado de un paisaje montañoso impresionante, es el lugar ideal para
        aquellos que buscan combinar la serenidad de un pueblo pequeño con la
        emoción de los deportes de invierno y actividades al aire libre.
      </p>

      <CityImages images={images} />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Análisis de Mercado Vacacional en Escarrilla
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        El mercado vacacional en Escarrilla es particularmente atractivo debido
        a su cercanía a las estaciones de esquí y la belleza natural del Valle
        de Tena. La demanda de alojamiento{' '}
        <strong>
          aumenta durante la temporada de esquí, así como en verano
        </strong>
        , cuando los visitantes buscan disfrutar del senderismo y otras
        actividades al aire libre. Las propiedades aquí ofrecen{' '}
        <strong>
          buenas tasas de ocupación y una oportunidad de inversión rentable
        </strong>
        , especialmente si se gestionan eficientemente.
      </p>

      <OwnersIcons image='https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649293/Dygav%20Images/Icons/navigator_n1cspg_gssjxj.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Invertir en una Vivienda de Uso Turístico en Escarrilla
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Invertir en una vivienda turística en Escarrilla significa escoger
        propiedades que no solo estén cerca de las estaciones de esquí, sino que
        también ofrezcan comodidad y tranquilidad. La elección de la propiedad
        debe estar basada en su potencial de alquiler, su precio, y su
        ubicación, buscando siempre equilibrar la proximidad a las atracciones
        locales con la paz y el encanto de un pueblo de montaña.
      </p>

      <OwnersIcons image='https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649278/Dygav%20Images/Icons/ownersicon_tumwiv_ckdpnt.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-8'>
        Servicios de Gestión Integral de Viviendas Vacacionales
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4 mb-16'>
        <strong className='text-p600'>DYGAV</strong> ofrece una gestión integral
        de tu vivienda vacacional en Escarrilla. Nos encargamos de todos los
        aspectos de la gestión, desde{' '}
        <span>
          <Link
            href={'/licencias-turisticas/escarrilla'}
            className='underline text-p600'
          >
            obtener la licencia turística en Escarrilla
          </Link>
        </span>
        , pasando por la gestion de los anuncios de tu piso, el checkin y el
        check out, el mantenimiento y la limpieza, asegurándonos de que tanto tú
        como tus huéspedes disfruten de una experiencia excepcional.
      </p>

      <Llamanos />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-24'>
        ¿Cómo te ayudamos a rentabilizar tu casa de alquiler vacacional?
      </h2>

      <VacationRentalHome />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-10'>
        Maximiza el Rendimiento de tu Propiedad Turística en Escarrilla
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Con <strong className='text-p600'>DYGAV</strong>, tu propiedad en
        Escarrilla no solo generará ingresos adicionales, sino que también se
        mantendrá en óptimas condiciones para ti y tus huéspedes. Nos dedicamos
        a personalizar nuestros servicios según tus necesidades, asegurando que{' '}
        {''}
        <strong>
          cada aspecto de la gestión de tu vivienda turística sea eficiente y
          efectivo
        </strong>
        . Con nuestro equipo de profesionales, puedes estar seguro de que tu
        inversión está en las mejores manos.
      </p>

      <HelpYouForm />
    </section>
  );
};
