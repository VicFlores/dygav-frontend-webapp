import { CityImages } from '../Licenses/CityImages';
import { OwnersIcons } from './OwnersIcons';
import { HelpYouForm, Llamanos } from '..';
import { VacationRentalHome } from './VacationRentalHome';
import Link from 'next/link';

const images = [
  {
    src: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/3_pdtmep.png',
    alt: 'Gestión de vivendas turísticas en Torrevieja',
  },
];

export const TorreviejaMgmtInfo = () => {
  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h1 className='text-center text-2xl md:text-3xl pb-4 mb-6 font-semibold border-b-4 border-b-p600 w-auto md:px-10'>
        Gestión de Viviendas Turísticas en Torrevieja
      </h1>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Torrevieja se destaca por su ubicación privilegiada entre el mar
        Mediterráneo y dos grandes lagos salados, las lagunas de Torrevieja y de
        la Mata, lo que le otorga un microclima único que atrae turistas de
        climas más fríos. Situada en el sur de la Costa Blanca, es famosa por
        sus minas de sal, playas como La Mata y Punta Prima y su cercanía a
        parques naturales idílicos. Además Torrevieja es un destino ideal para
        familias debido a las distintas actividades que ofrece que van desde
        parques acuáticos como el Aquopolis de Torrevieja a circuitos de Karting
        o excursiones en ATV por las dunas cercanas. Además, ofrece una animada
        vida nocturna y una gran variedad de opciones culturales y
        gastronómicas. Todo esto hace de Torrevieja una{' '}
        <strong>
          ciudad ideal para propietarios o inversores que deseen aprovechar el
          auge del mercado de viviendas turísticas
        </strong>
        .
      </p>

      <CityImages images={images} />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Análisis de Mercado Vacacional en Torrevieja
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Torrevieja atrae a una amplia gama de turistas, desde aquellos que
        buscan relajarse en sus playas hasta los entusiastas de los deportes
        acuáticos. La demanda de alojamientos vacacionales es bastante
        estacional, concentrando la mayor parte de la demanda en los meses de
        verano. Sin embargo, gracias a su clima templado y a la variedad de
        actividades disponibles, Torrevieja cada vez atrae a más turistas
        durante los meses de invierno. Las propiedades bien ubicadas y
        gestionadas pueden esperar una{' '}
        <strong>alta tasa de ocupación y un buen retorno de inversión</strong>.
      </p>

      <OwnersIcons image='https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_travelers_re_y25a_zbrkat.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Oportunidades de Inversión en Viviendas Turísticas en Torrevieja
      </h2>

      <div className='text-justify lg:text-start text-sm md:text-lg pt-4 space-y-4 mb-12'>
        <p>
          Las propiedades en Torrevieja deben ofrecer acceso fácil a las playas
          y a los principales atractivos turísticos. Las viviendas que
          proporcionan una experiencia auténtica de la vida costera, combinada
          con comodidades modernas, son especialmente atractivas para los
          visitantes.{' '}
          <strong>
            Las propiedades con vistas al mar o aquellas ubicadas en complejos
            residenciales con características deseables
          </strong>{' '}
          por los viajeros como piscinas, áreas recreativas y proximidad a
          centros de ocio, son particularmente atractivas para una amplia gama
          de visitantes, desde familias que buscan vacaciones relajadas hasta
          grupos que desean disfrutar de la animada vida nocturna y cultural de
          la ciudad.
        </p>

        <p>
          Además, Torrevieja presenta una{' '}
          <strong>
            oportunidad única para aquellos interesados en ofrecer alojamientos
            especializados
          </strong>
          , como estancias enfocadas en experiencias de bienestar y salud,
          gracias a los beneficios del microclima de la zona y las propiedades
          terapéuticas de sus lagunas saladas. Esta diversificación puede
          aumentar el atractivo de la propiedad y abrir nuevas oportunidades de
          mercado.
        </p>
      </div>

      <OwnersIcons image='https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_buy_house_re_8xq7_obrxnk.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-24'>
        Servicios de Gestión Integral de Viviendas Vacacionales en Torrevieja
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4 mb-16'>
        En <strong className='text-p600'>DYGAV</strong>, ofrecemos servicios
        integrales de gestión de propiedades en Torrevieja. Nos encargamos de
        todos los detalles, desde la{' '}
        <span>
          <Link
            href={'/licencias-turisticas/torrevieja'}
            className='underline text-p600'
          >
            obtención de la licencia turística en Torrevieja
          </Link>
        </span>{' '}
        hasta la gestión de reservas, limpieza y mantenimiento, asegurando
        siempre el máximo rendimiento de tu inversión.
      </p>

      <Llamanos />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-24'>
        ¿Cómo te ayudamos a rentabilizar tu casa de alquiler vacacional?
      </h2>

      <VacationRentalHome />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-24'>
        Maximiza el Rendimiento de tu Propiedad Turística en Torrevieja
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Nuestro compromiso en <strong className='text-p600'>DYGAV</strong> va
        más allá de la simple gestión de alquileres; nos dedicamos a cada
        aspecto de tu propiedad en Torrevieja. Esto incluye{' '}
        <strong>
          garantizar que tu vivienda esté siempre lista y en perfectas
          condiciones para tus huéspedes y para ti cuando decidas utilizarla
        </strong>
        . Nos ocupamos de todo, desde el mantenimiento diario y la limpieza
        hasta la gestión eficaz de las reservas y la asistencia a los huéspedes.
        Con <strong className='text-p600'>DYGAV</strong>, puedes confiar en que
        tu inversión está en manos expertas, maximizando tus ingresos y
        manteniendo tu propiedad en el mejor estado posible.
      </p>

      <HelpYouForm />
    </section>
  );
};
