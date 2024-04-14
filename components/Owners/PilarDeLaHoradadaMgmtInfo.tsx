import { CityImages } from '../Licenses/CityImages';
import { OwnersIcons } from './OwnersIcons';
import { HelpYouForm, Llamanos } from '..';
import { VacationRentalHome } from './VacationRentalHome';
import Link from 'next/link';

const images = [
  {
    src: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/23_gskeis.png',
    alt: 'Gestión de vivendas turísticas en Pilar de la Horadada',
  },
];

export const PilarDeLaHoradadaMgmtInfo = () => {
  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h1 className='text-center text-2xl md:text-3xl pb-4 mb-6 font-semibold border-b-4 border-b-p600 w-auto md:px-10'>
        Gestión de Viviendas Turísticas en Pilar de la Horadada
      </h1>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Pilar de la Horadada, situado en el extremo sur de la Costa Blanca, es
        un destino destacado por sus extensas playas de arena fina, su tranquilo
        entorno residencial y su cercanía a varios campos de golf de renombre.
        Este municipio fronterizo con la Región de Murcia ofrece una mezcla
        perfecta de ocio, cultura y naturaleza, convirtiéndolo en un lugar ideal
        tanto para vacaciones relajantes como activas. Su puerto deportivo,
        playas galardonadas y rutas ciclistas y de senderismo lo hacen
        especialmente atractivo para familias y deportistas. Por todo esto,{' '}
        <strong>
          Pilar de la Horadada se posiciona como un destino ideal para
          propietarios e inversiones que decidan embarcarse en el mercado del
          alquiler vacacional
        </strong>
        .
      </p>

      <CityImages images={images} />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Análisis de Mercado Vacacional en Pilar de la Horadada
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        El mercado vacacional en Pilar de la Horadada es robusto,{' '}
        <strong>
          con una demanda estacional pero con picos a lo largo del año
        </strong>{' '}
        gracias a su clima cálido y su variada oferta turística.Durante el
        verano crece la demanda, especialmente en las propiedades cercanas a la
        playa y aquellas que ofrecen facilidades para actividades al aire libre
        como el golf, el ciclismo y el senderismo. Las propiedades modernas,
        bien equipadas y con acceso a comodidades como piscinas comunitarias o
        privadas, son particularmente populares entre los turistas.
      </p>

      <OwnersIcons image='https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_travelers_re_y25a_zbrkat.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Oportunidades de Inversión en Viviendas Turísticas en Pilar de la
        Horadada
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Invertir en Pilar de la Horadada es apostar por un destino turístico
        diversificado. Las propiedades que ofrecen una combinación de{' '}
        <strong>acceso a la playa y proximidad a campos de golf</strong>{' '}
        representan una excelente oportunidad de inversión. Además, la creciente
        demanda de turismo activo abre nuevas posibilidades para propiedades que
        faciliten experiencias de ocio y aventura. La inversión en apartamentos
        y chalets con{' '}
        <strong>
          características atractivas para familias y deportistas puede ofrecer
          retornos significativos
        </strong>
        .
      </p>

      <OwnersIcons image='https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_buy_house_re_8xq7_obrxnk.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-24'>
        Servicios de Gestión Integral de Viviendas Vacacionales en Pilar de la
        Horadada
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4 mb-16'>
        En <strong className='text-p600'>DYGAV</strong>, ofrecemos una{' '}
        <strong>
          gestión integral de propiedades vacacionales en Pilar de la Horadada
        </strong>{' '}
        para asegurar el máximo rendimiento de tu inversión. Desde la
        comercialización y la gestión de reservas hasta el mantenimiento y la
        limpieza, nuestro equipo se encarga de todos los detalles. Además,
        asistimos en la{' '}
        <span>
          <Link
            className='text-p600 underline'
            href={'/licencias-turisticas/pilar-de-la-horadada'}
          >
            obtención de licencias turísticas
          </Link>
        </span>{' '}
        y brindamos asesoramiento sobre cómo mejorar la rentabilidad de tu
        propiedad.
      </p>

      <Llamanos />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-24'>
        ¿Cómo te ayudamos a rentabilizar tu casa de alquiler vacacional?
      </h2>

      <VacationRentalHome />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-24'>
        Maximiza el Rendimiento de tu Propiedad Turística en Pilar de la
        Horadada
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        <strong>
          Con DYGAV, tu propiedad en Pilar de la Horadada será gestionada
          profesionalmente, asegurando que se mantenga en perfecto estado y sea
          altamente atractiva para los turistas. Nuestra estrategia
          personalizada está diseñada para aumentar la ocupación, mejorar las
          reseñas y maximizar los ingresos, garantizando que tu inversión no
          solo sea rentable, sino también libre de estrés.
        </strong>
      </p>

      <HelpYouForm />
    </section>
  );
};
