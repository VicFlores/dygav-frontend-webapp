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
    priceInfo = `${item.location.city}`;
  }

  /* Semana: € ${currentUnitSeason.weekPrice} noche
      Fin de Semana: € ${currentUnitSeason.weekendPrice} noche */

  return (
    <div
      id='CardContainer'
      key={item.id}
      className='w-[360px] md:w-[350px] lg:w-[374px] self-center justify-self-center h-fit'
    >
      <figure className='w-auto h-[270px] relative'>
        <Image
          src={item.images[0].ORIGINAL}
          alt={item.alt}
          layout='fill'
          priority
          className='rounded-t-xl'
        />
      </figure>

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
