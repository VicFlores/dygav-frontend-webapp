import {
  UtilHead,
  MainHero,
  Layout,
  HeroLicense,
  HelpFixedButton,
  CityLicense,
  Footer,
  OrihuelaOrihuelaCostaInfo,
} from '@/components';
import { heroOrihuelaImages } from '@/utils';
import { generalImages } from '@/utils/static/licenseImages';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';

const OrihuelaLicensePage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  let path = router.pathname;
  let parts = path.split('/');
  let cityName = parts[parts.length - 1];

  return (
    <section>
      <UtilHead
        title={`Cómo Obtener Tu Licencia Turística en Orihuela - Dygav.es`}
        content={`Descubre todo lo necesario para adquirir tu licencia turística en Orihuela de forma sencilla y rápida.`}
      />
      <MainHero images={heroOrihuelaImages}>
        <Layout session={session}>
          <HeroLicense
            title={`Licencias Turísticas Orihuela`}
            subtitle={`Como conseguir tu licencia turística en Orihuela en 2023`}
          />
        </Layout>
      </MainHero>
      <HelpFixedButton />

      <OrihuelaOrihuelaCostaInfo />

      <CityLicense cityName={cityName} images={generalImages} />

      <Footer />
    </section>
  );
};

export default OrihuelaLicensePage;
