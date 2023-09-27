import {
  BurgerMenu,
  Contact,
  ContactYouLicense,
  Footer,
  GetLicense,
  HeroLicense,
  Layout,
  LicenseTourist,
  MainHero,
  NavBar,
} from '@/components';

export default function License() {
  return (
    <section>
      <MainHero>
        <Layout title='Dygav Licenses'>
          <HeroLicense />
        </Layout>
      </MainHero>

      <GetLicense />

      <LicenseTourist />
      <ContactYouLicense />


      <Contact />

      <Footer />
    </section>
  );
}
