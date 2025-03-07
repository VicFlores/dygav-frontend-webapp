import {
  Footer,
  Layout,
  MainHero,
  PrivacyPolicy,
  PrivacyPolicyDetails,
} from '@/components';
import { TSession } from '@/types';
import { getUserFromCookies } from '@/utils';
import { GetServerSideProps } from 'next';
import { useSession } from 'next-auth/react';
import Head from 'next/head';
import React from 'react';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const user = await getUserFromCookies(context);

  return {
    props: {
      user: user || null,
    },
  };
};

const PrivacyPolicyPage = ({ user }: { user: TSession }) => {
  const { data: session } = useSession();

  return (
    <section>
      <Head>
        <title>Dygav Privacy Policy</title>
        <meta name='robots' content='noindex' />
      </Head>

      <MainHero>
        <Layout user={user}>
          <PrivacyPolicy />
        </Layout>
      </MainHero>

      <PrivacyPolicyDetails />

      <Footer />
    </section>
  );
};

export default PrivacyPolicyPage;
