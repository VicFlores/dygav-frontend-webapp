import { TSearcherCard } from '@/utils';
import React, { FC, useEffect, useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

interface ICarousel {
  id: string;
  depositAmount: number;
  name: string;

  location: {
    city: string;
  };
  description: {
    es: string;
  };
  images: {
    ORIGINAL: string;
  }[];
  features: {
    n_hab: number;
    n_banos: number;
    superficie: number;
  };
  units: {
    weekPrice: number;
    weekendPrice: number;
    capacity: number;
    additionalCapacity: number;
  }[];
}

export const Carousel: FC<{ accomodation: ICarousel }> = ({ accomodation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const changeSlide = (direction: 'prev' | 'next') => {
    setCurrentIndex((prev) =>
      direction === 'prev'
        ? prev === 0
          ? accomodation.images.length - 1
          : prev - 1
        : prev === accomodation.images.length - 1
        ? 0
        : prev + 1
    );
  };

  const slide = accomodation.images;

  return (
    <div className='block md:flex justify-evenly items-center'>
      <div className='max-w-[550px] h-[500px] md:h-[600px] lg:h-[650px] w-full py-16 px-2 md:px-4 relative group m-auto md:m-0'>
        <div
          style={{
            backgroundImage: `url(${accomodation.images[currentIndex].ORIGINAL})`,
          }}
          className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
        />

        <BsChevronCompactLeft
          onClick={() => changeSlide('prev')}
          className='hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black700/20 text-white cursor-pointer'
          size={30}
        />

        <BsChevronCompactRight
          onClick={() => changeSlide('next')}
          className='hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black700/20 text-white cursor-pointer'
          size={30}
        />

        <div className='flex top-4 justify-center py-2 overflow-x-scroll pb-6 md:overflow-x-hidden md:pb-0'>
          {slide?.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`${
                currentIndex === index ? 'bg-black900/60' : 'bg-black900/20'
              } w-4 h-4 rounded-full mx-2 cursor-pointer`}
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>

      <div className=''>
        <div
          id='CardContainer'
          key={accomodation.id}
          className='w-[300px] md:w-[320px] lg:w-[400px] self-center justify-self-center m-auto md:m-0'
        >
          <div id='CardBody' className='space-y-4 mt-6 mb-6'>
            <p className='text-[18px] md:text-[20px] lg:text-[25px] text-center'>
              {accomodation.name}
            </p>

            <p className='text-center text-[13px] md:text-[14px] lg:text-base text-black900 whitespace-pre-line'>
              {`${accomodation.location.city}
              Semana: € ${accomodation.units[0].weekPrice} noche
              Fin de Semana: € ${accomodation.units[0].weekendPrice} noche`}
            </p>
            <p className='text-[13px] md:text-[14px] lg:text-base'>
              {expanded
                ? accomodation.description.es
                : `${accomodation.description.es.slice(0, 400)}...`}
            </p>
            <button
              onClick={() => setExpanded(!expanded)}
              className='font-serif font-semibold'
            >
              {expanded ? 'Mostrar Menos' : 'Mostrar Más'}
            </button>
          </div>

          <div id='CardFooter' className='flex h-[48px] space-x-1 text-white'>
            <div className='bg-p600 pt-1 pb-1 w-[119px] h-full text-center'>
              <p className='font-semibold text-[13px] md:text-[14px] lg:text-[16px]'>
                {accomodation.features.n_hab}
              </p>
              <p className='text-[10px] lg:text-[12px]'>Dormitorios</p>
            </div>

            <div className='bg-p600 pt-1 pb-1 w-[119px] h-full text-center '>
              <p className='font-semibold text-[13px] md:text-[14px] lg:text-[16px]'>
                {accomodation.features.n_banos}
              </p>
              <p className='text-[10px] lg:text-[12px]'>Baños</p>
            </div>

            <div className='bg-p600 pt-1 pb-1 w-[119px] h-full text-center '>
              <p className='font-semibold text-[13px] md:text-[14px] lg:text-[16px]'>
                {accomodation.features.superficie}m²
              </p>
              <p className='text-[10px] lg:text-[12px]'>Tamaño</p>
            </div>

            <div className='bg-p600 pt-1 pb-1 w-[119px] h-full text-center '>
              <p className='font-semibold text-[13px] md:text-[14px] lg:text-[16px]'>
                {accomodation.units[0].capacity +
                  accomodation.units[0].additionalCapacity}
              </p>
              <p className='text-[10px] lg:text-[12px]'>Huespedes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
