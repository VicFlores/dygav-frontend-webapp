import { useSession } from 'next-auth/react';
import { TouristDashboard, Layout } from '@/components';
import Head from 'next/head';
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

export default function DashboardPage({ user }: { user: TSession }) {
  const { data: session } = useSession();

  return (
    <section>
      <Head>
        <title>Dygav Dash</title>
      </Head>

      <Layout user={user}>
        <TouristDashboard />
      </Layout>
    </section>
  );
}
