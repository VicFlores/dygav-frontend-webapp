import { CityImages } from '../Licenses/CityImages';
import { OwnersIcons } from './OwnersIcons';
import { HelpYouForm, Llamanos } from '..';
import { VacationRentalHome } from './VacationRentalHome';
import Link from 'next/link';

const images = [
  {
    src: 'https://res.cloudinary.com/vicflores11/image/upload/v1705444962/Dygav/Tramacastilla%20de%20Tena/C_36_cx07kv.webp',
    alt: 'Gestión de vivendas turísticas en Tramacastilla de Tena',
  },
];

export const TramacastillaDeTenaMgmtInfo = () => {
  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h1 className='text-center text-2xl md:text-3xl pb-4 mb-6 font-semibold border-b-4 border-b-p600 w-auto md:px-10'>
        Gestión de Viviendas Turísticas en Tramacastilla de Tena
      </h1>

      <div className='text-justify lg:text-start text-sm md:text-lg pt-4 space-y-4 mb-12'>
        <p>
          Tramacastilla de Tena, un pueblo enclavado en el espectacular Valle de
          Tena y cerca de las estaciones de esquí de Formigal y Panticosa,
          emerge como un destino predilecto para la inversión en viviendas
          turísticas. Este lugar, que combina la serenidad de un pueblo de
          montaña con la proximidad a populares atracciones turísticas, es una
          joya para{' '}
          <strong>
            propietarios e inversores en busca de oportunidades en el sector del
            alquiler vacacional
          </strong>
          .
        </p>

        <p>
          El pueblo de Tramacastilla de Tena, con su ambiente acogedor y su
          entorno natural impresionante, atrae a una variedad de turistas, desde
          los aficionados al esquí y a los deportes de montaña hasta aquellos
          que buscan escapadas tranquilas en la naturaleza. La autenticidad y el
          encanto de Tramacastilla, junto con su ubicación estratégica, lo
          convierte en{' '}
          <strong>
            un lugar ideal para la inversión en propiedades vacacionales
          </strong>
          .
        </p>
      </div>

      <CityImages images={images} />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Análisis del Mercado Vacacional en Tramacastilla de Tena
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        El mercado de alquiler vacacional en Tramacastilla de Tena se
        caracteriza por su demanda constante durante todo el año, impulsada por
        su cercanía a las estaciones de esquí y la belleza del paisaje del Valle
        de Tena. Las propiedades aquí ofrecen{' '}
        <strong>
          un retorno de inversión atractivo y tasas de ocupación elevadas
        </strong>
        , especialmente si se gestionan de manera profesional y se promocionan
        efectivamente.
      </p>

      <OwnersIcons image='https://res.cloudinary.com/vicflores11/image/upload/v1706283993/Dygav/navigator_n1cspg.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Invertir en una Vivienda de Uso Turístico en Tramacastilla de Tena
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Al invertir en Tramacastilla de Tena, es clave seleccionar propiedades
        que no solo se encuentren en ubicaciones privilegiadas, sino que también
        ofrezcan las comodidades y servicios demandados por los viajeros
        modernos. La elección de la propiedad debe basarse en un{' '}
        <strong>
          análisis detallado que incluya el precio, potencial de alquiler y
          características deseables para diferentes perfiles de turistas
        </strong>
        .
      </p>

      <OwnersIcons image='https://res.cloudinary.com/vicflores11/image/upload/v1706281157/Dygav/ownersicon_tumwiv.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-8'>
        Gestión Integral de Viviendas Vacacionales
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4 mb-16'>
        En <strong className='text-p600'>DYGAV</strong>, somos especialistas en
        la{' '}
        <strong>
          gestión integral de viviendas vacacionales en Tramacastilla de Tena
        </strong>
        . Nos ocupamos de todos los aspectos necesarios,{' '}
        <span>
          <Link
            href={'/licencias-turisticas/tramacastilla-de-tena'}
            className='underline text-p600'
          >
            desde la obtención de la licencia turística para Tramacastilla
          </Link>
        </span>
        , hasta la promoción y gestión operativa de la propiedad. Nos aseguramos
        de que tu vivienda no solo genere ingresos adicionales sino que también
        ofrezca experiencias excepcionales para los huéspedes y para ti cuando
        decidas utilizarla.
      </p>

      <Llamanos />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-24'>
        ¿Cómo te ayudamos a rentabilizar tu casa de alquiler vacacional?
      </h2>

      <VacationRentalHome />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-10'>
        Maximiza el Rendimiento de tu Propiedad Turística en Tramacastilla de
        Tena
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        En <strong className='text-p600'>DYGAV</strong>, personalizamos nuestros
        servicios para satisfacer tus necesidades específicas, garantizando que
        <strong>
          cada aspecto de la gestión de tu vivienda turística en Tramacastilla
          de Tena reciba la atención necesaria
        </strong>
        . Desde el marketing hasta el mantenimiento cotidiano, nuestro equipo de
        profesionales se dedica a optimizar el rendimiento de tu inversión,
        ofreciéndote tranquilidad y seguridad.
      </p>

      <HelpYouForm />
    </section>
  );
};
