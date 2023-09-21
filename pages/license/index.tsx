import {
  BurgerMenu,
  Contact,
  ContactYouLicense,
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

      <ContactYouLicense />

      <LicenseTourist />

      <Contact />

      <Footer />
    </section>
  );
}
