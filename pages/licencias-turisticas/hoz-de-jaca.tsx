import {
  UtilHead,
  MainHero,
  Layout,
  HeroLicense,
  HelpFixedButton,
  CityLicense,
  Footer,
  HozDeJacaInfo,
} from '@/components';
import { heroHozDeJacaImages } from '@/utils';
import { pirineosAragonImages } from '@/utils/static/licenseImages';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';

const HozDeJacaLicensePage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  let path = router.pathname;
  let parts = path.split('/');
  let cityName = parts[parts.length - 1];

  return (
    <section>
      <UtilHead
        title={`Cómo Obtener Tu Licencia Turística en Hoz De Jaca - Dygav.es`}
        content={`Descubre todo lo necesario para adquirir tu licencia turística en Hoz De Jaca de forma sencilla y rápida.`}
      />
      <MainHero images={heroHozDeJacaImages}>
        <Layout session={session}>
          <HeroLicense
            title={`Licencias Turísticas Hoz De Jaca`}
            subtitle={`Como conseguir tu licencia turística en Hoz De Jaca en 2023`}
          />
        </Layout>
      </MainHero>
      <HelpFixedButton />

      <HozDeJacaInfo />

      <CityLicense cityName={cityName} images={pirineosAragonImages} />

      <Footer />
    </section>
  );
};

export default HozDeJacaLicensePage;
