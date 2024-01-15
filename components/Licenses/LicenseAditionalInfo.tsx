import Link from 'next/link';
import { AlquilerVacacional } from '..';
import { CityCards } from './CityCards';

interface ImageProps {
  cityName: string;
  bgCity: string;
  slug: string;
}

export const LicenseAditionalInfo = () => {
  const generalImages: ImageProps[] = [
    {
      slug: 'torrevieja',
      cityName: 'Torrevieja',
      bgCity: 'bg-torrevieja',
    },
    {
      slug: 'alicante',
      cityName: 'Alicante',
      bgCity: 'bg-alicante',
    },
    {
      slug: 'benidorm',
      cityName: 'Benidorm',
      bgCity: 'bg-benidorm',
    },
    {
      slug: 'orihuela',
      cityName: 'Orihuela',
      bgCity: 'bg-orihuelaCosta',
    },
    {
      slug: 'orihuela-costa',
      cityName: 'Orihuela Costa',
      bgCity: 'bg-orihuela',
    },
    {
      slug: 'guardamar-del-segura',
      cityName: 'Guardamar del Segura',
      bgCity: 'bg-guardamarSegura',
    },
    {
      slug: 'santa-pola',
      cityName: 'Santa Pola',
      bgCity: 'bg-santaPola',
    },
    {
      slug: 'villajoyosa',
      cityName: 'Villajoyosa',
      bgCity: 'bg-villajoyosa',
    },
    {
      slug: 'finestrat',
      cityName: 'Finestrat',
      bgCity: 'bg-finestrat',
    },
    {
      slug: 'el-campello',
      cityName: 'El Campello',
      bgCity: 'bg-elCampello',
    },
    {
      slug: 'calpe',
      cityName: 'Calpe',
      bgCity: 'bg-calpe',
    },
    {
      slug: 'pilar-de-la-horadada',
      cityName: 'Pilar de la Horadada',
      bgCity: 'bg-pilarHoradada',
    },
    {
      slug: 'altea',
      cityName: 'Altea',
      bgCity: 'bg-altea',
    },
  ];

  const pirineosAragonImages: ImageProps[] = [
    {
      slug: 'formigal',
      cityName: 'Formigal',
      bgCity: 'bg-formigal',
    },
    {
      slug: 'sallent-de-gallego',
      cityName: 'Sallent de Gállego',
      bgCity: 'bg-sallentDeGallego',
    },
    {
      slug: 'lanuza',
      cityName: 'Lanuza',
      bgCity: 'bg-lanuza',
    },
    {
      slug: 'tramacastilla-de-tena',
      cityName: 'Tramacastilla de Tena',
      bgCity: 'bg-tramacastilla',
    },
  ];

  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h1 className='text-center text-2xl md:text-3xl pb-4 mb-6 font-semibold border-b-4 border-b-p600 w-auto md:px-10'>
        ¿Qué son las licencias turísticas?
      </h1>

      <div className='text-justify text-sm md:text-lg pt-4 space-y-4'>
        <p>
          Una{' '}
          <strong>licencia turística es un documento legal que permite</strong>{' '}
          a los propietarios de viviendas para alquiler turístico{' '}
          <strong>operar de manera legal y regulada</strong>
        </p>
        <p>
          Se consideran <strong>viviendas turísticas</strong> los inmuebles,
          cualquiera que sea su tipología, cuyo uso se ceda mediante precio, con
          habitualidad, en condiciones de inmediata disponibilidad, y con fines
          turísticos, vacacionales o de ocio.
        </p>
        <p>
          La obtención de una licencia turística{' '}
          <strong>
            es obligatoria en la mayoría de ciudades para poder poner una
            vivienda en alquiler vacacional
          </strong>
          , y su incumplimiento puede acarrear multas y sanciones para el
          propietario.
        </p>
        <p>
          Además, es necesario disponer de la licencia turística cuando se
          utilicen para la promoción de la vivienda y su publicidad canales de
          comercialización turística (AiRBnB entre otros). 
        </p>
        <p>
          La publicidad, que se efectúe de las viviendas turísticas inscritas,
          deberá incluir, obligatoriamente, los números de registro de las
          citadas viviendas y sus categorías. Es decir,{' '}
          <strong>
            sin la licencia turística no podrá anunciar el alquiler de la
            vivienda en plataformas como
          </strong>{' '}
          AiRBnB, Booking, etc. por no disponer del código de licencia, que ha
          de incluir este anuncio.
        </p>
      </div>

      <AlquilerVacacional />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-72 lg:px-10 mt-16'>
        Licencias turísticas en las principales comunidades autónomas
      </h2>

      <div className='text-justify text-sm md:text-lg pt-4 space-y-4 mb-14'>
        <p>
          Cada comunidad autónoma tiene competencias propias para establecer los
          requisitos que debe cumplir una vivienda para obtener una licencia
          turística para alquiler vacacional.
        </p>
        <p>
          Además, los tipos de licencias, tasas, zonas permitidas, etc,  pueden
          variar de una localidad a otra en una misma comunidad.
        </p>
        <p>
          Vamos a analizar cómo obtener una licencia turística en distintas
          autonomías donde prestamos servicio de gestión de licencias
        </p>
      </div>

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-60 lg:px-4 mt-16'>
        Licencias turísticas en la Comunidad Valenciana
      </h2>

      <div className='text-justify text-sm md:text-lg pt-4 space-y-4'>
        <p>
          Hace unos años, disponer de una licencia turística y promocionar una
          vivienda en Airbnb, era una gestión muy sencilla.Sin embargo, desde el
          año 2018, la normativa se ha endurecido, se han incluido muchas
          restricciones y{' '}
          <strong>ahora es más complicado obtener una licencia</strong>.
        </p>
        <p>
          Las viviendas deben cumplir con una serie de requisitos, como tener
          una superficie mínima, contar con un número mínimo de habitaciones o
          plazas de alojamiento, cumplir con las normas de seguridad y
          accesibilidad, contar con un seguro de responsabilidad civil, y
          cumplir con las normas de calidad.
        </p>
        <p>
          Especialmente, las grandes ciudades son muy restrictivas. Por ejemplo,
          en Alicante casi todas{' '}
          <strong>
            las licencias para alquiler turístico son de locales, bajos,
            entreplantas y primeros
          </strong>
          . En raras ocasiones, se admiten pisos en altura.
        </p>
        <p>
          En conclusión, si quieres conseguir tu licencia de alquiler vacacional
          o vas a comprar una vivienda para alquilarla de manera vacacional en
          la Comunitat Valencia ten especial cuidado y{' '}
          <strong>
            no compres sin informarte adecuadamente o consultar a un profesional
          </strong>
          .
        </p>

        <p>
          <Link
            className='underline text-p600'
            target='_blank'
            href={'https://dogv.gva.es/datos/2021/02/08/pdf/2021_999.pdf'}
          >
            Ver normativa
          </Link>
        </p>
      </div>

      <div
        className='w-full h-auto grid md:grid-cols-2 lg:grid-cols-3 mt-10 md:mt-10 px-6 md:px-2 lg:px-0 gap-x-4 mb-14'
        id='recomendadas'
      >
        <div className='md:self-center md:justify-self-center divide-y-4 divide-p600 text-center md:text-start'>
          <h2 className='text-2xl lg:text-[31px] md:text-[26px]'>
            GUÍAS ACTUALIZADAS <br /> POR MUNICIPIOS
          </h2>

          <h3 className='text-center md:text-start text-2xl  md:text-3xl font-semibold pt-3'>
            ¿Cómo obtener una licencia turística en mi ciudad?
          </h3>
        </div>

        <CityCards images={generalImages} />
      </div>

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-60 lg:px-4 mt-16'>
        Licencias Turísticas en el Pirineo Aragonés
      </h2>

      <div className='text-justify text-sm md:text-lg pt-4 space-y-4'>
        <p>
          <strong>Obtener una licencia turística en el Pirineo Aragonés</strong>
          , especialmente en el Valle de Tena y Jaca,{' '}
          <strong>
            representa una gran oportunidad para propietarios e inversores
          </strong>{' '}
          en una de las regiones más bellas y turísticas de España. Para
          asegurar el éxito en este mercado, es crucial que las viviendas
          cumplan con ciertos requisitos, incluyendo una superficie y número
          mínimo de habitaciones, así como estándares de seguridad,
          accesibilidad y calidad.
        </p>

        <p>
          <Link
            className='underline text-p600'
            target='_blank'
            href={
              'https://www.boa.aragon.es/cgi-bin/EBOA/BRSCGI?CMD=VEROBJ&MLKOB=1257201622626'
            }
          >
            Ver normativa
          </Link>
        </p>

        <p>
          Para ayudarte en este proceso, hemos desarrollado una serie de{' '}
          <strong>
            guías detalladas y específicas para cada localidad del Pirineo
            Aragonés
          </strong>
          . Estas guías te proporcionarán toda la información necesaria sobre
          cómo cumplir con los requisitos y maximizar el potencial de tu
          propiedad turísticas, pero si lo prefieres en{' '}
          <strong className='text-p600'>DYGAV</strong>{' '}
          <strong>
            somos expertos en tramitación de licencias turísticas y en la
          </strong>{' '}
          <span>
            <Link
              href={'/gestion-viviendas-turisticas'}
              className='underline text-p600'
            >
              gestión de viviendas de uso turístico
            </Link>
          </span>
          . ¡Contáctanos y estaremos encantados de ayudarte!
        </p>
      </div>

      <div
        className='w-full h-auto grid md:grid-cols-2 lg:grid-cols-3 mt-10 md:mt-10 px-6 md:px-2 lg:px-0 gap-x-4 mb-14'
        id='recomendadas'
      >
        <div className='md:self-center md:justify-self-center divide-y-4 divide-p600 text-center md:text-start'>
          <h2 className='text-2xl lg:text-[31px] md:text-[26px]'>
            GUÍAS ACTUALIZADAS <br /> POR MUNICIPIOS
          </h2>

          <h3 className='text-center md:text-start text-2xl  md:text-3xl font-semibold pt-3'>
            ¿Cómo obtener una licencia turística en el Pirineo Aragonés?
          </h3>
        </div>

        <CityCards images={pirineosAragonImages} />
      </div>
    </section>
  );
};
