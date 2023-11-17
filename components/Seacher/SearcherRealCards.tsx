import { FC, useState } from 'react';
import Link from 'next/link';
import { AiOutlineCheckCircle } from 'react-icons/ai';
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

  return (
    <div
      id='CardContainer'
      key={item.id}
      className='w-[360px] md:w-[350px] lg:w-[374px] self-center justify-self-center h-fit'
    >
      <div className='relative'>
        <figure className='h-[300px] relative'>
          <Image
            src={item.images[currentIndex].ORIGINAL}
            alt={item.name}
            layout='fill'
            priority
            className='rounded-t-xl'
          />
        </figure>

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

      <div className='space-y-4 border-x-2 border-x-p600'>
        <p className='text-center text-black900 text-xs md:text-sm lg:text-base pt-4'>
          {priceInfo}
        </p>

        <p className='text-[18px] md:text-[20px] lg:text-2xl text-center md:text-start px-4'>
          {item.name}
        </p>

        <p className='text-[13px] md:text-[14px]  lg:text-sm px-4'>
          {expanded
            ? item.introduction.es
            : `${item.introduction.es.slice(0, 200)}...`}
        </p>

        <button
          onClick={() => setExpanded(!expanded)}
          className='font-serif font-semibold px-4 pb-6'
        >
          {expanded ? 'Mostrar Menos' : 'Mostrar Más'}
        </button>
      </div>

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
            {item.features.superficie}m²
          </p>
          <p className='text-[10px] lg:text-[12px]'>Tamaño</p>
        </div>
      </div>

      <div className='flex justify-center items-center relative mt-4 '>
        <AiOutlineCheckCircle className='w-5 md:h-5 text-p600 absolute top-1/2 -translate-y-1/2 right-5 md:right-12 lg:right-10' />
        <Link
          href={`/realAparmentDetails/${item.id}`}
          passHref
          className='text-center text-p600 hover:bg-gray300 border-[1px] border-p600 rounded-md text-[13px] md:text-sm lg:text-base py-2 px-4 w-full'
        >
          Ver Detalles
        </Link>
      </div>
    </div>
  );
};
