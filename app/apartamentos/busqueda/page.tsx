import React from 'react';
import { NavBar } from '@/components/Layout/NavBar';
import { BurgerMenu } from '@/components/Layout/BurgerMenu';
import { TSession } from '../../../types/UI/TSession';
import { cookies } from 'next/headers';
import { getUserFromCookies } from '@/utils';
import { Footer, Hero } from '@/app/shared';
import { crmApi } from '@/app/config';
import { ListCard } from '../components';
import { Metadata } from 'next';
import { SearchForm } from '../components/SearchForm/SearchForm';

export const metadata: Metadata = {
  title: 'Dygav - Busqueda de Alojamiento',
  description: 'Encuentra tu alojamiento ideal en cualquier lugar de España',
  keywords: 'Alojamientos, España, Vacaciones',
};

const BusquedaPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const cookieStore = await cookies();
  const access_token = cookieStore.get('access_token');
  const refresh_token = cookieStore.get('refresh_token');
  const user = await getUserFromCookies(
    undefined,
    access_token?.value,
    refresh_token?.value
  );

  const { city, checkin, checkout, guests } = await searchParams;

  const accommodations = await crmApi.get(
    `/accommodations/search?city=${city}&checkin=${checkin}&checkout=${checkout}&guests=${guests}`
  );

  return (
    <>
      <NavBar user={user as TSession} />
      <BurgerMenu user={user as TSession} />

      <Hero
        title='Descubre tu próximo alojamiento'
        subtitle='Encuentra tu alojamiento ideal en cualquier lugar de España'
      >
        <SearchForm />
      </Hero>

      <ListCard accommodations={accommodations.data} />

      <Footer />
    </>
  );
};

export default BusquedaPage;
