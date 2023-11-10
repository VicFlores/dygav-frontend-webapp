import {
  Footer,
  HelpFixedButton,
  HeroAparmentDetails,
  Layout,
  MainHero,
  RealAparmentDetails,
  UtilHead,
} from '@/components';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';

const RealAparmentDetailsPage = () => {
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <section>
      <UtilHead title='Detalles de apartamento' content='' />

      <MainHero>
        <Layout session={session}>
          <HeroAparmentDetails />
        </Layout>
      </MainHero>

      <HelpFixedButton />

      <RealAparmentDetails id={router.query.id as string} />

      <Footer />
    </section>
  );
};

export default RealAparmentDetailsPage;
