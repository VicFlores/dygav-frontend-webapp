import {
  BurgerMenu,
  Contact,
  ContactYou,
  Footer,
  GetLicense,
  HeroLicense,
  LicenseTourist,
  NavBar,
} from '@/components';

export default function License() {
  return (
    <section>
      <div
        className={
          'w-full h-screen bg-heroContent bg-center bg-cover bg-no-repeat '
        }
      >
        <NavBar />
        <BurgerMenu />
        <HeroLicense />
      </div>

      <GetLicense />

      <ContactYou />

      <LicenseTourist />

      <Contact />

      <Footer />
    </section>
  );
}
