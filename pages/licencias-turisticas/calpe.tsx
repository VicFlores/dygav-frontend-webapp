import {
  UtilHead,
  MainHero,
  Layout,
  HeroLicense,
  HelpFixedButton,
  CityLicense,
  Footer,
  CalpeInfo,
} from '@/components';
import { heroCalpeImages } from '@/utils';
import { generalImages } from '@/utils/static/licenseImages';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';

const CalpeLicensePage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  let path = router.pathname;
  let parts = path.split('/');
  let cityName = parts[parts.length - 1];

  return (
    <section>
      <UtilHead
        title={`Cómo Obtener Tu Licencia Turística en Calpe - Dygav.es`}
        content={`Descubre todo lo necesario para adquirir tu licencia turística en Calpe de forma sencilla y rápida.`}
      />
      <MainHero images={heroCalpeImages}>
        <Layout session={session}>
          <HeroLicense
            title={`Licencias Turísticas Calpe`}
            subtitle={`Como conseguir tu licencia turística en Calpe en 2023`}
          />
        </Layout>
      </MainHero>
      <HelpFixedButton />

      <CalpeInfo />

      <CityLicense cityName={cityName} images={generalImages} />

      <Footer />
    </section>
  );
};

export default CalpeLicensePage;
