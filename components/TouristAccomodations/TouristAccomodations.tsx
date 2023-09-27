import Image from 'next/legacy/image';
import React, { FC } from 'react';

export const TouristAccomodations: FC<{ id: string }> = ({ id }) => {
  const reservations = [
    {
      id: 1,
      src: [
        'https://res.cloudinary.com/vicflores11/image/upload/v1695587733/Dygav/Fotos%20Casas%20Fake/Casa%205/355871521_2352028871646012_1364603506285862344_n_fahq4k.jpg',
        'https://res.cloudinary.com/vicflores11/image/upload/v1695587736/Dygav/Fotos%20Casas%20Fake/Casa%205/355840222_1617075832109631_5705936545059326589_n_irljxj.jpg',
        'https://res.cloudinary.com/vicflores11/image/upload/v1695587733/Dygav/Fotos%20Casas%20Fake/Casa%205/354803929_586623450171544_74377877471137664_n_caklv6.jpg',
        'https://res.cloudinary.com/vicflores11/image/upload/v1695587733/Dygav/Fotos%20Casas%20Fake/Casa%205/355425254_181386181319334_2203436108574430518_n_wfqjji.jpg',
      ],
      title: 'Apartamento Plaza del Ayuntamiento Torrevieja',
      information:
        'Sumérgete en el lujo y el arte contemporáneo a solo 200 metros del mar. Descubre nuestro exclusivo piso en la Plaza del Ayuntamiento de Torrevieja, donde cada rincón es una obra maestra en sí misma.',
      reservations: [
        {
          id: 1,
          date: '15-10-2023 hasta 20-10-2023',
          tourist: 'Melissa Hernandez',
          status: 'Pagado',
        },
        {
          id: 2,
          date: '03-11-2023 hasta 05-11-2023',
          tourist: 'Francisco Guzman',
          status: 'Pendiente',
        },
        {
          id: 3,
          date: '10-10-2023 hasta 13-10-2023',
          tourist: 'Katherine Chavez',
          status: 'Pagado',
        },
      ],
    },
    {
      id: 2,
      imgUrl:
        'https://res.cloudinary.com/vicflores11/image/upload/v1695587779/Dygav/Fotos%20Casas%20Fake/Casa%206/355583468_1452975642128909_5630854050548497334_n_rlavfw.jpg',
      title: 'Casa Unifamiliar en Formigal',
      information:
        'Esta hermosa casa es el lugar perfecto para disfrutar de unas vacaciones inolvidables en la impresionante estación de esquí de Formigal. Con su diseño espacioso y su ubicación privilegiada, te brinda todo el confort y la comodidad que necesitas.',
      reservations: [
        {
          id: 1,
          date: '04-10-2023 hasta 06-10-2023',
          tourist: 'Fernando Aguilar',
          status: 'Pendiente',
        },
        {
          id: 2,
          date: '08-10-2023 hasta 10-10-2023',
          tourist: 'Stephanie Batres',
          status: 'Pendiente',
        },
        {
          id: 3,
          date: '13-11-2023 hasta 15-11-2023',
          tourist: 'Katherine Chavez',
          status: 'Pagado',
        },
        {
          id: 4,
          date: '15-11-2023 hasta 17-11-2023',
          tourist: 'Emily Johnson',
          status: 'Pagado',
        },
        {
          id: 5,
          date: '25-11-2023 hasta 28-11-2023',
          tourist: 'Olivia Fuentes',
          status: 'Pendiente',
        },
        {
          id: 6,
          date: '29-11-2023 hasta 30-11-2023',
          tourist: 'Paola Perez',
          status: 'Pagado',
        },
      ],
    },
    {
      id: 3,
      imgUrl:
        'https://res.cloudinary.com/vicflores11/image/upload/v1695587733/Dygav/Fotos%20Casas%20Fake/Casa%205/355425254_181386181319334_2203436108574430518_n_wfqjji.jpg',
      title:
        'Un paraíso privado en Torrevieja: Casa unifamiliar con piscina, jacuzzi y sauna',
      information:
        'Con dos amplias habitaciones y dos baños, tendrás todo el espacio que necesitas para relajarte y disfrutar. Sumérgete en la piscina privada y refrescante, o relájate en el jacuzzi y sauna, brindándote momentos de pura relajación y bienestar.',
      reservations: [
        {
          id: 1,
          date: '04-10-2023 hasta 06-10-2023',
          tourist: 'Jennifer Flores',
          status: 'Pagado',
        },
        {
          id: 2,
          date: '08-10-2023 hasta 10-10-2023',
          tourist: 'Alejandra Perez',
          status: 'Pagado',
        },
        {
          id: 3,
          date: '13-11-2023 hasta 15-11-2023',
          tourist: 'Alfonso de la Cruz',
          status: 'Pagado',
        },
        {
          id: 4,
          date: '18-11-2023 hasta 20-11-2023',
          tourist: 'Fabricio Espinoza',
          status: 'Pendiente',
        },
        {
          id: 5,
          date: '20-11-2023 hasta 21-11-2023',
          tourist: 'Fabiola Carranza',
          status: 'Pagado',
        },
      ],
    },
  ];

  const reservation = reservations.find(
    (reservation) => reservation.id === Number(id)
  );

  console.log(reservation);

  return (
    <>
      <div className='px-8 space-y-12 mb-24'>
        <p className=' text-black900/[.7] border-b-[1px] mt-10 text-2xl text-center md:text-left md:text-3xl lg:mt-16 lg:text-4xl'>
          Reservas en: {reservation?.title}
        </p>
      </div>
      <div className='grid gap-y-10 md:grid-cols-2 md:gap-y-8 lg:grid-cols-3 mb-20'>
        {reservation?.reservations.map((reservation) => (
          <div
            key={reservation.id}
            className='h-fit rounded-xl space-y-4 justify-self-center border-[1px] border-p600 px-5 py-5 bg-gray300/[.14] w-auto'
          >
            <div className='space-y-2 text-center'>
              <p className='text-lg md:text-xl font-semibold'>Fecha:</p>
              <p className='text-lg md:text-xl'>{reservation.date}</p>

              <p className='text-lg md:text-xl font-semibold'>Turista</p>

              <p className='text-lg md:text-xl'>{reservation.tourist}</p>

              <p className='text-lg md:text-xl font-semibold'>Estado</p>

              <p className='text-lg md:text-xl'>{reservation.status}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
