import React, { useState } from 'react';
import { TouristAccomodationsFav } from './TouristAccomodationsFav';
import { TourisBlogPostsFav } from './TourisBlogPostsFav';
import useDictionary from '@/app/hooks/useDictionary';

export const TouristFavorites = () => {
  const [activeTab, setActiveTab] = useState('accomodations');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'accomodations':
        return <TouristAccomodationsFav />;
      case 'blogPosts':
        return <TourisBlogPostsFav />;
      default:
        return null;
    }
  };

  const dictionary = useDictionary('favorites');

  return (
    <div className='px-8 space-y-12 mb-24'>
      <div className='flex flex-col md:flex-row justify-center items-center md:justify-between md:items-end border-b-[1px]'>
        <p className=' text-black900/[.7]  mt-10 text-2xl text-center md:text-left md:text-3xl lg:mt-16 lg:text-4xl'>
          {activeTab === 'accomodations'
            ? `${dictionary.favorites?.accommodationTitle}`
            : `${dictionary.favorites?.articleTitle}`}
        </p>

        <ul className='flex flex-col space-y-3 md:space-y-0 md:flex-row justify-center items-center md:space-x-10 mt-8  lg:text-lg'>
          <li
            className={`cursor-pointer ${
              activeTab === 'accomodations' ? 'text-p600' : ''
            }`}
            onClick={() => setActiveTab('accomodations')}
          >
            {dictionary.favorites?.accommodations}
          </li>

          <li
            className={`cursor-pointer ${
              activeTab === 'blogPosts' ? 'text-p600' : ''
            }`}
            onClick={() => setActiveTab('blogPosts')}
          >
            {dictionary.favorites?.articles}
          </li>
        </ul>
      </div>

      {renderTabContent()}
    </div>
  );
};
