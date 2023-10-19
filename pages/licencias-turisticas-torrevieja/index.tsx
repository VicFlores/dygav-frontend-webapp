import {
  MainHero,
  Layout,
  HeroLicense,
  CityLicenseInfo,
  Footer,
} from "@/components";
import { useSession } from "next-auth/react";
import React from "react";

const TorreviejaPage = () => {
  const { data: session } = useSession();

  return (
    <section>
      <MainHero>
        <Layout title='Dygav Torrevieja Licenses' session={session}>
          <HeroLicense
            title='Licencias Turísticas Torrevieja'
            subtitle='Como conseguir tu licencia turística en Torrevieja en 2023'
          />
        </Layout>
      </MainHero>

      <CityLicenseInfo />

      <Footer />
    </section>
  );
};

export default TorreviejaPage;
