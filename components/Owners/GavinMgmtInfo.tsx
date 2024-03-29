import { CityImages } from '../Licenses/CityImages';
import { OwnersIcons } from './OwnersIcons';
import { HelpYouForm, Llamanos } from '..';
import { VacationRentalHome } from './VacationRentalHome';
import Link from 'next/link';

const images = [
  {
    src: 'https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649693/Dygav%20Images/Gavin/63_dh3nuj_rmxogj.jpg',
    alt: 'Gestión de vivendas turísticas en Gavin',
  },
];

export const GavinMgmtInfo = () => {
  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h1 className='text-center text-2xl md:text-3xl pb-4 mb-6 font-semibold border-b-4 border-b-p600 w-auto md:px-10'>
        Gestión de Viviendas Turísticas en Gavin
      </h1>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Gavin, en el Valle de Tena, Aragón, se distingue por su atractiva oferta
        turística, especialmente para amantes del ciclismo de montaña, gracias a
        su Bike Park único en España. Este parque de bicicletas, que incluye
        rutas para diferentes niveles, realza su perfil como destino de aventura
        y naturaleza. Además, su ubicación estratégica sobre Biescas lo
        convierte en el punto de inicio hacia el Parque Nacional de Ordesa y
        Monte Perdido, atrayendo a entusiastas del senderismo. En invierno, la
        proximidad a las estaciones de esquí de Formigal y Panticosa lo hace
        ideal para el turismo de nieve, lo que enriquece su mercado de alquiler
        vacacional.
      </p>

      <CityImages images={images} />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Análisis de Mercado Vacacional en Gavin
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        La presencia del Bike Park y la proximidad a destinos naturales y de
        esquí como Ordesa, Formigal y Panticosa, contribuyen a un{' '}
        <strong>mercado vacacional dinámico en Gavin</strong>. Estos elementos,
        combinados con actividades de montaña y una creciente demanda de turismo
        rural, hacen de Gavin un lugar con un gran potencial de inversión en el
        sector del alquiler vacacional.
      </p>

      <OwnersIcons image='https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649293/Dygav%20Images/Icons/navigator_n1cspg_gssjxj.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Inversión en Viviendas Turísticas en Gavin
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Las propiedades en Gavin tienen el potencial de{' '}
        <strong>atraer a una amplia gama de turistas</strong>, desde ciclistas y
        amantes de la naturaleza hasta esquiadores. Invertir aquí significa
        seleccionar propiedades que aprovechen su cercanía a las principales
        atracciones turísticas y que ofrezcan las comodidades adecuadas para una
        experiencia vacacional completa.
      </p>

      <OwnersIcons image='https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649278/Dygav%20Images/Icons/ownersicon_tumwiv_ckdpnt.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-8'>
        Gestión Integral de Viviendas Vacacionales en Gavin
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4 mb-16'>
        En <strong className='text-p600'>DYGAV</strong>, ofrecemos servicios de
        gestión integral para propiedades en Gavin. Nos encargamos de todos los
        aspectos, desde la{' '}
        <span>
          <Link
            href={'/licencias-turisticas/gavin'}
            className='underline text-p600'
          >
            obtención de la licencia turística en Gavín
          </Link>
        </span>
        , hasta la gestión operativa y promocional, garantizando el máximo
        rendimiento de tu inversión y la satisfacción tanto de propietarios como
        de huéspedes. De esta forma tu vivienda no solo generará ingresos sino
        que también se mantendrá en excelentes condiciones para cuando tú
        quieras utilizarla.
      </p>

      <Llamanos />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-24'>
        ¿Cómo te ayudamos a rentabilizar tu casa de alquiler vacacional?
      </h2>

      <VacationRentalHome />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-10'>
        Maximiza el Rendimiento de tu Propiedad Turística en Gavin
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Nuestro enfoque personalizado en{' '}
        <strong className='text-p600'>DYGAV</strong> asegura que cada propiedad
        en Gavin sea <strong>gestionada de manera óptima</strong>, adaptándonos
        a las necesidades específicas de cada propietario y ofreciendo
        estrategias de marketing efectivas para atraer a un público diverso y
        garantizar la mejor experiencia para los huéspedes.
      </p>

      <HelpYouForm />
    </section>
  );
};
