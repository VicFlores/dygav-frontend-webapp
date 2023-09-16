import { getSession, useSession } from 'next-auth/react';
import { Layout, AdminDashboard } from '@/components';

export default function OwnerDashboardPage() {
  const { data: session } = useSession();

  return (
    <section>
      <Layout session={session} title='Dygav Dash'>
        {session ? (
          <AdminDashboard session={session} />
        ) : (
          <>
            <h1>Waiting</h1>
          </>
        )}
      </Layout>
    </section>
  );
}
