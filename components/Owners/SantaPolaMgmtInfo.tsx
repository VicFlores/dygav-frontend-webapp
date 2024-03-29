import { CityImages } from '../Licenses/CityImages';
import { OwnersIcons } from './OwnersIcons';
import { HelpYouForm, Llamanos } from '..';
import { VacationRentalHome } from './VacationRentalHome';
import Link from 'next/link';

const images = [
  {
    src: 'https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649443/Dygav%20Images/SantaPola/2_gipvsk_nbdj17.webp',
    alt: 'Gestión de vivendas turísticas en Santa Pola',
  },
];

export const SantaPolaMgmtInfo = () => {
  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h1 className='text-center text-2xl md:text-3xl pb-4 mb-6 font-semibold border-b-4 border-b-p600 w-auto md:px-10'>
        Gestión de Viviendas Turísticas en Santa Pola
      </h1>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Santa Pola, situada en la Costa Blanca, es un destino turístico
        encantador conocido por sus playas de arena fina, su puerto pesquero y
        su rica historia marcada por el Castillo-Fortaleza. Esta ciudad costera
        es ideal para aquellos que buscan una experiencia turística más
        tranquila, combinando la belleza natural de sus reservas marinas, como
        la Isla de Tabarca, con la autenticidad de una ciudad pesquera
        tradicional. Además, Santa Pola es famosa por sus deportes acuáticos y
        sus senderos de naturaleza, lo que la hace atractiva tanto para los
        aventureros como para las familias. Por todo esto Santa Pola es un
        <strong>
          enclave ideal para propietarios e inversores que deseen entrar en el
          mercado del alquiler vacacional
        </strong>
        .
      </p>

      <CityImages images={images} />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Análisis de Mercado Vacacional en Santa Pola
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Santa Pola atrae a una variedad de turistas, especialmente aquellos
        interesados en actividades náuticas y ecoturismo.{' '}
        <strong>La demanda de alojamiento vacacional es estacional</strong>,
        pero su clima suave y las festividades locales también atraen visitantes
        fuera de la temporada alta. Las propiedades con fácil acceso a la playa,
        al puerto y a los puntos de interés natural y cultural tienen{' '}
        <strong>potencial para un buen retorno de inversión</strong>.
      </p>

      <OwnersIcons image='https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649266/Dygav%20Images/Icons/undraw_travelers_re_y25a_zbrkat_ihdtj8.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Oportunidades de Inversión en Viviendas Turísticas en Santa Pola
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Invertir en viviendas turísticas en Santa Pola es{' '}
        <strong>
          apostar por una localidad con un creciente interés turístico
        </strong>
        . Las propiedades que ofrecen una experiencia auténtica, integrando
        elementos de la vida costera con comodidades modernas, son especialmente
        apreciadas. Apartamentos con vistas al mar o casas cerca del casco
        antiguo y el puerto son ideales para atraer una amplia gama de turistas,
        desde aquellos que buscan relax hasta los entusiastas de actividades al
        aire libre.
      </p>

      <OwnersIcons image='https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649275/Dygav%20Images/Icons/undraw_buy_house_re_8xq7_obrxnk_so8fsx.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-24'>
        Servicios de Gestión Integral de Viviendas Vacacionales en Santa Pola
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4 mb-16'>
        En <strong className='text-p600'>DYGAV</strong>, ofrecemos{' '}
        <strong>
          servicios integrales de gestión de propiedades en Santa Pola
        </strong>
        . Nos encargamos de todo, desde la{' '}
        <span>
          <Link
            href={'/licencias-turisticas/santa-pola'}
            className='underline text-p600'
          >
            obtención de la licencia turística en Santa Pola
          </Link>
        </span>{' '}
        hasta la promoción y gestión de reservas pasando por la limpieza y el
        mantenimiento, asegurando que cada propiedad alcance su máximo
        potencial.
      </p>

      <Llamanos />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-24'>
        ¿Cómo te ayudamos a rentabilizar tu casa de alquiler vacacional?
      </h2>

      <VacationRentalHome />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-24'>
        Maximiza el Rendimiento de tu Propiedad Turística en Santa Pola
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Nuestro enfoque en <strong className='text-p600'>DYGAV</strong> es
        proporcionar una{' '}
        <strong>
          gestión personalizada y eficiente de tu propiedad en Santa Pola
        </strong>
        . Nos ocupamos de mantener tu vivienda en perfectas condiciones,
        gestionando eficazmente las reservas y ofreciendo un servicio
        excepcional a los huéspedes. Con{' '}
        <strong className='text-p600'>DYGAV</strong>, tu inversión en Santa Pola
        no solo generará ingresos, sino que también será cuidada y mantenida
        para tu propio disfrute cuando tú quieras utilizarla.
      </p>

      <HelpYouForm />
    </section>
  );
};
