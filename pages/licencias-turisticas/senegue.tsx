import {
  UtilHead,
  MainHero,
  Layout,
  HeroLicense,
  HelpFixedButton,
  CityLicense,
  Footer,
  SenegueInfo,
} from '@/components';
import { heroSenegueImages } from '@/utils';
import { pirineosAragonImages } from '@/utils/static/licenseImages';
import { useSession } from 'next-auth/react';
import React from 'react';

const SenegueLicensePage = () => {
  const { data: session } = useSession();

  return (
    <section>
      <UtilHead
        title={`Cómo Obtener Tu Licencia Turística en Senegüe - Dygav.es`}
        content={`Descubre todo lo necesario para adquirir tu licencia turística en Senegüe de forma sencilla y rápida.`}
      />
      <MainHero images={heroSenegueImages}>
        <Layout session={session}>
          <HeroLicense
            title={`Licencias Turísticas Senegüe`}
            subtitle={`Como conseguir tu licencia turística en Senegüe en 2023`}
          />
        </Layout>
      </MainHero>
      <HelpFixedButton />

      <SenegueInfo />

      <CityLicense cityName={'Valle de Tena'} images={pirineosAragonImages} />

      <Footer />
    </section>
  );
};

export default SenegueLicensePage;
