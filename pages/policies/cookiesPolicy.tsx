import {
  CookiesPolicy,
  CookiesPolicyDetails,
  Layout,
  MainHero,
  UtilHead,
} from "@/components";
import React from "react";
import { Footer } from "../../components/Layout/Footer";
import { useSession } from "next-auth/react";

const CookiesPolicyPage = () => {
  const { data: session } = useSession();

  return (
    <section>
      <UtilHead title='Dygav Cookies Policy' content='' />

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
