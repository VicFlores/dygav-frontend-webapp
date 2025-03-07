import {
  UtilHead,
  MainHero,
  Layout,
  HeroLicense,
  HelpFixedButton,
  CityLicense,
  Footer,
  FormigalInfo,
} from '@/components';
import { TSession } from '@/types';
import { getUserFromCookies, heroFormigalImages } from '@/utils';
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

const FormigalLicensePage = ({ user }: { user: TSession }) => {
  const { data: session } = useSession();
  const router = useRouter();

  let path = router.pathname;
  let parts = path.split('/');
  let cityName = parts[parts.length - 1];

  return (
    <section>
      <UtilHead
        title={`Cómo Obtener Tu Licencia Turística en Formigal - Dygav.es`}
        content={`Descubre todo lo necesario para adquirir tu licencia turística en Formigal de forma sencilla y rápida.`}
      />
      <MainHero images={heroFormigalImages}>
        <Layout user={user}>
          <HeroLicense
            title={`Licencias Turísticas Formigal`}
            subtitle={`Como conseguir tu licencia turística en Formigal en 2023`}
          />
        </Layout>
      </MainHero>
      <HelpFixedButton />

      <FormigalInfo />

      <CityLicense cityName={cityName} images={pirineosAragonImages} />

      <Footer />
    </section>
  );
};

export default FormigalLicensePage;
