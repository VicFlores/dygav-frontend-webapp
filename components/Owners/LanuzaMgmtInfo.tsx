import { CityImages } from '../Licenses/CityImages';
import { OwnersIcons } from './OwnersIcons';
import { HelpYouForm, Llamanos } from '..';
import { VacationRentalHome } from './VacationRentalHome';
import Link from 'next/link';

const images = [
  {
    src: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/c_lanuza_lacelk.png',
    alt: 'Gestión de vivendas turísticas en Lanuza',
  },
];

export const LanuzaMgmtInfo = () => {
  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h1 className='text-center text-2xl md:text-3xl pb-4 mb-6 font-semibold border-b-4 border-b-p600 w-auto md:px-10'>
        Gestión de viviendas turísticas en Lanuza
      </h1>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Lanuza, situada sobre el embalse al que da nombre en el espectacular
        Valle de Tena en los Pirineos Aragoneses, se destaca como un destino
        fascinante para la inversión en viviendas turísticas. Este pueblo, que
        resurge con su arquitectura montañesa y el magnífico embalse, ofrece
        <strong>oportunidades únicas para propietarios e inversores</strong>. La
        rica historia de Lanuza y su renacimiento cultural, marcado por el
        Festival Internacional de las Culturas Pirineos Sur, lo convierten en un
        lugar atractivo para los turistas y visitado durante todo el año.
      </p>

      <CityImages images={images} />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Análisis de Mercado Vacacional en Lanuza
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Lanuza se distingue por su mercado vacacional diverso, impulsado por la
        cultura y la naturaleza. Con eventos significativos como el Festival
        Pirineos Sur y la cercanía a populares estaciones de esquí, el pueblo
        atrae a turistas con intereses variados. Las propiedades aquí ofrecen un
        <strong>
          retorno de inversión atractivo con altas tasas de ocupación
        </strong>
        , particularmente cuando están bien gestionadas y estratégicamente
        comercializadas.
      </p>

      <OwnersIcons image='https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649293/Dygav%20Images/Icons/navigator_n1cspg_gssjxj.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Invertir en una Vivienda de Uso Turístico en Lanuza
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Invertir en Lanuza es invertir en el encanto de un pueblo tradicional
        con comodidades modernas. Elegir propiedades en ubicaciones estratégicas
        es clave, proporcionando acceso a atracciones como el embalse, la
        iglesia del Salvador, y rutas de senderismo. La elección debe basarse en
        un{' '}
        <strong>
          análisis detallado del precio, potencial de alquiler, y la demanda
          turística
        </strong>
        , para atraer tanto a quienes buscan lujo como a los que prefieren
        opciones más económicas.
      </p>

      <OwnersIcons image='https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649278/Dygav%20Images/Icons/ownersicon_tumwiv_ckdpnt.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-8'>
        Servicios de Gestión Integral de Viviendas Vacacionales
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4 mb-16'>
        Nuestra experiencia en <strong className='text-p600'>DYGAV</strong> nos
        permite ofrecerte una{' '}
        <strong>gestión integral de tu vivienda vacacional en Lanuza</strong>.
        Desde la{' '}
        <span>
          <Link
            href={'/licencias-turisticas/lanuza'}
            className='underline text-p600'
          >
            obtención de la licencia turística necesaria en Lanuza
          </Link>
        </span>
        , la promoción en plataformas de alquiler vacacional como AirBnB y
        Booking, hasta el manejo de las llegadas de los huéspedes, la limpieza y
        el mantenimiento, nos encargamos de todo. Nuestro enfoque garantiza que
        tu propiedad no solo genere ingresos adicionales sino que también se
        mantenga en perfecto estado, ofreciendo a tus huéspedes una experiencia
        inolvidable y estando siempre en perfectas condiciones para tus
        huéspedes y para ti cuando la utilices.
      </p>

      <Llamanos />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-24'>
        ¿Cómo te ayudamos a rentabilizar tu casa de alquiler vacacional?
      </h2>

      <VacationRentalHome />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-10'>
        Maximiza el Rendimiento de tu Propiedad Turística en Lanuza
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        En <strong className='text-p600'>DYGAV</strong>, entendemos que cada
        propiedad es única. Por ello, adaptamos nuestros servicios a tus
        necesidades específicas, asegurando que{' '}
        <strong>
          cada aspecto de la gestión de tu vivienda turística en Lanuza esté
          cuidadosamente atendido
        </strong>
        . Desde el marketing digital hasta el mantenimiento diario, nuestro
        equipo de profesionales se dedica a optimizar el rendimiento de tu
        inversión mientras tú disfrutas de la tranquilidad de saber que tú
        propiedad está en manos expertas.
      </p>

      <HelpYouForm />
    </section>
  );
};
