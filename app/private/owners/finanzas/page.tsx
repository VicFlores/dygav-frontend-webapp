import { Metadata } from 'next';
import { cookies } from 'next/headers';
import { Navbar } from '@/app/components/shared';
import { Finanzas } from '@/app/components';

export const metadata: Metadata = {
  title: 'Owner Finanzas',
  description: 'Owner Finanzas page',
};

export default function OwnerFianzasdPage() {
  const cookieStore = cookies();

  const accessToken = cookieStore.get('access_token');

  return (
    <section>
      <Navbar accessToken={accessToken?.value || ''} />

      <Finanzas accessToken={accessToken?.value || ''} />
    </section>
  );
}
