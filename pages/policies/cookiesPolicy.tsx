import {
  CookiesPolicy,
  CookiesPolicyDetails,
  Layout,
  MainHero,
} from '@/components';
import React from 'react';
import { Footer } from '../../components/Layout/Footer';
import { useSession } from 'next-auth/react';
import Head from 'next/head';

const CookiesPolicyPage = () => {
  const { data: session } = useSession();

  return (
    <section>
      <Head>
        <title>Dygav Cookies Policy</title>
        <meta name='robots' content='noindex' />
      </Head>

      <MainHero>
        <Layout session={session}>
          <CookiesPolicy />
        </Layout>
      </MainHero>

      <CookiesPolicyDetails />

      <Footer />
    </section>
  );
};

export default CookiesPolicyPage;
