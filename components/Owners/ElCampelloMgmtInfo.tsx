import { CityImages } from '../Licenses/CityImages';
import { OwnersIcons } from './OwnersIcons';
import { HelpYouForm, Llamanos } from '..';
import { VacationRentalHome } from './VacationRentalHome';
import Link from 'next/link';

const images = [
  {
    src: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/5_k3ebaw.png',
    alt: 'Gestión de vivendas turísticas en El Campello',
  },
];

export const ElCampelloMgmtInfo = () => {
  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h1 className='text-center text-2xl md:text-3xl pb-4 mb-6 font-semibold border-b-4 border-b-p600 w-auto md:px-10'>
        Gestión de Viviendas Turísticas en El Campello
      </h1>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        El Campello, situado en la costa alicantina, ofrece un encantador
        contraste entre sus kilométricas playas de arena dorada y su rica
        historia, que se remonta a la época de los íberos. Este destino se
        distingue por su paseo marítimo lleno de vida, sus tranquilas calas y su
        emblemática Torre Vigía desde la cual se han avistado piratas a lo largo
        de los siglos. Con una vibrante oferta gastronómica basada en los frutos
        del mar y una agenda cultural que mantiene viva las tradiciones locales,
        El Campello atrae tanto a quienes buscan relajación como a los
        entusiastas de la aventura y la cultura. Es un{' '}
        <strong>
          lugar idóneo para inversores que deseen explorar el mercado del
          alquiler vacacional
        </strong>
        , ofreciendo un potencial de crecimiento sostenido.
      </p>

      <CityImages images={images} />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Análisis de Mercado Vacacional en El Campello
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        El mercado vacacional en El Campello se caracteriza por su atractivo
        durante todo el año, beneficiándose de un clima cálido y una oferta
        turística que combina playa, cultura y naturaleza.{' '}
        <strong>La demanda es especialmente alta en los meses de verano</strong>
        , pero el encanto de la localidad y sus festividades tradicionales, como
        las Hogueras de San Juan, atraen visitantes también en temporada baja.
        Las propiedades con acceso directo a la playa o aquellas que ofrecen
        vistas al Mediterráneo y a la sierra circundante son particularmente
        codiciadas por los turistas.
      </p>

      <OwnersIcons image='https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_travelers_re_y25a_zbrkat.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Oportunidades de Inversión en Viviendas Turísticas en El Campello
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Invertir en El Campello se presenta como una opción rentable y versátil
        para el mercado de alquiler vacacional.{' '}
        <strong>
          Las viviendas que destacan por su ubicación, ofreciendo fácil acceso
          tanto a las zonas de playa
        </strong>{' '}
        como al casco antiguo, tienen un alto potencial de ocupación. Además,
        las propiedades que incorporan elementos de sostenibilidad o que ofrecen
        características únicas, como terrazas amplias o piscinas, se posicionan
        favorablemente en un mercado cada vez más consciente del valor de
        experiencias auténticas y respetuosas con el medio ambiente.
      </p>

      <OwnersIcons image='https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_buy_house_re_8xq7_obrxnk.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-24'>
        Servicios de Gestión Integral de Viviendas Vacacionales en El Campello
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4 mb-16'>
        En <strong className='text-p600'>DYGAV</strong>{' '}
        <strong>
          nos especializamos en la gestión integral de propiedades vacacionales
          en El Campello
        </strong>
        , asegurando una experiencia sin preocupaciones para propietarios e
        inversores. Nuestros servicios cubren desde la {''}
        <span>
          <Link
            className='text-p600 underline'
            href={'/licencias-turisticas/el-campello'}
          >
            tramitación de la licencia turística en El Campello
          </Link>
        </span>{' '}
        hasta la comercialización efectiva de tu propiedad, incluyendo la
        gestión de reservas, el mantenimiento y la limpieza. Nos comprometemos a
        optimizar los ingresos de tu inversión, garantizando al mismo tiempo{' '}
        <strong>
          que tu vivienda se mantenga en las mejores condiciones para acoger a
          los huéspedes o para tu disfrute personal en cualquier momento
        </strong>
        .
      </p>

      <Llamanos />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-24'>
        ¿Cómo te ayudamos a rentabilizar tu casa de alquiler vacacional?
      </h2>

      <VacationRentalHome />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-24'>
        Maximiza el Rendimiento de tu Propiedad Turística en El Campello
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Al confiar en <strong className='text-p600'>DYGAV</strong> para la
        gestión de tu propiedad en El Campello, te beneficiarás de nuestra
        experiencia y dedicación para maximizar el rendimiento de tu inversión.
        Nos ocupamos de todos los aspectos operativos, permitiéndote disfrutar
        de la tranquilidad de saber que tu propiedad no solo genera ingresos de
        manera eficiente sino que{' '}
        <strong>
          también está cuidada y preparada para recibirte a ti o a tus huéspedes
          en cualquier época del año
        </strong>
        . Nuestro enfoque personalizado y atención al detalle garantizan que tu
        inversión en el mercado vacacional de El Campello sea exitosa y
        gratificante.
      </p>

      <HelpYouForm />
    </section>
  );
};
