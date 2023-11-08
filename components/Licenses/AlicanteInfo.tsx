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

export const AlicanteInfo = () => {
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
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32'>
      <h1 className='text-center text-2xl px-14 md:text-3xl text-black700 pb-4 font-semibold'>
        Licencias turísticas en Alicante
      </h1>

      <div className='text-justify text-sm md:text-lg border-t-4 border-t-p600 pt-4 space-y-4 mb-14'>
        <p>Proceso de obtención de una licencia turística en Alicante</p>

        <p>
          En Alicante, la obtención de una licencia turística se rige por la{' '}
          <span>
            <Link
              target='_blank'
              className='underline text-p600'
              href={'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2018-8950'}
            >
              Ley de Turismo
            </Link>
          </span>{' '}
          de la Comunidad Valenciana.
        </p>

        <p>Plazo de solicitud</p>

        <ol className='text-sm md:text-lg px-3 pt-4 list-disc pl-16 space-y-6'>
          <li>Durante todo el año.</li>
          <li>Inicio: con carácter previo al inicio de la actividad.</li>
          <li>Modificaciones: una vez realizadas las modificaciones.</li>
          <li>Cese: cuando se produzca.</li>
        </ol>

        <p>
          El proceso para obtener una licencia turística en Alicante es el
          siguiente:
        </p>

        <ol className='text-sm md:text-lg px-3 pt-4 list-decimal pl-16 space-y-6'>
          <li>
            Verificar que la vivienda cumple con los requisitos: Antes de
            solicitar la licencia turística, es importante verificar que la
            vivienda cumple con los requisitos de calidad y seguridad exigidos
            por la ley. Esto incluye contar con instalaciones adecuadas para la
            climatización, la electricidad y el agua, y cumplir con las normas
            de seguridad en cuanto a la construcción y el mobiliario.
          </li>
          <li>
            Obtener el Certificado de Aptitud de la vivienda: Para obtener este
            certificado, es necesario contratar a un técnico especializado que
            realice una inspección de la vivienda y verifique que cumple con los
            requisitos exigidos por la ley. Este certificado es esencial para el
            proceso de obtención de la licencia turística.
          </li>
          <li>
            Presentar la solicitud de licencia turística: Una vez se cuenta con
            el Certificado de Aptitud, se puede proceder a presentar la
            solicitud de licencia turística en el Ayuntamiento de Alicante. Es
            importante contar con toda la documentación necesaria, incluyendo el
            Certificado de Aptitud, el registro de la propiedad y el comprobante
            del pago de las tasas correspondientes.
          </li>
          <li>
            Inspección de la vivienda: Una vez se ha presentado la solicitud, se
            llevará a cabo una inspección de la vivienda por parte de los
            inspectores del Ayuntamiento de Alicante. En esta inspección, se
            verificará que la vivienda cumple con todos los requisitos exigidos
            por la ley.
          </li>
          <li>
            Obtención de la licencia turística: Si la vivienda cumple con todos
            los requisitos exigidos, se otorgará la licencia turística, que
            permitirá al propietario alquilar la vivienda a turistas de manera
            legal y regulada.
          </li>
        </ol>

        <p>
          <Link
            target='_blank'
            className='underline text-p600'
            href={
              'https://www.alicante.es/es/noticias/ley-152018-turismo-ocio-y-hospitalidad'
            }
          >
            Ver formulario{' '}
          </Link>
        </p>

        <div className='flex flex-col md:flex-row justify-center items-center pt-16 pb-16 space-x-8 space-y-10 md:space-y-0'>
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
              Gestionamos la licencia turistica <br /> para tu alquiler
              vacacional
            </h3>
            <button className='py-2 px-3 text-white bg-p600 uppercase'>
              <Link href={'#formulario'}>¿Te ayudamos?</Link>
            </button>
          </div>
        </div>
      </div>

      <h2
        id='obtener-licencia'
        className='font-semibold text-center text-2xl px-2 md:px-14 md:text-3xl text-black700 pb-4 mt-16'
      >
        ¿Qué es el alquiler turístico?
      </h2>

      <div className='text-justify text-sm md:text-lg border-t-4 border-t-p600 pt-4 space-y-4 mb-14'>
        <p>
          El alquiler turístico es un tipo de alquiler pensado para de ocio,
          normalmente es un alquiler a turistas que vienen a pasar unos días a
          la ciudad y quieren alquilar una vivienda en lugar de alojarse en un
          hotel. El tiempo máximo del alquiler es de 2 meses y la vivienda debe
          ser alquilada en su totalidad.
        </p>
        <p>
          Un apartamento turístico es una vivienda que se destina exclusivamente
          al alojamiento turístico y que cuenta con servicios comunes, como la
          recepción y limpieza. Por otro lado, una vivienda de uso turístico es
          una vivienda particular que se destina temporalmente al alojamiento
          turístico y que no cuenta con servicios comunes.
        </p>
      </div>

      <h2
        id='obtener-licencia'
        className='font-semibold text-center text-2xl px-2 md:px-14 md:text-3xl text-black700 pb-4 mt-16'
      >
        ¿Qué requisitos tiene que cumplir la vivienda para alquiler vacacional?
      </h2>

      <div className='text-justify text-sm md:text-lg border-t-4 border-t-p600 pt-4 space-y-4 mb-14'></div>
    </section>
  );
};
