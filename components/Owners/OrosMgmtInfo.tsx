import { CityImages } from '../Licenses/CityImages';
import { OwnersIcons } from './OwnersIcons';
import { HelpYouForm, Llamanos } from '..';
import { VacationRentalHome } from './VacationRentalHome';
import Link from 'next/link';

const images = [
  {
    src: 'https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649650/Dygav%20Images/Oros/C_64_sxdtov_i6t5io.jpg',
    alt: 'Gestión de vivendas turísticas en Orós',
  },
];

export const OrosMgmtInfo = () => {
  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h1 className='text-center text-2xl md:text-3xl pb-4 mb-6 font-semibold border-b-4 border-b-p600 w-auto md:px-10'>
        Gestión de Viviendas Turísticas en Orós
      </h1>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Orós, un rústico pueblecito situado en la entrada del Valle de Tena, es
        un destino ideal para la inversión en viviendas turísticas. Este pueblo
        aragonés, que combina la tranquilidad de un entorno rural con la
        proximidad a las estaciones de esquí de Formigal y Panticosa, ofrece a
        los inversores una mezcla única de naturaleza y deporte. Además, su
        cercanía al Parque Nacional de Ordesa y Monte Perdido lo convierte en un
        punto estratégico para los amantes del senderismo y la naturaleza.
      </p>

      <CityImages images={images} />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Análisis de Mercado Vacacional en Orós
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Orós destaca por un mercado vacacional versátil, fortalecido por su
        ubicación privilegiada. Esta zona no solo atrae a entusiastas del esquí,
        sino también a aquellos que buscan escapadas rurales y aventuras en el
        Parque Nacional de Ordesa y Monte Perdido. Las propiedades aquí, sí se
        posicionan y gestionan correctamente, pueden{' '}
        <strong>aprovechar la demanda de turismo durante todo el año</strong>,
        asegurando altas tasas de ocupación y rentabilidad.
      </p>

      <OwnersIcons image='https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649293/Dygav%20Images/Icons/navigator_n1cspg_gssjxj.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Oportunidades de Inversión en Viviendas Turísticas en Orós
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Al invertir en Orós, se debe considerar la ubicación y las
        características que atraen tanto a esquiadores como a amantes de la
        naturaleza. Propiedades que ofrezcan una mezcla de comodidad rural y
        acceso a actividades al aire libre tienen un gran potencial para atraer
        a una amplia gama de huéspedes. Elegir una vivienda que refleje el
        encanto rústico del área, con las comodidades modernas, puede ser
        particularmente atractivo para los turistas.
      </p>

      <OwnersIcons image='https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649278/Dygav%20Images/Icons/ownersicon_tumwiv_ckdpnt.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-8'>
        Gestión Integral de Viviendas Vacacionales en Orós
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4 mb-16'>
        Nuestra experiencia en <strong className='text-p600'>DYGAV</strong> nos
        permite ofrecer una{' '}
        <strong>gestión integral de propiedades en Orós</strong>, asegurando que
        cada aspecto de la experiencia vacacional sea impecable. Desde{' '}
        <span>
          <Link href={'/licencias-turisticas/oros'} className='text-p600'>
            la obtención de la licencia turística para poder alquilar tu
            vivienda en Orós
          </Link>
        </span>
        , hasta la promoción en portales de alquiler vacacional y el
        mantenimiento de las propiedades, nuestro equipo se enfoca en maximizar
        tus ingresos y garantizar la satisfacción total de huéspedes y
        propietarios. De esta forma tu vivienda no solo generará ingresos sino
        que también se mantendrá en excelentes condiciones para cuando tú
        quieras utilizarla.
      </p>

      <Llamanos />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-24'>
        ¿Cómo te ayudamos a rentabilizar tu casa de alquiler vacacional?
      </h2>

      <VacationRentalHome />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-10'>
        Maximiza el Rendimiento de tu Propiedad Turística en Orós
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        En <strong className='text-p600'>DYGAV</strong>, nos dedicamos a
        personalizar nuestros servicios para cada propiedad en Orós, asegurando
        que <strong>cada detalle se maneje de manera eficiente</strong>. Nuestro
        enfoque incluye estrategias de marketing digital adaptadas y un
        mantenimiento constante, garantizando que tu inversión no solo genere
        ingresos sino que también se mantenga en óptimas condiciones para tu
        disfrute personal.
      </p>

      <HelpYouForm />
    </section>
  );
};
