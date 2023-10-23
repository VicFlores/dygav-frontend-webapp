import Image from "next/legacy/image";
import Link from "next/link";
import { GrContactInfo } from "react-icons/gr";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineAddIcCall } from "react-icons/md";

export const LicenseAditionalInfo = () => {
  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32'>
      <h1
        id='alquiler-turistico'
        className='text-center text-2xl px-5 md:px-14 md:text-3xl text-black700 pb-4 mt-16 font-semibold'
      >
        ¿Cómo obtener licencia turística?
      </h1>

      <div className='text-justify text-sm md:text-lg border-t-4 border-t-p600 pt-4 space-y-4'>
        <p>
          Una licencia turística es un documento legal que permite a los
          propietarios de viviendas para alquiler turístico de manera legal y
          regulada.
        </p>
        <p>
          Se consideran viviendas turísticas los inmuebles, cualquiera que sea
          su tipología, cuyo uso se ceda mediante precio, con habitualidad, en
          condiciones de inmediata disponibilidad, y con fines turísticos,
          vacacionales o de ocio.
        </p>
        <p>
          La obtención de una licencia turística es obligatoria en la mayoría de
          ciudades para poder poner una vivienda en alquiler vacacional, y su
          incumplimiento puede acarrear multas y sanciones para el propietario.
        </p>
        <p>
          Además, es necesario disponer de la licencia turística cuando se
          utilicen para la promoción de la vivienda y su publicidad canales de
          comercialización turística (AiRBnB entre otros). 
        </p>
        <p>
          La publicidad, que se efectúe de las viviendas turísticas inscritas,
          deberá incluir, obligatoriamente, los números de registro de las
          citadas viviendas y sus categorías. Es decir, sin la licencia
          turística no podrá anunciar el alquiler de la vivienda en plataformas
          como AiRBnB, Booking, etc. por no disponer del código de licencia, que
          ha de incluir este anuncio.
        </p>
      </div>

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
        id='alquiler-turistico'
        className='text-center text-2xl px-5 md:px-14 md:text-3xl text-black700 pb-4 mt-16 font-semibold'
      >
        Licencias turísticas en las principales comunidades autónomas
      </h2>

      <div className='text-justify text-sm md:text-lg border-t-4 border-t-p600 pt-4 space-y-4'>
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

      <h2
        id='alquiler-turistico'
        className='text-center text-2xl px-5 md:px-14 md:text-3xl text-black700 pb-4 mt-16 font-semibold'
      >
        ¿Cómo obtener una licencia turística en mi ciudad?
      </h2>

      <div className='flex space-x-6 border-t-4 border-t-p600 pt-8 overflow-x-auto overscroll-x-contain overflow-y-hidden pb-8'>
        <div className='w-auto justify-self-center self-center'>
          <Link href={"/licencias-turisticas-torrevieja"}>
            <div className='flex items-end bg-torrevieja h-96 w-96 bg-cover bg-center rounded-xl'>
              <h4 className='text-white pl-4 pb-4 text-sm md:text-lg'>
                Licencia turística en <br /> Torrevieja
              </h4>
            </div>
          </Link>
        </div>

        <div className='w-auto justify-self-center self-center'>
          <Link href={"/licencias-turisticas-torrevieja"}>
            <div className='flex items-end bg-torrevieja h-96 w-96 bg-cover bg-center rounded-xl'>
              <h4 className='text-white pl-4 pb-4 text-sm md:text-lg'>
                Licencia turística en <br /> Torrevieja
              </h4>
            </div>
          </Link>
        </div>
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
                "https://res.cloudinary.com/vicflores11/image/upload/v1697737435/Dygav/undraw_contact_us_re_4qqt_jvl1zy.svg"
              }
              alt={"Map Logo"}
              layout='fill'
              className='rounded-full'
            />
          </figure>
        </div>

        <form
          id='formulario'
          className='grid gap-8 px-6 lg:px-10 py-6 pt-4 border-2 border-gray300'
        >
          <p className='text-xl text-center'>Completa tu información</p>

          <label className='relative'>
            <GrContactInfo className='w-5 h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900' />
            <input
              type='text'
              placeholder='Escribe tu nombre completo'
              className='py-3 pl-10 pr-4 bg-transparent shadow appearance-none border-r-2 border-r-black900 placeholder:text-black900 w-full text-black900 leading-tight focus:outline-none focus:shadow-outline'
            />
          </label>

          <label className='relative'>
            <HiOutlineMail className='w-5 h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900' />
            <input
              type='email'
              placeholder='Escribe tu correo electronico'
              className='py-3 pl-10 pr-4 bg-transparent shadow appearance-none border-r-2 border-r-black900 placeholder:text-black900 w-full text-black900 leading-tight focus:outline-none focus:shadow-outline'
            />
          </label>

          <label className='relative'>
            <MdOutlineAddIcCall className='w-5 h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900' />
            <input
              type='number'
              placeholder='Escribe tu telefono'
              className='py-3 pl-10 pr-4 bg-transparent shadow appearance-none border-r-2 border-r-black900 placeholder:text-black900 w-full text-black900 leading-tight focus:outline-none focus:shadow-outline'
            />
          </label>

          <label className='relative'>
            <HiOutlineLocationMarker className='w-5 h-5 absolute top-1/3 -translate-y-1/2 left-3 text-black900' />
            <textarea
              placeholder='Localidad'
              className='py-3 pl-10 pr-4 bg-transparent shadow appearance-none border-r-2 border-r-black900 placeholder:text-black900 w-full text-black900 leading-tight focus:outline-none focus:shadow-outline'
            />
          </label>

          <button
            id='toggle'
            className='bg-p600 hover:bg-p800 text-center text-sm md:text-base py-2 px-4 w-[220px] md:w-[240px] lg:w-[280px] text-white justify-self-center self-center'
          >
            Solicitar informacion
          </button>
        </form>
      </div>
    </section>
  );
};
