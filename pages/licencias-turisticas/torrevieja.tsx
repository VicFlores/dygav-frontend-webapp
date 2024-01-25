import {
  UtilHead,
  MainHero,
  Layout,
  HeroLicense,
  HelpFixedButton,
  CityLicense,
  Footer,
  TorreviejaInfo,
} from '@/components';
import { heroTorreviejaImages } from '@/utils';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';

const TorreviejaLicensePage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  let path = router.pathname;
  let parts = path.split('/');
  let cityName = parts[parts.length - 1];

  return (
    <section>
      <UtilHead
        title={`Cómo Obtener Tu Licencia Turística en Torrevieja - Dygav.es`}
        content={`Descubre todo lo necesario para adquirir tu licencia turística en Torrevieja de forma sencilla y rápida.`}
      />
      <MainHero images={heroTorreviejaImages}>
        <Layout session={session}>
          <HeroLicense
            title={`Licencias Turísticas Torrevieja`}
            subtitle={`Como conseguir tu licencia turística en Torrevieja en 2023`}
          />
        </Layout>
      </MainHero>
      <HelpFixedButton />

      <TorreviejaInfo />

      <CityLicense cityName={cityName} />

      <Footer />
    </section>
  );
};

export default TorreviejaLicensePage;
