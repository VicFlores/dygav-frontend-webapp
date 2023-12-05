import { TSearcherCard, searcherCard } from '@/utils';
import Image from 'next/legacy/image';
import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

export const SearcherCards: FC<{ item: TSearcherCard }> = ({ item }) => {
  const [expanded, setExpanded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(0);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth <= 768);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  const changeSlide = (direction: 'prev' | 'next') => {
    setCurrentIndex((prev) =>
      direction === 'prev'
        ? prev === 0
          ? item.src.length - 1
          : prev - 1
        : prev === item.src.length - 1
        ? 0
        : prev + 1
    );
  };

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
    <div
      id='CardContainer'
      key={item.id}
      className='w-[360px] md:w-[350px] lg:w-[374px] self-center justify-self-center h-fit'
    >
      {isMobile ? (
        <div
          className='relative'
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <Link href={`/aparmentDetails/${item.id}`}>
            <figure className='h-[300px] relative'>
              <Image
                src={item.src[currentIndex]}
                alt={item.alt}
                layout='fill'
                priority
                className='rounded-t-xl'
              />
            </figure>
          </Link>

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
        <div className='relative'>
          <Link href={`/aparmentDetails/${item.id}`}>
            <figure className='h-[300px] relative'>
              <Image
                src={item.src[currentIndex]}
                alt={item.alt}
                layout='fill'
                priority
                className='rounded-t-xl'
              />
            </figure>
          </Link>

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

      <div id='CardBody' className='space-y-4 border-x-2 border-x-p600'>
        <p className='text-center text-black900 text-xs md:text-sm lg:text-base pt-4'>
          <Link href={`/aparmentDetails/${item.id}`}>{item.imgSubtitle} </Link>
        </p>

        <p className='text-[18px] md:text-[20px] lg:text-[25px] text-center md:text-start px-4'>
          <Link href={`/aparmentDetails/${item.id}`}>{item.title} </Link>
        </p>

        <p className='text-justify lg:text-start text-sm md:text-lg px-4'>
          <Link href={`/aparmentDetails/${item.id}`}>
            {expanded ? item.subtitle : `${item.subtitle.slice(0, 100)}...`}
          </Link>
        </p>

        <button
          onClick={() => setExpanded(!expanded)}
          className='font-serif font-semibold px-4 pb-6'
        >
          {expanded ? 'Mostrar Menos' : 'Mostrar Más'}
        </button>
      </div>

      <Link href={`/aparmentDetails/${item.id}`}>
        <div id='CardFooter' className='flex h-[48px] space-x-1 text-white'>
          <div className='bg-p600 pt-1 pb-1 w-[122px] h-full text-center rounded-bl-xl'>
            <p className='font-semibold text-[13px] md:text-[14px] lg:text-[16px]'>
              {item.bedroom}
            </p>
            <p className='text-[10px] lg:text-[12px]'>Dormitorios</p>
          </div>

          <div className='bg-p600 pt-1 pb-1 w-[122px] h-full text-center'>
            <p className='font-semibold text-[13px] md:text-[14px] lg:text-[16px]'>
              {item.bathroom}
            </p>
            <p className='text-[10px] lg:text-[12px]'>Baños</p>
          </div>

          <div className='bg-p600 pt-1 pb-1 w-[122px] h-full text-center rounded-br-lg'>
            <p className='font-semibold text-[13px] md:text-[14px] lg:text-[16px]'>
              {item.size}
            </p>
            <p className='text-[10px] lg:text-[12px]'>Tamaño</p>
          </div>
        </div>
      </Link>
    </div>
  );
};
