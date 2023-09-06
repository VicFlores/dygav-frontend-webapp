import { useSession } from 'next-auth/react';
import { Layout, Reservation } from '@/components';

const ReservationPage = () => {
  const { data: session } = useSession();

  return (
    <section>
      <Layout session={session} title='Dygav Reservation'>
        <Reservation />
      </Layout>
    </section>
  );
};

export default ReservationPage;
