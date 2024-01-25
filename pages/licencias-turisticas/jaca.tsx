import {
  UtilHead,
  MainHero,
  Layout,
  HeroLicense,
  HelpFixedButton,
  CityLicense,
  Footer,
  JacaInfo,
} from '@/components';
import { heroJacaImages } from '@/utils';
import { pirineosAragonImages } from '@/utils/static/licenseImages';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';

const JacaLicensePage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  let path = router.pathname;
  let parts = path.split('/');
  let cityName = parts[parts.length - 1];

  return (
    <section>
      <UtilHead
        title={`Cómo Obtener Tu Licencia Turística en Jaca - Dygav.es`}
        content={`Descubre todo lo necesario para adquirir tu licencia turística en Jaca de forma sencilla y rápida.`}
      />
      <MainHero images={heroJacaImages}>
        <Layout session={session}>
          <HeroLicense
            title={`Licencias Turísticas Jaca`}
            subtitle={`Como conseguir tu licencia turística en Jaca en 2023`}
          />
        </Layout>
      </MainHero>
      <HelpFixedButton />

      <JacaInfo />

      <CityLicense cityName={cityName} images={pirineosAragonImages} />

      <Footer />
    </section>
  );
};

export default JacaLicensePage;
