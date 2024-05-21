import { useSession } from 'next-auth/react';
import { Layout, AdminMultiCalendar } from '@/components';

export default function AdminDashboardPage() {
  const { data: session } = useSession();

  return (
    <section>
      <Layout session={session}>
        {session ? (
          <AdminMultiCalendar />
        ) : (
          <>
            <h1>Waiting</h1>
          </>
        )}
      </Layout>
    </section>
  );
}
