import { CityImages } from '../Licenses/CityImages';
import { OwnersIcons } from './OwnersIcons';
import { AlquilerVacacional, HelpYouForm, Llamanos } from '..';
import { VacationRentalHome } from './VacationRentalHome';
import Link from 'next/link';
import { costaBlancaImages } from '@/utils/static/licenseImages';
import { CityCards } from '../Licenses/CityCards';

const images = [
  {
    src: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/4_eyxrcy.png',
    alt: 'Gestión de vivendas turísticas en Costa Blanca',
  },
];

export const CostaBlancaMgmtInfo = () => {
  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h1 className='text-center text-2xl md:text-3xl pb-4 mb-6 font-semibold border-b-4 border-b-p600 w-auto md:px-10'>
        Expertos en Gestión de Viviendas Turísticas en la Costa Blanca
      </h1>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        La Costa Blanca se extiende como un lienzo de contrastes y colores,
        desde las aguas cristalinas del Mediterráneo hasta sus pintorescos
        pueblos y vibrantes ciudades. Este destino emblemático, conocido por su
        clima idílico, playas de arena blanca y rica cultura, se convierte en el
        escenario perfecto para experiencias vacacionales inolvidables gracias a
        una gestión de viviendas turísticas excepcional. En{' '}
        <strong className='text-p600'>DYGAV</strong>, nos dedicamos a elevar
        estas experiencias, asegurando que cada estancia no solo cumpla, sino{' '}
        <strong>supere las expectativas de nuestros huéspedes</strong>, mientras
        ofrecemos a los propietarios{' '}
        <strong>
          la tranquilidad de saber que su inversión está en las mejores manos
        </strong>
        .
      </p>

      <CityImages images={images} />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Servicio Integral de Gestión de Viviendas Turísticas
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4 mb-10'>
        Nuestra especialización en la{' '}
        <Link
          href={'/licencias-turisticas/costa-blanca'}
          className='text-p600 underline'
        >
          gestión de viviendas turísticas en la Costa Blanca
        </Link>{' '}
        nos permite brindar un servicio integral que cubre todos los aspectos
        necesarios para el éxito de tu propiedad. Desde estrategias de marketing
        personalizadas y gestión de reservas hasta mantenimiento y limpieza de
        alta calidad, cada paso está pensado para maximizar la ocupación y los
        ingresos, destacando la belleza y el encanto único de esta región.
        <strong>
          {' '}
          Rentabiliza tu propiedad mientras no la utilizas y disfruta de ella
          cuando tú decidas
        </strong>
        .
      </p>

      <Llamanos />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        DYGAV en la Costa Blanca
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Elegir <strong className='text-p600'>DYGAV</strong> para la gestión de
        tu vivienda turística significa confiar en un líder del mercado que
        combina un profundo conocimiento local con estándares de servicio
        internacionales. Nos esforzamos por asegurar que cada propiedad bajo
        nuestra gestión se presente de manera impecable, ofreciendo a los
        huéspedes una base perfecta desde la cual explorar todo lo que la Costa
        Blanca tiene para ofrecer, desde su gastronomía hasta su patrimonio
        cultural y natural.
      </p>

      <OwnersIcons image='https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_relaxation_re_ohkx.svg' />

      <div className='w-full h-auto grid md:grid-cols-2 lg:grid-cols-3 mt-10 md:mt-10 px-6 md:px-2 lg:px-0 gap-x-4 mb-14'>
        <div className='md:self-center md:justify-self-center divide-y-4 divide-p600 text-center md:text-start'>
          <h2 className='text-2xl lg:text-[31px] md:text-[26px] mb-4'>
            Gestión de viviendas turísticas en Costa Blanca
          </h2>

          <h3 className='text-center md:text-start text-2xl  md:text-3xl font-semibold pt-3'>
            ¿Donde gestionamos tu vivienda?
          </h3>
        </div>

        <CityCards
          images={costaBlancaImages}
          cardTitle='Gestión de Viviendas Turísticas'
          link='/gestion-viviendas-turisticas'
        />
      </div>

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Una estrategia de gestión para tu vivienda vacacional a medida
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        En <strong className='text-p600'>DYGAV</strong>, entendemos que la
        gestión de viviendas turísticas va más allá del simple hecho de alquilar
        una propiedad; se trata de crear recuerdos duraderos para los huéspedes
        y de proporcionar tranquilidad y retornos significativos para los
        propietarios. Nuestro enfoque personalizado garantiza que cada propiedad
        se beneficie de una estrategia a medida, convirtiendo cada vivienda
        turística en una parte vital del atractivo único de la Costa Blanca.
      </p>

      <OwnersIcons image='https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_software_engineer_re_tnjc.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Todos Nuestros Servicios de Gestión Integral
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        En <strong className='text-p600'>DYGAV</strong>,{' '}
        <strong>
          ofrecemos un servicio completo de gestión integral para tu vivienda
          turística
        </strong>
        , que incluye desde asesoramiento personalizado en inversiones y mejoras
        para aumentar el atractivo de tu propiedad, hasta reportaje fotográfico
        profesional, marketing y promoción en todas las plataformas de alquiler
        vacacional, y optimización de precios mediante inteligencia artificial.
        Además, nos encargamos de facilitar un proceso de check-in y check-out
        digitalizado, atención al cliente 24/7, mantenimiento y limpieza de alto
        estándar, gestión de seguros y fianzas, y estrategias para maximizar tus
        reseñas positivas. Todo ello diseñado para{' '}
        <strong>
          asegurar la máxima rentabilidad de tu inversión y la mejor experiencia
          para tus huéspedes
        </strong>
        .
      </p>

      <VacationRentalHome />

      <HelpYouForm />
    </section>
  );
};
