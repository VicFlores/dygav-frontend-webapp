import Head from 'next/head';
import React, { FC, ReactNode } from 'react';
import { BurgerMenu, NavBar } from '..';

interface Props {
  children?: ReactNode;
  title?: string;
}

export const Layout: FC<Props> = ({ children, title = 'OpenJira App' }) => {
  return (
    <div>
      <Head>
        <title>{`${title}`}</title>
      </Head>

      <NavBar />
      <BurgerMenu />

      <div>{children}</div>
    </div>
  );
};
