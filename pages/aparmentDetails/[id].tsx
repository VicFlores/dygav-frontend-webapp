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
    <>
      <MainHero>
        <Layout title='Aparment Details'>
          <HeroAparmentDetails />
        </Layout>
      </MainHero>

      <AparmentDetails id={router.query.id as string} />

      <Footer />
    </>
  );
};

export default AparmentDetailsPage;
