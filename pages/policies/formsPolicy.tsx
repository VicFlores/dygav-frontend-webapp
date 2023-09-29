import {
  Footer,
  FormsPolicy,
  FormsPolicyDetails,
  Layout,
  MainHero,
} from '@/components';
import { useSession } from 'next-auth/react';
import React from 'react';

const FormsPolicyPage = () => {
  const { data: session } = useSession();

  return (
    <section>
      <MainHero>
        <Layout title='Dygav Cookies Policy' session={session}>
          <FormsPolicy />
        </Layout>
      </MainHero>

      <FormsPolicyDetails />

      <Footer />
    </section>
  );
};

export default FormsPolicyPage;
