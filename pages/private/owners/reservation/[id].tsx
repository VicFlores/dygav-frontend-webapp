import { Layout, Reservation } from '@/components';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';

const ReservationDetailsPage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <Layout session={session}>
      <Reservation id={router.query.id as string} />
    </Layout>
  );
};

export default ReservationDetailsPage;
