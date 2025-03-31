import { Metadata } from 'next';

import { Footer, Hero } from '../shared';
import { SearchForm } from './components/SearchForm/SearchForm';
import { ListCard } from './components';

import {
  getUserFromCookies,
  searcherCard as fakeAccommodations,
} from '@/utils';
import { cookies } from 'next/headers';
import { NavBar } from '@/components/Layout/NavBar';
import { BurgerMenu } from '@/components/Layout/BurgerMenu';
import { TSession } from '@/types';
import { getAccommodations } from './services';
import { Accommodation } from './interfaces';

export const metadata: Metadata = {
  title: 'Dygav - Alojamientos',
  description: 'Descubre tu próximo alojamiento en cualquier lugar de España',
  keywords: 'Alojamientos, España, Vacaciones',
};

const AccommodationsPage = async () => {
  const cookieStore = cookies();
  const access_token = cookieStore.get('access_token');
  const refresh_token = cookieStore.get('refresh_token');

  const [user, realAccommodations] = await Promise.all([
    getUserFromCookies(undefined, access_token?.value, refresh_token?.value),
    getAccommodations(),
  ]);

  // Combine both accommodation sources
  // Using a Set to avoid duplicates if there are any common IDs
  const combinedAccommodations: any[] = [
    ...realAccommodations,
    ...fakeAccommodations,
  ];

  return (
    <>
      <NavBar user={user as TSession} />
      <BurgerMenu user={user as TSession} />

      <Hero
        title='¿A Donde Te Apetece Ir?'
        subtitle='Estás a unos clics de tu nuevo lugar favorito'
      >
        <SearchForm />
      </Hero>

      <ListCard accommodations={combinedAccommodations} />

      <Footer />
    </>
  );
};

export default AccommodationsPage;
