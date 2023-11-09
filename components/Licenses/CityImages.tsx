import Image from 'next/legacy/image';
import React, { FC } from 'react';

interface ImagesProps {
  src: string;
  alt: string;
}

interface Images {
  images: ImagesProps[];
}

export const CityImages: FC<Images> = ({ images }) => {
  return (
    <div className='flex flex-col lg:flex-row justify-evenly items-center mt-14 mb-14 space-y-8 lg:space-y-0 lg:space-x-8'>
      {images.map((image, index) => (
        <figure
          className='relative w-80 h-80 md:w-[460px] md:h-[370px]'
          key={index}
        >
          <Image
            src={`${image.src}`}
            alt={`${image.alt}`}
            layout='fill'
            className='rounded-2xl'
          />
        </figure>
      ))}
    </div>
  );
};
