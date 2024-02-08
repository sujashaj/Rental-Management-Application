import React, { createContext, useReducer, useContext } from 'react';


const RentalContext = createContext();




const initialState = {

  rentalColumns: [

    { key: 'rentalName', label: 'Rental Name', sortable: true },

    { key: 'rentalAddress', label: 'Rental Address', sortable: true },

    { key: 'renterName', label: 'Renter Name', sortable: true },

    { key: 'rentAmount', label: 'Renter Amount', sortable: true }

  ],

  rentalProperties: []

};




const reducer = (state, action) => {

  switch (action.type) {

    case 'ADD_RENTAL':

      return {

        ...state,

        rentalProperties: [...state.rentalProperties, action.payload],

      };

    // Add more cases for different actions

    default:
      return state;
  }

};




const RentalProvider = ({ children }) => {

  const [state, setState] = useReducer(reducer, initialState);




  return (

    <RentalContext.Provider value={{ state, setState }}>

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