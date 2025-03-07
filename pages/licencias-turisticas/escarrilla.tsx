import {
  UtilHead,
  MainHero,
  Layout,
  HeroLicense,
  HelpFixedButton,
  CityLicense,
  Footer,
  EscarrillaInfo,
} from '@/components';
import { TSession } from '@/types';
import { getUserFromCookies, heroEscarrillaImages } from '@/utils';
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

const EscarrillaLicensePage = ({ user }: { user: TSession }) => {
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
        <Layout user={user}>
          <HeroLicense
            title={`Licencias Turísticas Escarrilla`}
            subtitle={`Como conseguir tu licencia turística en Escarrilla en 2023`}
          />
        </Layout>
      </MainHero>
      <HelpFixedButton />

      <EscarrillaInfo />

      <CityLicense cityName={cityName} images={pirineosAragonImages} />

      <Footer />
    </section>
  );
};

export default EscarrillaLicensePage;
