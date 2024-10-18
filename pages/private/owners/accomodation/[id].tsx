import { Layout, OwnerAccomodationReservationDetails } from '@/components';
import { TSession } from '@/types';
import { getUserFromCookies } from '@/utils';
import { GetServerSideProps } from 'next';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const user = await getUserFromCookies(context);

  return {
    props: {
      user,
    },
  };
};

const AccomodationPage = ({ user }: { user: TSession }) => {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <Layout user={user}>
      <OwnerAccomodationReservationDetails id={router.query.id as string} />
    </Layout>
  );
};

export default AccomodationPage;
