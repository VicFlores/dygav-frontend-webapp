import {
  Layout,
  Hero,
  Carousel,
  AboutUs,
  OurComments,
  BrandContent,
} from '@/components';

export default function HomePage() {
  return (
    <section>
      <div className={'w-full bg-heroContent bg-center bg-cover bg-no-repeat '}>
        <Layout title='DyGav Home' />
        <Hero />
      </div>

      <Carousel />

      <AboutUs />

      <OurComments />

      <BrandContent />
    </section>
  );
}
