import { useSession } from 'next-auth/react';
import { Layout, OwnersFinanzas } from '@/components';
import Head from 'next/head';

export default function OwnerFianzasdPage() {
  const { data: session } = useSession();

  return (
    <section>
      <Head>
        <title>Dygav Finanzas</title>
      </Head>

      <Layout session={session}>
        <OwnersFinanzas />
      </Layout>
    </section>
  );
}
