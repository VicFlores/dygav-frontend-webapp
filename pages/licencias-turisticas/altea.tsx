import {
  UtilHead,
  MainHero,
  Layout,
  HeroLicense,
  HelpFixedButton,
  CityLicense,
  Footer,
  AlteaInfo,
} from '@/components';
import { heroAlteaImages } from '@/utils';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';

const AlteaLicensePage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  let path = router.pathname;
  let parts = path.split('/');
  let cityName = parts[parts.length - 1];

  return (
    <section>
      <UtilHead
        title={`Cómo Obtener Tu Licencia Turística en Altea - Dygav.es`}
        content={`Descubre todo lo necesario para adquirir tu licencia turística en Altea de forma sencilla y rápida.`}
      />
      <MainHero images={heroAlteaImages}>
        <Layout session={session}>
          <HeroLicense
            title={`Licencias Turísticas Altea`}
            subtitle={`Como conseguir tu licencia turística en Altea en 2023`}
          />
        </Layout>
      </MainHero>
      <HelpFixedButton />

      <AlteaInfo />

      <CityLicense cityName={cityName} />

      <Footer />
    </section>
  );
};

export default AlteaLicensePage;
