import Image from 'next/legacy/image';
import Link from 'next/link';

export const LicenseAditionalInfo = () => {
  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32'>
      <h2
        id='alquiler-turistico'
        className='text-center text-2xl px-5 md:px-14 md:text-3xl text-black700 pb-4 mt-16 font-semibold'
      >
        ¿Qué son las licencias turísticas?
      </h2>

      <div className='text-justify text-sm md:text-lg border-t-4 border-t-p600 pt-4 space-y-4'>
        <p>
          Una licencia turística es un documento legal que permite a los
          propietarios de viviendas para alquiler turístico de manera legal y
          regulada.
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

      <div className='flex flex-col md:flex-row justify-center items-center mt-16 space-x-8 space-y-10 md:space-y-0'>
        <figure className='h-40 w-40 md:h-44 md:w-44 lg:h-60 lg:w-60 relative m-0'>
          <Image
            src={
              'https://res.cloudinary.com/vicflores11/image/upload/v1697736235/Dygav/undraw_certification_re_ifll_a0xzch.svg'
            }
            alt={'Map Logo'}
            layout='fill'
            className='rounded-full'
          />
        </figure>

        <div className='space-y-4 md:space-y-2 text-center md:text-start'>
          <h3 className='text-p600 uppercase text-sm md:text-lg font-semibold'>
            Ahorra tiempo
          </h3>
          <h3 className='text-sm md:text-lg font-semibold'>
            Gestionamos la licencia turistica <br /> para tu alquiler vacacional
          </h3>
          <button className='py-2 px-3 text-white bg-p600 uppercase'>
            <Link href={'#formulario'}>¿Te ayudamos?</Link>
          </button>
        </div>
      </div>

      <h2
        id='alquiler-turistico'
        className='text-center text-2xl px-5 md:px-14 md:text-3xl text-black700 pb-4 mt-16 font-semibold'
      >
        Licencias turísticas en las principales comunidades autónomas
      </h2>

      <div className='text-justify text-sm md:text-lg border-t-4 border-t-p600 pt-4 space-y-4 mb-14'>
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

      <h2 className='text-center text-2xl px-5 md:px-14 md:text-3xl text-black700 pb-4 mt-16 font-semibold'>
        Licencias turísticas en la Comunitat Valenciana
      </h2>

      <div className='text-justify text-sm md:text-lg border-t-4 border-t-p600 pt-4 space-y-4'>
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
        className='w-full h-auto grid md:grid-cols-2 mt-10 md:mt-10 px-6 md:px-2 lg:px-0 gap-x-4'
        id='recomendadas'
      >
        <div className='md:self-center md:justify-self-center divide-y-4 divide-p600'>
          <h2 className='text-center text-2xl  md:text-3xl font-semibold'>
            ¿Cómo obtener una licencia turística en mi ciudad?
          </h2>

          <h3 className='text-center text-[18px] lg:text-[31px] md:text-[26px] pt-3'>
            GUÍAS ACTUALIZADAS POR MUNICIPIOS
          </h3>
        </div>

        <div className='w-auto h-auto items-center mt-6 p-6 overflow-x-auto overscroll-x-contain flex space-x-6 overflow-y-hidden'>
          <Link href={'/licencias-turisticas-torrevieja'}>
            <div className=' w-80 h-96 shadow-md rounded-lg overflow-hidden flex-none transform transition-all hover:-translate-y-4 hover:shadow-xl'>
              <div
                className={`w-full h-full bg-cover flex items-end bg-torrevieja`}
              >
                <h4 className='text-white pl-4 pb-4 text-sm md:text-lg'>
                  Licencia turística en <br /> Torrevieja
                </h4>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
