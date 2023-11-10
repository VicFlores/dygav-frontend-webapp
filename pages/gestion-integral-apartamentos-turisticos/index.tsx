import {
  HeroOwners,
  PeachOwners,
  Information,
  Contact,
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
      <UtilHead title='Dygav Owners' content='' />

      <MainHero>
        <Layout session={session}>
          <HeroOwners />
        </Layout>
      </MainHero>

      <HelpFixedButton />

      <PeachOwners />

      <Information />

      <Contact />

      <Footer />
    </section>
  );
};

export default OwnersPage;
