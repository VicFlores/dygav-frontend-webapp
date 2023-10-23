import {
  Footer,
  FormsPolicy,
  FormsPolicyDetails,
  Layout,
  MainHero,
  UtilHead,
} from "@/components";
import { useSession } from "next-auth/react";
import React from "react";

const FormsPolicyPage = () => {
  const { data: session } = useSession();

  return (
    <section>
      <UtilHead title='Dygav Cookies Policy' content='' />

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
