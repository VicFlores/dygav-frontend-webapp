import { useSession } from 'next-auth/react';
import { Dashboard, Layout } from '@/components';

export default function DashboardPage() {
  const { data: session } = useSession();

  return (
    <section>
      <Layout session={session} title='Dygav Dash'>
        <Dashboard />
      </Layout>
    </section>
  );
}
