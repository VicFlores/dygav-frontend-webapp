import {
  AparmentDetails,
  BurgerMenu,
  Footer,
  HeroAparmentDetails,
  MainHero,
  NavBar,
} from '@/components';
import { useRouter } from 'next/router';
import React from 'react';

const AparmentDetailsPage = () => {
  const router = useRouter();

  return (
    <>
      <MainHero>
        <NavBar />
        <BurgerMenu />
        <HeroAparmentDetails />
      </MainHero>

      <AparmentDetails id={router.query.id as string} />

      <Footer />
    </>
  );
};

export default AparmentDetailsPage;
