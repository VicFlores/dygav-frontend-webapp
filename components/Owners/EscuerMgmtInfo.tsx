import { CityImages } from '../Licenses/CityImages';
import { OwnersIcons } from './OwnersIcons';
import { HelpYouForm, Llamanos } from '..';
import { VacationRentalHome } from './VacationRentalHome';
import Link from 'next/link';

const images = [
  {
    src: 'https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649785/Dygav%20Images/Escuer/C_66_puqrlj_f9ezch.png',
    alt: 'Gestión de vivendas turísticas en Escuer',
  },
];

export const EscuerMgmtInfo = () => {
  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h1 className='text-center text-2xl md:text-3xl pb-4 mb-6 font-semibold border-b-4 border-b-p600 w-auto md:px-10'>
        Gestión de Viviendas Turísticas en Escuer
      </h1>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Escuer, un pequeño pueblo en la entrada del Valle de Tena, se destaca
        como un{' '}
        <strong>lugar idóneo para la inversión en viviendas turísticas</strong>.
        Este pueblo, aunque menos conocido que otros en la región, ofrece una
        experiencia tranquila y auténtica del Pirineo Aragonés, lo que lo hace
        atractivo para aquellos buscando escapar del bullicio de las grandes
        estaciones de esquí y disfrutar de la naturaleza. Su cercanía a
        atracciones turísticas como la estación de esquí de Formigal o el Parque
        Nacional de Ordesa y Monte Perdido lo convierte en un punto estratégico
        para los amantes del turismo rural y de montaña.
      </p>

      <CityImages images={images} />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Análisis de Mercado Vacacional en Escuer
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        El mercado vacacional en Escuer se beneficia de su ambiente tranquilo y
        natural, atractivo para aquellos que buscan una experiencia más íntima y
        menos comercial. Aunque es un mercado más pequeño comparado con otros
        lugares del Valle de Tena, presenta una oportunidad para los
        propietarios de viviendas que buscan{' '}
        <strong>
          atraer a turistas que prefieren destinos menos concurridos
        </strong>{' '}
        pero igualmente encantadores y conectados con la naturaleza y la cultura
        local.
      </p>

      <OwnersIcons image='https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649293/Dygav%20Images/Icons/navigator_n1cspg_gssjxj.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Oportunidades de Inversión en Viviendas Turísticas en Escuer
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Invertir en Escuer es una oportunidad para aquellos que buscan
        capitalizar en un mercado turístico emergente y en crecimiento. Las
        propiedades aquí pueden ofrecer una experiencia única en un entorno
        rural, atrayendo a turistas que buscan tranquilidad y una conexión más
        profunda con la cultura y la naturaleza de los Pirineos. La selección de
        propiedades debe enfocarse en su{' '}
        <strong>autenticidad, comodidades y fácil acceso</strong> a áreas
        naturales y culturales cercanas.
      </p>

      <OwnersIcons image='https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649278/Dygav%20Images/Icons/ownersicon_tumwiv_ckdpnt.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-8'>
        Servicios de Gestión Integral de Viviendas Vacacionales con DYGAV
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4 mb-16'>
        En <strong className='text-p600'>DYGAV</strong>, ofrecemos una gestión
        integral para tu vivienda vacacional en Escuer. Nos encargamos de todos
        los detalles, desde la{' '}
        <span>
          <Link
            href={'/licencias-turisticas/escuer'}
            className='underline text-p600'
          >
            obtención de la licencia turística en Escuer
          </Link>
        </span>
        hasta la gestión operativa y promocional de la propiedad. Esto incluye
        la preparación del alojamiento para los huéspedes, la publicidad en
        plataformas de alquiler y la atención continua durante las estancias.
      </p>

      <Llamanos />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-24'>
        ¿Cómo te ayudamos a rentabilizar tu casa de alquiler vacacional?
      </h2>

      <VacationRentalHome />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-10'>
        Maximiza el Rendimiento de tu Propiedad Turística en Escuer
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Con <strong className='text-p600'>DYGAV</strong>, cada propiedad es
        única. Personalizamos nuestros servicios para satisfacer tus necesidades
        específicas y las de tus huéspedes. Desde estrategias de marketing
        digital hasta el mantenimiento diario, nuestro equipo de profesionales
        se dedica a <strong>optimizar el rendimiento de tu inversión</strong>.
        Con nosotros, puedes estar seguro de que tu propiedad en Escuer no solo
        generará ingresos adicionales, sino que también se mantendrá en
        excelentes condiciones para cuando tú quieras utilizarla.
      </p>

      <HelpYouForm />
    </section>
  );
};
