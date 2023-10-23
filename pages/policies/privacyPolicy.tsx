import {
  Footer,
  Layout,
  MainHero,
  PrivacyPolicy,
  PrivacyPolicyDetails,
  UtilHead,
} from "@/components";
import { useSession } from "next-auth/react";
import React from "react";

const PrivacyPolicyPage = () => {
  const { data: session } = useSession();

  return (
    <section>
      <UtilHead title='Dygav Privacy Policy' content='' />

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
