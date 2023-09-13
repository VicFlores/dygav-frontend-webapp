import { useSession } from 'next-auth/react';
import { Layout, OwnerDashboard } from '@/components';

export default function OwnerDashboardPage() {
  const { data: session } = useSession();

  return (
    <section>
      <Layout session={session} title='Dygav Dash'>
        <OwnerDashboard />
      </Layout>
    </section>
  );
}
