import {
  UtilHead,
  MainHero,
  Layout,
  HeroLicense,
  HelpFixedButton,
  CityLicense,
  Footer,
} from '@/components';
import { heroTramacastillaImages } from '@/utils';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';

const TramacastillaDeTenaLicensePage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  let path = router.pathname;
  let parts = path.split('/');
  let cityName = parts[parts.length - 1];

  return (
    <section>
      <UtilHead
        title={`Cómo Obtener Tu Licencia Turística en Tramacastilla De Tena - Dygav.es`}
        content={`Descubre todo lo necesario para adquirir tu licencia turística en Tramacastilla De Tena de forma sencilla y rápida.`}
      />
      <MainHero images={heroTramacastillaImages}>
        <Layout session={session}>
          <HeroLicense
            title={`Licencias Turísticas Tramacastilla De Tena`}
            subtitle={`Como conseguir tu licencia turística en Tramacastilla De Tena en 2023`}
          />
        </Layout>
      </MainHero>
      <HelpFixedButton />

      <CityLicense cityName={cityName} />

      <Footer />
    </section>
  );
};

export default TramacastillaDeTenaLicensePage;
