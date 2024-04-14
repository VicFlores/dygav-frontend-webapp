import { CityImages } from '../Licenses/CityImages';
import { OwnersIcons } from './OwnersIcons';
import { HelpYouForm, Llamanos } from '..';
import { VacationRentalHome } from './VacationRentalHome';
import Link from 'next/link';

const images = [
  {
    src: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/c_piedrafitadejaca_gzbgra.png',
    alt: 'Gestión de vivendas turísticas en Piedrafita de Jaca',
  },
];

export const PiedrafitaDeJacaMgmtInfo = () => {
  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h1 className='text-center text-2xl md:text-3xl pb-4 mb-6 font-semibold border-b-4 border-b-p600 w-auto md:px-10'>
        Gestión de Viviendas Turísticas en Piedrafita de Jaca
      </h1>

      <div className='text-justify lg:text-start text-sm md:text-lg pt-4 space-y-4 mb-12'>
        <p>
          Piedrafita de Jaca, situado en el pintoresco Valle de Tena en el
          Pirineo Aragonés, representa una{' '}
          <strong>
            oportunidad única para propietarios e inversores en el mercado de
            alquiler vacacional
          </strong>
          . Este encantador pueblo, conocido por su tranquilidad y belleza
          natural, se encuentra cerca de las populares estaciones de esquí de
          Formigal y Panticosa, convirtiéndolo en un destino atractivo durante
          todo el año. Además, su entorno natural ofrece una amplia gama de
          actividades al aire libre, como senderismo y ciclismo, lo que lo hace
          ideal para un turismo de naturaleza y aventura.
        </p>

        <p>
          El encanto de Piedrafita de Jaca radica en su capacidad de ofrecer una
          experiencia auténtica de la vida en los Pirineos. Los visitantes se
          sienten atraídos por la belleza natural de la zona, que incluye
          impresionantes paisajes de montaña y la proximidad a rutas de
          senderismo que serpentean a través del paisaje. Además, la
          arquitectura tradicional del pueblo y su ritmo de vida pausado hacen
          de él un lugar ideal para desconectar del bullicio de la ciudad.
        </p>
      </div>

      <CityImages images={images} />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Análisis de Mercado Vacacional en Piedrafita de Jaca
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        El mercado vacacional en Piedrafita de Jaca se beneficia de su ubicación
        en el Valle de Tena y su cercanía a conocidos destinos de esquí. Esta
        posición estratégica atrae a turistas durante todo el año, lo que se
        traduce en una{' '}
        <strong>demanda consistente de alojamientos turísticos</strong>. Las
        propiedades en esta área, especialmente las que están bien administradas
        y promocionadas, disfrutan de una alta ocupación y ofrecen un retorno de
        inversión atractivo.
      </p>

      <OwnersIcons image='https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649293/Dygav%20Images/Icons/navigator_n1cspg_gssjxj.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Oportunidades de Inversión en Viviendas Turísticas en Piedrafita de Jaca
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Invertir en una propiedad en Piedrafita de Jaca implica seleccionar
        ubicaciones que aprovechen tanto su entorno natural como su acceso a
        actividades de ocio. Las viviendas que ofrecen vistas a la montaña o
        facilidad de acceso a rutas de senderismo y estaciones de esquí son
        particularmente atractivas. Al elegir una propiedad,{' '}
        <strong>
          es importante considerar elementos como el potencial de alquiler, la
          ubicación y las características específicas
        </strong>{' '}
        que pueden atraer a diferentes tipos de turistas.
      </p>

      <OwnersIcons image='https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649278/Dygav%20Images/Icons/ownersicon_tumwiv_ckdpnt.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-8'>
        Gestión Integral de Viviendas Vacacionales en Piedrafita de Jaca
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4 mb-16'>
        En <strong className='text-p600'>DYGAV</strong>, proporcionamos una
        <strong>
          gestión integral para las viviendas vacacionales en Piedrafita de Jaca
        </strong>
        . Esto incluye desde la{' '}
        <span>
          <Link
            href={'/licencias-turisticas/piedrafita-de-jaca'}
            className='underline text-p600'
          >
            obtención de la licencia turística para poder operar en Piedrafita
            de Jaca
          </Link>
        </span>
        , hasta la gestión operativa y promocional de la propiedad. Nos
        encargamos de todo para que los propietarios puedan disfrutar de los
        beneficios económicos de su inversión sin preocuparse por el manejo
        diario de su propiedad. De esta forma tu vivienda no solo generará
        ingresos sino que también se mantendrá en excelentes condiciones para
        cuando tú quieras utilizarla.
      </p>

      <Llamanos />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-24'>
        ¿Cómo te ayudamos a rentabilizar tu casa de alquiler vacacional?
      </h2>

      <VacationRentalHome />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-10'>
        Maximiza el Rendimiento de tu Propiedad Turística en Piedrafita de Jaca
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Con nuestro enfoque personalizado en{' '}
        <strong className='text-p600'>DYGAV</strong>, aseguramos que cada
        propiedad en Piedrafita de Jaca{' '}
        <strong>sea gestionada de manera eficiente</strong>, adaptando nuestros
        servicios a las necesidades específicas de cada propietario. Nos
        enfocamos en estrategias de marketing efectivas y en la gestión
        operativa para garantizar una experiencia excepcional para los huéspedes
        y <strong>maximizar el rendimiento de tu inversión</strong>.
      </p>

      <HelpYouForm />
    </section>
  );
};
