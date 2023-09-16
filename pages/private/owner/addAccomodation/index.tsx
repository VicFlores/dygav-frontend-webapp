import { Layout, NewAccomodation } from '@/components';
import { useSession } from 'next-auth/react';
import React from 'react';

const AddAccomodation = () => {
  const { data: session } = useSession();

  return (
    <Layout session={session}>
      <NewAccomodation />
    </Layout>
  );
};

export default AddAccomodation;
