import Head from 'next/head';
import React, { FC, ReactNode } from 'react';
import { BurgerMenu, NavBar } from '..';
import { Session } from 'next-auth';

interface Props {
  children?: ReactNode;
  title?: string;
  session?: Session | null;
}

export const Layout: FC<Props> = ({
  children,
  session = null,
  title = 'OpenJira App',
}) => {
  return (
    <div>
      <Head>
        <title>{`${title}`}</title>
      </Head>

      <NavBar session={session} />
      <BurgerMenu />

      <div>{children}</div>
    </div>
  );
};
