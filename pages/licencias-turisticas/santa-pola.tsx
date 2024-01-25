import {
  UtilHead,
  MainHero,
  Layout,
  HeroLicense,
  HelpFixedButton,
  CityLicense,
  Footer,
  SantaPolaInfo,
} from '@/components';
import { heroSantaPolaImages } from '@/utils';
import { generalImages } from '@/utils/static/licenseImages';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';

const SantaPolaLicensePage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  let path = router.pathname;
  let parts = path.split('/');
  let cityName = parts[parts.length - 1];

  return (
    <section>
      <UtilHead
        title={`Cómo Obtener Tu Licencia Turística en Santa Pola - Dygav.es`}
        content={`Descubre todo lo necesario para adquirir tu licencia turística en Santa Pola de forma sencilla y rápida.`}
      />
      <MainHero images={heroSantaPolaImages}>
        <Layout session={session}>
          <HeroLicense
            title={`Licencias Turísticas Santa Pola`}
            subtitle={`Como conseguir tu licencia turística en Santa Pola en 2023`}
          />
        </Layout>
      </MainHero>
      <HelpFixedButton />

      <SantaPolaInfo />

      <CityLicense cityName={cityName} images={generalImages} />

      <Footer />
    </section>
  );
};

export default SantaPolaLicensePage;
