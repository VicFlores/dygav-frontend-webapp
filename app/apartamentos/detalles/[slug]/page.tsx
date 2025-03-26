import React from 'react';
import { Metadata } from 'next';
import { Footer, Hero } from '@/app/shared';
import { NavBar } from '@/components/Layout/NavBar';
import { BurgerMenu } from '@/components/Layout/BurgerMenu';
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
  const { slug } = await params;

  // Use Promise.all to fetch data in parallel instead of sequentially
  const [userInfo, accommodations, accommodationDetails] = await Promise.all([
    // Get user info
    (async () => {
      const cookieStore = cookies();
      const access_token = cookieStore.get('access_token');
      const refresh_token = cookieStore.get('refresh_token');
      return getUserFromCookies(
        undefined,
        access_token?.value,
        refresh_token?.value
      );
    })(),
    // Get all accommodations
    getAccommodations(),
    // Get specific accommodation details
    getAccommodation(slug),
  ]);

  if (!accommodationDetails) {
    return null;
  }

  const {
    aviabookid,
    public_cleaning_price,
    accommodation,
    images,
    descriptions,
    location,
    features,
    categories,
  } = accommodationDetails;

  return (
    <>
      <NavBar user={userInfo as TSession} />
      <BurgerMenu user={userInfo as TSession} />

      <Hero
        title='Detalles de tu alojamiento'
        subtitle='Conoce los detalles de tu alojamiento, para que puedas hacer una mejor eleccion segun tus necesidades.'
      />

      <PhotoGallery
        title={accommodation}
        subtitle={location.city}
        images={images}
        introductions={descriptions.es}
      />

      <AvailabilityCalendar
        avaibookId={aviabookid}
        cleaningPrice={public_cleaning_price}
      />

      <AmenitiesUbicacion amenities={features} location={location} />

      <Recommendations
        accommodations={accommodations}
        categoryId={categories[0].category_id}
      />

      <Footer />
    </>
  );
}
