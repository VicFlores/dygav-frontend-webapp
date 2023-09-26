import {
  CookiesPolicy,
  CookiesPolicyDetails,
  Layout,
  MainHero,
} from '@/components';
import React from 'react';
import { Footer } from '../../components/Layout/Footer';

const cookiesPolicy = () => {
  return (
    <section>
      <MainHero>
        <Layout title='Dygav Cookies Policy'>
          <CookiesPolicy />
        </Layout>
      </MainHero>

      <CookiesPolicyDetails />

      <Footer />
    </section>
  );
};

export default cookiesPolicy;
