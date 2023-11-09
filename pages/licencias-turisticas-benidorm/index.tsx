import {
  MainHero,
  Layout,
  HeroLicense,
  Footer,
  UtilHead,
  BenidormInfo,
} from '@/components';
import { useSession } from 'next-auth/react';

const images = [
  'https://res.cloudinary.com/vicflores11/image/upload/v1699488551/Dygav/Alicante/1_b1a7da.WebP',
  'https://res.cloudinary.com/vicflores11/image/upload/v1699488551/Dygav/Alicante/1_b1a7da.WebP',
  'https://res.cloudinary.com/vicflores11/image/upload/v1699488547/Dygav/Alicante/3_knlkzn.WebP',
  'https://res.cloudinary.com/vicflores11/image/upload/v1699488275/Dygav/Alicante/4_qzdyhb.WebP',
];

const BenidormPage = () => {
  const { data: session } = useSession();

  return (
    <section>
      <UtilHead
        title='Cómo Obtener Tu Licencia Turística en Benidorm - Dygav.es'
        content='Descubre todo lo necesario para adquirir tu licencia turística en Benidorm de forma sencilla y rápida.'
      />

      <MainHero images={images}>
        <Layout session={session}>
          <HeroLicense
            title='Licencias Turísticas Benidorm'
            subtitle='Como conseguir tu licencia turística en Benidorm en 2023'
          />
        </Layout>
      </MainHero>

      <BenidormInfo />

      <Footer />
    </section>
  );
};

export default BenidormPage;
