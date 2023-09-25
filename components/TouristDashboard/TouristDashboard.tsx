import Image from 'next/legacy/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';

export const TouristDashboard = () => {
  const reservation = [
    {
      id: 1,
      imgUrl:
        'https://res.cloudinary.com/vicflores11/image/upload/v1695587998/Dygav/Fotos%20Casas%20Fake/Casa%208/354640296_828229741626967_1904076646856246503_n_ftvkax.jpg',
      title: 'Apartamento Plaza del Ayuntamiento Torrevieja',
      information:
        'Sumérgete en el lujo y el arte contemporáneo a solo 200 metros del mar. Descubre nuestro exclusivo piso en la Plaza del Ayuntamiento de Torrevieja, donde cada rincón es una obra maestra en sí misma.',
    },
    {
      id: 2,
      imgUrl:
        'https://res.cloudinary.com/vicflores11/image/upload/v1695587779/Dygav/Fotos%20Casas%20Fake/Casa%206/355583468_1452975642128909_5630854050548497334_n_rlavfw.jpg',
      title: 'Casa Unifamiliar en Formigal',
      information:
        'Esta hermosa casa es el lugar perfecto para disfrutar de unas vacaciones inolvidables en la impresionante estación de esquí de Formigal. Con su diseño espacioso y su ubicación privilegiada, te brinda todo el confort y la comodidad que necesitas.',
    },
    {
      id: 3,
      imgUrl:
        'https://res.cloudinary.com/vicflores11/image/upload/v1695587733/Dygav/Fotos%20Casas%20Fake/Casa%205/355425254_181386181319334_2203436108574430518_n_wfqjji.jpg',
      title:
        'Un paraíso privado en Torrevieja: Casa unifamiliar con piscina, jacuzzi y sauna',
      information:
        'Con dos amplias habitaciones y dos baños, tendrás todo el espacio que necesitas para relajarte y disfrutar. Sumérgete en la piscina privada y refrescante, o relájate en el jacuzzi y sauna, brindándote momentos de pura relajación y bienestar.',
    },
  ];

  return (
    <div className='px-8 space-y-12 mb-24'>
      <p className=' text-black900/[.7] border-b-[1px] mt-10 text-2xl text-center md:text-left md:text-3xl lg:mt-16 lg:text-4xl'>
        Mis alojamientos favoritos
      </p>

      {reservation.length > 0 ? (
        <div className='grid gap-y-10 md:grid-cols-2 md:gap-y-8 lg:grid-cols-3 '>
          {reservation.map((item) => (
            <div
              className='h-fit rounded-xl space-y-4 justify-self-center border-[1px] border-p600 px-5 py-5 bg-gray300/[.14] w-[300px] md:w-[310px]'
              key={item.id}
            >
              <figure className='text-center'>
                <Image
                  src={item.imgUrl}
                  alt={item.title}
                  height={176}
                  width={267}
                  priority
                  className='rounded-[20px]'
                />
              </figure>

              <div className='space-y-2'>
                <p className='text-lg md:text-xl'>{item.title}</p>
                <p className='text-xs md:text-sm'>{item.information}</p>
              </div>

              <div className='flex justify-center items-center relative'>
                <AiOutlineCheckCircle className='w-5 md:h-5 text-p600 absolute top-1/2 -translate-y-1/2 right-5 md:right-12 lg:right-10' />
                <Link
                  href='/private/tourist/dashboard'
                  passHref
                  className='text-center text-p600 hover:bg-gray300 border-[1px] border-p600 rounded-md text-[13px] md:text-sm lg:text-base py-2 px-4 w-full'
                >
                  Ver alojamiento
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className='flex justify-center items-center'>
          <div className='flex flex-col justify-center items-center space-y-8 border-[1px] border-dashed h-[266px] w-[717px]'>
            <p className=' text-black900/[.7] lg:text-3xl'>
              ¡Aún no tienes reservaciones!
            </p>

            <div className='relative'>
              <AiOutlineCheckCircle className='w-5 h-5 absolute top-1/2 -translate-y-1/2 right-3 text-white' />
              <button
                id='toggle'
                className='bg-p600 hover:bg-p800 py-2 px-4 w-[250px] text-left text-white justify-self-center self-center'
              >
                Realizar una reservación
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
