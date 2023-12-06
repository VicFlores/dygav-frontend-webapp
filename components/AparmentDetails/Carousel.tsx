import { TSearcherCard } from '@/utils';
import Image from 'next/legacy/image';
import React, { FC, Fragment, useEffect, useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

export const Carousel: FC<{ accomodation: TSearcherCard[] }> = ({
  accomodation,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    handleResize();

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? accomodation[0].src.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === accomodation[0].src.length - 1 ? 0 : prev + 1
    );
  };

  const slide = accomodation[0]?.src as string[];

  return (
    <div className='block md:flex justify-evenly items-center'>
      <div className='max-w-[550px] h-[500px] md:h-[600px] lg:h-[650px] w-full py-16 px-2 md:px-4 relative group m-auto md:m-0'>
        {isMobile ? (
          <div className='flex items-center overflow-x-auto overscroll-x-contain scrollbar pb-6 space-x-6'>
            <>
              {accomodation.map((image, index) => (
                <Fragment key={index}>
                  {image.src.map((src, index) => (
                    <div
                      key={index}
                      className='w-[300px] h-96 shadow-md rounded-lg overflow-hidden flex-none transform transition-all hover:shadow-xl'
                    >
                      <figure
                        key={index}
                        className='h-[400px] md:h-[500px] relative'
                      >
                        <Image
                          src={src}
                          alt={image.imgSubtitle}
                          layout='fill'
                          priority
                          className='rounded-t-xl'
                        />
                      </figure>
                    </div>
                  ))}
                </Fragment>
              ))}
            </>
          </div>
        ) : (
          <>
            <div
              style={{
                backgroundImage: `url(${accomodation[0]?.src[currentIndex]})`,
              }}
              className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
            />

            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black700/20 text-white cursor-pointer'>
              <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>

            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black700/20 text-white cursor-pointer'>
              <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>

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
          </>
        )}
      </div>

      <div className=''>
        {accomodation.map((item) => (
          <div
            id='CardContainer'
            key={item.id}
            className='w-[300px] md:w-[320px] lg:w-[400px] self-center justify-self-center m-auto md:m-0'
          >
            <div id='CardBody' className='space-y-4 mt-6 mb-6'>
              <p className='text-[18px] md:text-[20px] lg:text-[25px] text-center'>
                {item.title}
              </p>
              <p className='text-center text-[13px] md:text-[14px] lg:text-base text-black900'>
                {item.imgSubtitle}
              </p>
              <p className='text-justify lg:text-start text-sm md:text-lg whitespace-pre-line'>
                {expanded
                  ? item.description
                  : `${item.description.slice(0, 400)}...`}
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
                  {item.bedroom}
                </p>
                <p className='text-[10px] lg:text-[12px]'>Dormitorios</p>
              </div>

              <div className='bg-p600 pt-1 pb-1 w-[119px] h-full text-center '>
                <p className='font-semibold text-[13px] md:text-[14px] lg:text-[16px]'>
                  {item.bathroom}
                </p>
                <p className='text-[10px] lg:text-[12px]'>Baños</p>
              </div>

              <div className='bg-p600 pt-1 pb-1 w-[119px] h-full text-center '>
                <p className='font-semibold text-[13px] md:text-[14px] lg:text-[16px]'>
                  {item.size}
                </p>
                <p className='text-[10px] lg:text-[12px]'>Tamaño</p>
              </div>

              <div className='bg-p600 pt-1 pb-1 w-[119px] h-full text-center '>
                <p className='font-semibold text-[13px] md:text-[14px] lg:text-[16px]'>
                  {item.maxHuesped}
                </p>
                <p className='text-[10px] lg:text-[12px]'>Huéspedes</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
