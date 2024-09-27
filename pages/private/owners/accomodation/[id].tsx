import { Layout, OwnerAccomodationReservationDetails } from '@/components';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const AccomodationPage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <Layout session={session}>
      <OwnerAccomodationReservationDetails id={router.query.id as string} />
    </Layout>
  );
};

export default AccomodationPage;
