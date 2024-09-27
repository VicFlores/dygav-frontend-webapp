import { Layout, ReservationCalendar } from '@/components';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const AccomodationCallenderPage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <Layout session={session}>
      <ReservationCalendar id={router.query.id as string} />
    </Layout>
  );
};

export default AccomodationCallenderPage;
