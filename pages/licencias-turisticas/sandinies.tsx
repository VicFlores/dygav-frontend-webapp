import {
  UtilHead,
  MainHero,
  Layout,
  HeroLicense,
  HelpFixedButton,
  CityLicense,
  Footer,
} from '@/components';
import { heroSandiniesImages } from '@/utils';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';

const SandiniesLicensePage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  let path = router.pathname;
  let parts = path.split('/');
  let cityName = parts[parts.length - 1];

  return (
    <section>
      <UtilHead
        title={`Cómo Obtener Tu Licencia Turística en Sandiniés - Dygav.es`}
        content={`Descubre todo lo necesario para adquirir tu licencia turística en Sandiniés de forma sencilla y rápida.`}
      />
      <MainHero images={heroSandiniesImages}>
        <Layout session={session}>
          <HeroLicense
            title={`Licencias Turísticas Sandiniés`}
            subtitle={`Como conseguir tu licencia turística en Sandiniés en 2023`}
          />
        </Layout>
      </MainHero>
      <HelpFixedButton />

      <CityLicense cityName={cityName} />

      <Footer />
    </section>
  );
};

export default SandiniesLicensePage;
