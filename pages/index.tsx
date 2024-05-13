import {
  Hero,
  Carousel,
  AboutUs,
  OurComments,
  Footer,
  MainHero,
  Layout,
  UtilHead,
} from '@/components';
import { useSession } from 'next-auth/react';

export default function HomePage() {
  const { data: session } = useSession();
  return (
    <section>
      <UtilHead title='Dygav Home' content='' />

      <MainHero>
        <Layout session={session}>
          <Hero />
        </Layout>
      </MainHero>

      <Carousel />

      <AboutUs />

      <OurComments />

      <Footer />
    </section>
  );
}
