import {
  UtilHead,
  MainHero,
  Layout,
  HeroLicense,
  HelpFixedButton,
  CityLicense,
  Footer,
} from '@/components';
import { heroElPueyoDeJacaImages } from '@/utils';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';

const ElPueyoDeJacaLicensePage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  let path = router.pathname;
  let parts = path.split('/');
  let cityName = parts[parts.length - 1];

  return (
    <section>
      <UtilHead
        title={`Cómo Obtener Tu Licencia Turística en El Pueyo De Jaca - Dygav.es`}
        content={`Descubre todo lo necesario para adquirir tu licencia turística en El Pueyo De Jaca de forma sencilla y rápida.`}
      />
      <MainHero images={heroElPueyoDeJacaImages}>
        <Layout session={session}>
          <HeroLicense
            title={`Licencias Turísticas El Pueyo De Jaca`}
            subtitle={`Como conseguir tu licencia turística en El Pueyo De Jaca en 2023`}
          />
        </Layout>
      </MainHero>
      <HelpFixedButton />

      <CityLicense cityName={cityName} />

      <Footer />
    </section>
  );
};

export default ElPueyoDeJacaLicensePage;
