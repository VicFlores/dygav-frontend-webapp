import { searcherCard } from '@/utils';
import React, { FC } from 'react';

export const AparmentDetails: FC<{ id: string }> = ({ id }) => {
  const infoAparment = searcherCard.filter((item) => item.id === Number(id));

  return (
    <div className='px-8 space-y-12 mb-24'>
      <div className='flex flex-col md:flex-row justify-center items-center md:justify-between md:items-end border-b-[1px]'>
        <p className=' text-black900/[.7]  mt-10 text-2xl text-center md:text-left md:text-3xl lg:mt-16 lg:text-4xl'>
          Alojamiento: {infoAparment[0].imgSubtitle}
        </p>
      </div>
    </div>
  );
};
