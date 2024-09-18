import React from 'react';
import { CarouselCards } from './CarouselCards';
import Link from 'next/link';
import useDictionary from '@/app/hooks/useDictionary';

const cardContent = [
  { bg: 'bg-costaBlanca', title: 'Costa Blanca' },
  { bg: 'bg-pirineos', title: 'Pirineos' },
  { bg: 'bg-madrid', title: 'Madrid' },
];

export const Carousel = () => {
  const dictionary = useDictionary('home');

  return (
    <div
      className='w-full h-auto grid md:grid-cols-2 mt-10 md:mt-0 px-6 md:px-2 lg:px-0'
      id='recomendadas'
    >
      <div className='md:self-center md:justify-self-center divide-y-4 divide-p600'>
        <p
          className='text-center md:text-start text-2xl  md:text-3xl text-black700'
          dangerouslySetInnerHTML={{ __html: dictionary.carousel?.title }}
        ></p>

        <p
          className='text-center md:text-start text-[18px] lg:text-[31px] md:text-[26px] text-black900 pt-3'
          dangerouslySetInnerHTML={{ __html: dictionary.carousel?.subtitle }}
        ></p>
      </div>

      <div className='w-auto h-auto items-center mt-6 p-6 overflow-x-auto overscroll-x-contain flex space-x-6 overflow-y-hidden'>
        {cardContent.map((item, index) => (
          <Link href='/apartamentos' key={index}>
            <CarouselCards bg={item.bg} title={item.title} />
          </Link>
        ))}
      </div>
    </div>
  );
};
