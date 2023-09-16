import { getSession, useSession } from 'next-auth/react';
import { Layout, OwnerDashboard } from '@/components';

export default function OwnerDashboardPage() {
  const { data: session } = useSession();

  return (
    <section>
      <Layout session={session} title='Dygav Dash'>
        {session ? (
          <OwnerDashboard session={session} />
        ) : (
          <>
            <h1>Waiting</h1>
          </>
        )}
      </Layout>
    </section>
  );
}
