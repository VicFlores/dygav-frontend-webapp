import {
  costaBlancaImages,
  pirineosAragonImages,
} from '@/utils/static/licenseImages';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';
import {
  UtilHead,
  MainHero,
  Layout,
  HeroLicense,
  HelpFixedButton,
  Footer,
  BenidormMgmtInfo,
  CityLicense,
} from '@/components';
import { getUserFromCookies, heroBenidormImages } from '@/utils';
import { GetServerSideProps } from 'next';
import { TSession } from '@/types';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const user = await getUserFromCookies(context);

  return {
    props: {
      user: user || null,
    },
  };
};

const BenidormOwnersPage = ({ user }: { user: TSession }) => {
  const { data: session } = useSession();
  const router = useRouter();

  let path = router.pathname;
  let parts = path.split('/');
  let cityName = parts[parts.length - 1];

  return (
    <section>
      <UtilHead
        title={`Gestion de Viviendas Turísticas en Benidorm - Dygav.es`}
        content={`Descubre todo lo necesario para gestionar tu vivienda turística en Benidorm de forma sencilla y rápida.`}
      />
      <MainHero images={heroBenidormImages}>
        <Layout user={user}>
          <HeroLicense
            title={`Gestion de Viviendas Turísticas`}
            subtitle={`En DYGAV nos especializamos en brindar soluciones integrales para el alquiler vacacional`}
          />
        </Layout>
      </MainHero>
      <HelpFixedButton />

      <BenidormMgmtInfo />

      <CityLicense
        cityName={cityName}
        images={costaBlancaImages}
        typeOfPage='owners'
      />

      <Footer />
    </section>
  );
};

export default BenidormOwnersPage;
