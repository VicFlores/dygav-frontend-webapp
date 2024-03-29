import { CityImages } from '../Licenses/CityImages';
import { OwnersIcons } from './OwnersIcons';
import { HelpYouForm, Llamanos } from '..';
import { VacationRentalHome } from './VacationRentalHome';
import Link from 'next/link';

const images = [
  {
    src: 'https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649452/Dygav%20Images/SallentdeGallego/c_sallentdegallego_fnllhz_msbjqd.webp',
    alt: 'Gestión de vivendas turísticas en Sallent de Gallego',
  },
];

export const SallentDeGallegoMgmtInfo = () => {
  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h1 className='text-center text-2xl md:text-3xl pb-4 mb-6 font-semibold border-b-4 border-b-p600 w-auto md:px-10'>
        Gestión de viviendas turísticas en Sallent de Gallego
      </h1>

      <div className='text-justify lg:text-start text-sm md:text-lg pt-4 space-y-4 '>
        <p>
          Sallent de Gállego, un precioso pueblo situado a los pies de las
          montañas del espléndido Valle de Tena y cercana a las estaciones de
          esquí de Formigal y Panticosa, se presenta como un{' '}
          <strong>
            destino privilegiado para propietarios e inversores que buscan
            adentrarse en el creciente mercado del alquiler vacacional
          </strong>
          . La perfecta combinación de su patrimonio cultural y la belleza
          natural de sus alrededores, desde su centro gótico hasta su
          emblemático puente medieval, hace de Sallent de Gállego un lugar de
          encanto sin igual. En invierno la gente disfruta de la nieve y la
          gastronomía de la región y en verano el pueblo se anima con
          festividades como la de la Virgen de las Nieves y el Festival de
          Música del Pirineo Sur.
        </p>

        <p>
          La creciente popularidad de Sallent de Gállego, potenciada por la
          mejorada accesibilidad gracias a los túneles de Monrepós y su
          proximidad a Francia,{' '}
          <strong>atrae a un número creciente de turistas</strong>
          franceses y españoles, elevando la demanda de alojamientos
          vacacionales. Este flujo constante de visitantes durante todas las
          estaciones del año, tanto en la temporada de esquí como en los meses
          de verano,{' '}
          <strong>
            asegura una alta ocupación y rendimiento para las propiedades de
            alquiler vacacional
          </strong>
          .
        </p>
      </div>

      <CityImages images={images} />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Análisis de Mercado Vacacional en Sallent de Gállego
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        <strong>
          El mercado vacacional en Sallent de Gállego es robusto y dinámico
        </strong>
        , caracterizado por <strong>una alta demanda</strong> que se extiende
        más allá de la temporada de esquí, gracias a la riqueza de actividades
        como el senderismo y el ciclismo en los meses más cálidos. Este destino
        atrae tanto a turistas nacionales como internacionales, ofreciendo
        oportunidades para estancias cortas y prolongadas. Las propiedades aquí,
        especialmente aquellas bien gestionadas y comercializadas, presentan
        <strong>tasas de ocupación elevadas</strong> y retornos de inversión
        atractivos.
      </p>

      <OwnersIcons image='https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649293/Dygav%20Images/Icons/navigator_n1cspg_gssjxj.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Invertir en una Vivienda de Uso Turístico en Sallent de Gállego
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Invertir en Sallent de Gállego implica seleccionar propiedades en
        ubicaciones estratégicas, ofreciendo no solo proximidad a las estaciones
        de esquí y atractivos naturales, sino también comodidades y servicios
        que satisfagan las necesidades de un turista moderno. La elección debe
        considerar{' '}
        <strong>
          precio, potencial de alquiler, accesibilidad y ubicación
        </strong>
        , balanceando entre propiedades lujosas y aquellas más económicas para
        cubrir un amplio espectro de preferencias turísticas. Anticipar las
        <strong>
          {' '}
          tendencias del mercado y comprender el perfil del turista objetivo
        </strong>{' '}
        son claves para una inversión exitosa.
      </p>

      <OwnersIcons image='https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649278/Dygav%20Images/Icons/ownersicon_tumwiv_ckdpnt.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-8'>
        Especialistas en Gestión de Viviendas de Alquiler Vacacional
      </h2>

      <div className='text-justify lg:text-start text-sm md:text-lg pt-4 space-y-4 mb-12'>
        <p>
          Si tienes una propiedad en Sallent de Gállego, ahora puedes
          beneficiarte económicamente de ella sin perder la posibilidad de
          disfrutarla. En <strong className='text-p600'>DYGAV</strong>, somos{' '}
          <strong>expertos en gestionar viviendas vacacionales</strong>,
          abarcando todos los aspectos necesarios para maximizar tus ingresos y
          garantizar una experiencia excepcional para huéspedes y propietarios.
        </p>
      </div>

      <Llamanos />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-24'>
        ¿Cómo te ayudamos a rentabilizar tu casa de alquiler vacacional?
      </h2>

      <VacationRentalHome />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-10'>
        Descubre una forma más efectiva de gestionar tu vivienda turística
      </h2>

      <div className='text-justify lg:text-start text-sm md:text-lg pt-4 space-y-4 '>
        <p>
          Nos ocupamos de todo, desde los trámites para la{' '}
          <span>
            <Link
              href={'/licencias-turisticas/sallent-de-gallego'}
              className='underline text-p600'
            >
              obtención de la licencia turística
            </Link>
          </span>{' '}
          hasta la gestión integral de tu propiedad, incluyendo la promoción en
          plataformas de alquiler, la atención a los huéspedes, el mantenimiento
          y limpieza de la vivienda. Descubre con nosotros la manera más
          eficiente y rentable de gestionar tus propiedades en Sallent de
          Gállego.
        </p>
      </div>

      <HelpYouForm />
    </section>
  );
};
