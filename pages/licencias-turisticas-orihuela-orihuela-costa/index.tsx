import {
  MainHero,
  Layout,
  HeroLicense,
  Footer,
  UtilHead,
  OrihuelaOrihuelaCostaInfo,
} from '@/components';
import { useSession } from 'next-auth/react';

const images = [
  'https://res.cloudinary.com/vicflores11/image/upload/v1699647186/Dygav/Orihuela/9_v4hbbl.WebP',
  'https://res.cloudinary.com/vicflores11/image/upload/v1699647185/Dygav/Orihuela/Copia_de_8_fuequq.WebP',
  'https://res.cloudinary.com/vicflores11/image/upload/v1699647184/Dygav/Orihuela/6_azqjjg.WebP',
  'https://res.cloudinary.com/vicflores11/image/upload/v1699647182/Dygav/Orihuela/5_fqgfli.WebP',
  'https://res.cloudinary.com/vicflores11/image/upload/v1699647181/Dygav/Orihuela/10_p5fxqw.WebP',
];

const OrihuelaOrihuelaCostaPage = () => {
  const { data: session } = useSession();

  return (
    <section>
      <UtilHead
        title='Cómo Obtener Tu Licencia Turística en Orihuela y Orihuela Costa - Dygav.es'
        content='Descubre todo lo necesario para adquirir tu licencia turística en Orihuela y Orihuela Costa de forma sencilla y rápida.'
      />

      <MainHero images={images}>
        <Layout session={session}>
          <HeroLicense
            title='Licencias Turísticas Orihuela y Orihuela Costa'
            subtitle='Como conseguir tu licencia turística en Orihuela y Orihuela Costa en 2023'
          />
        </Layout>
      </MainHero>

      <OrihuelaOrihuelaCostaInfo />

      <Footer />
    </section>
  );
};

export default OrihuelaOrihuelaCostaPage;
