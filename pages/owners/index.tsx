import {
  HeroOwners,
  Layout,
  PeachOwners,
  ContactYou,
  Information,
} from '@/components';

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

      <Information />
    </section>
  );
};

export default OwnersPage;
