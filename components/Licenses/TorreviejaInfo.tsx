import Image from 'next/legacy/image';
import Link from 'next/link';
import { GrContactInfo } from 'react-icons/gr';
import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi';
import { MdOutlineAddIcCall } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

type Inputs = {
  name: string;
  email: string;
  phone: number;
  description: string;
};

export const TorreviejaInfo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const [message, setMessage] = useState<string>();

  const onSubmit = (data: Inputs) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    };
    fetch('/api/mailing', requestOptions).then((response) => response.json());

    setMessage('Mensaje enviado correctamente');
  };

  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h1 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-2/3  lg:w-2/3'>
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

      <div className='flex flex-col md:flex-row justify-center items-center mt-16'>
        <figure className='h-44 w-44 md:h-60 md:w-60 lg:h-72 lg:w-72 relative m-0'>
          <Image
            src={
              'https://res.cloudinary.com/vicflores11/image/upload/v1697733791/Dygav/s9cmodybn3ahynipcggt.svg'
            }
            alt={'Map Logo'}
            layout='fill'
            className='rounded-full'
          />
        </figure>

        <div className='space-y-4 text-sm md:text-lg font-semibold text-center md:text-start'>
          <h3 className='text-p600 uppercase'>Nos encargamos nosotros</h3>
          <h3>Gestionamos integralmente tu alquiler vacacional</h3>
          <button className='py-2 px-3 text-white bg-p600 uppercase font-normal'>
            <Link href={'/gestion-integral-apartamentos-turisticos'}>
              Más información
            </Link>
          </button>
        </div>
      </div>

      <h2
        id='alquiler-turistico'
        className='text-center text-2xl px-5 md:px-14 md:text-3xl text-black700 pb-4 mt-16 font-semibold'
      >
        Guía para obtener una licencia turística en Torrevieja
      </h2>

      <p className='text-center text-sm md:text-lg px-20'>
        En esta guía queremos explicarte los pasos necesarios para la{' '}
        <strong>obtención de la licencia turística en Torrevieja</strong> además
        de resolver las dudas más habituales.
      </p>

      <h2
        id='alquiler-turistico'
        className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-2/3  lg:w-2/3 mt-16'
      >
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

      <h2
        id='solicitar-licencia'
        className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-2/3  lg:w-4/5 mt-16'
      >
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

      <h2
        id='organismos-licencias'
        className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-2/3  lg:w-4/5 mt-16'
      >
        ¿Quién regula las concesiones de licencias turísticas para alquileres
        vacacionales en Torrevieja?
      </h2>

      <p className='text-justify text-sm md:text-lg px-3 pt-4'>
        En España, cada comunidad autónoma dicta sus propias regulaciones y
        dentro de esta son los ayuntamientos los que toman la decisión final. Es
        crucial cumplir con las regulaciones específicas de Comunidad Valenciana
        y Torrevieja para operar correctamente una casa de alquiler vacacional.
      </p>

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
        id='obtener-licencia'
        className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-2/3  lg:w-4/5 mt-16'
      >
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

      <h2
        id='documentacion-licencias'
        className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-2/3  lg:w-4/5 mt-16'
      >
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

      <div className='flex flex-col md:flex-row justify-evenly items-center mt-14 mb-14 space-y-8 md:space-y-0 md:space-x-8'>
        <figure className='relative w-80 h-80 md:w-[460px] md:h-[370px] '>
          <Image
            src={
              'https://res.cloudinary.com/vicflores11/image/upload/v1699399186/Dygav/torrevieja/Torrevieja_Plaza_de_la_Constituci%C3%B3n_y0ewgo.png'
            }
            alt=''
            layout='fill'
            className='rounded-2xl'
          />
        </figure>
        <figure className='relative w-80 h-80 md:w-[460px] md:h-[370px]'>
          <Image
            src={
              'https://res.cloudinary.com/vicflores11/image/upload/v1699399171/Dygav/torrevieja/No_usada_todavia_usar_1_lxm0gv.png'
            }
            alt=''
            layout='fill'
            className='rounded-2xl'
          />
        </figure>
      </div>

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

      <h2
        id='obtener-licencia'
        className='font-semibold text-center text-2xl px-2 md:px-14 md:text-3xl text-black700 pb-4 mt-16'
      >
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

      <h2
        id='donde-solicitar-licencia'
        className='font-semibold text-center text-2xl px-2 md:px-14 md:text-3xl text-black700 pb-4 mt-16'
      >
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

      <div className='flex flex-col lg:flex-row lg:justify-evenly justify-center items-center my-24  lg:space-x-8'>
        <div className='space-y-2 text-lg md:text-xl text-center'>
          <h3 className='text-p600 font-semibold uppercase'>
            ¿Necesitas ayuda?
          </h3>
          <p className='font-semibold capitalize'>
            Llámanos, escríbenos o <br /> acercate a nuestras <br /> oficinas
          </p>
          <p className='capitalize'>
            Resolvemos todos tus dudas sin <br /> compromiso.
          </p>

          <figure className='h-60 w-60 md:h-64 md:w-64 relative m-0'>
            <Image
              src={
                'https://res.cloudinary.com/vicflores11/image/upload/v1697737435/Dygav/undraw_contact_us_re_4qqt_jvl1zy.svg'
              }
              alt={'Map Logo'}
              layout='fill'
              className='rounded-full'
            />
          </figure>
        </div>

        <form
          id='formulario'
          onSubmit={handleSubmit(onSubmit)}
          className='grid gap-8 px-6 lg:px-10 py-6 pt-4 border-2 border-gray300'
        >
          <p className='text-xl text-center'>Completa tu información</p>

          <label className='relative'>
            <GrContactInfo className='w-5 h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900' />
            <input
              type='text'
              placeholder='Escribe tu nombre completo'
              {...register('name', { required: true })}
              className='py-3 pl-10 pr-4 bg-transparent shadow appearance-none border-r-2 border-r-black900 placeholder:text-black900 w-full text-black900 leading-tight focus:outline-none focus:shadow-outline'
            />
            {errors.name && (
              <span className='text-red-500'>Este campo es obligatorio</span>
            )}
          </label>

          <label className='relative'>
            <HiOutlineMail className='w-5 h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900' />
            <input
              type='email'
              placeholder='Escribe tu correo electronico'
              {...register('email', { required: true })}
              className='py-3 pl-10 pr-4 bg-transparent shadow appearance-none border-r-2 border-r-black900 placeholder:text-black900 w-full text-black900 leading-tight focus:outline-none focus:shadow-outline'
            />
            {errors.email && (
              <span className='text-red-500'>Este campo es obligatorio</span>
            )}
          </label>

          <label className='relative'>
            <MdOutlineAddIcCall className='w-5 h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900' />
            <input
              type='number'
              placeholder='Escribe tu telefono'
              {...register('phone', { required: true })}
              className='py-3 pl-10 pr-4 bg-transparent shadow appearance-none border-r-2 border-r-black900 placeholder:text-black900 w-full text-black900 leading-tight focus:outline-none focus:shadow-outline'
            />
            {errors.phone && (
              <span className='text-red-500'>Este campo es obligatorio</span>
            )}
          </label>

          <label className='relative'>
            <HiOutlineLocationMarker className='w-5 h-5 absolute top-1/3 -translate-y-1/2 left-3 text-black900' />
            <textarea
              placeholder='Ayúdanos a prepararnos: Cuéntanos tu caso para que podamos atenderte mejor cuando te contactemos.'
              {...register('description', { required: true })}
              className='py-3 pl-10 pr-4 bg-transparent shadow appearance-none border-r-2 border-r-black900 placeholder:text-black900 w-full text-black900 leading-tight focus:outline-none focus:shadow-outline'
            />
            {errors.description && (
              <span className='text-red-500'>Este campo es obligatorio</span>
            )}
          </label>

          <button
            id='toggle'
            type='submit'
            className='bg-p600 hover:bg-p800 text-center text-sm md:text-base py-2 px-4 w-[220px] md:w-[240px] lg:w-[280px] text-white justify-self-center self-center'
          >
            Solicitar informacion
          </button>
          {message && <p className='text-center text-green-500'>{message}</p>}
        </form>
      </div>
    </section>
  );
};
