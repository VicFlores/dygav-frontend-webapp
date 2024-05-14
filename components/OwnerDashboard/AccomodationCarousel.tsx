import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/legacy/image';
import { AiOutlineCheckCircle } from 'react-icons/ai';

export const AccomodationCarousel = ({ item, index }: any) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      key={index}
      className='h-auto rounded-xl space-y-4 justify-self-center border-[1px] border-p600 px-5 py-5 bg-gray300/[.14] w-[300px] md:w-[330px]'
    >
      <figure className='text-center'>
        <Image
          src={`${item.images[0].ORIGINAL}`}
          alt={''}
          height={176}
          width={267}
          priority
          className='rounded-[20px]'
        />
      </figure>

      <div className='space-y-2'>
        <p className='text-lg md:text-xl'>{`${item.name}`}</p>
        <p className='text-xs md:text-sm'>
          {expanded
            ? item.introduction.es
            : `${item.introduction.es.slice(0, 250)}...`}
        </p>

        <button
          onClick={() => setExpanded(!expanded)}
          className='font-semibold py-3'
        >
          {expanded ? 'Mostrar Menos' : 'Mostrar Más'}
        </button>
      </div>

      <div className='flex justify-center items-center relative'>
        <AiOutlineCheckCircle className='w-5 md:h-5 text-p600 absolute top-1/2 -translate-y-1/2 right-5 md:right-12 lg:right-10' />
        <Link
          href={`/private/owner/accomodation/${item.id}`}
          passHref
          className='text-center text-p600 hover:bg-gray300 border-[1px] border-p600 rounded-md text-[13px] md:text-sm lg:text-base py-2 px-4 w-full'
        >
          Ver Reservas
        </Link>
      </div>

      <div className='flex justify-center items-center relative'>
        <AiOutlineCheckCircle className='w-5 md:h-5 text-p600 absolute top-1/2 -translate-y-1/2 right-5 md:right-12 lg:right-10' />
        <Link
          href={`/private/owner/accomodationCallender/${item.id}`}
          passHref
          className='text-center text-p600 hover:bg-gray300 border-[1px] border-p600 rounded-md text-[13px] md:text-sm lg:text-base py-2 px-4 w-full'
        >
          Ver Calendario
        </Link>
      </div>
    </div>
  );
};
