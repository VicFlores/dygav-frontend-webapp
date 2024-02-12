import {
  Footer,
  Layout,
  MainHero,
  PrivacyPolicy,
  PrivacyPolicyDetails,
} from '@/components';
import { useSession } from 'next-auth/react';
import Head from 'next/head';
import React from 'react';

const PrivacyPolicyPage = () => {
  const { data: session } = useSession();

  return (
    <section>
      <Head>
        <title>Dygav Privacy Policy</title>
        <meta name='robots' content='noindex' />
      </Head>

      <MainHero>
        <Layout session={session}>
          <PrivacyPolicy />
        </Layout>
      </MainHero>

      <PrivacyPolicyDetails />

      <Footer />
    </section>
  );
};

export default PrivacyPolicyPage;
