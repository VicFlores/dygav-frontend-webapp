import {
  Hero,
  Carousel,
  AboutUs,
  OurComments,
  BrandContent,
  NavBar,
  Footer,
  BurgerMenu,
} from '@/components';

export default function HomePage() {
  return (
    <section>
      <div className={'w-full bg-heroContent bg-center bg-cover bg-no-repeat '}>
        <NavBar />
        <BurgerMenu />
        <Hero />
      </div>

      <Carousel />

      <AboutUs />

      <OurComments />

      <BrandContent />

      <Footer />
    </section>
  );
}
