import React, { createContext, useReducer, useContext } from 'react';

const RentalContext = createContext();

const initialState = {
  properties: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PROPERTY':
      return {
        properties: [...state.properties, action.payload],
      };
    // Add more cases for different actions
    default:
      return state;
  }
};

const RentalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <RentalContext.Provider value={{ state, dispatch }}>
      {children}
    </RentalContext.Provider>
  );
};

const useRentalContext = () => {
  const context = useContext(RentalContext);
  if (!context) {
    throw new Error('useRentalContext must be used within a RentalProvider');
  }
  return context;
};

export { RentalProvider, useRentalContext };