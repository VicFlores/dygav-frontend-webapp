import { useState } from 'react';
import { ActiveTrips, CanceledTrips, PastTrips } from '@/components';

export const TouristDashboard = () => {
  const [activeTab, setActiveTab] = useState('active');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'active':
        return <ActiveTrips />;
      case 'past':
        return <PastTrips />;
      case 'canceled':
        return <CanceledTrips />;
      default:
        return null;
    }
  };

  return (
    <div className='px-8 space-y-12 mb-24'>
      <div className='flex flex-col space-y-6 md:space-y-0 md:flex-row md:items-end md:justify-between border-b-[1px]'>
        <p className=' text-black900/[.7]  mt-10 text-2xl text-center md:text-left md:text-3xl lg:mt-16 lg:text-4xl'>
          Mis reservas
        </p>

        <ul className='flex flex-row justify-center items-center space-x-12  lg:text-lg'>
          <li
            className={`cursor-pointer ${
              activeTab === 'active' ? 'text-p600' : ''
            }`}
            onClick={() => setActiveTab('active')}
          >
            Activas
          </li>
          <li
            className={`cursor-pointer ${
              activeTab === 'past' ? 'text-p600' : ''
            }`}
            onClick={() => setActiveTab('past')}
          >
            Pasadas
          </li>
          <li
            className={`cursor-pointer ${
              activeTab === 'canceled' ? 'text-p600' : ''
            }`}
            onClick={() => setActiveTab('canceled')}
          >
            Canceladas
          </li>
        </ul>
      </div>

      {renderTabContent()}
    </div>
  );
};
