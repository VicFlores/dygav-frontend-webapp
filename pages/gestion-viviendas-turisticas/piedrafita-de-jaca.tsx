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
  PiedrafitaDeJacaMgmtInfo,
  CityLicense,
} from '@/components';
import { heroPiedraficaDeJacaImages } from '@/utils';

const PiedrafitaDeJacaOwnersPage = () => {
  const { data: session } = useSession();

  return (
    <section>
      <UtilHead
        title={`Gestion de Viviendas Turísticas en Piedrafita De Jaca - Dygav.es`}
        content={`Descubre todo lo necesario para gestionar tu vivienda turística en Piedrafita De Jaca de forma sencilla y rápida.`}
      />
      <MainHero images={heroPiedraficaDeJacaImages}>
        <Layout session={session}>
          <HeroLicense
            title={`Gestion de Viviendas Turísticas`}
            subtitle={`En DYGAV nos especializamos en brindar soluciones integrales para el alquiler vacacional`}
          />
        </Layout>
      </MainHero>
      <HelpFixedButton />

      <PiedrafitaDeJacaMgmtInfo />

      <CityLicense
        cityName={'Valle de Tena'}
        images={pirineosAragonImages}
        typeOfPage='owners'
      />

      <Footer />
    </section>
  );
};

export default PiedrafitaDeJacaOwnersPage;
