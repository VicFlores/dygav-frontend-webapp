import {
  UtilHead,
  MainHero,
  Layout,
  HeroLicense,
  HelpFixedButton,
  CityLicense,
  Footer,
  CostaBlancaInfo,
} from '@/components';
import { heroCostaBlancaImages } from '@/utils';
import { generalImages } from '@/utils/static/licenseImages';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';

const CostaBlancaLicensePage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  let path = router.pathname;
  let parts = path.split('/');
  let cityName = parts[parts.length - 1];

  return (
    <section>
      <UtilHead
        title={`Cómo Obtener Tu Licencia Turística en Costa Blanca - Dygav.es`}
        content={`Descubre todo lo necesario para adquirir tu licencia turística en Costa Blanca de forma sencilla y rápida.`}
      />
      <MainHero images={heroCostaBlancaImages}>
        <Layout session={session}>
          <HeroLicense
            title={`Licencias Turísticas Costa Blanca`}
            subtitle={`Como conseguir tu licencia turística en Costa Blanca en 2023`}
          />
        </Layout>
      </MainHero>
      <HelpFixedButton />

      <CostaBlancaInfo />

      <CityLicense cityName={cityName} images={generalImages} />

      <Footer />
    </section>
  );
};

export default CostaBlancaLicensePage;
