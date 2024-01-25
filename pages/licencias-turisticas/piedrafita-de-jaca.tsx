import {
  UtilHead,
  MainHero,
  Layout,
  HeroLicense,
  HelpFixedButton,
  CityLicense,
  Footer,
  PiedrafitaDeJacaInfo,
} from '@/components';
import { heroPiedraficaDeJacaImages } from '@/utils';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';

const PiedraficaDeJacaLicensePage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  let path = router.pathname;
  let parts = path.split('/');
  let cityName = parts[parts.length - 1];

  return (
    <section>
      <UtilHead
        title={`Cómo Obtener Tu Licencia Turística en Piedrafica De Jaca - Dygav.es`}
        content={`Descubre todo lo necesario para adquirir tu licencia turística en Piedrafica De Jaca de forma sencilla y rápida.`}
      />
      <MainHero images={heroPiedraficaDeJacaImages}>
        <Layout session={session}>
          <HeroLicense
            title={`Licencias Turísticas Piedrafica De Jaca`}
            subtitle={`Como conseguir tu licencia turística en Piedrafica De Jaca en 2023`}
          />
        </Layout>
      </MainHero>
      <HelpFixedButton />

      <PiedrafitaDeJacaInfo />

      <CityLicense cityName={cityName} />

      <Footer />
    </section>
  );
};

export default PiedraficaDeJacaLicensePage;
