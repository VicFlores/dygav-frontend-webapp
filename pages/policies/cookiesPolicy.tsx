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
import { TSession } from '@/types';
import { getUserFromCookies } from '@/utils';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const user = await getUserFromCookies(context);

  return {
    props: {
      user: user || null,
    },
  };
};

const CookiesPolicyPage = ({ user }: { user: TSession }) => {
  const { data: session } = useSession();

  return (
    <section>
      <Head>
        <title>Dygav Cookies Policy</title>
        <meta name='robots' content='noindex' />
      </Head>

      <MainHero>
        <Layout user={user}>
          <CookiesPolicy />
        </Layout>
      </MainHero>

      <CookiesPolicyDetails />

      <Footer />
    </section>
  );
};

export default CookiesPolicyPage;
