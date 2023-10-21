import {
  MainHero,
  Layout,
  HeroLicense,
  CityLicenseInfo,
  Footer,
  UtilHead,
} from "@/components";
import { useSession } from "next-auth/react";
import React from "react";

const TorreviejaPage = () => {
  const { data: session } = useSession();

  return (
    <section>
      <UtilHead
        title='Cómo Obtener Tu Licencia Turística en Torrevieja - Dygav.es'
        content='Descubre todo lo necesario para adquirir tu licencia turística en Torrevieja de forma sencilla y rápida.'
      />

      <MainHero>
        <Layout session={session}>
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
