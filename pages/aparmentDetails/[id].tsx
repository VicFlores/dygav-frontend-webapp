import {
  AparmentDetails,
  Footer,
  HeroAparmentDetails,
  Layout,
  MainHero,
  UtilHead,
} from "@/components";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";

const AparmentDetailsPage = () => {
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <section>
      <UtilHead title='Detalles de apartamento' content='' />

      <MainHero>
        <Layout session={session}>
          <HeroAparmentDetails />
        </Layout>
      </MainHero>

      <AparmentDetails id={router.query.id as string} />

      <Footer />
    </section>
  );
};

export default AparmentDetailsPage;
