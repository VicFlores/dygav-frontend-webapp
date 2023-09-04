import {
  Contact,
  ContactYou,
  GetLicense,
  HeroLicense,
  Layout,
  LicenseTourist,
} from '@/components';
import { useSession } from 'next-auth/react';

export default function License() {
  const { data: session } = useSession();

  console.log('session:', { session });

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
