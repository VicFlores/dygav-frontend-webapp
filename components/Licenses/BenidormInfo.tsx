import Link from 'next/link';
import { AlquilerVacacional, HelpYouForm, LicenciasTuristicas } from '..';
import { CityImages } from './CityImages';

const images = [
  {
    src: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/Benidorm__Playa_de_Levante_xecgkf.png',
    alt: 'Benidorm: Playa de Levante',
  },
  {
    src: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/Licencias_Turisticas_Benidorm__Ayuntamiento_de_Benidorm_aiclgc.png',
    alt: 'Licencias Turísticas Benidorm: Ayuntamiento de Benidorm',
  },
];

export const BenidormInfo = () => {
  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h1 className='text-center text-2xl md:text-3xl pb-4 mb-6 font-semibold border-b-4 border-b-p600 w-auto'>
        Licencias turísticas en Benidorm
      </h1>

      <div className='text-justify text-sm md:text-lg pt-4 space-y-4 mb-14'>
        <p>
          Benidorm, conocida por su vibrante vida turística, ofrece una
          excelente oportunidad para los propietarios que buscan{' '}
          <strong>
            rentabilizar sus propiedades mediante el alquiler vacacional
          </strong>
          . Aunque el camino para{' '}
          <strong>conseguir la licencia turística</strong> puede parecer
          complejo, en realidad, con la guía adecuada, el proceso se simplifica
          enormemente.
        </p>
        <p>
          En <strong className='text-p600'>DYGAV</strong>, nos hemos posicionado
          como líderes en la{' '}
          <span>
            <Link
              href={'/gestion-integral-apartamentos-turisticos'}
              className='underline text-p600'
            >
              gestión de viviendas vacacionales
            </Link>
          </span>
          . En esta guía, te ofreceremos una perspectiva detallada sobre{' '}
          <strong>cómo obtener tu licencia turística en Benidorm</strong>,
          aclarando los interrogantes más frecuentes y garantizando que tu
          inmueble cumpla con todas las reglamentaciones vigentes. Nuestro
          objetivo es que tu propiedad esté{' '}
          <strong>operativa y generando ingresos lo antes posible</strong>.
        </p>
        <p>
          La normativa vigente, dictada por el Consell de la Comunitadad
          Valenciana, exige que las{' '}
          <strong>
            propiedades destinadas a alquiler vacacional cuenten con una
            licencia turística
          </strong>
          . No tenerla puede llevar a sanciones y responsabilidades.
          Adicionalmente, para publicitar la propiedad en plataformas digitales
          como <strong>Airbnb o Booking</strong>, es indispensable mostrar el
          número de registro y la categoría del inmueble.
        </p>

        <AlquilerVacacional />
      </div>

      <h2 className='text-center text-2xl px-5 md:px-14 md:text-3xl text-black700 pb-4 mt-16 font-semibold'>
        Guía para obtener una licencia turística en Benidorm
      </h2>

      <p className='md:self-start text-sm md:text-lg md:px-20'>
        Vamos a adentrarnos en los detalles para entender mejor el{' '}
        <strong>
          proceso de obtención de la licencia turística en Benidorm
        </strong>{' '}
        y aclarar tus posibles dudas.
      </p>

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto mt-16'>
        ¿Qué se entiende por alquiler turístico?
      </h2>

      <p className='md:self-start text-sm md:text-lg md:px-20 mt-4'>
        El alquiler turístico hace referencia a la práctica de arrendar
        temporalmente una vivienda a visitantes, proporcionando una alternativa
        a los alojamientos tradicionales como hoteles. Estas estancias suelen
        ser cortas, generalmente menores a dos meses. A diferencia de los
        apartamentos turísticos que ofrecen servicios adicionales, las{' '}
        <strong>
          viviendas de uso turístico son casas particulares alquiladas sin estos
          servicios extra
        </strong>
        .
      </p>

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto mt-16'>
        ¿Quién puede tramitar una licencia turística en Benidorm?
      </h2>

      <p className='md:self-start text-sm md:text-lg md:px-20 mt-4'>
        Tanto individuos como entidades pueden solicitarla. Lo crucial es que la
        vivienda se <strong>alquile con fines turísticos</strong>, con intención
        de obtener beneficios. Si alguien posee más de cinco propiedades de este
        tipo, debe registrarse como empresa gestora de viviendas de uso
        turístico.
      </p>

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-64 lg:md:px-20 mt-16'>
        ¿Cuál es el ente encargado de otorgar las licencias turísticas en
        Benidorm?
      </h2>

      <p className='md:self-start text-sm md:text-lg md:px-20 mt-4'>
        Mientras que cada comunidad autónoma en España tiene sus propias normas,
        es el municipio el que tiene la última palabra. En este caso,{' '}
        <strong>
          hay que cumplir con las directrices de la Comunidad Valenciana y
          específicamente del ayuntamiento de Benidorm
        </strong>
        .
      </p>

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-56 lg:md:px-20 mt-16'>
        ¿Cuáles son los criterios para una vivienda de alquiler turístico en
        Benidorm?
      </h2>

      <p className='md:self-start text-sm md:text-lg md:px-20 mt-4'>
        Para 2023, para{' '}
        <strong>obtener la licencia turística en Benidorm</strong> es vital:
      </p>

      <ul className='text-sm md:text-lg px-3 pt-4 list-disc pl-4 md:pl-32 space-y-4'>
        <li>
          <strong>Licencia de segunda ocupación:</strong> Esta certifica que el
          inmueble cumple con los requisitos necesarios de habitabilidad.
        </li>
        <li>
          <strong>Certificado de compatibilidad urbanística:</strong> Esto
          garantiza que el inmueble está alineado con las normas urbanas.
          Afortunadamente, en Benidorm, este trámite es bastante sencillo y solo
          requiere de una breve descripción de la vivienda con detalles como su
          ubicación y tamaño.
        </li>
        <li>
          <strong>Certificado energético:</strong> A pesar de no ser un
          requisito obligatorio, es una buena práctica tenerlo.
        </li>
        <li>
          <strong>Seguro de responsabilidad civil:</strong> Esencial para cubrir
          daños potenciales al inmueble o a terceros.
        </li>
        <li>
          <strong>Imágenes claras del exterior del inmueble.</strong>
        </li>
      </ul>

      <p className='md:self-start text-sm md:text-lg md:px-20 mt-4'>
        Adicionalmente, es fundamental revisar las reglas de la comunidad de
        propietarios y asegurarse de que permitan el alquiler vacacional. Si es
        así, se deben seguir los protocolos específicos establecidos por la
        Comunidad Autónoma y el municipio para registrarse en el listado de
        viviendas de uso turístico.
      </p>

      <LicenciasTuristicas />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-72 lg:md:px-20 mt-16'>
        ¿Qué impuestos debo pagar por una propiedad con fines turísticos?
      </h2>

      <p className='md:self-start text-sm md:text-lg md:px-20 mt-4'>
        Los ingresos derivados del alquiler turístico deben incluirse en la
        declaración anual de la renta como rendimientos del capital
        inmobiliario. No es necesario registrarse como autónomo, y tampoco hay
        que pagar IVA.
      </p>

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-60 lg:px-12 mt-16'>
        ¿Qué documentación es esencial al solicitar una licencia turística en
        Benidorm?
      </h2>

      <p className='md:self-start text-sm md:text-lg md:px-20 mt-4'>
        El paso inicial es{' '}
        <strong>obtener el certificado de compatibilidad urbanística</strong>,
        que se solicita en el Ayuntamiento de Benidorm. Los solicitantes deben
        presentar:
      </p>

      <ul className='md:self-start text-sm md:text-lg px-3 pt-4 list-disc pl-4 md:pl-36 space-y-4'>
        <li>
          <strong>Pago de la tasa.</strong>
        </li>
        <li>
          <strong>Fotografía de la fachada.</strong>
        </li>
        <li>
          <strong>
            Un breve informe que detalle la ubicación y las características del
            inmueble.
          </strong>
        </li>
        <li>
          <strong>Escritura del inmueble.</strong>
        </li>
        <li>
          <strong>Declaración de segunda ocupación.</strong>
        </li>
      </ul>

      <p className='md:self-start text-sm md:text-lg md:px-20 mt-4'>
        Luego, con estos documentos en mano, se puede proceder a{' '}
        <strong>
          solicitar la licencia turística ante Turismo de la Comunidad
          Valenciana
        </strong>
        .
      </p>

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto mt-16'>
        ¿Dónde y cuándo puedo pedir la licencia turística?
      </h2>

      <p className='md:self-start text-sm md:text-lg md:px-20 mt-4'>
        Es posible hacer la solicitud en cualquier momento del año, siempre
        antes de iniciar la actividad de alquiler. El{' '}
        <strong>
          certificado de compatibilidad urbanística se solicita en el
          Ayuntamiento de Benidorm
        </strong>
        , y luego, con este certificado y los demás documentos, se puede
        <strong>
          solicitar la licencia turística en Turismo de la Comunidad Valenciana
        </strong>
        .
      </p>

      <CityImages images={images} />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-72 lg:px-12 mt-16'>
        ¿Cuánto tiempo se tarda en conseguir la licencia turística en Benidorm?
      </h2>

      <p className='md:self-start text-sm md:text-lg md:px-20 mt-4'>
        Generalmente, el certificado de compatibilidad urbanística toma
        alrededor de 3 meses, y luego, el trámite con Turismo de la Comunidad
        Valenciana demora entre 1 y 2 meses. En total,{' '}
        <strong>se estima un período de 4 a 5 meses</strong>. complejo,{' '}
        <strong>
          es altamente recomendable contar con el apoyo de expertos
        </strong>{' '}
        en el ámbito, como <strong className='text-p600'>DYGAV</strong>, que
        tiene vasta experiencia en{' '}
        <span>
          <Link href={'/licencias-turisticas'} className='underline text-p600'>
            gestionar licencias turísticas
          </Link>
        </span>{' '}
        en Benidorm y otras áreas turísticas de Alicante y Valencia.
      </p>

      <HelpYouForm />
    </section>
  );
};
