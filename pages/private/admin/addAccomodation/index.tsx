import { Layout, NewAccomodation } from '@/components';
import { TSession } from '@/types';
import { getUserFromCookies } from '@/utils';
import { GetServerSideProps } from 'next';
import { useSession } from 'next-auth/react';
import React from 'react';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const user = await getUserFromCookies(context);

  return {
    props: {
      user: user || null,
    },
  };
};

const AddAccomodation = ({ user }: { user: TSession }) => {
  const { data: session } = useSession();

  return (
    <Layout user={user}>
      <NewAccomodation />
    </Layout>
  );
};

export default AddAccomodation;
