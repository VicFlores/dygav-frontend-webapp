import { managementHomes } from '@/utils/static/licenseImages';
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
  SenegueMgmtInfo,
  CityLicense,
} from '@/components';
import { heroSenegueImages } from '@/utils';

const SenegueOwnersPage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  let path = router.pathname;
  let parts = path.split('/');
  let cityName = parts[parts.length - 1];

  return (
    <section>
      <UtilHead
        title={`Gestion de Viviendas Turísticas en Senegue - Dygav.es`}
        content={`Descubre todo lo necesario para gestionar tu vivienda turística en Senegue de forma sencilla y rápida.`}
      />
      <MainHero images={heroSenegueImages}>
        <Layout session={session}>
          <HeroLicense
            title={`Gestion de Viviendas Turísticas`}
            subtitle={`En DYGAV nos especializamos en brindar soluciones integrales para el alquiler vacacional`}
          />
        </Layout>
      </MainHero>
      <HelpFixedButton />

      <SenegueMgmtInfo />

      <CityLicense
        cityName={'Valle de Tena'}
        images={managementHomes}
        typeOfPage='owners'
      />

      <Footer />
    </section>
  );
};

export default SenegueOwnersPage;
