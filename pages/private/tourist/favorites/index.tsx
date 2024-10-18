import { Layout, TouristFavorites } from '@/components';
import { TSession } from '@/types';
import { getUserFromCookies } from '@/utils';
import { GetServerSideProps } from 'next';
import { useSession } from 'next-auth/react';
import Head from 'next/head';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const user = await getUserFromCookies(context);

  return {
    props: {
      user,
    },
  };
};

export default function FavoritesPage({ user }: { user: TSession }) {
  const { data: session } = useSession();

  return (
    <section>
      <Head>
        <title>Dygav Favorites</title>
      </Head>

      <Layout user={user}>
        <TouristFavorites />
      </Layout>
    </section>
  );
}
