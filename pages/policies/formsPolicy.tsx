import {
  Footer,
  FormsPolicy,
  FormsPolicyDetails,
  Layout,
  MainHero,
} from '@/components';
import { useSession } from 'next-auth/react';
import Head from 'next/head';
import React from 'react';

const FormsPolicyPage = () => {
  const { data: session } = useSession();

  return (
    <section>
      <Head>
        <title>Dygav Cookies Policy</title>
        <meta name='robots' content='noindex' />
      </Head>

      <MainHero>
        <Layout session={session}>
          <FormsPolicy />
        </Layout>
      </MainHero>

      <FormsPolicyDetails />

      <Footer />
    </section>
  );
};

export default FormsPolicyPage;
