import {
  MainHero,
  Layout,
  HeroLicense,
  Footer,
  UtilHead,
  GuardamarSeguraInfo,
  HelpFixedButton,
} from '@/components';
import { useSession } from 'next-auth/react';

const images = [
  'https://res.cloudinary.com/vicflores11/image/upload/v1700774785/Dygav/GuardamarDelSegura/5_pfqear.WebP',
  'https://res.cloudinary.com/vicflores11/image/upload/v1700774784/Dygav/GuardamarDelSegura/2_g8kxjz.WebP',
  'https://res.cloudinary.com/vicflores11/image/upload/v1700774784/Dygav/GuardamarDelSegura/4_fnp2ex.WebP',
  'https://res.cloudinary.com/vicflores11/image/upload/v1700774782/Dygav/GuardamarDelSegura/3_kfk9jn.WebP',
];

const GuardamarSeguraPage = () => {
  const { data: session } = useSession();

  return (
    <section>
      <UtilHead
        title='Cómo Obtener Tu Licencia Turística en Guardamar del Segura - Dygav.es'
        content='Descubre todo lo necesario para adquirir tu licencia turística en Guardamar del Segura de forma sencilla y rápida.'
      />

      <MainHero images={images}>
        <Layout session={session}>
          <HeroLicense
            title='Licencias Turísticas Guardamar del Segura'
            subtitle='Como conseguir tu licencia turística en Guardamar del Segura en 2023'
          />
        </Layout>
      </MainHero>

      <HelpFixedButton />

      <GuardamarSeguraInfo />

      <Footer />
    </section>
  );
};

export default GuardamarSeguraPage;
