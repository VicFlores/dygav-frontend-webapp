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
  Layout,
} from '@/components';

export default function HomePage() {
  return (
    <section>
      <MainHero>
        <Layout title='Dygav Home'>
          <Hero />
        </Layout>
      </MainHero>

      <Carousel />

      <AboutUs />

      <OurComments />

      <BrandContent />

      <Footer />
    </section>
  );
}
