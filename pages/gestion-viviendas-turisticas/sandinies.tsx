import { pirineosAragonImages } from '@/utils/static/licenseImages';
import { useSession } from 'next-auth/react';
import React from 'react';
import {
  UtilHead,
  MainHero,
  Layout,
  HeroLicense,
  HelpFixedButton,
  Footer,
  SandiniesMgmtInfo,
  CityLicense,
} from '@/components';
import { heroSandiniesImages } from '@/utils';

const SandiniesOwnersPage = () => {
  const { data: session } = useSession();

  return (
    <section>
      <UtilHead
        title={`Gestion de Viviendas Turísticas en Sandiniés - Dygav.es`}
        content={`Descubre todo lo necesario para gestionar tu vivienda turística en Sandiniés de forma sencilla y rápida.`}
      />
      <MainHero images={heroSandiniesImages}>
        <Layout session={session}>
          <HeroLicense
            title={`Gestion de Viviendas Turísticas`}
            subtitle={`En DYGAV nos especializamos en brindar soluciones integrales para el alquiler vacacional`}
          />
        </Layout>
      </MainHero>
      <HelpFixedButton />

      <SandiniesMgmtInfo />

      <CityLicense
        cityName={'Valle de Tena'}
        images={pirineosAragonImages}
        typeOfPage='owners'
      />

      <Footer />
    </section>
  );
};

export default SandiniesOwnersPage;
