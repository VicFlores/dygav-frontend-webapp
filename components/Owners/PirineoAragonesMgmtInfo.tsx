import { CityImages } from '../Licenses/CityImages';
import { OwnersIcons } from './OwnersIcons';
import { AlquilerVacacional, HelpYouForm, Llamanos } from '..';
import { VacationRentalHome } from './VacationRentalHome';
import Link from 'next/link';
import { pirineosAragonImages } from '@/utils/static/licenseImages';
import { CityCards } from '../Licenses/CityCards';

const images = [
  {
    src: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/C_60_jva142-scaled.jpg',
    alt: 'Gestión de vivendas turísticas en Costa Blanca',
  },
];

export const PirineoAragonesMgmtInfo = () => {
  let pirineosAragonImagesCopy = pirineosAragonImages.slice(1);

  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h1 className='text-center text-2xl md:text-3xl pb-4 mb-6 font-semibold border-b-4 border-b-p600 w-auto md:px-10'>
        Expertos en Gestión de Viviendas Turísticas en el Pirineo Aragonés
      </h1>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        El Pirineo Aragonés se destaca por sus impresionantes paisajes
        montañosos, su rica historia y una amplia gama de actividades al aire
        libre disponibles durante todo el año. Desde la histórica ciudad de
        Jaca, conocida por su patrimonio cultural y deportivo, hasta el
        pintoresco Valle de Tena, con sus impresionantes vistas y estaciones de
        esquí, nuestra gestión de viviendas turísticas asegura experiencias
        vacacionales excepcionales. En{' '}
        <strong className='text-p600'>DYGAV</strong>, elevamos el estándar de la
        hospitalidad, garantizando que cada estancia supere las expectativas de
        nuestros huéspedes y ofreciendo a los propietarios la tranquilidad de
        saber que su inversión recibe el mejor cuidado posible.{' '}
        <strong>
          Rentabiliza tu propiedad mientras no la utilizas y disfruta de ella
          cuando tú decidas
        </strong>
        .
      </p>

      <CityImages images={images} />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Servicio Integral de Gestión de Viviendas Turísticas
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4 mb-10'>
        Nuestra experiencia en el Pirineo Aragonés nos permite{' '}
        <strong>
          ofrecer un servicio integral de gestión de viviendas turísticas
        </strong>{' '}
        que cubre todas las necesidades para el éxito de tu propiedad. Además de
        ayudarte a{' '}
        <Link
          href={'/licencias-turisticas/pirineo-aragones'}
          className='text-p600 underline'
        >
          tramitar tu licencia turística en el Pirineo Aragonés
        </Link>
        , implementamos estrategias de marketing personalizadas, gestionamos
        reservas de manera eficiente y nos encargamos del mantenimiento y la
        limpieza con estándares excepcionales.{' '}
        <strong>
          Nuestros servicios están diseñados para maximizar la ocupación,
          incrementar los ingresos y resaltar el encanto único de tu vivienda
        </strong>{' '}
        en esta región privilegiada.
      </p>

      <Llamanos />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        DYGAV en el Pirineo Aragonés
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Elegir <strong className='text-p600'>DYGAV</strong> para la gestión de
        tu vivienda turística en el Pirineo Aragonés significa confiar en
        expertos con un profundo conocimiento de la zona y un compromiso firme
        con la calidad.{' '}
        <strong>
          Nos esforzamos por mantener cada propiedad en condiciones óptimas,
          ofreciendo a los huéspedes una experiencia inolvidable
        </strong>{' '}
        mientras exploran Jaca, el Valle de Tena y sus alrededores, disfrutando
        de actividades como el esquí, senderismo y la rica gastronomía local.
      </p>

      <OwnersIcons image='https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_build_your__home_csh6.svg' />

      <div className='w-full h-auto grid md:grid-cols-2 lg:grid-cols-3 mt-10 md:mt-10 px-6 md:px-2 lg:px-0 gap-x-4 mb-14'>
        <div className='md:self-center md:justify-self-center divide-y-4 divide-p600 text-center md:text-start'>
          <h2 className='text-2xl lg:text-[31px] md:text-[26px] mb-4'>
            Gestión de Viviendas Turísticas en el Pirineo
          </h2>

          <h3 className='text-center md:text-start text-2xl  md:text-3xl font-semibold pt-3'>
            ¿Donde gestionamos tu vivienda?
          </h3>
        </div>

        <CityCards
          images={pirineosAragonImagesCopy}
          cardTitle='Gestión de Viviendas Turísticas'
          link='/gestion-viviendas-turisticas'
        />
      </div>

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Una Estrategia de Gestión Personalizada para Tu Vivienda Vacacional
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Comprendemos que la gestión de viviendas turísticas es una tarea que
        implica mucho más que el simple alquiler de una propiedad. Se trata de
        crear experiencias memorables para los huéspedes y asegurar retornos
        significativos para los propietarios. Por ello,{' '}
        <strong>
          adaptamos nuestra estrategia de gestión a cada propiedad específica
        </strong>
        , asegurando que{' '}
        <strong>
          cada vivienda turística se convierta en un destino destacado
        </strong>{' '}
        dentro del majestuoso entorno del Pirineo Aragonés.
      </p>

      <OwnersIcons image='https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_software_engineer_re_tnjc.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Todos Nuestros Servicios de Gestión Integral
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Ofrecemos un{' '}
        <strong>
          servicio completo de gestión integral para tu vivienda turística en el
          Pirineo Aragonés
        </strong>
        , que incluye desde el asesoramiento en inversiones y mejoras, hasta la
        realización de reportajes fotográficos profesionales, marketing y
        promoción en todas las plataformas de alquiler vacacional. Nuestros
        servicios también incluyen precios dinámicos basados en inteligencia
        artificial, procesos de check-in y check-out digitalizados, atención al
        cliente 24/7, limpieza y mantenimiento de alto estándar, gestión de
        seguros y fianzas, y estrategias para fomentar reseñas positivas. Todo
        ello{' '}
        <strong>
          diseñado para garantizar la máxima rentabilidad de tu inversión y la
          satisfacción total de tus huéspedes
        </strong>
        .
      </p>

      <VacationRentalHome />

      <HelpYouForm />
    </section>
  );
};
