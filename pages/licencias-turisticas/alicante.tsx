import {
  UtilHead,
  MainHero,
  Layout,
  HeroLicense,
  HelpFixedButton,
  CityLicense,
  Footer,
} from '@/components';
import { heroAlicanteImages } from '@/utils';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';

const AlicanteLicensePage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  let path = router.pathname;
  let parts = path.split('/');
  let cityName = parts[parts.length - 1];

  return (
    <section>
      <UtilHead
        title={`Cómo Obtener Tu Licencia Turística en Alicante - Dygav.es`}
        content={`Descubre todo lo necesario para adquirir tu licencia turística en Alicante de forma sencilla y rápida.`}
      />
      <MainHero images={heroAlicanteImages}>
        <Layout session={session}>
          <HeroLicense
            title={`Licencias Turísticas Alicante`}
            subtitle={`Como conseguir tu licencia turística en Alicante en 2023`}
          />
        </Layout>
      </MainHero>
      <HelpFixedButton />

      <CityLicense cityName={cityName} />

      <Footer />
    </section>
  );
};

export default AlicanteLicensePage;
