import {
  UtilHead,
  MainHero,
  Layout,
  HeroLicense,
  HelpFixedButton,
  CityLicense,
  Footer,
  SabiñánigoInfo,
} from '@/components';
import { heroSabiñánigoImages } from '@/utils';
import { pirineosAragonImages } from '@/utils/static/licenseImages';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';

const SabiñánigoLicensePage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  let path = router.pathname;
  let parts = path.split('/');
  let cityName = parts[parts.length - 1];

  return (
    <section>
      <UtilHead
        title={`Cómo Obtener Tu Licencia Turística en Sabiñánigo - Dygav.es`}
        content={`Descubre todo lo necesario para adquirir tu licencia turística en Sabiñánigo de forma sencilla y rápida.`}
      />
      <MainHero images={heroSabiñánigoImages}>
        <Layout session={session}>
          <HeroLicense
            title={`Licencias Turísticas Sabiñánigo`}
            subtitle={`Como conseguir tu licencia turística en Sabiñánigo en 2023`}
          />
        </Layout>
      </MainHero>
      <HelpFixedButton />

      <SabiñánigoInfo />

      <CityLicense cityName={cityName} images={pirineosAragonImages} />

      <Footer />
    </section>
  );
};

export default SabiñánigoLicensePage;
