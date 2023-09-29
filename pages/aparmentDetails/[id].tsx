import {
  AparmentDetails,
  Footer,
  HeroAparmentDetails,
  Layout,
  MainHero,
} from '@/components';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';

const AparmentDetailsPage = () => {
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <section>
      <MainHero>
        <Layout title='Aparment Details' session={session}>
          <HeroAparmentDetails />
        </Layout>
      </MainHero>

      <AparmentDetails id={router.query.id as string} />

      <Footer />
    </section>
  );
};

export default AparmentDetailsPage;
