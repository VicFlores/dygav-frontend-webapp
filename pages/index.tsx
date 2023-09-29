import {
  Hero,
  Carousel,
  AboutUs,
  OurComments,
  BrandContent,
  Footer,
  MainHero,
  Layout,
} from '@/components';
import { useSession } from 'next-auth/react';

export default function HomePage() {
  const { data: session } = useSession();
  return (
    <section>
      <MainHero>
        <Layout title='Dygav Home' session={session}>
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
