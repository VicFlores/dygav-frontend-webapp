import {
  UtilHead,
  MainHero,
  Layout,
  HeroLicense,
  HelpFixedButton,
  CityLicense,
  Footer,
  OrosInfo,
} from '@/components';
import { heroOrosImages } from '@/utils';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';

const OrosLicensePage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  let path = router.pathname;
  let parts = path.split('/');
  let cityName = parts[parts.length - 1];

  return (
    <section>
      <UtilHead
        title={`Cómo Obtener Tu Licencia Turística en Orós - Dygav.es`}
        content={`Descubre todo lo necesario para adquirir tu licencia turística en Orós de forma sencilla y rápida.`}
      />
      <MainHero images={heroOrosImages}>
        <Layout session={session}>
          <HeroLicense
            title={`Licencias Turísticas Orós`}
            subtitle={`Como conseguir tu licencia turística en Orós en 2023`}
          />
        </Layout>
      </MainHero>
      <HelpFixedButton />

      <OrosInfo />

      <CityLicense cityName={cityName} />

      <Footer />
    </section>
  );
};

export default OrosLicensePage;
