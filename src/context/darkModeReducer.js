export const ACTION_TYPES = {
  LIGHT: 'LIGHT',
  DARK: 'DARK',
  TOGGLE: 'TOGGLE',
};

export const darkModeReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.LIGHT:
      return { darkMode: false };
    case ACTION_TYPES.DARK:
      return { darkMode: true };
    case ACTION_TYPES.TOGGLE:
      return { darkMode: !state.darkMode };
    default:
      return state;
  }
};
