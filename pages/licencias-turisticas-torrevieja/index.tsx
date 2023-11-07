import {
  MainHero,
  Layout,
  HeroLicense,
  TorreviejaInfo,
  Footer,
  UtilHead,
} from '@/components';
import { useSession } from 'next-auth/react';

const images = [
  'https://res.cloudinary.com/vicflores11/image/upload/v1697903686/Dygav/torrevieja/2_jvslgl.WebP',
  'https://res.cloudinary.com/vicflores11/image/upload/v1697903686/Dygav/torrevieja/1_zifm3q.WebP',
  'https://res.cloudinary.com/vicflores11/image/upload/v1697903686/Dygav/torrevieja/4_j1srba.WebP',
  'https://res.cloudinary.com/vicflores11/image/upload/v1697903684/Dygav/torrevieja/3_pdtmep.WebP',
];

const TorreviejaPage = () => {
  const { data: session } = useSession();

  return (
    <section>
      <UtilHead
        title='Cómo Obtener Tu Licencia Turística en Torrevieja - Dygav.es'
        content='Descubre todo lo necesario para adquirir tu licencia turística en Torrevieja de forma sencilla y rápida.'
      />

      <MainHero images={images}>
        <Layout session={session}>
          <HeroLicense
            title='Licencias Turísticas Torrevieja'
            subtitle='Como conseguir tu licencia turística en Torrevieja en 2023'
          />
        </Layout>
      </MainHero>

      <TorreviejaInfo />

      <Footer />
    </section>
  );
};

export default TorreviejaPage;
