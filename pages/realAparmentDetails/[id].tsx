import {
  Footer,
  HelpFixedButton,
  HeroAparmentDetails,
  Layout,
  MainHero,
  UtilHead,
} from '@/components';
import { useSession } from 'next-auth/react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React from 'react';

const RealAparmentDetails = dynamic(
  () => import('../../components/RealAparmentDetails/RealAparmentDetails'),
  { ssr: false }
);

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
