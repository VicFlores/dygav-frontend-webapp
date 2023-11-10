import {
  MainHero,
  Layout,
  HeroLicense,
  Footer,
  UtilHead,
  BenidormInfo,
  HelpFixedButton,
} from '@/components';
import { useSession } from 'next-auth/react';

const images = [
  'https://res.cloudinary.com/vicflores11/image/upload/v1699567179/Dygav/Benidorm/1_c6h3oz.WebP',
  'https://res.cloudinary.com/vicflores11/image/upload/v1699567176/Dygav/Benidorm/2_wqwtkc.WebP',
  'https://res.cloudinary.com/vicflores11/image/upload/v1699567164/Dygav/Benidorm/3_ns0pgn.WebP',
  'https://res.cloudinary.com/vicflores11/image/upload/v1699567160/Dygav/Benidorm/4_eyxrcy.WebP',
  'https://res.cloudinary.com/vicflores11/image/upload/v1699567156/Dygav/Benidorm/Copia_de_2_doz1la.WebP',
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

      <HelpFixedButton />

      <BenidormInfo />

      <Footer />
    </section>
  );
};

export default BenidormPage;
