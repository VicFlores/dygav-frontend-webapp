import {
  Contact,
  ContactYou,
  GetLicense,
  HeroLicense,
  Layout,
  LicenseTourist,
} from '@/components';

export default function License() {
  return (
    <section>
      <div
        className={
          'w-full h-screen bg-heroContent bg-center bg-cover bg-no-repeat '
        }
      >
        <Layout title='DyGav Owners' />
        <HeroLicense />
      </div>

      <GetLicense />

      <ContactYou />

      <LicenseTourist />

      <Contact />
    </section>
  );
}
