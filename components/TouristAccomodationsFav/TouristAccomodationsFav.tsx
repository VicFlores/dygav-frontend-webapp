import { searcherCard } from '@/utils';
import React from 'react';
import { SearcherCards } from '@/components';

export const TouristAccomodationsFav = () => {
  const limitedSearcherCard = searcherCard.slice(0, 3); // Extract the first 3 items from the array

  return (
    <div className='px-8 space-y-12 mb-24'>
      <p className=' text-black900/[.7] border-b-2 mt-10 text-2xl text-center md:text-left md:text-3xl lg:mt-16 lg:text-4xl'>
        Mis alojamientos favoritos
      </p>

      {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-32 mb-56 gap-y-20'>
        {limitedSearcherCard.map((item, index) => (
          <SearcherCards key={index} item={item} />
        ))}
      </div> */}

      <div className='flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center space-y-8 border-[1px] border-dashed h-[266px] w-[717px]'>
          <p className=' text-black900/[.7] lg:text-3xl'>
            ¡Aún no tienes alojamientos favoritos!
          </p>
        </div>
      </div>
    </div>
  );
};
