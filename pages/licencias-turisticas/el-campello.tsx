import {
  UtilHead,
  MainHero,
  Layout,
  HeroLicense,
  HelpFixedButton,
  CityLicense,
  Footer,
  ElCampelloInfo,
} from '@/components';
import { heroElCampelloImages } from '@/utils';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';

const ElCampelloLicensePage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  let path = router.pathname;
  let parts = path.split('/');
  let cityName = parts[parts.length - 1];

  return (
    <section>
      <UtilHead
        title={`Cómo Obtener Tu Licencia Turística en El Campello - Dygav.es`}
        content={`Descubre todo lo necesario para adquirir tu licencia turística en El Campello de forma sencilla y rápida.`}
      />
      <MainHero images={heroElCampelloImages}>
        <Layout session={session}>
          <HeroLicense
            title={`Licencias Turísticas El Campello`}
            subtitle={`Como conseguir tu licencia turística en El Campello en 2023`}
          />
        </Layout>
      </MainHero>
      <HelpFixedButton />

      <ElCampelloInfo />

      <CityLicense cityName={cityName} />

      <Footer />
    </section>
  );
};

export default ElCampelloLicensePage;
