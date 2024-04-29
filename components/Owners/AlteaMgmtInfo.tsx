import { CityImages } from '../Licenses/CityImages';
import { OwnersIcons } from './OwnersIcons';
import { HelpYouForm, Llamanos } from '..';
import { VacationRentalHome } from './VacationRentalHome';
import Link from 'next/link';

const images = [
  {
    src: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/5_k3ebaw.png',
    alt: 'Gestión de vivendas turísticas en Altea',
  },
];

export const AlteaMgmtInfo = () => {
  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h1 className='text-center text-2xl md:text-3xl pb-4 mb-6 font-semibold border-b-4 border-b-p600 w-auto md:px-10'>
        Gestión de Viviendas Turísticas en Altea
      </h1>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Altea, con su icónica iglesia con cúpula de tejas azules, ofrece una
        estampa única en la Costa Blanca, fusionando belleza natural con una
        rica herencia cultural. Este pintoresco pueblo, conocido por sus calles
        empedradas, sus casas blancas y sus impresionantes vistas al mar
        Mediterráneo, atrae a aquellos en busca de un refugio tranquilo lejos
        del bullicio de las grandes ciudades turísticas. Sus playas de aguas
        cristalinas, su vibrante casco antiguo lleno de galerías de arte, cafés
        y una gastronomía exquisita, convierten a Altea en{' '}
        <strong>
          un lugar idílico para los visitantes y una opción prime para
          inversores en el mercado de alquiler vacacional
        </strong>
        .
      </p>

      <CityImages images={images} />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Análisis de Mercado Vacacional en Altea
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Altea atrae a un público diverso y exigente, desde parejas en busca de
        un escape romántico hasta familias deseosas de experimentar su rica
        cultura y bellezas naturales.{' '}
        <strong>
          La demanda de alojamientos vacacionales se mantiene alta a lo largo
          del año
        </strong>
        , con un pico durante los meses de verano, gracias a su oferta cultural
        y sus eventos únicos que capturan la esencia mediterránea. Las
        propiedades con vistas al mar, acceso a las playas y aquellas situadas
        en el encantador casco antiguo son especialmente valoradas, ofreciendo a
        los propietarios una excelente tasa de ocupación y un retorno de
        inversión atractivo.
      </p>

      <OwnersIcons image='https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_travelers_re_y25a_zbrkat.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Oportunidades de Inversión en Viviendas Turísticas en Altea
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4 mb-6'>
        Invertir en viviendas turísticas en Altea es apostar por un mercado con
        una demanda sólida y en crecimiento. Las propiedades que combinan el
        encanto tradicional con comodidades modernas son altamente apreciadas
        por los visitantes. Altea ofrece un escenario único para aquellos
        interesados en propiedades con características especiales, como terrazas
        con vistas panorámicas o accesos privados a calas secretas,
        proporcionando una experiencia vacacional exclusiva y diferenciada.
      </p>

      <OwnersIcons image='https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_buy_house_re_8xq7_obrxnk.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-24'>
        Servicios de Gestión Integral de Viviendas Vacacionales en Altea
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4 mb-16'>
        En <strong className='text-p600'>DYGAV</strong> , nos especializamos en
        ofrecer una{' '}
        <strong>gestión integral de propiedades vacacionales en Altea</strong>,
        asegurando el máximo rendimiento de tu inversión. Desde la {''}
        <span>
          <Link
            className='text-p600 underline'
            href={'/licencias-turisticas/altea'}
          >
            tramitación de la licencia turística necesaria en Altea
          </Link>
        </span>{' '}
        hasta la promoción de tu propiedad en los principales portales de
        alquiler vacacional, gestión de reservas, limpieza, mantenimiento, y
        atención al huésped, nos ocupamos de todo. Nos dedicamos a maximizar los
        ingresos de tu propiedad, manteniéndola en estado óptimo para{' '}
        <strong>
          garantizar la mejor experiencia tanto para los huéspedes como para ti,
          permitiéndote disfrutar de tu vivienda cuando lo desees
        </strong>
        .
      </p>

      <Llamanos />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-24'>
        ¿Cómo te ayudamos a rentabilizar tu casa de alquiler vacacional?
      </h2>

      <VacationRentalHome />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-24'>
        Maximiza el Rendimiento de tu Propiedad Turística en Altea
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Al confiar en <strong className='text-p600'>DYGAV</strong> para la
        gestión de tu propiedad en Altea, te aseguras de obtener el máximo
        rendimiento de tu inversión. Nuestro compromiso es mantener tu propiedad
        en perfectas condiciones, gestionar las reservas de manera eficiente y
        ofrecer un servicio excepcional a tus huéspedes. Nuestra atención al
        detalle y enfoque personalizado te garantizan una inversión rentable y
        bien cuidada, permitiéndote disfrutar de los beneficios de poseer una
        propiedad en uno de los destinos más encantadores de la Costa Blanca.
      </p>

      <HelpYouForm />
    </section>
  );
};
