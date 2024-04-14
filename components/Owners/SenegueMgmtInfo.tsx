import { CityImages } from '../Licenses/CityImages';
import { OwnersIcons } from './OwnersIcons';
import { HelpYouForm, Llamanos } from '..';
import { VacationRentalHome } from './VacationRentalHome';
import Link from 'next/link';

const images = [
  {
    src: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/c_senegue_ycqsev.png',
    alt: 'Gestión de vivendas turísticas en Senegüe',
  },
];

export const SenegueMgmtInfo = () => {
  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h1 className='text-center text-2xl md:text-3xl pb-4 mb-6 font-semibold border-b-4 border-b-p600 w-auto md:px-10'>
        Gestión de Viviendas Turísticas en Senegüe
      </h1>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Senegüé, ubicado en el pintoresco Valle de Tena, es un lugar ideal para
        <strong>
          la inversión en viviendas turísticas en el Pirineo Aragonés
        </strong>
        . Este tranquilo pueblo ofrece una experiencia única para aquellos que
        buscan una escapada en un entorno rural y natural. Su proximidad a las
        estaciones de esquí de Formigal y Panticosa, así como a la histórica
        ciudad de Jaca, lo convierte en un punto estratégico para atraer a
        turistas que buscan combinar la tranquilidad de la vida en el pueblo con
        actividades de montaña y esquí.
      </p>

      <CityImages images={images} />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Análisis de Mercado Vacacional en Senegüé
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        El mercado vacacional en Senegüé se beneficia de su ubicación
        estratégica y su entorno natural. La demanda de alojamiento vacacional
        en el área aumenta, especialmente durante la temporada de esquí y en los
        meses de verano, cuando los turistas buscan disfrutar de la naturaleza.
        Esto representa una{' '}
        <strong>
          excelente oportunidad para los propietarios de viviendas
        </strong>
        , que pueden beneficiarse de una tasa de ocupación constante y un buen
        retorno de inversión.
      </p>

      <OwnersIcons image='https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649293/Dygav%20Images/Icons/navigator_n1cspg_gssjxj.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Oportunidades de Inversión en Viviendas Turísticas en Senegüé
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Invertir en Senegüé significa apostar por un destino que combina el
        encanto rural con accesibilidad a actividades turísticas y de ocio. Las
        propiedades aquí deben ofrecer comodidad y estar bien equipadas para
        satisfacer las necesidades de los visitantes. La selección de
        propiedades debe basarse en su{' '}
        <strong>
          potencial para proporcionar una experiencia auténtica y acogedora
        </strong>
        , siendo atractivas tanto para turistas que buscan tranquilidad como
        para aquellos interesados en actividades al aire libre.
      </p>

      <OwnersIcons image='https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649278/Dygav%20Images/Icons/ownersicon_tumwiv_ckdpnt.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-8'>
        Servicios de Gestión Integral de Viviendas Vacacionales con DYGAV
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4 mb-16'>
        En <strong className='text-p600'>DYGAV</strong>, nos especializamos en
        la <strong>gestión integral de viviendas turísticas en Senegüé</strong>.
        Nos encargamos de todos los aspectos necesarios para asegurar que tu
        propiedad genere ingresos y ofrezca una experiencia excepcional a los
        huéspedes. Esto incluye la{' '}
        <span>
          <Link
            href={'/licencias-turisticas/senegue'}
            className='underline text-p600'
          >
            obtención de la licencia turística en Senegüe
          </Link>
        </span>
        , la promoción en plataformas de alquiler, y la gestión operativa y de
        mantenimiento de la vivienda. De esta forma tu vivienda no solo generará
        ingresos sino que también se mantendrá en excelentes condiciones para
        cuando tú quieras utilizarla.
      </p>

      <Llamanos />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-24'>
        ¿Cómo te ayudamos a rentabilizar tu casa de alquiler vacacional?
      </h2>

      <VacationRentalHome />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-10'>
        Maximiza el Rendimiento de tu Propiedad Turística en Senegüé
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Con <strong className='text-p600'>DYGAV</strong>, cada propiedad es
        única y merece una atención personalizada. Nos dedicamos a{' '}
        <strong>optimizar el rendimiento de tu inversión en Senegüé</strong>,
        adaptando nuestros servicios a tus necesidades específicas. Desde la
        promoción y el marketing hasta el mantenimiento y la atención al
        cliente, nuestro equipo de profesionales se encarga de todo para que
        puedas obtener el máximo beneficio de tu propiedad turística.
      </p>

      <HelpYouForm />
    </section>
  );
};
