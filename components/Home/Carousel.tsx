import React from 'react';
import { CarouselCards } from './CarouselCards';

const cardContent = [
  { bg: 'bg-costaBlanca', title: 'Costa Blanca' },
  { bg: 'bg-pirineos', title: 'Pirineos' },
  { bg: 'bg-madrid', title: 'Madrid' },
  { bg: 'bg-costaBlanca', title: 'Costa Blanca' },
  { bg: 'bg-pirineos', title: 'Pirineos' },
  { bg: 'bg-madrid', title: 'Madrid' },
];

export const Carousel = () => {
  return (
    <div
      className='w-full h-auto grid md:grid-cols-2 mt-10 md:mt-0'
      id='recomendadas'
    >
      <div className='self-center justify-self-center divide-y-4 divide-p600'>
        <p className='text-[20px] lg:text-[34px] md:text-[28px] text-black700'>
          ENCUENTRA TU <br /> ALOJAMIENTO IDEAL
        </p>

        <p className='text-[18px] lg:text-[31px] md:text-[26px] text-black900 pt-3'>
          ¿Donde Será Tú Próxima <br /> Aventura?
        </p>
      </div>

      <div className='w-auto h-auto items-center mt-6 p-6 overflow-x-auto overscroll-x-contain flex space-x-6 overflow-y-hidden'>
        {cardContent.map((item, index) => (
          <CarouselCards key={index} bg={item.bg} title={item.title} />
        ))}
      </div>
    </div>
  );
};
