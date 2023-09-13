import {
  Hero,
  Carousel,
  AboutUs,
  OurComments,
  BrandContent,
  NavBar,
  Footer,
} from '@/components';

export default function HomePage() {
  return (
    <section>
      <div className={'w-full bg-heroContent bg-center bg-cover bg-no-repeat '}>
        <NavBar />
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
