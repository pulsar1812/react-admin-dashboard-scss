import { createContext, useReducer } from 'react';
import { darkModeReducer } from './darkModeReducer';

const INITIAL_STATE = {
  darkMode: false,
};

const DarkModeContext = createContext(INITIAL_STATE);

export const DarkModeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(darkModeReducer, INITIAL_STATE);

  return (
    <DarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeContext;
