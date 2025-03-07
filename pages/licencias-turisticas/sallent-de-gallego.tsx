import {
  UtilHead,
  MainHero,
  Layout,
  HeroLicense,
  HelpFixedButton,
  CityLicense,
  Footer,
  SallenDeGallegoInfo,
} from '@/components';
import { TSession } from '@/types';
import { getUserFromCookies, heroSallenDeGallegoImages } from '@/utils';
import { pirineosAragonImages } from '@/utils/static/licenseImages';
import { GetServerSideProps } from 'next';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const user = await getUserFromCookies(context);

  return {
    props: {
      user: user || null,
    },
  };
};

const SallentDeGallegoLicensePage = ({ user }: { user: TSession }) => {
  const { data: session } = useSession();
  const router = useRouter();

  let path = router.pathname;
  let parts = path.split('/');
  let cityName = parts[parts.length - 1];

  return (
    <section>
      <UtilHead
        title={`Cómo Obtener Tu Licencia Turística en Sallent De Gallego - Dygav.es`}
        content={`Descubre todo lo necesario para adquirir tu licencia turística en Sallent De Gallego de forma sencilla y rápida.`}
      />
      <MainHero images={heroSallenDeGallegoImages}>
        <Layout user={user}>
          <HeroLicense
            title={`Licencias Turísticas Sallent De Gallego`}
            subtitle={`Como conseguir tu licencia turística en Sallent De Gallego en 2023`}
          />
        </Layout>
      </MainHero>
      <HelpFixedButton />

      <SallenDeGallegoInfo />

      <CityLicense cityName={cityName} images={pirineosAragonImages} />

      <Footer />
    </section>
  );
};

export default SallentDeGallegoLicensePage;
