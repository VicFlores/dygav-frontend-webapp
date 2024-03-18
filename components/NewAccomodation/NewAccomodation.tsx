import { useEffect } from 'react';
import NewAccomodationForm from './NewAccomodationForm';
import { axiosConfig } from '@/utils';

export const NewAccomodation = () => {
  useEffect(() => {
    const startReservationsService = async () => {
      await axiosConfig.get('/api/accomodations/checkingReservations');
    };

    startReservationsService();
  }, []);

  return (
    <section className='px-8 space-y-14 mb-48'>
      <p className=' text-black900/[.7] border-b-[1px] mt-10 text-2xl text-center md:text-left md:text-3xl lg:mt-16 lg:text-4xl'>
        Asigna un nuevo alojamiento
      </p>

      <NewAccomodationForm />
    </section>
  );
};
