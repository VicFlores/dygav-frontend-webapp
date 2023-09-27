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

const OwnersPage = () => {
  return (
    <section>
      <MainHero>
        <Layout title='Dygav Owners'>
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
