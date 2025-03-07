import {
  UtilHead,
  MainHero,
  Layout,
  HeroLicense,
  HelpFixedButton,
  CityLicense,
  Footer,
  PanticosaInfo,
} from '@/components';
import { TSession } from '@/types';
import { getUserFromCookies, heroPanticosaImages } from '@/utils';
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

const PanticosaLicensePage = ({ user }: { user: TSession }) => {
  const { data: session } = useSession();
  const router = useRouter();

  let path = router.pathname;
  let parts = path.split('/');
  let cityName = parts[parts.length - 1];

  return (
    <section>
      <UtilHead
        title={`Cómo Obtener Tu Licencia Turística en Panticosa - Dygav.es`}
        content={`Descubre todo lo necesario para adquirir tu licencia turística en Panticosa de forma sencilla y rápida.`}
      />
      <MainHero images={heroPanticosaImages}>
        <Layout user={user}>
          <HeroLicense
            title={`Licencias Turísticas Panticosa`}
            subtitle={`Como conseguir tu licencia turística en Panticosa en 2023`}
          />
        </Layout>
      </MainHero>
      <HelpFixedButton />

      <PanticosaInfo />

      <CityLicense cityName={cityName} images={pirineosAragonImages} />

      <Footer />
    </section>
  );
};

export default PanticosaLicensePage;
