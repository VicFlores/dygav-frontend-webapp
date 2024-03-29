import { TImageProps } from '@/types';
import Image from 'next/legacy/image';
import React from 'react';

const imageProps: TImageProps[] = [
  {
    src: 'https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649296/Dygav%20Images/Icons/Booking-Logo_osnjdx_ly0dot.webp',
    alt: 'Booking.com',
    height: 70,
    width: 125,
  },
  {
    src: 'https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649300/Dygav%20Images/Icons/ABNB_ugauy3_kx6upc.webp',
    alt: 'AirBnb',
    height: 100,
    width: 125,
  },
  {
    src: 'https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649354/Dygav%20Images/Icons/0x0_j8hysr_jft13p.webp',
    alt: 'Rentalia',
    height: 40,
    width: 125,
  },
  {
    src: 'https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649280/Dygav%20Images/Icons/Comment-contacter-Vrbo_jkhslp_l0kw3t.webp',
    alt: 'Vrbo',
    height: 100,
    width: 125,
  },
  {
    src: 'https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649293/Dygav%20Images/Icons/Google_2015_logo.svg_sojqzx_uzngo3.webp',
    alt: 'Google',
    height: 45,
    width: 125,
  },
  {
    src: 'https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649269/Dygav%20Images/Icons/EXPEDIA-LOGO-1_ko2beq_sjkq1d.webp',
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
