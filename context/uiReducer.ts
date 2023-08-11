import { UIState } from './';

type UIActionType = { type: 'UI - Toogle Burger Menu'; payload: boolean };

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case 'UI - Toogle Burger Menu':
      return {
        ...state,
        sideMenu: action.payload,
      };

    default:
      return state;
  }
};
