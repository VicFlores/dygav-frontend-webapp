import { CityImages } from '../Licenses/CityImages';
import { OwnersIcons } from './OwnersIcons';
import { HelpYouForm, Llamanos } from '..';
import { VacationRentalHome } from './VacationRentalHome';
import Link from 'next/link';

const images = [
  {
    src: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/C_49_jlgfrw-scaled.jpg',
    alt: 'Gestión de vivendas turísticas en Jaca',
  },
];

export const JacaMgmtInfo = () => {
  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h1 className='text-center text-2xl md:text-3xl pb-4 mb-6 font-semibold border-b-4 border-b-p600 w-auto md:px-10'>
        Gestión de Viviendas Turísticas en Jaca
      </h1>

      <div className='text-justify lg:text-start text-sm md:text-lg pt-4 space-y-4 mb-12'>
        <p>
          Jaca, un tesoro en el Pirineo Aragonés, es un destino turístico
          excepcional con una mezcla perfecta de historia, naturaleza y
          actividades culturales. Con su clima agradable durante todo el año y
          fácil accesibilidad gracias a la reciente apertura de los túneles de
          Monrepós, Jaca es un{' '}
          <strong>
            lugar ideal para inversores y propietarios que deseen entrar en el
            mercado de alquiler vacacional
          </strong>
          .
        </p>

        <p>
          Atractivos turísticos como la Catedral de Jaca, la Ciudadela, el
          Palacio de Hielo y el Monasterio de las Benedictinas hacen de Jaca un
          lugar lleno de riqueza cultural y patrimonial. Además, el ambiente
          único de tapeo en el Casco Antiguo y la proximidad a atracciones
          naturales como el Valle del Aragón y el Fuerte de Rapitán ofrecen una
          experiencia turística diversa y enriquecedora.
        </p>
      </div>

      <CityImages images={images} />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Análisis de Mercado Vacacional en Jaca
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        El mercado vacacional en Jaca se caracteriza por su{' '}
        <strong>alta demanda</strong>, impulsada por la variedad de atracciones
        y su atractivo tanto en invierno como en verano. La región atrae a una
        amplia gama de turistas, desde quienes buscan experiencias culturales
        hasta los amantes de la naturaleza, asegurando una ocupación y
        rendimiento sólidos para las propiedades de alquiler vacacional.
      </p>

      <OwnersIcons image='https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649293/Dygav%20Images/Icons/navigator_n1cspg_gssjxj.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Invertir en una Vivienda de Uso Turístico en Jaca
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Invertir en Jaca significa seleccionar propiedades cercanas a los
        atractivos históricos y culturales. Las propiedades deben ser cómodas,
        accesibles y estar en ubicaciones que permitan a los huéspedes disfrutar
        de todo lo que la ciudad y sus alrededores tienen para ofrecer. La
        elección de una propiedad en Jaca debe basarse en factores como
        <strong>
          ubicación, precio, potencial de alquiler y conveniencia
        </strong>{' '}
        para los turistas.
      </p>

      <OwnersIcons image='https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649278/Dygav%20Images/Icons/ownersicon_tumwiv_ckdpnt.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-8'>
        Servicios de Gestión Integral de Viviendas Vacacionales
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4 mb-16'>
        En <strong className='text-p600'>DYGAV</strong>, proporcionamos una
        gestión integral de tu propiedad en Jaca, abarcando desde la{' '}
        <span>
          <Link
            href={'/licencias-turisticas/jaca'}
            className='underline text-p600'
          >
            obtención de la licencia turística en Jaca
          </Link>
        </span>
        , hasta la puesta en marcha de los anuncios, check-ins & check-outs, el
        mantenimiento y la limpieza de la vivienda. Nos enfocamos en maximizar
        tus ingresos y ofrecer una experiencia sobresaliente a tus huéspedes,
        asegurando que cada aspecto de la gestión de tu vivienda turística sea
        atendido con la máxima profesionalidad posible.
      </p>

      <Llamanos />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-24'>
        ¿Cómo te ayudamos a rentabilizar tu casa de alquiler vacacional?
      </h2>

      <VacationRentalHome />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-10'>
        Maximiza el Rendimiento de tu Propiedad Turística en Jaca
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Con <strong className='text-p600'>DYGAV</strong>, tu propiedad en Jaca
        no solo generará ingresos adicionales, sino que también se mantendrá en
        perfecto estado para tu disfrute personal. Nosotros personalizamos
        nuestros servicios a tus necesidades, asegurando que tu{' '}
        <strong>inversión sea rentable y libre de preocupaciones</strong>.
        Nuestro equipo de expertos se dedica a optimizar cada detalle de tu
        vivienda turística, desde el marketing hasta el mantenimiento diario.
      </p>

      <HelpYouForm />
    </section>
  );
};
