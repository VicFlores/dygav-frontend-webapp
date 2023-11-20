import Image from 'next/legacy/image';
import React, { FC, useEffect, useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

type Unit = {
  weekPrice: number;
  weekendPrice: number;
  capacity: number;
  unitSeasons: {
    dateIni: string;
    dateEnd: string;
    weekPrice: number;
    weekendPrice: number;
  }[];
  additionalCapacity: number;
};

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
  units: Unit[];
}

const Carousel: FC<{ accomodation: ICarousel }> = ({ accomodation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const currentDate = new Date();
  const currentDateString = currentDate.toISOString().split('T')[0];

  const currentUnitSeason = accomodation.units[0].unitSeasons.find(
    (unitSeason: any) => {
      const dateIniString = new Date(unitSeason.dateIni)
        .toISOString()
        .split('T')[0];
      const dateEndString = new Date(unitSeason.dateEnd)
        .toISOString()
        .split('T')[0];

      return (
        currentDateString >= dateIniString && currentDateString <= dateEndString
      );
    }
  );

  let priceInfo = 'No units available';

  if (currentUnitSeason) {
    priceInfo = `${accomodation.location.city}`;
  }

  /* Semana: € ${currentUnitSeason.weekPrice} noche
      Fin de Semana: € ${currentUnitSeason.weekendPrice} noche */

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

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (startX - endX > 100) {
      // swipe left, next slide
      changeSlide('next');
    } else if (startX - endX < -100) {
      // swipe right, previous slide
      changeSlide('prev');
    }
  };

  return (
    <div className='flex flex-col lg:flex-row lg:justify-evenly justify-center items-center'>
      <div className='max-w-[550px] w-full px-2 md:px-4 relative group m-auto md:m-0'>
        {isMobile ? (
          // Mobile component goes here
          <div
            className='relative'
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {accomodation.images[0].ORIGINAL !== '' ? (
              <figure className='h-[400px] md:h-[500px] relative'>
                <Image
                  src={accomodation.images[currentIndex].ORIGINAL}
                  alt={accomodation.name}
                  layout='fill'
                  priority
                  className='rounded-t-xl'
                />
              </figure>
            ) : (
              <div className='h-[500px] bg-gray-200 rounded-t-xl' />
            )}

            <BsChevronCompactLeft
              onClick={() => changeSlide('prev')}
              className='absolute top-[50%] -translate-x-0 -translate-y-[50%] left-2 text-2xl rounded-full p-2 bg-black700/40 text-white cursor-pointer'
              size={30}
            />

            <BsChevronCompactRight
              onClick={() => changeSlide('next')}
              className='absolute top-[50%] -translate-x-0 -translate-y-[50%] right-2 text-2xl rounded-full p-2 bg-black700/40 text-white cursor-pointer'
              size={30}
            />
          </div>
        ) : (
          // Desktop component goes here
          <div className='relative'>
            {accomodation.images[0].ORIGINAL !== '' ? (
              <figure className='lg:h-[500px] relative'>
                <Image
                  src={accomodation.images[currentIndex].ORIGINAL}
                  alt={accomodation.name}
                  layout='fill'
                  priority
                  className='rounded-t-xl'
                />
              </figure>
            ) : (
              <div className='h-[500px] bg-gray-200 rounded-t-xl' />
            )}

            <BsChevronCompactLeft
              onClick={() => changeSlide('prev')}
              className='absolute top-[50%] -translate-x-0 -translate-y-[50%] left-2 text-2xl rounded-full p-2 bg-black700/40 text-white cursor-pointer'
              size={30}
            />

            <BsChevronCompactRight
              onClick={() => changeSlide('next')}
              className='absolute top-[50%] -translate-x-0 -translate-y-[50%] right-2 text-2xl rounded-full p-2 bg-black700/40 text-white cursor-pointer'
              size={30}
            />
          </div>
        )}

        <div className='flex top-4 justify-center py-2 overflow-x-scroll pb-6 md:overflow-x-hidden md:pb-0 pt-8 md:pt-8'>
          {slide?.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`${
                currentIndex === index ? 'bg-p600/20' : 'bg-p600/40'
              } w-4 h-4 rounded-full mx-2 cursor-pointer`}
            >
              <RxDotFilled color='#BF350C' />
            </div>
          ))}
        </div>
      </div>

      <div className='mt-10 md:mt-0'>
        <div
          id='CardContainer'
          key={accomodation.id}
          className='w-[340px] md:w-[320px] lg:w-[400px] self-center justify-self-center m-auto md:m-0'
        >
          <div id='CardBody' className='space-y-4 mt-6 mb-6'>
            <p className='text-xl md:text-[20px] lg:text-[25px] text-center'>
              {accomodation.name}
            </p>

            <p className='text-center text-[13px] md:text-[14px] lg:text-base text-black900 whitespace-pre-line'>
              {priceInfo}
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
              <p className='text-[10px] lg:text-[12px]'>Huéspedes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
