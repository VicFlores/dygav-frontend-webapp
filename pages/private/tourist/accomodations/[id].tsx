import { Layout, TouristAccomodations } from '@/components';
import { useSession } from 'next-auth/react';
import React from 'react';
import { useRouter } from 'next/router';

export default function TouristAccomodationPage() {
  const { data: session } = useSession();
  const {
    query: { id },
  } = useRouter();

  return (
    <section>
      <Layout session={session} title='Dygav Accomodations'>
        <TouristAccomodations id={id as string} />
      </Layout>
    </section>
  );
}
