import {
  AparmentDetails,
  Footer,
  HeroAparmentDetails,
  Layout,
  MainHero,
} from '@/components';
import { useRouter } from 'next/router';
import React from 'react';

const AparmentDetailsPage = () => {
  const router = useRouter();

  return (
    <section>
      <MainHero>
        <Layout title='Aparment Details'>
          <HeroAparmentDetails />
        </Layout>
      </MainHero>

      <AparmentDetails id={router.query.id as string} />

      <Footer />
    </section>
  );
};

export default AparmentDetailsPage;
