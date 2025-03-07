import {
  UtilHead,
  MainHero,
  Layout,
  HeroLicense,
  HelpFixedButton,
  CityLicense,
  Footer,
  AlicanteInfo,
} from '@/components';
import { TSession } from '@/types';
import { getUserFromCookies, heroAlicanteImages } from '@/utils';
import { generalImages } from '@/utils/static/licenseImages';
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

const AlicanteLicensePage = ({ user }: { user: TSession }) => {
  const { data: session } = useSession();
  const router = useRouter();

  let path = router.pathname;
  let parts = path.split('/');
  let cityName = parts[parts.length - 1];

  return (
    <section>
      <UtilHead
        title={`Cómo Obtener Tu Licencia Turística en Alicante - Dygav.es`}
        content={`Descubre todo lo necesario para adquirir tu licencia turística en Alicante de forma sencilla y rápida.`}
      />
      <MainHero images={heroAlicanteImages}>
        <Layout user={user}>
          <HeroLicense
            title={`Licencias Turísticas Alicante`}
            subtitle={`Como conseguir tu licencia turística en Alicante en 2023`}
          />
        </Layout>
      </MainHero>
      <HelpFixedButton />

      <AlicanteInfo />

      <CityLicense cityName={cityName} images={generalImages} />

      <Footer />
    </section>
  );
};

export default AlicanteLicensePage;
