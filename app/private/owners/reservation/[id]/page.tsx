import { ReservationDetails } from '@/app/components';
import { Navbar } from '@/app/components/shared';
import { Metadata } from 'next';
import { cookies } from 'next/headers';

export const metadata: Metadata = {
  title: 'Reservation Details',
  description: 'Reservation Details page',
};

export default function ReservationDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const accessToken = cookies().get('access_token');

  return (
    <section>
      <Navbar accessToken={accessToken?.value} />

      <ReservationDetails id={params.id} />
    </section>
  );
}
