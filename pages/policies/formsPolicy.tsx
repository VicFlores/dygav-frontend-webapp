import {
  Footer,
  FormsPolicy,
  FormsPolicyDetails,
  Layout,
  MainHero,
} from '@/components';
import React from 'react';

const formsPolicy = () => {
  return (
    <section>
      <MainHero>
        <Layout title='Dygav Cookies Policy'>
          <FormsPolicy />
        </Layout>
      </MainHero>

      <FormsPolicyDetails />

      <Footer />
    </section>
  );
};

export default formsPolicy;
