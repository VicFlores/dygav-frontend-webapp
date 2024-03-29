import { CityImages } from '../Licenses/CityImages';
import { OwnersIcons } from './OwnersIcons';
import { HelpYouForm, Llamanos } from '..';
import { VacationRentalHome } from './VacationRentalHome';
import Link from 'next/link';

const images = [
  {
    src: 'https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649563/Dygav%20Images/Panticosa/C_23_oi71uu_x8u9pq.jpg',
    alt: 'Gestión de vivendas turísticas en Panticosa',
  },
];

export const PanticosaMgmtInfo = () => {
  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h1 className='text-center text-2xl md:text-3xl pb-4 mb-6 font-semibold border-b-4 border-b-p600 w-auto md:px-10'>
        Gestión de Viviendas Turísticas en Panticosa
      </h1>

      <div className='text-justify lg:text-start text-sm md:text-lg pt-4 space-y-4 mb-12'>
        <p>
          Panticosa, un precioso pueblo enclavado en el corazón del Valle de
          Tena y con su propia estación de esquí, ofrece una propuesta única
          para la gestión de viviendas turísticas. Este destino, conocido por su
          balneario histórico y sus impresionantes paisajes de montaña, es
          <strong>
            perfecto para propietarios e inversores que buscan aprovechar el
            auge del turismo
          </strong>{' '}
          en el Pirineo Aragonés.
        </p>

        <p>
          Panticosa no sólo seduce con su famoso balneario y las oportunidades
          de esquí, sino también con su riqueza en rutas de senderismo y la
          belleza de lagos como el de Baños y Sabocos. Su mezcla de atracciones
          naturales y patrimonio cultural la convierten en un lugar de interés
          durante todo el año, aumentando su atractivo como destino vacacional.
        </p>
      </div>

      <CityImages images={images} />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Análisis del Mercado Vacacional en Panticosa
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        El mercado de alquiler vacacional en Panticosa se caracteriza por su
        versatilidad, atrayendo tanto a turistas que buscan relax en el
        balneario como a entusiastas de deportes de montaña. La demanda de
        alojamiento es consistente a lo largo del año, proporcionando
        <strong>
          oportunidades estables para los propietarios de viviendas turísticas
        </strong>
        .
      </p>

      <OwnersIcons image='https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649293/Dygav%20Images/Icons/navigator_n1cspg_gssjxj.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-16'>
        Invertir en una Vivienda de Uso Turístico en Panticosa
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Invertir en Panticosa significa elegir propiedades que ofrezcan acceso
        fácil a sus principales atractivos: el balneario, las pistas de esquí y
        las rutas de senderismo. La inversión debe centrarse en propiedades que
        combinen{' '}
        <strong>
          ubicación estratégica, comodidades modernas y un encanto
        </strong>{' '}
        acorde con el ambiente del pueblo para atraer una amplia gama de
        turistas.
      </p>

      <OwnersIcons image='https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649278/Dygav%20Images/Icons/ownersicon_tumwiv_ckdpnt.svg' />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-8'>
        Especialistas en Gestión de Viviendas de Alquiler Vacacional en
        Panticosa
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4 mb-16'>
        En <strong className='text-p600'>DYGAV</strong>, ofrecemos una gestión
        completa y profesional de viviendas vacacionales en Panticosa. Nos
        ocupamos de todo, desde la{' '}
        <span>
          <Link
            href={'/licencias-turisticas/panticosa'}
            className='underline text-p600'
          >
            obtención de la licencia turística en Panticosa
          </Link>
        </span>
        , hasta la promoción y gestión operativa de la propiedad.
      </p>

      <Llamanos />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-24'>
        ¿Cómo te ayudamos a rentabilizar tu casa de alquiler vacacional?
      </h2>

      <VacationRentalHome />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 mt-10'>
        Maximiza el Rendimiento de tu Propiedad Turística en Panticosa
      </h2>

      <p className='text-justify lg:text-start text-sm md:text-lg mt-4'>
        Con <strong className='text-p600'>DYGAV</strong>, tu propiedad en
        Panticosa estará cuidada por expertos. Nos enfocamos en{' '}
        <strong>maximizar su potencial de rentabilidad</strong>, mientras nos
        aseguramos de que cada huésped tenga una experiencia memorable. Con
        nuestro enfoque personalizado, tu vivienda no solo generará ingresos
        adicionales sino que también se mantendrá en perfecto estado para cuando
        desees disfrutarla.
      </p>

      <HelpYouForm />
    </section>
  );
};
