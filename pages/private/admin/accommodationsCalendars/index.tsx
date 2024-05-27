import { useSession } from 'next-auth/react';
import { Layout, AdminDashboard } from '@/components';
import { CalendarByAccommodation } from '@/components/AdminMultiCalendar/CalendarByAccommodation';

export default function AdminDashboardPage() {
  const { data: session } = useSession();

  return (
    <section>
      <Layout session={session}>
        {session ? (
          <CalendarByAccommodation />
        ) : (
          <>
            <h1>Waiting</h1>
          </>
        )}
      </Layout>
    </section>
  );
}
