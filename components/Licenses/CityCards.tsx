import React, { FC } from 'react';
import Link from 'next/link';

interface ImageProps {
  href: string;
  cityName: string;
  bgCity: string;
}

interface Props {
  images: ImageProps[];
}

export const CityCards: FC<Props> = ({ images }) => {
  return (
    <div className='w-auto h-auto items-center mt-6 p-6 overflow-x-auto overscroll-x-contain flex space-x-6 overflow-y-hidden lg:col-start-2 lg:col-end-4'>
      {images.map((image, index) => (
        <Link href={`${image.href}`} key={index}>
          <div className='w-60 h-80 md:w-70 md:h-80 shadow-md rounded-lg overflow-hidden flex-none transform transition-all hover:-translate-y-4 hover:shadow-xl'>
            <div
              className={`w-full h-full bg-cover bg-center flex items-end ${image.bgCity}`}
            >
              <h4 className='text-white pl-4 pb-4 text-sm md:text-lg'>
                Licencia turística en <br /> {image.cityName}
              </h4>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
