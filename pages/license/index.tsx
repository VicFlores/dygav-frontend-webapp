import { useSession } from 'next-auth/react';
import {
  Contact,
  ContactYou,
  Footer,
  GetLicense,
  HeroLicense,
  LicenseTourist,
  NavBar,
} from '@/components';

export default function License() {
  const { data: session } = useSession();

  return (
    <section>
      <div
        className={
          'w-full h-screen bg-heroContent bg-center bg-cover bg-no-repeat '
        }
      >
        <NavBar session={session} />
        <HeroLicense />
      </div>

      <GetLicense />

      <ContactYou />

      <LicenseTourist />

      <Contact />

      <Footer />
    </section>
  );
}
