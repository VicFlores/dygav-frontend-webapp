import { TImageProps } from '@/types';
import Image from 'next/legacy/image';
import React from 'react';

const imageProps: TImageProps[] = [
  {
    src: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/Booking-Logo_osnjdx.png',
    alt: 'Booking.com',
    height: 70,
    width: 125,
  },
  {
    src: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/ABNB_ugauy3.png',
    alt: 'AirBnb',
    height: 100,
    width: 125,
  },
  {
    src: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/0x0_j8hysr.png',
    alt: 'Rentalia',
    height: 40,
    width: 125,
  },
  {
    src: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/Comment-contacter-Vrbo_jkhslp.png',
    alt: 'Vrbo',
    height: 100,
    width: 125,
  },
  {
    src: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/Google_2015_logo.svg_sojqzx-1.png',
    alt: 'Google',
    height: 45,
    width: 125,
  },
  {
    src: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/EXPEDIA-LOGO-1_ko2beq-1.png',
    alt: 'Xpedia',
    height: 100,
    width: 140,
  },
];

export const BrandContent = () => {
  return (
    <section className='bg-brandContent grid items-center justify-center w-full bg-center bg-cover bg-no-repeat lg:h-[350px] md:h-auto'>
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
