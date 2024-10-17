import { SearchBookings } from '@/app/components';
import { Navbar } from '@/app/components/shared';
import { Metadata } from 'next';
import { cookies } from 'next/headers';

export const metadata: Metadata = {
  title: 'Owner Search Bookings',
  description: 'Owner Search Bookings page',
};

export default async function SearchBookingsPage() {
  const accessToken = cookies().get('access_token');

  return (
    <section>
      <Navbar accessToken={accessToken?.value} />

      <SearchBookings />
    </section>
  );
}
