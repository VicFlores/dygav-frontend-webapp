import {
  AparmentDetails,
  Footer,
  HeroAparmentDetails,
  Layout,
  MainHero,
  UtilHead,
} from '@/components';
import { TSession } from '@/types';
import { getUserFromCookies } from '@/utils';
import { GetServerSideProps } from 'next';
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

const AparmentDetailsPage = ({ user }: { user: TSession }) => {
  const router = useRouter();

  return (
    <section>
      <UtilHead title='Detalles de apartamento' content='' />

      <MainHero>
        <Layout user={user}>
          <HeroAparmentDetails />
        </Layout>
      </MainHero>

      <AparmentDetails id={router.query.id as string} />

      <Footer />
    </section>
  );
};

export default AparmentDetailsPage;
