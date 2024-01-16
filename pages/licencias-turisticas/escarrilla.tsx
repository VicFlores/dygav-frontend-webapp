import {
  UtilHead,
  MainHero,
  Layout,
  HeroLicense,
  HelpFixedButton,
  CityLicense,
  Footer,
} from '@/components';
import { heroEscarrillaImages } from '@/utils';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';

const EscarrillaLicensePage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  let path = router.pathname;
  let parts = path.split('/');
  let cityName = parts[parts.length - 1];

  return (
    <section>
      <UtilHead
        title={`Cómo Obtener Tu Licencia Turística en Escarrilla - Dygav.es`}
        content={`Descubre todo lo necesario para adquirir tu licencia turística en Escarrilla de forma sencilla y rápida.`}
      />
      <MainHero images={heroEscarrillaImages}>
        <Layout session={session}>
          <HeroLicense
            title={`Licencias Turísticas Escarrilla`}
            subtitle={`Como conseguir tu licencia turística en Escarrilla en 2023`}
          />
        </Layout>
      </MainHero>
      <HelpFixedButton />

      <CityLicense cityName={cityName} />

      <Footer />
    </section>
  );
};

export default EscarrillaLicensePage;
