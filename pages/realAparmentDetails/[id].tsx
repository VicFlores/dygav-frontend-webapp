import {
  Footer,
  HelpFixedButton,
  HeroAparmentDetails,
  Layout,
  MainHero,
  UtilHead,
} from '@/components';
import { TSession } from '@/types';
import { getUserFromCookies } from '@/utils';
import { GetServerSideProps } from 'next';
import { useSession } from 'next-auth/react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React from 'react';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const user = await getUserFromCookies(context);

  return {
    props: {
      user: user || null,
    },
  };
};

const RealAparmentDetails = dynamic(
  () => import('../../components/RealAparmentDetails/RealAparmentDetails'),
  { ssr: false }
);

const RealAparmentDetailsPage = ({ user }: { user: TSession }) => {
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <section>
      <UtilHead title='Detalles de apartamento' content='' />

      <MainHero>
        <Layout user={user}>
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
