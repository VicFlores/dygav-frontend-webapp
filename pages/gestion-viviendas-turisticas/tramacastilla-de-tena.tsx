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
  TramacastillaDeTenaMgmtInfo,
  CityLicense,
} from '@/components';

const TramacastillaDeTenaOwnersPage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  let path = router.pathname;
  let parts = path.split('/');
  let cityName = parts[parts.length - 1];

  return (
    <section>
      <UtilHead
        title={`Gestion de Viviendas Turísticas en Tramacastilla De Tena - Dygav.es`}
        content={`Descubre todo lo necesario para gestionar tu vivienda turística en Tramacastilla De Tena de forma sencilla y rápida.`}
      />
      <MainHero>
        <Layout session={session}>
          <HeroLicense
            title={`Gestion de Viviendas Turísticas`}
            subtitle={`En DYGAV nos especializamos en brindar soluciones integrales para el alquiler vacacional`}
          />
        </Layout>
      </MainHero>
      <HelpFixedButton />

      <TramacastillaDeTenaMgmtInfo />

      <CityLicense
        cityName={cityName}
        images={managementHomes}
        typeOfPage='owners'
      />

      <Footer />
    </section>
  );
};

export default TramacastillaDeTenaOwnersPage;
