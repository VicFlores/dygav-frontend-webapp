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
import { TSession } from '@/types';
import { getUserFromCookies } from '@/utils';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const user = await getUserFromCookies(context);

  return {
    props: {
      user,
    },
  };
};

export default function HomePage({ user }: { user: TSession }) {
  return (
    <section>
      <UtilHead title='Dygav Home' content='' />

      <MainHero>
        <Layout user={user}>
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
