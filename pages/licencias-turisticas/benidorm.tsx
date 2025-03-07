import {
  UtilHead,
  MainHero,
  Layout,
  HeroLicense,
  HelpFixedButton,
  CityLicense,
  Footer,
  BenidormInfo,
} from '@/components';
import { TSession } from '@/types';
import { getUserFromCookies, heroBenidormImages } from '@/utils';
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

const BenidormLicensePage = ({ user }: { user: TSession }) => {
  const { data: session } = useSession();
  const router = useRouter();

  let path = router.pathname;
  let parts = path.split('/');
  let cityName = parts[parts.length - 1];

  return (
    <section>
      <UtilHead
        title={`Cómo Obtener Tu Licencia Turística en Benidorm - Dygav.es`}
        content={`Descubre todo lo necesario para adquirir tu licencia turística en Benidorm de forma sencilla y rápida.`}
      />
      <MainHero images={heroBenidormImages}>
        <Layout user={user}>
          <HeroLicense
            title={`Licencias Turísticas Benidorm`}
            subtitle={`Como conseguir tu licencia turística en Benidorm en 2023`}
          />
        </Layout>
      </MainHero>
      <HelpFixedButton />

      <BenidormInfo />

      <CityLicense cityName={cityName} images={generalImages} />

      <Footer />
    </section>
  );
};

export default BenidormLicensePage;
