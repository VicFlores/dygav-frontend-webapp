import { costaBlancaImages } from '@/utils/static/licenseImages';
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
  MadridMgmtInfo,
  MadridFooter,
} from '@/components';
import { heroMadridImages } from '@/utils';

const MadridOwnersPage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  let path = router.pathname;
  let parts = path.split('/');
  let cityName = parts[parts.length - 1];

  return (
    <section>
      <UtilHead
        title={`Gestion de Viviendas Turísticas en Madrid - Dygav.es`}
        content={`Descubre todo lo necesario para gestionar tu vivienda turística en Madrid de forma sencilla y rápida.`}
      />
      <MainHero images={heroMadridImages}>
        <Layout session={session}>
          <HeroLicense
            title={`Gestion de Viviendas Turísticas`}
            subtitle={`En DYGAV nos especializamos en brindar soluciones integrales para el alquiler vacacional`}
          />
        </Layout>
      </MainHero>
      <HelpFixedButton />

      <MadridMgmtInfo />

      <MadridFooter cityName={cityName} typeOf={'managment'} />

      <Footer />
    </section>
  );
};

export default MadridOwnersPage;
