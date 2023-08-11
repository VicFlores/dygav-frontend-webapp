import { FC, PropsWithChildren, ReactNode, useReducer } from 'react';
import { UIContext, uiReducer } from './';

export interface UIState {
  sideMenu: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sideMenu: false,
};

interface Props {
  children: ReactNode;
}

export const UIProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const isToogleBurgerMenu = (isToogle: boolean) => {
    dispatch({
      type: 'UI - Toogle Burger Menu',
      payload: isToogle,
    });
  };

  return (
    <UIContext.Provider
      value={{
        sideMenu: state.sideMenu,
        isToogleBurgerMenu,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
