import React from 'react';
import { Metadata } from 'next';
import { Footer, Hero } from '@/app/shared';
import { BurgerMenu } from '@/components/Layout/BurgerMenu';
import { NavBar } from '@/components/Layout/NavBar';
import {
  AmenitiesUbicacion,
  AvailabilityCalendar,
  PhotoGallery,
  Recommendations,
} from './components';
import { getAccommodations } from '../../services/getAccommodations';
import { getAccommodation } from './services/getAccommodation';
import { TSession } from '@/types';
import { getUserFromCookies } from '@/utils';
import { cookies } from 'next/headers';

export const metadata: Metadata = {
  title: 'Accommodation Details',
  description: 'Accommodation Details Page',
  keywords: 'Accommodation, Details',
};

export default async function AccommodationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const cookieStore = cookies();
  const access_token = cookieStore.get('access_token');
  const refresh_token = cookieStore.get('refresh_token');
  const user = await getUserFromCookies(
    undefined,
    access_token?.value,
    refresh_token?.value
  );

  const { slug } = await params;

  const [accommodations, accommodationDetails] = await Promise.all([
    getAccommodations(),
    getAccommodation(slug),
  ]);

  if (!accommodationDetails) {
    return null;
  }

  return (
    <>
      <NavBar user={user as TSession} />
      <BurgerMenu user={user as TSession} />

      <Hero
        title='Detalles de tu alojamiento'
        subtitle='Conoce los detalles de tu alojamiento, para que puedas hacer una mejor eleccion segun tus necesidades.'
      />

      <PhotoGallery
        title={accommodationDetails.accommodation}
        subtitle={accommodationDetails.location.city}
        images={accommodationDetails.images}
        introductions={accommodationDetails.descriptions.es}
      />

      <AvailabilityCalendar
        avaibookId={accommodationDetails.aviabookid}
        cleaningPrice={accommodationDetails.public_cleaning_price}
      />

      <AmenitiesUbicacion
        amenities={accommodationDetails.features}
        location={accommodationDetails.location}
      />

      <Recommendations
        accommodations={accommodations}
        categoryId={accommodationDetails.categories[0].category_id}
      />

      <Footer />
    </>
  );
}
