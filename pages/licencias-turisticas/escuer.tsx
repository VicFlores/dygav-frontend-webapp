import {
  UtilHead,
  MainHero,
  Layout,
  HeroLicense,
  HelpFixedButton,
  CityLicense,
  Footer,
  EscuerInfo,
} from '@/components';
import { heroEscuerImages } from '@/utils';
import { pirineosAragonImages } from '@/utils/static/licenseImages';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';

const EscuerLicensePage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  let path = router.pathname;
  let parts = path.split('/');
  let cityName = parts[parts.length - 1];

  return (
    <section>
      <UtilHead
        title={`Cómo Obtener Tu Licencia Turística en Escuer - Dygav.es`}
        content={`Descubre todo lo necesario para adquirir tu licencia turística en Escuer de forma sencilla y rápida.`}
      />
      <MainHero images={heroEscuerImages}>
        <Layout session={session}>
          <HeroLicense
            title={`Licencias Turísticas Escuer`}
            subtitle={`Como conseguir tu licencia turística en Escuer en 2023`}
          />
        </Layout>
      </MainHero>
      <HelpFixedButton />

      <EscuerInfo />

      <CityLicense cityName={cityName} images={pirineosAragonImages} />

      <Footer />
    </section>
  );
};

export default EscuerLicensePage;
