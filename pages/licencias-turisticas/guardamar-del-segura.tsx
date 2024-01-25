import {
  UtilHead,
  MainHero,
  Layout,
  HeroLicense,
  HelpFixedButton,
  CityLicense,
  Footer,
  GuardamarSeguraInfo,
} from '@/components';
import { heroGuardamarDelSeguraImages } from '@/utils';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';

const GuardamarDelSeguraLicensePage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  let path = router.pathname;
  let parts = path.split('/');
  let cityName = parts[parts.length - 1];

  return (
    <section>
      <UtilHead
        title={`Cómo Obtener Tu Licencia Turística en Guardamar Del Segura - Dygav.es`}
        content={`Descubre todo lo necesario para adquirir tu licencia turística en Guardamar Del Segura de forma sencilla y rápida.`}
      />
      <MainHero images={heroGuardamarDelSeguraImages}>
        <Layout session={session}>
          <HeroLicense
            title={`Licencias Turísticas Guardamar Del Segura`}
            subtitle={`Como conseguir tu licencia turística en Guardamar Del Segura en 2023`}
          />
        </Layout>
      </MainHero>
      <HelpFixedButton />

      <GuardamarSeguraInfo />

      <CityLicense cityName={cityName} />

      <Footer />
    </section>
  );
};

export default GuardamarDelSeguraLicensePage;
