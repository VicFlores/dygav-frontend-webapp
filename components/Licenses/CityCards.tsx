import React, { FC, useRef } from 'react';
import Link from 'next/link';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import useDictionary from '@/app/hooks/useDictionary';

interface ImageProps {
  cityName: string;
  bgCity: string;
  slug: string;
}

export const CityCards: FC<{
  images: ImageProps[];
  cardTitle?: string;
  link?: string;
}> = ({ images, cardTitle, link }) => {
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

  const dictionary: any = useDictionary('licenses');

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
          <Link
            href={
              link
                ? `${link}/${image.slug}`
                : `/licencias-turisticas/${image.slug}`
            }
            key={index}
          >
            <div className='w-60 h-80 md:w-70 md:h-80 shadow-md rounded-lg overflow-hidden flex-none transform transition-all hover:-translate-y-4 hover:shadow-xl'>
              <div
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1)), url(${image.bgCity})`,
                  width: '100%',
                  height: '100%',
                }}
                className='bg-cover bg-center flex items-end'
              >
                <h4 className='text-white pl-4 pb-4 text-sm md:text-lg'>
                  {cardTitle
                    ? cardTitle
                    : `${dictionary.licenseAditionalInfo?.licenseTitle}`}{' '}
                  {image.cityName}
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
