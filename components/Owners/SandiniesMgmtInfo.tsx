import { CityImages } from '../Licenses/CityImages';
import { OwnersIcons } from './OwnersIcons';
import { HelpYouForm, Llamanos } from '..';
import { VacationRentalHome } from './VacationRentalHome';
import Link from 'next/link';

const images = [
  {
    src: 'https://res.cloudinary.com/vicflores11/image/upload/v1705507565/Dygav/Sandini%C3%A9s/C_34_ergopo.webp',
    alt: 'Gestión de vivendas turísticas en Sandiniés',
  },
];

export const SandiniesMgmtInfo = () => {
  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h1 className='text-center text-2xl md:text-3xl pb-4 mb-6 font-semibold border-b-4 border-b-p600 w-auto md:px-10'>
        Gestión de viviendas turísticas en Sandiniés
      </h1>

      <div className='text-justify lg:text-start text-sm md:text-lg pt-4 space-y-4 mb-12'>
        <p>
          Sandiniés, un pintoresco enclave en el Valle de Tena, Aragón, se
          destaca por su tradición ganadera y su creciente auge en el turismo
          rural. Situado a los pies de la Sierra Partacua, Sandiniés ofrece una
          atmósfera tranquila y relajada, ideal para los amantes de la
          naturaleza y los deportes de montaña. La arquitectura del pueblo, con
          sus casas de piedra y antiguos establos convertidos en hospederías
          rurales, refleja su rica historia y patrimonio.
        </p>

        <p>
          El centro del pueblo ha mantenido su encanto rústico y auténtico, con
          portadas adinteladas y arcos de medio punto adornados con escudos
          heráldicos. Uno de los puntos de interés es el lavadero abrevadero con
          una fuente que data de 1854. La iglesia parroquial del siglo XVII,
          situada en un mirador, ofrece vistas impresionantes a la confluencia
          de los ríos Gállego y Caldarés, así como a las cumbres de los Pirineos
          oscenses.
        </p>
      </div>

      <CityImages images={images} />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Análisis de Mercado Vacacional en Sandiniés
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Sandiniés, con su ubicación estratégica en el Valle de Tena, atrae a
        visitantes durante todo el año. Es un punto de partida para actividades
        como el senderismo y el ciclismo, así como para el esquí nórdico en
        invierno. La demanda de alojamiento vacacional es significativa,
        <strong>
          brindando oportunidades de inversión con un alto potencial de retorno
        </strong>
        . Las propiedades que ofrecen una combinación de encanto rústico y
        comodidades modernas tienen un atractivo especial en el mercado.
      </p>

      <OwnersIcons image='https://res.cloudinary.com/vicflores11/image/upload/v1706283993/Dygav/navigator_n1cspg.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Oportunidades de Inversión en Viviendas Turísticas en Sandiniés
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Invertir en Sandiniés implica seleccionar propiedades que capitalicen su
        encanto rústico y su proximidad a las actividades de montaña y
        naturaleza. Las propiedades con vistas panorámicas y fácil acceso a las
        rutas de senderismo son particularmente atractivas para los turistas.
      </p>

      <OwnersIcons image='https://res.cloudinary.com/vicflores11/image/upload/v1706281157/Dygav/ownersicon_tumwiv.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-8'>
        Gestión Integral de Viviendas Vacacionales en Sandiniés
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4 mb-16'>
        En <strong className='text-p600'>DYGAV</strong>, nos especializamos en
        la{' '}
        <strong>gestión integral de viviendas vacacionales en Sandiniés</strong>
        . Nos ocupamos de todo, desde la{' '}
        <span>
          <Link
            href={'/licencias-turisticas/sandinies'}
            className='underline text-p600'
          >
            obtención de la licencia turística para poder operar en Sandiniés
          </Link>
        </span>
        , hasta el manejo de las reservas, pasando por la promoción en
        plataformas de alquiler, la atención a los huéspedes, y el mantenimiento
        y limpieza de la propiedad.
      </p>

      <Llamanos />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-24'>
        ¿Cómo te ayudamos a rentabilizar tu casa de alquiler vacacional?
      </h2>

      <VacationRentalHome />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-10'>
        Maximiza el Rendimiento de tu Propiedad Turística en Sandiniés
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Nuestro enfoque personalizado en{' '}
        <strong className='text-p600'>DYGAV</strong> asegura que{' '}
        <strong>cada propiedad sea gestionada de manera óptima</strong>,
        adaptándonos a las necesidades específicas de cada propietario y
        ofreciendo estrategias de marketing efectivas para atraer a un público
        diverso y garantizar la mejor experiencia para los huéspedes,manteniendo
        la casa en perfectas condiciones para cuando tú la necesites.
      </p>

      <HelpYouForm />
    </section>
  );
};
