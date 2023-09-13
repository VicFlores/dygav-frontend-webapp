import { useSession } from 'next-auth/react';
import {
  Hero,
  Carousel,
  AboutUs,
  OurComments,
  BrandContent,
  NavBar,
  Footer,
} from '@/components';

export default function HomePage() {
  const { data: session } = useSession();

  return (
    <section>
      <div className={'w-full bg-heroContent bg-center bg-cover bg-no-repeat '}>
        <NavBar session={session} />
        <Hero />
      </div>

      <Carousel />

      <AboutUs />

      <OurComments />

      <BrandContent />

      <Footer />
    </section>
  );
}
