import {
  UtilHead,
  MainHero,
  Layout,
  HeroLicense,
  HelpFixedButton,
  CityLicense,
  Footer,
  OrosInfo,
} from '@/components';
import { TSession } from '@/types';
import { getUserFromCookies, heroOrosImages } from '@/utils';
import { pirineosAragonImages } from '@/utils/static/licenseImages';
import { GetServerSideProps } from 'next';
import { useSession } from 'next-auth/react';
import React from 'react';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const user = await getUserFromCookies(context);

  return {
    props: {
      user: user || null,
    },
  };
};

const OrosLicensePage = ({ user }: { user: TSession }) => {
  const { data: session } = useSession();

  return (
    <section>
      <UtilHead
        title={`Cómo Obtener Tu Licencia Turística en Orós - Dygav.es`}
        content={`Descubre todo lo necesario para adquirir tu licencia turística en Orós de forma sencilla y rápida.`}
      />
      <MainHero images={heroOrosImages}>
        <Layout user={user}>
          <HeroLicense
            title={`Licencias Turísticas Orós`}
            subtitle={`Como conseguir tu licencia turística en Orós en 2023`}
          />
        </Layout>
      </MainHero>
      <HelpFixedButton />

      <OrosInfo />

      <CityLicense cityName={'Valle de Tena'} images={pirineosAragonImages} />

      <Footer />
    </section>
  );
};

export default OrosLicensePage;
