import { useSession } from 'next-auth/react';
import {
  HeroOwners,
  PeachOwners,
  ContactYou,
  Information,
  Contact,
  NavBar,
} from '@/components';

const OwnersPage = () => {
  const { data: session } = useSession();

  return (
    <section>
      <div
        className={
          'w-full h-screen bg-heroContent bg-center bg-cover bg-no-repeat '
        }
      >
        <NavBar session={session} />
        <HeroOwners />
      </div>

      <PeachOwners />

      <ContactYou />

      <Information />

      <Contact />
    </section>
  );
};

export default OwnersPage;
