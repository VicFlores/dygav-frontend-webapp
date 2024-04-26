import React, { FC, useRef } from 'react';
import Link from 'next/link';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import { useRouter } from 'next/router';

interface ImageProps {
  cityName: string;
  bgCity: string;
  slug: string;
}

export const MadridCardsFooter: FC<{
  images: ImageProps[];
  cardTitle?: string;
  link?: string;
}> = ({ images, cardTitle, link }) => {
  const router = useRouter();

  let path = router.pathname;
  let parts = path.split('/');
  let cityName = parts[parts.length - 1];

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

  images = images.filter((image) => image.slug !== cityName);

  return (
    <>
      <div className='grid lg:grid-cols-12'>
        <button
          onClick={scrollLeft}
          className='hidden lg:flex p-2 relative z-10 text-white bg-p600/80 ml-3 -bottom-36 justify-self-center self-center'
        >
          <AiOutlineArrowLeft />
        </button>

        <div
          ref={scrollContainer}
          className='w-auto h-auto items-center mt-6 p-6 overflow-x-auto overscroll-x-contain flex space-x-6 overflow-y-hidden scrollbar lg:col-start-2 lg:col-end-12'
        >
          {images.map((image, index) => (
            <div
              key={index}
              className='w-60 h-80 md:w-70 md:h-80 shadow-md rounded-lg overflow-hidden flex-none transform transition-all hover:-translate-y-4 hover:shadow-xl'
            >
              <div
                className={`bg-cover bg-center flex items-end`}
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1)), url(${image.bgCity})`,
                  width: '100%',
                  height: '100%',
                }}
              >
                <Link
                  href={
                    link
                      ? `${link}/${image.slug}`
                      : `/licencias-turisticas/${image.slug}`
                  }
                  className='text-white pl-4 pb-4 text-sm md:text-lg underline'
                >
                  {cardTitle ? cardTitle : 'Licencia turística en'}{' '}
                  {image.cityName}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={scrollRight}
          className='hidden lg:flex p-2 relative z-10 text-white bg-p600/80 ml-3 -bottom-36 justify-self-center self-center'
        >
          <AiOutlineArrowRight />
        </button>
      </div>
    </>
  );
};
