import {
  Footer,
  Layout,
  MainHero,
  PrivacyPolicy,
  PrivacyPolicyDetails,
} from '@/components';
import React from 'react';

const privacyPolicy = () => {
  return (
    <section>
      <MainHero>
        <Layout title='Dygav Privacy Policy'>
          <PrivacyPolicy />
        </Layout>
      </MainHero>

      <PrivacyPolicyDetails />

      <Footer />
    </section>
  );
};

export default privacyPolicy;
