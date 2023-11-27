import {
  MainHero,
  Layout,
  HeroLicense,
  Footer,
  UtilHead,
  VillajoyosaInfo,
  HelpFixedButton,
} from '@/components';
import { useSession } from 'next-auth/react';

const images = [
  'https://res.cloudinary.com/vicflores11/image/upload/v1701107745/Dygav/Villajoyosa/12_niq9fq.WebP',
  'https://res.cloudinary.com/vicflores11/image/upload/v1701107278/Dygav/Villajoyosa/11_nqftjd.WebP',
  'https://res.cloudinary.com/vicflores11/image/upload/v1701107245/Dygav/Villajoyosa/10_xympe5.WebP',
  'https://res.cloudinary.com/vicflores11/image/upload/v1701107241/Dygav/Villajoyosa/9_na4ziy.WebP',
];

const VillajoyosaPage = () => {
  const { data: session } = useSession();

  return (
    <section>
      <UtilHead
        title='Cómo Obtener Tu Licencia Turística en Villajoyosa - Dygav.es'
        content='Descubre todo lo necesario para adquirir tu licencia turística en Villajoyosa de forma sencilla y rápida.'
      />

      <MainHero images={images}>
        <Layout session={session}>
          <HeroLicense
            title='Licencias Turísticas Villajoyosa'
            subtitle='Como conseguir tu licencia turística en Villajoyosa en 2023'
          />
        </Layout>
      </MainHero>

      <HelpFixedButton />

      <VillajoyosaInfo />

      <Footer />
    </section>
  );
};

export default VillajoyosaPage;
