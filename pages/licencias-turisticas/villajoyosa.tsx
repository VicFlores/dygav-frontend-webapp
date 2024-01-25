import {
  UtilHead,
  MainHero,
  Layout,
  HeroLicense,
  HelpFixedButton,
  CityLicense,
  Footer,
  VillajoyosaInfo,
} from '@/components';
import { heroVillajoyosaImages } from '@/utils';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';

const VillajoyosaLicensePage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  let path = router.pathname;
  let parts = path.split('/');
  let cityName = parts[parts.length - 1];

  return (
    <section>
      <UtilHead
        title={`Cómo Obtener Tu Licencia Turística en Villajoyosa - Dygav.es`}
        content={`Descubre todo lo necesario para adquirir tu licencia turística en Villajoyosa de forma sencilla y rápida.`}
      />
      <MainHero images={heroVillajoyosaImages}>
        <Layout session={session}>
          <HeroLicense
            title={`Licencias Turísticas Villajoyosa`}
            subtitle={`Como conseguir tu licencia turística en Villajoyosa en 2023`}
          />
        </Layout>
      </MainHero>
      <HelpFixedButton />

      <VillajoyosaInfo />

      <CityLicense cityName={cityName} />

      <Footer />
    </section>
  );
};

export default VillajoyosaLicensePage;
