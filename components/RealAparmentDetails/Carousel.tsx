import Image from 'next/legacy/image';
import React, { FC, useEffect, useRef, useState } from 'react';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';

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

  return (
    <div className='flex flex-col lg:flex-row lg:justify-evenly justify-center items-center'>
      <div className='max-w-[550px] w-full px-2 md:px-4 relative group m-auto md:m-0'>
        {isMobile ? (
          <div className='flex items-center overflow-x-auto overscroll-x-contain scrollbar pb-6 space-x-6'>
            {accomodation.images[0].ORIGINAL !== '' ? (
              <>
                {accomodation.images.map((image, index) => (
                  <div
                    key={index}
                    className='w-[300px] h-96 shadow-md rounded-lg overflow-hidden flex-none transform transition-all hover:shadow-xl'
                  >
                    <figure className='h-[400px] md:h-[500px] relative'>
                      <Image
                        src={image.ORIGINAL}
                        alt={accomodation.name}
                        layout='fill'
                        priority
                        className='rounded-t-xl'
                      />
                    </figure>
                  </div>
                ))}
              </>
            ) : (
              <div className='h-[500px] bg-gray-200 rounded-t-xl' />
            )}
          </div>
        ) : (
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
              {accomodation.images.map((image, index) => (
                <div
                  key={index}
                  className=' shadow-md rounded-lg overflow-hidden flex-none transform transition-all hover:-translate-y-4 hover:shadow-xl'
                >
                  <figure className='w-[400px] h-[500px] relative'>
                    <Image
                      src={image.ORIGINAL}
                      alt={accomodation.name}
                      layout='fill'
                      priority
                      className='rounded-t-xl object-center'
                    />
                  </figure>
                </div>
              ))}
            </div>

            <button
              onClick={scrollRight}
              className='hidden lg:flex p-2 relative z-10 text-white bg-p600/80 ml-3 -bottom-36'
            >
              <AiOutlineArrowRight />
            </button>
          </div>
        )}
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
            <p className='text-justify lg:text-start text-sm md:text-lg'>
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
