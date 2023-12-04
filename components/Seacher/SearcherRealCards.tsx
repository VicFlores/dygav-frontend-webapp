import { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import Image from 'next/legacy/image';

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

  introduction: {
    es: string;
  };

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

export const SearcherRealCards: FC<{ item: ICarousel }> = ({ item }) => {
  const [expanded, setExpanded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const currentUnitSeason = item.units[0].unitSeasons.find(
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
    priceInfo = `${item.location.city}`;
  }

  /* Semana: € ${currentUnitSeason.weekPrice} noche
      Fin de Semana: € ${currentUnitSeason.weekendPrice} noche */

  const changeSlide = (direction: 'prev' | 'next') => {
    setCurrentIndex((prev) =>
      direction === 'prev'
        ? prev === 0
          ? item.images.length - 1
          : prev - 1
        : prev === item.images.length - 1
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
        // Mobile component goes here
        <div
          className='relative'
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <Link href={`/realAparmentDetails/${item.id}`}>
            <figure className='h-[300px] relative'>
              <Image
                src={item.images[currentIndex].ORIGINAL}
                alt={item.name}
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
        // Desktop component goes here
        <div className='relative'>
          <Link href={`/realAparmentDetails/${item.id}`}>
            <figure className='h-[300px] relative'>
              <Image
                src={item.images[currentIndex].ORIGINAL}
                alt={item.name}
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

      <div className='space-y-4 border-x-2 border-x-p600'>
        <p className='text-center text-black900 text-xs md:text-sm lg:text-base pt-4'>
          <Link href={`/realAparmentDetails/${item.id}`}>{priceInfo}</Link>
        </p>

        <p className='text-[18px] md:text-[20px] lg:text-2xl text-center md:text-start px-4'>
          <Link href={`/realAparmentDetails/${item.id}`}>{item.name}</Link>
        </p>

        <p className='text-justify lg:text-start text-sm md:text-lg px-4'>
          <Link href={`/realAparmentDetails/${item.id}`}>
            {expanded
              ? item.introduction.es
              : `${item.introduction.es.slice(0, 200)}...`}
          </Link>
        </p>

        <button
          onClick={() => setExpanded(!expanded)}
          className='font-serif font-semibold px-4 pb-6'
        >
          {expanded ? 'Mostrar Menos' : 'Mostrar Más'}
        </button>
      </div>

      <Link href={`/realAparmentDetails/${item.id}`}>
        <div className='flex justify-center items-center h-[48px] space-x-1 text-white '>
          <div className='bg-p600 pt-1 pb-1 w-[122px] h-full text-center rounded-bl-xl'>
            <p className='font-semibold text-[13px] md:text-[14px] lg:text-[16px]'>
              {item.features.n_hab}
            </p>
            <p className='text-[10px] lg:text-[12px]'>Dormitorios</p>
          </div>

          <div className='bg-p600 pt-1 pb-1 w-[122px] h-full text-center'>
            <p className='font-semibold text-[13px] md:text-[14px] lg:text-[16px]'>
              {item.features.n_banos}
            </p>
            <p className='text-[10px] lg:text-[12px]'>Baños</p>
          </div>

          <div className='bg-p600 pt-1 pb-1 w-[122px] h-full text-center rounded-br-lg'>
            <p className='font-semibold text-[13px] md:text-[14px] lg:text-[16px]'>
              {Math.floor(item.features.superficie)}m²
            </p>
            <p className='text-[10px] lg:text-[12px]'>Tamaño</p>
          </div>
        </div>
      </Link>
    </div>
  );
};
