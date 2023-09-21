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
} from '@/components';

const OwnersPage = () => {
  return (
    <section>
      <MainHero>
        <NavBar />
        <BurgerMenu />

        <HeroOwners />
      </MainHero>

      <PeachOwners />

      <ContactYou />

      <Information />

      <Contact />

      <Footer />
    </section>
  );
};

export default OwnersPage;
