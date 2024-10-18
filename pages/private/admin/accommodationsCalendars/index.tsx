import { useSession } from 'next-auth/react';
import { Layout, AdminDashboard } from '@/components';
import { CalendarByAccommodation } from '@/components/AdminMultiCalendar/CalendarByAccommodation';
import { TSession } from '@/types';
import { getUserFromCookies } from '@/utils';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const user = await getUserFromCookies(context);

  return {
    props: {
      user,
    },
  };
};

export default function AdminDashboardPage({ user }: { user: TSession }) {
  const { data: session } = useSession();

  return (
    <section>
      <Layout user={user}>
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
