import React, { FC, useRef } from 'react';
import Link from 'next/link';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';

interface ImageProps {
  cityName: string;
  bgCity: string;
  slug: string;
}

const images: ImageProps[] = [
  {
    slug: 'torrevieja',
    cityName: 'Torrevieja',
    bgCity: 'bg-torrevieja',
  },
  {
    slug: 'alicante',
    cityName: 'Alicante',
    bgCity: 'bg-alicante',
  },
  {
    slug: 'benidorm',
    cityName: 'Benidorm',
    bgCity: 'bg-benidorm',
  },
  {
    slug: 'orihuela',
    cityName: 'Orihuela',
    bgCity: 'bg-orihuelaCosta',
  },
  {
    slug: 'orihuela-costa',
    cityName: 'Orihuela Costa',
    bgCity: 'bg-orihuela',
  },
  {
    slug: 'guardamar-del-segura',
    cityName: 'Guardamar del Segura',
    bgCity: 'bg-guardamarSegura',
  },
  {
    slug: 'santa-pola',
    cityName: 'Santa Pola',
    bgCity: 'bg-santaPola',
  },
  {
    slug: 'villajoyosa',
    cityName: 'Villajoyosa',
    bgCity: 'bg-villajoyosa',
  },
  {
    slug: 'finestrat',
    cityName: 'Finestrat',
    bgCity: 'bg-finestrat',
  },
  {
    slug: 'el-campello',
    cityName: 'El Campello',
    bgCity: 'bg-elCampello',
  },
  {
    slug: 'calpe',
    cityName: 'Calpe',
    bgCity: 'bg-calpe',
  },
  {
    slug: 'pilar-de-la-horadada',
    cityName: 'Pilar de la Horadada',
    bgCity: 'bg-pilarHoradada',
  },
  {
    slug: 'altea',
    cityName: 'Altea',
    bgCity: 'bg-altea',
  },
  {
    slug: 'formigal',
    cityName: 'Formigal',
    bgCity: 'bg-formigal',
  },
];

export const CityCards = () => {
  const scrollContainer = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollLeft -= 300;
    }
  };

  const scrollRight = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollLeft += 300;
    }
  };

  return (
    <div className='flex items-center  overflow-x-auto overscroll-x-contain lg:col-start-2 lg:col-end-4'>
      <button
        onClick={scrollLeft}
        className='hidden lg:flex p-2 relative z-10 text-white bg-p600/80 ml-3 -bottom-36'
      >
        <AiOutlineArrowLeft />
      </button>

      <div
        ref={scrollContainer}
        className='w-auto h-auto items-center mt-6 p-6 overflow-x-auto overscroll-x-contain flex space-x-6 overflow-y-hidden scrollbar'
      >
        {images.map((image, index) => (
          <Link href={`/licencias-turisticas/${image.slug}`} key={index}>
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

      <button
        onClick={scrollRight}
        className='hidden lg:flex p-2 relative z-10 text-white bg-p600/80 ml-3 -bottom-36'
      >
        <AiOutlineArrowRight />
      </button>
    </div>
  );
};
