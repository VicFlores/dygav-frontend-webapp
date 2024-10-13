import { AccommodationCalendar } from '@/app/components';
import { Navbar } from '@/app/components/shared';
import { Metadata } from 'next';
import { cookies } from 'next/headers';

export const metadata: Metadata = {
  title: 'Accommodation Calendar',
  description: 'Accommodation Calendar',
};

const AccomodationCallenderPage = ({ params }: { params: { id: string } }) => {
  const cookieStore = cookies();

  const accessToken = cookieStore.get('access_token');

  return (
    <section>
      <Navbar accessToken={accessToken?.value || ''} />

      <AccommodationCalendar id={params.id} />
    </section>
  );
};

export default AccomodationCallenderPage;
