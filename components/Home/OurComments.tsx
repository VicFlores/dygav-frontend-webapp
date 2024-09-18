import React from 'react';
import { OurCommentsCard } from '..';
import useDictionary from '@/app/hooks/useDictionary';

export const OurComments = () => {
  const dictionary = useDictionary('home');

  return (
    <section className='w-full h-auto grid mt-28 mb-[40px]'>
      <div className='px-10 divide-y-2 md:divide-y-4 divide-p600'>
        <p className='text-[20px] lg:text-[34px] md:text-[28px] text-center  text-black700'>
          {dictionary.ourComments?.title}
        </p>
        <p className='text-[18px] lg:text-[31px] md:text-[26px] text-center text-black900 pt-1'>
          {dictionary.ourComments?.subtitle}
        </p>
      </div>

      <OurCommentsCard />
    </section>
  );
};
