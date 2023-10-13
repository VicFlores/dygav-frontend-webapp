import { TSearcherCard, searcherCard } from '@/utils';
import Image from 'next/legacy/image';
import Link from 'next/link';
import { FC, useState } from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';

export const SearcherCards: FC<{ item: TSearcherCard }> = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      id='CardContainer'
      key={item.id}
      className='w-[300px] md:w-[320px] lg:w-[347px] self-center justify-self-center h-fit'
    >
      <div id='CardHeader' className='space-y-4 '>
        <Image
          src={item.src[0]}
          alt={item.alt}
          width={item.width}
          height={item.height}
        />
        <p className='text-center text-black900 text-xs md:text-sm lg:text-base'>
          {item.imgSubtitle}
        </p>
      </div>

      <div id='CardBody' className='space-y-4 mt-6 mb-6'>
        <p className='text-[18px] md:text-[20px] lg:text-[25px] text-center md:text-start'>
          {item.title}
        </p>
        <p className='text-[13px] md:text-[14px] lg:text-base'>
          {expanded ? item.subtitle : `${item.subtitle.slice(0, 100)}...`}
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
      </div>

      <div className='flex justify-center items-center relative mt-4 '>
        <AiOutlineCheckCircle className='w-5 md:h-5 text-p600 absolute top-1/2 -translate-y-1/2 right-5 md:right-12 lg:right-10' />
        <Link
          href={`/aparmentDetails/${item.id}`}
          passHref
          className='text-center text-p600 hover:bg-gray300 border-[1px] border-p600 rounded-md text-[13px] md:text-sm lg:text-base py-2 px-4 w-full'
        >
          Ver Detalles
        </Link>
      </div>
    </div>
  );
};
