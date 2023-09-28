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

  const reservation = reservations.find(
    (reservation) => reservation.id === Number(id)
  );

  console.log(reservation);

  return (
    <>
      <div className='px-8  mb-24'>
        <p className=' text-black900/[.7] border-b-[1px] mt-10 text-2xl text-center md:text-left md:text-3xl lg:mt-16 lg:text-4xl'>
          Reservas en: {reservation?.title}
        </p>

        <div className='flex justify-center items-center mt-16'>
          <div className='flex flex-col justify-center items-center space-y-8 border-[1px] border-dashed h-[266px] w-[717px]'>
            <p className=' text-black900/[.7] lg:text-3xl'>
              ¡Aún no tienes reservas!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
