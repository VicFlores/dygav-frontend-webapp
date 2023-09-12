import { useSession } from 'next-auth/react';
import { TouristDashboard, Layout } from '@/components';

export default function DashboardPage() {
  const { data: session } = useSession();

  return (
    <section>
      <Layout session={session} title='Dygav Dash'>
        <TouristDashboard />
      </Layout>
    </section>
  );
}
