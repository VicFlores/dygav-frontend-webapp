import { TImageProps } from '@/types';
import Image from 'next/legacy/image';
import React from 'react';

const imageProps: TImageProps[] = [
  {
    src: 'https://res.cloudinary.com/vicflores11/image/upload/v1691868897/Dygav/Booking-Logo_osnjdx.WebP',
    alt: 'Booking.com',
    height: 70,
    width: 125,
  },
  {
    src: 'https://res.cloudinary.com/vicflores11/image/upload/v1691868899/Dygav/ABNB_ugauy3.WebP',
    alt: 'AirBnb',
    height: 100,
    width: 125,
  },
  {
    src: 'https://res.cloudinary.com/vicflores11/image/upload/v1691882177/Dygav/0x0_j8hysr.WebP',
    alt: 'Rentalia',
    height: 40,
    width: 125,
  },
  {
    src: 'https://res.cloudinary.com/vicflores11/image/upload/v1691882182/Dygav/Comment-contacter-Vrbo_jkhslp.WebP',
    alt: 'Vrbo',
    height: 100,
    width: 125,
  },
  {
    src: 'https://res.cloudinary.com/vicflores11/image/upload/v1691882171/Dygav/Google_2015_logo.svg_sojqzx.WebP',
    alt: 'Google',
    height: 45,
    width: 125,
  },
  {
    src: 'https://res.cloudinary.com/vicflores11/image/upload/v1691882174/Dygav/EXPEDIA-LOGO-1_ko2beq.WebP',
    alt: 'Xpedia',
    height: 100,
    width: 140,
  },
];

export const BrandContent = () => {
  return (
    <section className='bg-brandContent grid items-center justify-center w-full bg-center bg-cover bg-no-repeat lg:h-[350px] md:h-auto mt-28'>
      <p className='text-white text-[18px] md:text-2xl text-center p-10'>
        Descubre tu refugio perfecto a solo un clic de distancia.
      </p>

      <div className='grid grid-cols-1 lg:grid-cols-6 md:grid-cols-3 justify-center lg:gap-8 items-center self-start'>
        {imageProps.map((item, index) => (
          <div className={'text-center'} key={index}>
            <Image
              src={item.src as string}
              alt={item.alt}
              width={item.width}
              height={item.height}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
