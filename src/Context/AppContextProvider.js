import React from 'react';

export const AppContext = React.createContext();

export const actionTypes = {
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGOUT: 'LOGOUT',
};

const initState = {
  auth: false,
};

const Reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        auth: true,
      };
    }
    case actionTypes.LOGOUT: {
      return {
        ...state,
        auth: false,
      };
    }
  }
};

const AppContextProvider = ({children}) => {
  const [state, dispatch] = React.useReducer(Reducer, initState);
  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
