import { Metadata } from 'next';

import { Footer, Hero } from '../shared';
import { SearchForm } from './components/SearchForm/SearchForm';
import { ListCard } from './components';

import { getUserFromCookies } from '@/utils';
import { cookies } from 'next/headers';
import { NavBar } from '@/components/Layout/NavBar';
import { BurgerMenu } from '@/components/Layout/BurgerMenu';
import { TSession } from '@/types';

export const metadata: Metadata = {
  title: 'Accomodations',
  description: 'Accomodations for the wedding',
  keywords: 'accomodations, wedding',
};

const AccommodationsPage = async () => {
  const cookieStore = await cookies();
  const access_token = cookieStore.get('access_token');
  const refresh_token = cookieStore.get('refresh_token');
  const user = await getUserFromCookies(
    undefined,
    access_token?.value,
    refresh_token?.value
  );

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

      <ListCard />

      <Footer />
    </>
  );
};

export default AccommodationsPage;
