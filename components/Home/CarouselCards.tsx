import React, { FC } from 'react';

type TCardContent = {
  bg: string;
  title: string;
};

export const CarouselCards: FC<TCardContent> = ({ bg, title }) => {
  return (
    <div className=' w-[240px] h-72 shadow-md rounded-lg overflow-hidden flex-none transform transition-all hover:-translate-y-4 hover:shadow-xl'>
      <div className={`w-full h-full bg-cover flex items-end ${bg}`}>
        <p className='text-white font-bold text-xl px-4 py-2'>{title}</p>
      </div>
    </div>
  );
};
