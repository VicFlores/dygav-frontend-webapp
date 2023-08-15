import { HeroOwners, Layout, PeachOwners, ContactYou } from '@/components';
import React from 'react';

const OwnersPage = () => {
  return (
    <section>
      <div
        className={
          'w-full h-screen bg-heroContent bg-center bg-cover bg-no-repeat '
        }
      >
        <Layout title='DyGav Owners' />
        <HeroOwners />
      </div>

      <PeachOwners />

      <ContactYou />
    </section>
  );
};

export default OwnersPage;
