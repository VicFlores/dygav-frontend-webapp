import { costaBlancaImages } from '@/utils/static/licenseImages';
import { useSession } from 'next-auth/react';
import React from 'react';
import {
  UtilHead,
  MainHero,
  Layout,
  HeroLicense,
  HelpFixedButton,
  Footer,
  CostaBlancaMgmtInfo,
  CityLicense,
} from '@/components';
import { heroCostaBlancaImages } from '@/utils';
import { useRouter } from 'next/router';

const CostaBlancaOwnersPage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  let path = router.pathname;
  let parts = path.split('/');
  let cityName = parts[parts.length - 1];

  return (
    <section>
      <UtilHead
        title={`Gestion de Viviendas Turísticas en Costa Blanca - Dygav.es`}
        content={`Descubre todo lo necesario para gestionar tu vivienda turística en Costa Blanca de forma sencilla y rápida.`}
      />
      <MainHero images={heroCostaBlancaImages}>
        <Layout session={session}>
          <HeroLicense
            title={`Gestion de Viviendas Turísticas`}
            subtitle={`En DYGAV nos especializamos en brindar soluciones integrales para el alquiler vacacional`}
          />
        </Layout>
      </MainHero>
      <HelpFixedButton />

      <CostaBlancaMgmtInfo />

      <CityLicense
        cityName={cityName}
        images={costaBlancaImages}
        typeOfPage='owners'
      />

      <Footer />
    </section>
  );
};

export default CostaBlancaOwnersPage;
