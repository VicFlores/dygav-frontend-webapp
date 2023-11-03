import { TSearcherCard, searcherCard } from '@/utils';
import Image from 'next/legacy/image';
import Link from 'next/link';
import { FC, useState } from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';

export const SearcherRealCards: FC<{ item: any }> = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

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
    priceInfo = `${item.location.city}
      Semana: € ${currentUnitSeason.weekPrice} noche
      Fin de Semana: € ${currentUnitSeason.weekendPrice} noche`;
  }

  return (
    <div
      id='CardContainer'
      key={item.id}
      className='w-[300px] md:w-[320px] lg:w-[347px] self-center justify-self-center h-fit'
    >
      <div id='CardHeader' className='space-y-4 '>
        <figure className='w-auto h-[245px]  relative'>
          <Image
            src={item.images[0].ORIGINAL}
            alt={item.alt}
            layout='fill'
            priority
          />
        </figure>
        <p className='text-center text-black900 text-xs md:text-sm lg:text-base whitespace-pre-line'>
          {priceInfo}
        </p>
      </div>

      <div id='CardBody' className='space-y-4 mt-6 mb-6'>
        <p className='text-[18px] md:text-[20px] lg:text-[25px] text-center md:text-start'>
          {item.name}
        </p>
        <p className='text-[13px] md:text-[14px] lg:text-base'>
          {expanded
            ? item.introduction.es
            : `${item.introduction.es.slice(0, 100)}...`}
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
            {item.features.n_hab}
          </p>
          <p className='text-[10px] lg:text-[12px]'>Dormitorios</p>
        </div>

        <div className='bg-p600 pt-1 pb-1 w-[119px] h-full text-center '>
          <p className='font-semibold text-[13px] md:text-[14px] lg:text-[16px]'>
            {item.features.n_banos}
          </p>
          <p className='text-[10px] lg:text-[12px]'>Baños</p>
        </div>

        <div className='bg-p600 pt-1 pb-1 w-[119px] h-full text-center '>
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
