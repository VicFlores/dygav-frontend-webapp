import {
  Hero,
  Carousel,
  AboutUs,
  OurComments,
  BrandContent,
  NavBar,
  Footer,
  BurgerMenu,
  MainHero,
} from '@/components';

export default function HomePage() {
  return (
    <section>
      <MainHero>
        <NavBar />
        <BurgerMenu />
        <Hero />
      </MainHero>

      <Carousel />

      <AboutUs />

      <OurComments />

      <BrandContent />

      <Footer />
    </section>
  );
}
