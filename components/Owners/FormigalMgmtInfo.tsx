import { CityImages } from '../Licenses/CityImages';
import { OwnersIcons } from './OwnersIcons';
import { HelpYouForm, Llamanos } from '..';
import { VacationRentalHome } from './VacationRentalHome';

const images = [
  {
    src: 'https://res.cloudinary.com/vicflores11/image/upload/v1704930306/Dygav/Formigal/C_3_qvufgv.webp',
    alt: 'Gestión de vivendas turísticas en Formigal',
  },
];

export const FormigalMgmtInfo = () => {
  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h1 className='text-center text-2xl md:text-3xl pb-4 mb-6 font-semibold border-b-4 border-b-p600 w-auto md:px-10'>
        Gestión de viviendas turísticas en Formigal
      </h1>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Formigal, en el corazón de los Pirineos Aragoneses, es un{' '}
        <strong>destino de montaña tremendamente solicitado</strong>. Con una de
        las estaciones de esquí más grandes de España y atractivos durante todo
        el año,{' '}
        <strong>
          ofrece una oportunidad única para propietarios e inversores en el
          mercado de alquiler vacacional
        </strong>
        . Además la reciente construcción de los túneles de Monrepós ha hecho
        mucho más accesible todo el Valle de Tena por lo que la afluencia de
        personas de distintos puntos de España ha aumentado tremendamente.
        Además su proximidad a Francia hace que muchos viajeros franceses
        decidan pasar sus vacaciones de esquí en Formigal.
      </p>

      <CityImages images={images} />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Análisis de Mercado Vacacional en Formigal
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        El mercado vacacional en Formigal se caracteriza por su{' '}
        <strong>alta demanda durante la temporada de esquí</strong>, así como un
        creciente interés por actividades de verano como el senderismo y el
        ciclismo. La región atrae tanto a{' '}
        <strong>turistas nacionales como internacionales</strong>, buscando
        desde escapadas cortas hasta estancias más prolongadas. Las propiedades
        aquí presentan una <strong>tasa de ocupación elevada</strong> y un
        retorno de inversión atractivo, especialmente si están bien gestionadas
        y comercializadas.
      </p>

      <OwnersIcons image='https://res.cloudinary.com/vicflores11/image/upload/v1706283993/Dygav/navigator_n1cspg.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Invertir en una Vivienda de Uso Turístico en Formigal
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Invertir en Formigal significa seleccionar propiedades que no solo estén
        en ubicaciones estratégicas cerca de la estación de esquí y otros
        atractivos, sino que también ofrezcan comodidades y servicios que
        satisfagan las necesidades de un turista moderno. La elección de una
        propiedad debe basarse en su{' '}
        <strong>
          precio, potencial de alquiler, facilidad de acceso, ubicación
        </strong>
        … Normalmente será más fácil alquilar una casa recién reformada en el
        centro de Formigal y con vistas a las pistas de esquí, pero siempre hay
        turismo para casas con menos lujos o prestaciones ya que siempre puede
        cubrir las necesidades de otro tipo de viajeros. Considerar futuras
        <strong>
          tendencias del mercado y el perfil del turista objetivo
        </strong>{' '}
        puede orientar mejor tu inversión.
      </p>

      <OwnersIcons image='https://res.cloudinary.com/vicflores11/image/upload/v1706281157/Dygav/ownersicon_tumwiv.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-8'>
        Especialistas en Gestión de Viviendas de Alquiler Vacacional
      </h2>

      <div className='text-justify lg:text-start text-sm md:text-lg pt-4 space-y-4 mb-12'>
        <p>
          ¿Tienes una casa de vacaciones o un apartamento en Formigal? Ahora
          puedes{' '}
          <strong>
            obtener un rendimiento económico cuando no la usas pero puedes
            seguir utilizándose cuando lo necesites
          </strong>
          .
        </p>

        <p>
          ¡Deja que tu casa de vacaciones trabaje para ti! Rentabiliza tu
          propiedad mientras no la utilizas y genera ingresos adicionales.
        </p>

        <p>
          Somos{' '}
          <strong>especialistas en la gestión de viviendas vacacionales</strong>
          , controlando todos los aspectos necesarios para{' '}
          <strong>
            maximizar tus ingresos y garantizar una experiencia inigualable
          </strong>{' '}
          para huéspedes y propietarios.
        </p>
      </div>

      <Llamanos />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-24'>
        ¿Cómo te ayudamos a rentabilizar tu casa de alquiler vacacional?
      </h2>

      <VacationRentalHome />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-24'>
        Descubre una forma más efectiva de gestionar tu vivienda turística
      </h2>

      <div className='text-justify lg:text-start text-sm md:text-lg pt-4 space-y-4 '>
        <p>
          Desde la obtención de la licencia turística en Formigal hasta la
          puesta en marcha del piso para poder alquilarlo mediante la
          publicación de su anuncio optimizada en plataformas de alquiler,
          pasando por la gestión de la llegada de huéspedes, la limpieza y el
          mantenimiento… nos encargamos de todo.
        </p>

        <p>
          ¡Descubre una forma más efectiva de gestionar tus apartamentos
          vacacionales con nosotros en Formigal!
        </p>
      </div>

      <HelpYouForm />
    </section>
  );
};
