import { getSession, useSession } from 'next-auth/react';
import { Layout, OwnersReservation } from '@/components';
import Head from 'next/head';

export default function OwnersReservationPage() {
  const { data: session } = useSession();

  return (
    <section>
      <Head>
        <title>Dygav Dash</title>
      </Head>

      <Layout session={session}>
        {session ? (
          <OwnersReservation session={session} />
        ) : (
          <>
            <h1>Waiting</h1>
          </>
        )}
      </Layout>
    </section>
  );
}
