import { pirineosAragonImages } from '@/utils/static/licenseImages';
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
  EscarrillaMgmtInfo,
  CityLicense,
} from '@/components';
import { getUserFromCookies, heroEscarrillaImages } from '@/utils';
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

const EscarrillaOwnersPage = ({ user }: { user: TSession }) => {
  const { data: session } = useSession();
  const router = useRouter();

  let path = router.pathname;
  let parts = path.split('/');
  let cityName = parts[parts.length - 1];

  return (
    <section>
      <UtilHead
        title={`Gestion de Viviendas Turísticas en Escarrilla - Dygav.es`}
        content={`Descubre todo lo necesario para gestionar tu vivienda turística en Escarrilla de forma sencilla y rápida.`}
      />
      <MainHero images={heroEscarrillaImages}>
        <Layout user={user}>
          <HeroLicense
            title={`Gestion de Viviendas Turísticas`}
            subtitle={`En DYGAV nos especializamos en brindar soluciones integrales para el alquiler vacacional`}
          />
        </Layout>
      </MainHero>
      <HelpFixedButton />

      <EscarrillaMgmtInfo />

      <CityLicense
        cityName={cityName}
        images={pirineosAragonImages}
        typeOfPage='owners'
      />

      <Footer />
    </section>
  );
};

export default EscarrillaOwnersPage;
