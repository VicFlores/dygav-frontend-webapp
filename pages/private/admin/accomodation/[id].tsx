import { Layout } from '@/components';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const AccomodationPage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <Layout session={session}>
      <h1>Hola desde Accomodation Page</h1>
    </Layout>
  );
};

export default AccomodationPage;
