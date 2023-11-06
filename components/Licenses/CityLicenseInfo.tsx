import Image from "next/legacy/image";
import Link from "next/link";
import { GrContactInfo } from "react-icons/gr";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineAddIcCall } from "react-icons/md";
import {useForm} from 'react-hook-form'
import { useState } from "react";


type Inputs = {
  name: string,
  email: string,
  phone: number,
  description: string
}

export const CityLicenseInfo = () => {

  const {register, handleSubmit, formState: {errors}} = useForm<Inputs>()

  const [message, setMessage] = useState<string>()

  const onSubmit = (data: Inputs) => {

   
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
  };
    fetch('/api/mailing', requestOptions)
        .then(response => response.json())
  
        setMessage("Mensaje enviado correctamente")
  }





  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32'>
      <h1 className='text-center text-2xl px-14 md:text-3xl text-black700 pb-4'>
        Conseguir la Licencia Turística en Torrevieja
      </h1>

      <p className='text-justify text-sm md:text-lg border-t-4 border-t-p600 px-3 pt-4'>
        En Torrevieja, el alquiler vacacional se ha consolidado como una opción
        rentable para muchos propietarios. Sin embargo, el proceso para obtener
        una licencia turística puede ser un terreno desconocido para muchos. En
        este artículo, abordaremos las principales inquietudes y despejaremos
        tus dudas sobre cómo conseguir la licencia Turística en Torrevieja, para
        que te asegures de que tu propiedad cumpla con todas las normativas
        locales y puedas aprovecharla al máximo.
      </p>

      <div className='flex flex-col md:flex-row justify-center items-center mt-16'>
        <figure className='h-44 w-44 md:h-60 md:w-60 lg:h-72 lg:w-72 relative m-0'>
          <Image
            src={
              "https://res.cloudinary.com/vicflores11/image/upload/v1697733791/Dygav/s9cmodybn3ahynipcggt.svg"
            }
            alt={"Map Logo"}
            layout='fill'
            className='rounded-full'
          />
        </figure>

        <div className='space-y-4 text-sm md:text-lg font-semibold text-center md:text-start'>
          <h3 className='text-p600 uppercase'>Nos encargamos nosotros</h3>
          <h3>Gestionamos integralmente tu alquiler vacacional</h3>
          <button className='py-2 px-3 text-white bg-p600 uppercase font-normal'>
            <Link href={"/licencias"}>Más información</Link>
          </button>
        </div>
      </div>

      <h2
        id='alquiler-turistico'
        className='text-center text-2xl px-5 md:px-14 md:text-3xl text-black700 pb-4 mt-16'
      >
        ¿Qué es el alquiler turístico?
      </h2>

      <p className='text-justify text-sm md:text-lg border-t-4 border-t-p600 px-3 pt-4'>
        El alquiler turístico es una modalidad de alojamiento que permite a los
        turistas disfrutar de una estancia temporal en una vivienda en lugar de
        un hotel. Por lo general, este tipo de alquiler dura menos de dos meses
        y abarca la vivienda en su totalidad. Mientras que un apartamento
        turístico está destinado exclusivamente para fines de alojamiento y
        cuenta con servicios comunes,{" "}
        <strong>
          una vivienda de uso turístico es un hogar particular alquilado
          temporalmente sin esos servicios adicionales.
        </strong>
      </p>

      <h2
        id='obtener-licencia'
        className='text-center text-2xl px-2 md:px-14 md:text-3xl text-black700 pb-4 mt-16'
      >
        ¿Qué requisitos debe cumplir una vivienda para alquiler vacacional en
        Torrevieja?
      </h2>

      <p className='text-justify text-sm md:text-lg border-t-4 border-t-p600 px-3 pt-4'>
        Existen diferencias entre un apartamento turístico y una vivienda de uso
        turístico. Sin embargo, para obtener la licencia turística en Torrevieja
        en 2023, es esencial:
      </p>

      <ul className='text-sm md:text-lg pl-10 pt-4 list-disc'>
        <li>
          <strong>Certificado de segunda ocupación: </strong> Verifica que la
          propiedad cumple con los estándares de habitabilidad y seguridad.
        </li>
        <li>
          <strong>Certificado de compatibilidad urbanística: </strong> Asegura
          que la propiedad está en línea con las regulaciones urbanísticas.
        </li>
        <li>
          <strong>Certificado energético:</strong> Aunque no es obligatorio, es
          recomendable para evaluar la eficiencia energética.
        </li>
        <li>
          <strong>Seguro de responsabilidad civil:</strong> Protege al
          propietario y a los huéspedes de posibles daños.
        </li>
        <li>
          <strong>Fotos de la fachada: </strong> Deben ser claras y presentadas
          durante el proceso de solicitud.
        </li>
      </ul>

      <h2
        id='solicitar-licencia'
        className='text-center text-2xl px-0 md:px-14 md:text-3xl text-black700 pb-4 mt-16'
      >
        ¿Quién puede solicitar una licencia turística en Torrevieja?
      </h2>

      <p className='text-justify text-sm md:text-lg border-t-4 border-t-p600 px-3 pt-4'>
        Tanto{" "}
        <strong>
          personas físicas como jurídicas pueden solicitar licencias turísticas
        </strong>
        , independientemente de si son propietarios de la vivienda. Lo esencial
        es que la <strong>vivienda se ceda con fines turísticos</strong> y con
        carácter lucrativo y habitual.
      </p>

      <h2
        id='organismos-licencias'
        className='text-center text-2xl px-0 md:px-14 md:text-3xl text-black700 pb-4 mt-16'
      >
        ¿Quién regula las concesiones de licencias turísticas para alquileres
        vacacionales en Torrevieja?
      </h2>

      <p className='text-justify text-sm md:text-lg border-t-4 border-t-p600 px-3 pt-4'>
        En España, cada comunidad autónoma dicta sus propias regulaciones y
        dentro de esta{" "}
        <strong>son los ayuntamientos los que toman la decisión final</strong> .
        Es crucial cumplir con las regulaciones específicas de Torrevieja y la
        Comunidad Valenciana para operar correctamente.
      </p>

      <h2
        id='documentacion-licencias'
        className='text-center text-2xl px-6 md:px-14 md:text-3xl text-black700 pb-4 mt-16'
      >
        ¿Qué documentación es obligatoria presentar para obtener una licencia
        turística en Torrevieja?
      </h2>

      <p className='text-justify text-sm md:text-lg border-t-4 border-t-p600 px-3 pt-4'>
        Los propietarios interesados en obtener una licencia turística deben
        presentar:
      </p>

      <ul className='text-sm md:text-lg px-3 pt-4 font-semibold'>
        <li>Declaración responsable de segunda ocupación.</li>
        <li>Certificado de compatibilidad urbanística.</li>
        <li>Seguro de responsabilidad civil.</li>
        <li>Fotografías de la fachada de la vivienda.</li>
      </ul>

      <p className='text-justify text-sm md:text-lg px-3 mt-6'>
        Dada la complejidad de este proceso, es recomendable contar con la
        asistencia de una{" "}
        <strong>
          empresa especializada en gestión de licencias turísticas
        </strong>
        , como DYGAV, que tiene experiencia en la gestión de apartamentos
        turísticos y en la obtención de licencias turísticas en Torrevieja.Es
        también obligatorio adquirir una placa que cumpla con los estándares de
        la Comunidad Valenciana para identificar el inmueble. .El precio de una
        placa distintiva oscila entre 40 € y 80 €, variando según los
        materiales. La puedes comprar pulsando{" "}
        <Link className='underline' href={""} target='_blank'>
          aquí
        </Link>
        .
      </p>

      <div className='flex flex-col md:flex-row justify-center items-center mt-16 space-x-8 space-y-10 md:space-y-0'>
        <figure className='h-40 w-40 md:h-44 md:w-44 lg:h-60 lg:w-60 relative m-0'>
          <Image
            src={
              "https://res.cloudinary.com/vicflores11/image/upload/v1697736235/Dygav/undraw_certification_re_ifll_a0xzch.svg"
            }
            alt={"Map Logo"}
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
            <Link href={"#formulario"}>¿Te ayudamos?</Link>
          </button>
        </div>
      </div>

      <h2
        id='donde-solicitar-licencia'
        className='text-center text-2xl px-2 md:px-14 md:text-3xl text-black700 pb-4 mt-16'
      >
        ¿Dónde y cuándo puedo solicitar la licencia turística?
      </h2>

      <p className='text-justify text-sm md:text-lg border-t-4 border-t-p600 px-3 pt-4'>
        Es posible solicitar la licencia turística en cualquier momento del año,
        pero se debe hacer antes de comenzar con la actividad de alquiler. La
        solicitud de la compatibilidad urbanística se puede realizar en el
        Ayuntamiento de Torrevieja y una vez obtenido este y el resto de
        certificados se puede pedir la licencia turística a través de los medios
        telemáticos deTurismo de la Comunidad Valenciana.
      </p>

      <h2
        id='plazos-obtener-licencia'
        className='text-center text-2xl px-2 md:px-14 md:text-3xl text-black700 pb-4 mt-16'
      >
        ¿Cuánto tarda la licencia turística en Torrevieja?
      </h2>

      <p className='text-justify text-sm md:text-lg border-t-4 border-t-p600 px-3 pt-4'>
        Normalmente, la compatibilidad urbanística que depende del Ayuntamiento
        de Torrevieja tarda 3 meses, y una vez tenemos eso, pedimos la licencia
        a turismo de la Comunidad Valenciana que tarda 1 o 2 meses. Por lo que{" "}
        {""}
        <strong>
          la totalidad del proceso suele tardar alrededor de 4 o 5 meses en
          total.
        </strong>
        <br /> <br />
        En DYGAV, nos enorgullece ser{" "}
        <strong>especialistas en el mundo de las licencias turísticas</strong> y
        la{" "}
        <span className='text-p600'>gestión de apartamentos vacacionales</span>.
        Sabemos que el proceso puede ser abrumador y, por eso, te invitamos a
        dejar todo en nuestras manos. Permítenos encargarnos de todos los
        detalles,{" "}
        <strong>
          desde la obtención de la licencia hasta la administración integral de
          tu propiedad
        </strong>
        , asegurando una experiencia sin complicaciones para ti. Confía en
        nuestro equipo de profesionales y dedica tu tiempo a lo que realmente
        importa. ¡Contacta con DYGAV y transforma tu inversión en un éxito
        garantizado!
      </p>

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
                "https://res.cloudinary.com/vicflores11/image/upload/v1697737435/Dygav/undraw_contact_us_re_4qqt_jvl1zy.svg"
              }
              alt={"Map Logo"}
              layout='fill'
              className='rounded-full'
            />
          </figure>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className='grid gap-8 px-6 lg:px-10 py-6 pt-4 border-2 border-gray300'
        >
          <p className='text-xl text-center'>Completa tu información</p>

          <label className='relative'>
            <GrContactInfo className='w-5 h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900' />
            <input
              type='text'
              placeholder='Escribe tu nombre completo'
              {...register('name', {required: true})}
              className='py-3 pl-10 pr-4 bg-transparent shadow appearance-none border-r-2 border-r-black900 placeholder:text-black900 w-full text-black900 leading-tight focus:outline-none focus:shadow-outline'
            />
            {errors.name && <span className='text-red-500'>Este campo es obligatorio</span>}
          </label>

          <label className='relative'>
            <HiOutlineMail className='w-5 h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900' />
            <input
              type='email'
              placeholder='Escribe tu correo electronico'
              {...register('email', {required: true})}
              className='py-3 pl-10 pr-4 bg-transparent shadow appearance-none border-r-2 border-r-black900 placeholder:text-black900 w-full text-black900 leading-tight focus:outline-none focus:shadow-outline'
            />
            {errors.email && <span className='text-red-500'>Este campo es obligatorio</span>}
          </label>

          <label className='relative'>
            <MdOutlineAddIcCall className='w-5 h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900' />
            <input
              type='number'
              placeholder='Escribe tu telefono'
              {...register('phone', {required: true})}
              className='py-3 pl-10 pr-4 bg-transparent shadow appearance-none border-r-2 border-r-black900 placeholder:text-black900 w-full text-black900 leading-tight focus:outline-none focus:shadow-outline'
            />
            {errors.phone && <span className='text-red-500'>Este campo es obligatorio</span>}
          </label>

          <label className='relative'>
            <HiOutlineLocationMarker className='w-5 h-5 absolute top-1/3 -translate-y-1/2 left-3 text-black900' />
            <textarea
              placeholder='Ayúdanos a prepararnos: Cuéntanos tu caso para que podamos atenderte mejor cuando te contactemos.'
              {...register('description', {required: true})}
              className='py-3 pl-10 pr-4 bg-transparent shadow appearance-none border-r-2 border-r-black900 placeholder:text-black900 w-full text-black900 leading-tight focus:outline-none focus:shadow-outline'
            />
            {errors.description && <span className='text-red-500'>Este campo es obligatorio</span>}
          </label>

          <button
            id='toggle'
            type="submit"
            className='bg-p600 hover:bg-p800 text-center text-sm md:text-base py-2 px-4 w-[220px] md:w-[240px] lg:w-[280px] text-white justify-self-center self-center'
          >
            Solicitar informacion
          </button>
          {
            message && <p className='text-center text-green-500'>{message}</p>
          }
        </form>
      </div>
    </section>
  );
};
