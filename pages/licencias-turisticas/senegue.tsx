import {
  UtilHead,
  MainHero,
  Layout,
  HeroLicense,
  HelpFixedButton,
  CityLicense,
  Footer,
  SenegueInfo,
} from '@/components';
import { TSession } from '@/types';
import { getUserFromCookies, heroSenegueImages } from '@/utils';
import { pirineosAragonImages } from '@/utils/static/licenseImages';
import { GetServerSideProps } from 'next';
import { useSession } from 'next-auth/react';
import React from 'react';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const user = await getUserFromCookies(context);

  return {
    props: {
      user,
    },
  };
};

const SenegueLicensePage = ({ user }: { user: TSession }) => {
  const { data: session } = useSession();

  return (
    <section>
      <UtilHead
        title={`Cómo Obtener Tu Licencia Turística en Senegüe - Dygav.es`}
        content={`Descubre todo lo necesario para adquirir tu licencia turística en Senegüe de forma sencilla y rápida.`}
      />
      <MainHero images={heroSenegueImages}>
        <Layout user={user}>
          <HeroLicense
            title={`Licencias Turísticas Senegüe`}
            subtitle={`Como conseguir tu licencia turística en Senegüe en 2023`}
          />
        </Layout>
      </MainHero>
      <HelpFixedButton />

      <SenegueInfo />

      <CityLicense cityName={'Valle de Tena'} images={pirineosAragonImages} />

      <Footer />
    </section>
  );
};

export default SenegueLicensePage;
