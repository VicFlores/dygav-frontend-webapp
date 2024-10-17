import { Calendar } from '@/app/components';
import { Navbar } from '@/app/components/shared';
import { Metadata } from 'next';
import { cookies } from 'next/headers';

export const metadata: Metadata = {
  title: 'Owner Calendar',
  description: 'Owner Calendar page',
};

const CalendarPage = () => {
  const accessToken = cookies().get('access_token');

  return (
    <section>
      <Navbar accessToken={accessToken?.value} />

      <Calendar />
    </section>
  );
};

export default CalendarPage;
