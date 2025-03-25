'use client';

import { createContext } from 'react';

interface ContextProps {
  sideMenu: boolean;
  isToogleBurgerMenu: (isToogle: boolean) => void;
}

export const UIContext = createContext({} as ContextProps);
