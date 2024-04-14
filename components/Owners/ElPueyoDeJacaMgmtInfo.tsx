import { CityImages } from '../Licenses/CityImages';
import { OwnersIcons } from './OwnersIcons';
import { HelpYouForm, Llamanos } from '..';
import { VacationRentalHome } from './VacationRentalHome';
import Link from 'next/link';

const images = [
  {
    src: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/C_12_y69nh5.png',
    alt: 'Gestión de vivendas turísticas en El Pueyo de Jaca',
  },
];

export const ElPueyoDeJacaMgmtInfo = () => {
  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h1 className='text-center text-2xl md:text-3xl pb-4 mb-6 font-semibold border-b-4 border-b-p600 w-auto md:px-10'>
        Gestión de Viviendas Turísticas en El Pueyo de Jaca
      </h1>

      <div className='text-justify lg:text-start text-sm md:text-lg pt-4 space-y-4 mb-12'>
        <p>
          El Pueyo de Jaca es un pintoresco pueblo en el Valle de Tena, que se
          destaca por su encantador entorno natural y su atractivo turístico.
          Una de las principales atracciones de El Pueyo de Jaca es la Iglesia
          de San Miguel, un importante monumento que refleja el patrimonio
          histórico y cultural del pueblo. Esta iglesia es uno de los puntos de
          interés que atrae a visitantes, tanto por su arquitectura como por su
          significado histórico.
        </p>

        <p>
          El pueblo también es conocido por el Puente del Concellar, un
          histórico puente sobre el río Caldarés. Construido originalmente en
          1550 y reconstruido varias veces, este puente es un punto de
          referencia significativo en la zona, formando parte del camino real.
        </p>

        <p>
          La ubicación estratégica de El Pueyo de Jaca en el Valle de Tena lo
          hace un{' '}
          <strong>
            destino ideal para aquellos interesados en el turismo de naturaleza
            y aventura
          </strong>
          . La proximidad a las estaciones de esquí de Formigal y Panticosa hace
          que sea una opción atractiva para el turismo de invierno,
          especialmente para los entusiastas del esquí. Asimismo, su cercanía al
          Parque Nacional de Ordesa y Monte Perdido ofrece oportunidades para el
          senderismo y la exploración de la impresionante naturaleza del Pirineo
          Aragonés.
        </p>

        <p>
          Para los inversores y propietarios de viviendas turísticas, El Pueyo
          de Jaca ofrece una combinación única de tranquilidad, belleza natural
          y acceso a actividades de aventura y culturales. Esto lo convierte en
          un{' '}
          <strong>
            lugar atractivo para la inversión en el mercado de alquiler
            vacacional
          </strong>
          , con potencial para atraer a turistas que buscan una experiencia
          auténtica en los Pirineos.
        </p>
      </div>

      <CityImages images={images} />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Análisis de Mercado Vacacional en El Pueyo de Jaca
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        El mercado vacacional en El Pueyo de Jaca es dinámico y se beneficia
        tanto de la temporada de esquí como de la creciente popularidad de
        actividades de verano como el senderismo.{' '}
        <strong>La demanda de alojamiento vacacional es consistente</strong>,
        brindando a los propietarios de viviendas la oportunidad de obtener una
        <strong>
          alta tasa de ocupación y un retorno de inversión atractivo
        </strong>
        , especialmente si las propiedades están bien gestionadas y
        estratégicamente ubicadas.
      </p>

      <OwnersIcons image='https://multimedia.dygav.es/wp-content/uploads/2024/04/navigator_n1cspg.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Inversión en Viviendas Turísticas en El Pueyo de Jaca
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Invertir en El Pueyo de Jaca significa seleccionar propiedades que
        ofrezcan fácil acceso a las atracciones turísticas del Valle de Tena. La
        elección de la propiedad debe basarse en su capacidad para atraer a
        diferentes tipos de turistas, desde familias que buscan actividades de
        montaña hasta grupos interesados en deportes de invierno.
      </p>

      <OwnersIcons image='https://multimedia.dygav.es/wp-content/uploads/2024/04/ownersicon_tumwiv.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-8'>
        Gestión Integral de Viviendas Vacacionales en El Pueyo de Jaca
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4 mb-16'>
        En <strong className='text-p600'>DYGAV</strong>, ofrecemos una{' '}
        <strong>
          gestión integral de tu vivienda vacacional en El Pueyo de Jaca
        </strong>
        . Nos encargamos de todos los aspectos, desde la{' '}
        <span>
          <Link
            href={'/licencias-turisticas/el-pueyo-de-jaca'}
            className='underline text-p600'
          >
            obtención de la licencia turística en El Pueyo de Jaca
          </Link>
        </span>{' '}
        hasta la promoción en plataformas de alquiler vacacional, pasando por la
        gestión de las reservas y la limpieza, asegurando que tu propiedad
        alcance su máximo potencial. Nuestro servicio personalizado garantiza
        que tanto los propietarios como los huéspedes disfruten de una
        experiencia excepcional.
      </p>

      <Llamanos />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-24'>
        ¿Cómo te ayudamos a rentabilizar tu casa de alquiler vacacional?
      </h2>

      <VacationRentalHome />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-10'>
        Maximiza el Rendimiento de tu Propiedad Turística en El Pueyo de Jaca
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        En <strong className='text-p600'>DYGAV</strong>, adaptamos nuestros
        servicios a las necesidades específicas de cada propiedad en El Pueyo de
        Jaca. Desde estrategias de marketing digital hasta el mantenimiento
        diario, nuestro equipo de profesionales se dedica a optimizar el
        rendimiento de tu inversión, asegurando que tu propiedad no solo genere
        ingresos, sino que también se mantenga en perfectas condiciones para tu
        disfrute personal.
      </p>

      <HelpYouForm />
    </section>
  );
};
