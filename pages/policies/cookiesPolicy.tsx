import {
  CookiesPolicy,
  CookiesPolicyDetails,
  Layout,
  MainHero,
} from '@/components';
import React from 'react';
import { Footer } from '../../components/Layout/Footer';
import { useSession } from 'next-auth/react';

const CookiesPolicyPage = () => {
  const { data: session } = useSession();

  return (
    <section>
      <MainHero>
        <Layout title='Dygav Cookies Policy' session={session}>
          <CookiesPolicy />
        </Layout>
      </MainHero>

      <CookiesPolicyDetails />

      <Footer />
    </section>
  );
};

export default CookiesPolicyPage;
