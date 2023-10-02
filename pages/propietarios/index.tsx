import {
  HeroOwners,
  PeachOwners,
  ContactYou,
  Information,
  Contact,
  NavBar,
  Footer,
  BurgerMenu,
  MainHero,
  Layout,
} from '@/components';
import { useSession } from 'next-auth/react';

const OwnersPage = () => {
  const { data: session } = useSession();

  return (
    <section>
      <MainHero>
        <Layout title='Dygav Owners' session={session}>
          <HeroOwners />
        </Layout>
      </MainHero>

      <PeachOwners />

      <Information />

      <Contact />

      <ContactYou />

      <Footer />
    </section>
  );
};

export default OwnersPage;
