import {
  UtilHead,
  MainHero,
  Layout,
  HeroLicense,
  HelpFixedButton,
  CityLicense,
  Footer,
  BiescasInfo,
} from '@/components';
import { heroBiescasImages } from '@/utils';
import { pirineosAragonImages } from '@/utils/static/licenseImages';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';

const BiescasLicensePage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  let path = router.pathname;
  let parts = path.split('/');
  let cityName = parts[parts.length - 1];

  return (
    <section>
      <UtilHead
        title={`Cómo Obtener Tu Licencia Turística en Biescas - Dygav.es`}
        content={`Descubre todo lo necesario para adquirir tu licencia turística en Biescas de forma sencilla y rápida.`}
      />
      <MainHero images={heroBiescasImages}>
        <Layout session={session}>
          <HeroLicense
            title={`Licencias Turísticas Biescas`}
            subtitle={`Como conseguir tu licencia turística en Biescas en 2023`}
          />
        </Layout>
      </MainHero>
      <HelpFixedButton />

      <BiescasInfo />

      <CityLicense cityName={cityName} images={pirineosAragonImages} />

      <Footer />
    </section>
  );
};

export default BiescasLicensePage;
