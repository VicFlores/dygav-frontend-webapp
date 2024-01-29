import { CityImages } from '../Licenses/CityImages';
import { OwnersIcons } from './OwnersIcons';
import { HelpYouForm, Llamanos } from '..';
import { VacationRentalHome } from './VacationRentalHome';
import Link from 'next/link';

const images = [
  {
    src: 'https://res.cloudinary.com/vicflores11/image/upload/v1705445752/Dygav/Biescas/C_44_hehtlu.webp',
    alt: 'Gestión de vivendas turísticas en Biescas',
  },
];

export const BiescasMgmtInfo = () => {
  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h1 className='text-center text-2xl md:text-3xl pb-4 mb-6 font-semibold border-b-4 border-b-p600 w-auto md:px-10'>
        Gestión de viviendas turísticas en Biescas
      </h1>

      <div className='text-justify lg:text-start text-sm md:text-lg pt-4 space-y-4 mb-12'>
        <p>
          Biescas, situada en la puerta del Valle de Tena y al pie del Parque
          Nacional de Ordesa y Monte Perdido, se erige como{' '}
          <strong>
            un destino turístico ideal para invertir en viviendas turísticas
          </strong>
          . Este pueblo, que se destaca por su rico patrimonio cultural y
          arquitectónico, ofrece una experiencia única, marcada por la historia
          y la impresionante naturaleza que lo rodea por lo que representa una
          oportunidad de oro para propietarios e inversores en el mercado de
          alquiler vacacional.
        </p>

        <p>
          Rodeado por la majestuosidad de los Pirineos y enriquecido con un
          legado histórico, Biescas atrae a visitantes durante todo el año. Su
          proximidad a destacadas estaciones de esquí y su acceso a rutas de
          senderismo y ciclismo lo convierten en un punto de interés para una
          amplia gama de turistas.
        </p>
      </div>

      <CityImages images={images} />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Análisis del Mercado Vacacional en Biescas
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        El mercado vacacional en Biescas destaca por su consistente demanda,
        impulsada por la cercanía a pistas de esquí y la belleza del parque
        nacional de Ordesa y Monte Perdido, situado a menos de 20 minutos de
        ambos y siendo uno de los lugares que los visitantes escogen para
        quedarse cuando vienen a estos lugares. Las propiedades aquí ofrecen un
        <strong>
          retorno de inversión prometedor, con altas tasas de ocupación
        </strong>{' '}
        a lo largo de las distintas estaciones, especialmente cuando se
        administran de forma adecuada y se comercializan estratégicamente.
      </p>

      <OwnersIcons image='https://res.cloudinary.com/vicflores11/image/upload/v1706283993/Dygav/navigator_n1cspg.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Invertir en una Vivienda de Uso Turístico en Biescas
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Invertir en Biescas implica considerar propiedades que se alineen con
        las preferencias de los viajeros actuales, buscando ubicaciones
        estratégicas y ofreciendo comodidades modernas.{' '}
        <strong>
          La inversión debe basarse en el análisis de la ubicación, el potencial
          de alquiler
        </strong>{' '}
        y la capacidad de atraer tanto a amantes de la naturaleza como a
        aficionados a deportes de invierno.
      </p>

      <OwnersIcons image='https://res.cloudinary.com/vicflores11/image/upload/v1706281157/Dygav/ownersicon_tumwiv.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-8'>
        Gestión integral de Viviendas Vacacionales en Biescas
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4 mb-16'>
        En <strong className='text-p600'>DYGAV</strong>, somos{' '}
        <strong>
          especialistas en la gestión integral de viviendas vacacionales en
          Biescas
        </strong>
        . Nos encargamos de cada detalle, desde{' '}
        <span>
          <Link
            href={'/licencias-turisticas/biescas'}
            className='underline text-p600'
          >
            la obtención de la licencia turística
          </Link>
        </span>{' '}
        hasta la gestión diaria de la propiedad, incluyendo la promoción en
        plataformas de alquiler y la atención a los huéspedes, para maximizar
        tus ingresos y garantizar una experiencia excepcional.
      </p>

      <Llamanos />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-24'>
        ¿Cómo te ayudamos a rentabilizar tu casa de alquiler vacacional?
      </h2>

      <VacationRentalHome />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-10'>
        Maximiza el Potencial de tu Vivienda Turística en Biescas
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Al elegir a <strong className='text-p600'>DYGAV</strong>, aseguras que
        tu propiedad en Biescas sea manejada por expertos que conocen el
        mercado. Nuestro enfoque personalizado garantiza que{' '}
        <strong>
          cada aspecto de la gestión de tu vivienda turística se realice de
          forma profesional y eficaz
        </strong>
        , optimizando así el rendimiento de tu inversión y proporcionandote
        tranquilidad y seguridad.
      </p>

      <HelpYouForm />
    </section>
  );
};
