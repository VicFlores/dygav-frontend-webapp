'use client';

import React, { FC, ReactNode } from 'react';
import { BurgerMenu, NavBar } from '..';
import { TSession } from '@/types';

interface Props {
  children?: ReactNode;
  user: TSession;
}

export const Layout: FC<Props> = ({ children, user }) => {
  return (
    <div>
      <NavBar user={user} />
      {/* <BurgerMenu user={user} /> */}
      {children}
    </div>
  );
};
