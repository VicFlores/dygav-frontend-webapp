import { Layout, TouristAccomodationsFav } from '@/components';
import { useSession } from 'next-auth/react';
import Head from 'next/head';

export default function FavoriteAccomodationsPage() {
  const { data: session } = useSession();

  return (
    <section>
      <Head>
        <title>Dygav Favorites</title>
      </Head>

      <Layout session={session}>
        <TouristAccomodationsFav />
      </Layout>
    </section>
  );
}
