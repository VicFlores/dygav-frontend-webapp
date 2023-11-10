import { MainHero, Layout, HeroLicense, Footer, UtilHead } from '@/components';
import { useSession } from 'next-auth/react';

const images = [
  'https://res.cloudinary.com/vicflores11/image/upload/v1699488551/Dygav/Alicante/1_b1a7da.WebP',
  'https://res.cloudinary.com/vicflores11/image/upload/v1699488551/Dygav/Alicante/1_b1a7da.WebP',
  'https://res.cloudinary.com/vicflores11/image/upload/v1699488547/Dygav/Alicante/3_knlkzn.WebP',
  'https://res.cloudinary.com/vicflores11/image/upload/v1699488275/Dygav/Alicante/4_qzdyhb.WebP',
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

      <OrihuelaOrihuelaCostaPage />

      <Footer />
    </section>
  );
};

export default OrihuelaOrihuelaCostaPage;
