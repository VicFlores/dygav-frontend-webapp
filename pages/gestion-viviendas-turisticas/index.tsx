import {
  HeroOwners,
  PeachOwners,
  Information,
  Footer,
  MainHero,
  Layout,
  UtilHead,
  HelpFixedButton,
} from '@/components';
import { TSession } from '@/types';
import { getUserFromCookies } from '@/utils';
import { GetServerSideProps } from 'next';
import { useSession } from 'next-auth/react';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const user = await getUserFromCookies(context);

  return {
    props: {
      user: user || null,
    },
  };
};

const OwnersPage = ({ user }: { user: TSession }) => {
  const { data: session } = useSession();

  return (
    <section>
      <UtilHead title='DYGAV - Gestión de viviendas turísticas' content='' />

      <MainHero>
        <Layout user={user}>
          <HeroOwners />
        </Layout>
      </MainHero>

      <HelpFixedButton />

      <PeachOwners />

      <Information />

      <Footer />
    </section>
  );
};

export default OwnersPage;
