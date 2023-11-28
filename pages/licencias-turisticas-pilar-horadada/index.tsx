import {
  MainHero,
  Layout,
  HeroLicense,
  Footer,
  UtilHead,
  FinestratInfo,
  HelpFixedButton,
} from '@/components';
import { useSession } from 'next-auth/react';

const images = [
  'https://res.cloudinary.com/vicflores11/image/upload/v1701185619/Dygav/Finestrart/14_iw8ilx.WebP',
  'https://res.cloudinary.com/vicflores11/image/upload/v1701185609/Dygav/Finestrart/15_xpixav.WebP',
  'https://res.cloudinary.com/vicflores11/image/upload/v1701185606/Dygav/Finestrart/16_u9jznf.WebP',
  'https://res.cloudinary.com/vicflores11/image/upload/v1701185602/Dygav/Finestrart/17_gndp97.WebP',
];

const FinestratPage = () => {
  const { data: session } = useSession();

  return (
    <section>
      <UtilHead
        title='Cómo Obtener Tu Licencia Turística en Finestrat - Dygav.es'
        content='Descubre todo lo necesario para adquirir tu licencia turística en Finestrat de forma sencilla y rápida.'
      />

      <MainHero images={images}>
        <Layout session={session}>
          <HeroLicense
            title='Licencias Turísticas Finestrat'
            subtitle='Como conseguir tu licencia turística en Finestrat en 2023'
          />
        </Layout>
      </MainHero>

      <HelpFixedButton />

      <FinestratInfo />

      <Footer />
    </section>
  );
};

export default FinestratPage;
