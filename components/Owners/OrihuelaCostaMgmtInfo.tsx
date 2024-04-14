import { CityImages } from '../Licenses/CityImages';
import { OwnersIcons } from './OwnersIcons';
import { HelpYouForm, Llamanos } from '..';
import { VacationRentalHome } from './VacationRentalHome';
import Link from 'next/link';

const images = [
  {
    src: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/Copia_de_8_fuequq.png',
    alt: 'Gestión de vivendas turísticas en Orihuela Costa',
  },
];

export const OrihuelaCostaMgmtInfo = () => {
  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h1 className='text-center text-2xl md:text-3xl pb-4 mb-6 font-semibold border-b-4 border-b-p600 w-auto md:px-10'>
        Gestión de Viviendas Turísticas en Orihuela Costa
      </h1>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4 mb-16'>
        Orihuela Costa, una extensión costera de la histórica Orihuela, es un
        destino turístico excepcional conocido por sus hermosas playas, campos
        de golf de renombre y zonas residenciales modernas. Esta zona ofrece una
        mezcla perfecta de relajación y actividades al aire libre, con playas
        como Cabo Roig y Playa Flamenca, y centros comerciales vibrantes como
        Zenia Boulevard. Orihuela Costa es el lugar ideal para aquellos que
        buscan disfrutar del sol mediterráneo, deportes acuáticos, golf y la
        vida nocturna. Todo esto hace de Orihuela Costa una{' '}
        <strong>muy buena zona para propietarios e inversores</strong> que
        deseen iniciarse en el mercado del alquiler turístico.
      </p>

      <CityImages images={images} />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Análisis de Mercado Vacacional en Orihuela Costa
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Orihuela Costa atrae a un público diverso que incluye familias,
        golfistas y amantes de la playa. La demanda de alojamiento vacacional es
        alta, especialmente en los meses de verano. Propiedades cercanas a las
        playas y campos de golf, así como aquellas en urbanizaciones con buenas
        comodidades, tienen una <strong>alta tasa de ocupación</strong> y son
        muy buscadas.
      </p>

      <OwnersIcons image='https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649266/Dygav%20Images/Icons/undraw_travelers_re_y25a_zbrkat_ihdtj8.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Oportunidades de Inversión en Viviendas Turísticas en Orihuela Costa
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Las oportunidades de inversión en Orihuela Costa son variadas, abarcando
        desde apartamentos modernos con vistas al mar hasta villas en zonas
        tranquilas cerca de los campos de golf. Las propiedades que ofrecen
        <strong>comodidades adicionales</strong> como piscinas comunitarias,
        jardines y accesibilidad a centros comerciales y de ocio{' '}
        <strong>son particularmente atractivas para los turistas</strong>.
      </p>

      <OwnersIcons image='https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649275/Dygav%20Images/Icons/undraw_buy_house_re_8xq7_obrxnk_so8fsx.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-24'>
        Servicios de Gestión Integral de Viviendas Vacacionales en Orihuela
        Costa
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4 mb-16'>
        En <strong className='text-p600'>DYGAV</strong>, ofrecemos{' '}
        <strong>
          servicios integrales de gestión de propiedades en Orihuela Costa
        </strong>
        , asegurando que cada inversión alcance su máximo potencial. Nos
        ocupamos de la promoción, gestión de reservas, limpieza y mantenimiento,
        así como de la{' '}
        <span>
          <Link
            href={'/licencias-turisticas/orihuela-costa'}
            className='underline text-p600'
          >
            obtención de licencia turística para poder operar en Orihuela Costa
          </Link>
        </span>
        , proporcionando una experiencia libre de preocupaciones para los
        huéspedes y los propietarios.
      </p>

      <Llamanos />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-24'>
        ¿Cómo te ayudamos a rentabilizar tu casa de alquiler vacacional?
      </h2>

      <VacationRentalHome />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-24'>
        Maximiza el Rendimiento de tu Propiedad Turística en Orihuela Costa
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Nuestro enfoque en <strong className='text-p600'>DYGAV</strong> es
        proporcionar una{' '}
        <strong>
          gestión personalizada para cada propiedad en Orihuela Costa
        </strong>
        , garantizando el mejor cuidado y una rentabilidad óptima. Nos enfocamos
        en la calidad del servicio, asegurando que cada propiedad no solo
        atraiga a huéspedes sino que también les ofrezca una experiencia
        memorable, aumentando la posibilidad de reservas repetidas y
        recomendaciones. Además tu casa siempre{' '}
        <strong>
          estará en perfectas condiciones para cuando desees utilizarla
        </strong>
        .
      </p>

      <HelpYouForm />
    </section>
  );
};
