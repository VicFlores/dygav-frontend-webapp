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
  FinestratMgmtInfo,
  CityLicense,
} from '@/components';
import { heroFinestrartImages } from '@/utils';

const FinestratOwnersPage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  let path = router.pathname;
  let parts = path.split('/');
  let cityName = parts[parts.length - 1];

  return (
    <section>
      <UtilHead
        title={`Gestion de Viviendas Turísticas en Finestrat - Dygav.es`}
        content={`Descubre todo lo necesario para gestionar tu vivienda turística en Finestrat de forma sencilla y rápida.`}
      />
      <MainHero images={heroFinestrartImages}>
        <Layout session={session}>
          <HeroLicense
            title={`Gestion de Viviendas Turísticas`}
            subtitle={`En DYGAV nos especializamos en brindar soluciones integrales para el alquiler vacacional`}
          />
        </Layout>
      </MainHero>
      <HelpFixedButton />

      <FinestratMgmtInfo />

      <CityLicense
        cityName={cityName}
        images={costaBlancaImages}
        typeOfPage='owners'
      />

      <Footer />
    </section>
  );
};

export default FinestratOwnersPage;
