import Image from 'next/legacy/image';
import Link from 'next/link';
import { HelpYouForm } from '../HelpYouForm/HelpYouForm';
import { AlquilerVacacional, LicenciasTuristicas } from '..';
import { CityImages } from './CityImages';
import { CityCardsFooter } from './CityCardsFooter';

const images = [
  {
    src: 'https://res.cloudinary.com/vicflores11/image/upload/v1699399186/Dygav/torrevieja/Torrevieja_Plaza_de_la_Constituci%C3%B3n_y0ewgo.png',
    alt: 'Plaza de la Constitución Torrevieja ',
  },
  {
    src: 'https://res.cloudinary.com/vicflores11/image/upload/v1699399171/Dygav/torrevieja/No_usada_todavia_usar_1_lxm0gv.png',
    alt: 'Ayuntamiento de Torrevieja',
  },
];

const imagesLicenses = [
  {
    href: '/licencias-turisticas-torrevieja',
    cityName: 'Torrevieja',
    bgCity: 'bg-torrevieja',
  },
  {
    href: '/licencias-turisticas-alicante',
    cityName: 'Alicante',
    bgCity: 'bg-alicante',
  },
  {
    href: '/licencias-turisticas-benidorm',
    cityName: 'Benidorm',
    bgCity: 'bg-benidorm',
  },
  {
    href: '/licencias-turisticas-orihuela-orihuela-costa',
    cityName: 'Orihuela',
    bgCity: 'bg-orihuelaCosta',
  },
  {
    href: '/licencias-turisticas-orihuela-orihuela-costa',
    cityName: 'Orihuela Costa',
    bgCity: 'bg-orihuela',
  },
];

