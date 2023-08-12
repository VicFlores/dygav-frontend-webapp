import { Layout, Hero, Carousel, AboutUs, OurComments } from '@/components';

const imageUrl =
  'https://res.cloudinary.com/vicflores11/image/upload/v1691367753/Dygav/12_yxhpq1.png';

export default function Home() {
  return (
    <section>
      <div
        className={'w-full	 bg-center bg-cover bg-no-repeat'}
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <Layout title='DyGav Home' />
        <Hero />
      </div>

      <Carousel />

      <AboutUs />

      <OurComments />
    </section>
  );
}
