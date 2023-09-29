import {
  Footer,
  Layout,
  MainHero,
  PrivacyPolicy,
  PrivacyPolicyDetails,
} from '@/components';
import { useSession } from 'next-auth/react';
import React from 'react';

const PrivacyPolicyPage = () => {
  const { data: session } = useSession();

  return (
    <section>
      <MainHero>
        <Layout title='Dygav Privacy Policy' session={session}>
          <PrivacyPolicy />
        </Layout>
      </MainHero>

      <PrivacyPolicyDetails />

      <Footer />
    </section>
  );
};

export default PrivacyPolicyPage;
