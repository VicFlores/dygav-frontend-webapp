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
import { useSession } from 'next-auth/react';

const OwnersPage = () => {
  const { data: session } = useSession();

  return (
    <section>
      <UtilHead title='DYGAV - Gestión de viviendas turísticas' content='' />

      <MainHero>
        <Layout session={session}>
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