export const TorreviejaInfo = () => {
  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h1 className='text-center text-2xl md:text-3xl pb-4 mb-6 font-semibold border-b-4 border-b-p600 w-auto md:px-10'>
        Licencias turísticas en Torrevieja
      </h1>

      <div className='text-justify text-sm md:text-lg pt-4 space-y-4 mb-14'>
        <p>
          En Torrevieja, el alquiler vacacional se ha consolidado como una
          opción rentable para muchos propietarios. Sin embargo, el proceso para
          obtener una licencia turística puede ser un terreno desconocido para
          muchos.
        </p>
        <p>
          En Dygav somos <strong>especialistas en la</strong>{' '}
          <span>
            <Link
              className='underline text-p600'
              href={'/gestion-integral-apartamentos-turisticos'}
            >
              gestión de viviendas vacacionales
            </Link>
          </span>{' '}
          y ayudamos a propietarios a poner en el mercado sus propiedades como
          alquileres turísticos. En esta guía te mostraremos todo lo necesario
          para que sepas cómo tramitar tu licencia turística además de resolver
          las dudas e inquietudes más comunes sobre cómo{' '}
          <strong>conseguir una licencia Turística en Torrevieja</strong>. Con
          toda esta información podrás asegurarte de que tu propiedad cumpla con
          todas las normativas locales y puedas sacarle el máximo rendimiento
          económico cuanto antes.
        </p>
        <p>
          Conforme las normas de los Decretos 92/2009, de 3 de julio, y 75/2015,
          de 15 de mayo, del Consell de la Comunitat Valenciana, las viviendas
          destinadas a alquiler turístico deben disponer de licencia turística,
          ya que la ausencia de la misma supone una infracción en la materia del
          turismo e implica la responsabilidad correspondiente.
        </p>
        <p>
          Además, es{' '}
          <strong>necesario disponer de la licencia turística</strong> para
          promocionar la vivienda en las diferentes plataformas digitales (
          Airbnb, Booking,..) la publicidad debe incluir el número de registro y
          la categoría de la vivienda.
        </p>
      </div>

      <AlquilerVacacional />

      <h2 className='text-center text-2xl px-5 md:px-14 md:text-3xl text-black700 pb-4 mt-16 font-semibold'>
        Guía para obtener una licencia turística en Torrevieja
      </h2>

      <p className='text-center text-sm md:text-lg px-20'>
        En esta guía queremos explicarte los pasos necesarios para la{' '}
        <strong>obtención de la licencia turística en Torrevieja</strong> además
        de resolver las dudas más habituales.
      </p>

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto md:px-10 mt-16'>
        ¿Qué es el alquiler turístico?
      </h2>

      <p className='text-justify text-sm md:text-lg px-3 pt-4'>
        El alquiler turístico es una modalidad de alojamiento que permite a los
        turistas disfrutar de una estancia temporal en una vivienda en lugar de
        un hotel. Por lo general, este tipo de alquiler dura menos de dos meses
        y abarca la vivienda en su totalidad. Mientras que un apartamento
        turístico está destinado exclusivamente para fines de alojamiento y
        cuenta con servicios comunes, una vivienda de uso turístico es un hogar
        particular alquilado temporalmente sin esos servicios adicionales.
      </p>

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-10 md:px-4 mt-16'>
        ¿Quién puede solicitar una licencia turística en Torrevieja?
      </h2>

      <p className='text-justify text-sm md:text-lg px-3 pt-4'>
        Tanto personas físicas como jurídicas pueden solicitar licencias
        turísticas, independientemente de si son propietarios de la vivienda. Lo
        esencial es que la vivienda se ceda con fines turísticos y con carácter
        lucrativo y habitual. Las personas titulares de cinco o más viviendas de
        uso turístico, deberán inscribirse en el Registro como empresa gestora
        de viviendas de uso turístico
      </p>

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-48 md:px-10 mt-16'>
        ¿Quién regula las concesiones de licencias turísticas para alquileres
        vacacionales en Torrevieja?
      </h2>

      <p className='text-justify text-sm md:text-lg px-3 pt-4'>
        En España, cada comunidad autónoma dicta sus propias regulaciones y
        dentro de esta son los ayuntamientos los que toman la decisión final. Es
        crucial cumplir con las regulaciones específicas de Comunidad Valenciana
        y Torrevieja para operar correctamente una casa de alquiler vacacional.
      </p>

      <LicenciasTuristicas />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-10 md:px-4 mt-16'>
        ¿Cómo hay que tributar por una vivienda con fines turísticos?
      </h2>

      <p className='text-justify text-sm md:text-lg px-3 pt-4'>
        La actividad de alquiler turístico es un servicio de alojamiento, no un
        establecimiento y se tributa como un arrendamiento urbano, es decir,
        incluyendo los ingresos obtenidos por el desarrollo de la actividad como
        ganancias en la declaración de la renta anual. No precisa ni darse de
        alta como autónomo, no conlleva el pago de tasas alguna, así como
        tampoco implica tributación por IVA si el que lo explota es el
        propietario.
      </p>

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 lg:mx-48 md:px-16 mt-16'>
        ¿Qué documentación es obligatoria presentar para obtener una licencia
        turística en Torrevieja?
      </h2>

      <p className='text-justify text-sm md:text-lg px-3 pt-4'>
        El primer paso es{' '}
        <strong>
          conseguir el certificado de compatibilidad urbanística para vivienda
          de uso turístico
        </strong>{' '}
        el cual se solicita en el Ayuntamiento de Torrevieja presencialmente o
        por sede electrónica.
      </p>

      <p className='text-justify text-sm md:text-lg px-3 pt-4'>
        Los propietarios interesados en obtener este certificado deben presentar
        ante el Departamento de Urbanismo del Torrevieja la siguiente
        documentación:
      </p>

      <ol className='self-start text-sm md:text-lg px-3 pt-4 list-disc pl-16'>
        <li>Justificante del pago de la tasa de 54, 10 euros.</li>
        <li>Fotografía de la fachada.</li>
        <li>Plano de situación de la actividad proyectada.</li>
        <li>Escritura de la vivienda.</li>
        <li>Declaración responsable de primera o segunda ocupación.</li>
      </ol>

      <p className='self-start text-justify text-sm md:text-lg px-3 mt-6'>
        <span>
          Puede ver todos los trámite necesarios en este{' '}
          <Link
            className='underline text-p600'
            href={'https://torrevieja.es/es/urbanismo/vivienda-turistica'}
            target='_blank'
          >
            enlace
          </Link>
        </span>
      </p>

      <CityImages images={images} />

      <div className='text-justify text-sm md:text-lg pt-4 space-y-4 mb-14'>
        <p>
          Una vez tenemos claro que la comunidad no nos impide el VUT y
          disponemos del certificado de compatibilidad urbanística que nos ha
          proporcionado el Ayuntamiento de Torrevieja, podemos tramitar la
          licencia turística en la Comunidad Valenciana.
        </p>
        <p>
          {' '}
          Puedes consultar el modelo para la solicitud del Certificado de
          Compatibilidad Urbanística{' '}
          <span>
            <Link
              className='underline text-p600'
              href={
                'https://www.gva.es/es/inicio/procedimientos?id_proc=G19207'
              }
              target='_blank'
            >
              aquí
            </Link>
          </span>
        </p>
        <p>
          La Declaración Responsable de Vivienda de Uso Turístico tendrás que
          tramitarla en el organismo de turismo de la Comunidad Valenciana o en
          su sede telemática y deberás aportar:
        </p>
        <ol className='text-sm md:text-lg px-3 pt-4 list-disc pl-16'>
          <li>Fotocopia del DNI y mandato de representación firmado</li>
          <li>
            Acreditación de la propiedad: título, nota simple o contrato que
            autorice al VUT
          </li>
          <li>Certificado de compatibilidad urbanística de Torrevieja</li>
          <li>Cédula de habitabilidad (Licencia de 1º o 2º ocupación)</li>
          <li>Seguro de responsabilidad civil. Depende del nº de viviendas</li>
          <li>
            Acreditación de que se cumple la normativa correspondiente al VUT
          </li>
        </ol>
        <p>
          Realizada la declaración responsable de inicio de actividad, ésta
          deberá comenzar de forma efectiva en el plazo máximo de dos meses. En
          caso contrario, quedará sin efecto y se procederá, previa instrucción
          del oportuno expediente en el que se dará audiencia a la persona
          interesada, a la baja y cancelación de la inscripción en el Registro.
        </p>
        <p>
          Es también obligatorio adquirir una placa que cumpla con los
          estándares de la Comunidad Valenciana para identificar el inmueble. El
          precio de una placa distintiva oscila entre 40 € y 80 €, variando
          según los materiales. La puedes comprar pulsando{' '}
          <span>
            <Link
              className='underline text-p600'
              href={'https://www.placaturistica.com/'}
              target='_blank'
            >
              aquí
            </Link>
          </span>
          .
        </p>
      </div>

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-10 md:px-4 mt-16'>
        ¿Dónde y cuándo puedo solicitar la licencia turística?
      </h2>

      <p className='text-justify text-sm md:text-lg px-3 pt-4'>
        Es posible solicitar la licencia turística en cualquier momento del año,
        pero se debe hacer antes de comenzar con la actividad de alquiler.{' '}
        <strong>
          La solicitud de la compatibilidad urbanística se puede realizar en el
          Ayuntamiento de Torrevieja
        </strong>{' '}
        y una vez obtenido este y el resto de certificados{' '}
        <strong>
          se puede pedir la licencia turística a través de los medios
          telemáticos de Turismo de la Comunidad Valenciana.
        </strong>
      </p>

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-10 md:px-4 mt-16'>
        ¿Cuánto tarda la licencia turística en Torrevieja?
      </h2>

      <div className='text-justify text-sm md:text-lg pt-4 space-y-4 mb-14'>
        <p>
          Normalmente, la compatibilidad urbanística que depende del
          Ayuntamiento de Torrevieja tarda 3 meses, y una vez tenemos eso,
          tramitamos la licencia con turismo de la Comunidad Valenciana que
          tarda 1 o 2 meses. Por lo que la totalidad del proceso{' '}
          <strong>suele tardar alrededor de 4 o 5 meses</strong> en total.
        </p>
        <p>
          Dada la complejidad de este proceso,{' '}
          <strong>
            es recomendable contar con la asistencia de una empresa
            especializada en gestión de licencias turísticas
          </strong>
          , como <span className='text-p600'>DYGAV</span>, que tiene experiencia
          en la{' '}
          <span>
            <Link
              className='underline text-p600'
              href={'/gestion-integral-apartamentos-turisticos'}
            >
              gestión de apartamentos turísticos
            </Link>
          </span>{' '}
          y en la{' '}
          <strong>
            obtención de licencias turísticas en Torrevieja y distintas
            poblaciones turísticas de Alicante y Valencia
          </strong>
          .
        </p>
      </div>

      <HelpYouForm />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-10 md:px-4 mt-12'>
        ¿Deseas obtener informacion sobre mas licencias turisticas?
      </h2>

      <CityCardsFooter images={imagesLicenses} />
    </section>
  );
};
