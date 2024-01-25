import {
  UtilHead,
  MainHero,
  Layout,
  HeroLicense,
  HelpFixedButton,
  CityLicense,
  Footer,
  PanticosaInfo,
} from '@/components';
import { heroPanticosaImages } from '@/utils';
import { pirineosAragonImages } from '@/utils/static/licenseImages';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';

const PanticosaLicensePage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  let path = router.pathname;
  let parts = path.split('/');
  let cityName = parts[parts.length - 1];

  return (
    <section>
      <UtilHead
        title={`Cómo Obtener Tu Licencia Turística en Panticosa - Dygav.es`}
        content={`Descubre todo lo necesario para adquirir tu licencia turística en Panticosa de forma sencilla y rápida.`}
      />
      <MainHero images={heroPanticosaImages}>
        <Layout session={session}>
          <HeroLicense
            title={`Licencias Turísticas Panticosa`}
            subtitle={`Como conseguir tu licencia turística en Panticosa en 2023`}
          />
        </Layout>
      </MainHero>
      <HelpFixedButton />

      <PanticosaInfo />

      <CityLicense cityName={cityName} images={pirineosAragonImages} />

      <Footer />
    </section>
  );
};

export default PanticosaLicensePage;
