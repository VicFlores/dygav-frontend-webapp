import useDictionary from '@/app/hooks/useDictionary';
import React from 'react';

export const HeroOwners = () => {
  const dictionary = useDictionary('owners');
  return (
    <section className='text-white px-16 pb-48 pt-20 space-y-4'>
      <h1 className='lg:text-[45px] text-center md:text-start text-[30px] md:text-[38px] font-semibold'>
        {dictionary.heroOwners?.title}
      </h1>
      <p className='text-xl lg:text-[27px] md:text-[22px] font-semibold text-center lg:text-start'>
        {dictionary.heroOwners?.description}
      </p>
    </section>
  );
};
