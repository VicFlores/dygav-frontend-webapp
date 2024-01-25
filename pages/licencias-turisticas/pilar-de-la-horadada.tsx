import {
  UtilHead,
  MainHero,
  Layout,
  HeroLicense,
  HelpFixedButton,
  CityLicense,
  Footer,
  PilarHoradadaInfo,
} from '@/components';
import { heroPilarDeLaHoradadaImages } from '@/utils';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';
import { generalImages } from '../../utils/static/licenseImages';

const PilarDeLaHoradadaLicensePage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  let path = router.pathname;
  let parts = path.split('/');
  let cityName = parts[parts.length - 1];

  return (
    <section>
      <UtilHead
        title={`Cómo Obtener Tu Licencia Turística en Pilar De La Horadada - Dygav.es`}
        content={`Descubre todo lo necesario para adquirir tu licencia turística en Pilar De La Horadada de forma sencilla y rápida.`}
      />
      <MainHero images={heroPilarDeLaHoradadaImages}>
        <Layout session={session}>
          <HeroLicense
            title={`Licencias Turísticas Pilar De La Horadada`}
            subtitle={`Como conseguir tu licencia turística en Pilar De La Horadada en 2023`}
          />
        </Layout>
      </MainHero>
      <HelpFixedButton />

      <PilarHoradadaInfo />

      <CityLicense cityName={cityName} images={generalImages} />

      <Footer />
    </section>
  );
};

export default PilarDeLaHoradadaLicensePage;
