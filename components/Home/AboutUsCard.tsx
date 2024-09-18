import useDictionary from '@/app/hooks/useDictionary';
import React from 'react';

export const AboutUsCard = () => {
  const dictionary = useDictionary('home');

  return (
    <div className='flex items-center justify-center mt-2'>
      <div className=' grid lg:grid-cols-3 md:grid-cols-1 gap-10 lg:gap-5 md:gap-8 pt-10 pb-10'>
        <div className='w-[340px] md:w-[320px] h-auto shadow-md rounded-lg bg-gray border-[1px] border-p600'>
          <div className='px-12 lg:px-7 md:px-10 pt-7'>
            <div className='w-full h-[180px] bg-center bg-cover bg-welcomeWorld ' />
          </div>

          <div className='w-full h-auto pb-7'>
            <p className='text-black700 text-center lg:text-xl md:text-lg px-4 py-4'>
              {dictionary.aboutUsCard?.worldTitle}
            </p>

            <p className='text-black900 text-justify lg:text-start text-xs lg:text-sm md:text-sm px-4'>
              {dictionary.aboutUsCard?.worldSubtitle}
            </p>
          </div>
        </div>

        <div className='w-[340px] md:w-[320px] h-auto shadow-md rounded-lg bg-gray border-[1px] border-p600'>
          <div className='px-12 lg:px-7 md:px-10 pr-7 pt-7'>
            <div className='w-full h-[180px] bg-center bg-cover bg-digitalAparment ' />
          </div>

          <div className='w-full h-auto pb-7'>
            <p className='text-black700 text-center lg:text-xl md:text-lg px-4 py-4'>
              {dictionary.aboutUsCard?.apartmentTitle}
            </p>

            <p className='text-black900 text-justify lg:text-start text-xs lg:text-sm md:text-sm px-4'>
              {dictionary.aboutUsCard?.apartmentSubtitle}
            </p>
          </div>
        </div>

        <div className='w-[340px] md:w-[320px] h-auto shadow-md rounded-lg bg-gray border-[1px] border-p600'>
          <div className='px-12 lg:px-7 md:px-10 pr-7 pt-7'>
            <div className='w-full h-[200px] bg-center bg-cover bg-aboutUsAviable ' />
          </div>

          <div className='w-full h-auto pb-7'>
            <p className='text-black700 text-center lg:text-xl md:text-lg px-4 py-4'>
              {dictionary.aboutUsCard?.aviableTitle}
            </p>

            <p className='text-black900 text-justify lg:text-start text-xs lg:text-sm md:text-sm px-4'>
              {dictionary.aboutUsCard?.aviableSubtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
