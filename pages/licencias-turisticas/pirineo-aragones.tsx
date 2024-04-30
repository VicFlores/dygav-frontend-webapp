import {
  UtilHead,
  MainHero,
  Layout,
  HeroLicense,
  HelpFixedButton,
  CityLicense,
  Footer,
  PirineoAragonesInfo,
} from '@/components';
import { heroPirineoAragonesImages } from '@/utils';
import { pirineosAragonImages } from '@/utils/static/licenseImages';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';

const PirineoAragonesLicensePage = () => {
  const { data: session } = useSession();

  return (
    <section>
      <UtilHead
        title={`Cómo Obtener Tu Licencia Turística en Pirineo Aragones - Dygav.es`}
        content={`Descubre todo lo necesario para adquirir tu licencia turística en Pirineo Aragones de forma sencilla y rápida.`}
      />
      <MainHero images={heroPirineoAragonesImages}>
        <Layout session={session}>
          <HeroLicense
            title={`Licencias Turísticas Pirineo Aragones`}
            subtitle={`Como conseguir tu licencia turística en Pirineo Aragones en 2023`}
          />
        </Layout>
      </MainHero>
      <HelpFixedButton />

      <PirineoAragonesInfo />

      <CityLicense
        cityName={'Pirineo Aragones'}
        images={pirineosAragonImages}
      />

      <Footer />
    </section>
  );
};

export default PirineoAragonesLicensePage;
