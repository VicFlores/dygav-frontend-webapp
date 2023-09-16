import { useSession } from 'next-auth/react';
import { Layout, AdminDashboard } from '@/components';

export default function AdminDashboardPage() {
  const { data: session } = useSession();

  return (
    <section>
      <Layout session={session} title='Dygav Dash'>
        {session ? (
          <AdminDashboard />
        ) : (
          <>
            <h1>Waiting</h1>
          </>
        )}
      </Layout>
    </section>
  );
}
