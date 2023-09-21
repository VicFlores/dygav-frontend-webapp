import {
  BurgerMenu,
  Contact,
  ContactYou,
  Footer,
  GetLicense,
  HeroLicense,
  LicenseTourist,
  MainHero,
  NavBar,
} from '@/components';

export default function License() {
  return (
    <section>
      <MainHero>
        <NavBar />
        <BurgerMenu />
        <HeroLicense />
      </MainHero>

      <GetLicense />

      <ContactYou />

      <LicenseTourist />

      <Contact />

      <Footer />
    </section>
  );
}
