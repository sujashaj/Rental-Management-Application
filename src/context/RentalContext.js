import React, { createContext, useReducer, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const RentalContext = createContext();

const initialState = {
  rentalColumns: [
    { key: 'rentalName', label: 'Rental Name', sortable: true },
    { key: 'rentalAddress', label: 'Rental Address', sortable: true },
    { key: 'renterName', label: 'Renter Name', sortable: true },
    { key: 'rentAmount', label: 'Renter Amount', sortable: true }
  ],
  rentalProperties: [],
  authVerified: false,
  isAuthorized: false
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_RENTALS':
      console.log('Setting rentals:', action.payload);
      return {
        ...state,
        rentalProperties: [...state.rentalProperties, action.payload],
      };
    // Add more cases for different actions
    case 'SET_AUTH_VERIFIED':
      console.log('Setting authVerified:', action.payload);
      return {
        ...state,
        authVerified: action.payload
      };
    case 'SET_IS_AUTHORIZED':
      console.log('Setting isAuthorized:', action.payload);
        return {
          ...state,
          isAuthorized: action.payload
        };
    default:
      return state;
  }
};

const RentalProvider = ({ children }) => {
  const [state, setState] = useReducer(reducer, initialState);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check user authentication status
    fetch('http://localhost:5000/isAuthorized', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })
      .then(response => {
        console.log('Authorization checked against server');
        console.log('Current state" ', state);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (data.isAuthorized) {
          setState({ type: 'SET_IS_AUTHORIZED', payload: true});
          setState({ type: 'SET_AUTH_VERIFIED', payload: true});
          navigate('/dashboard');
        }
        setState({ type: 'SET_AUTH_VERIFIED', payload: true});
      })
      .catch(error => {
        setState({ type: 'SET_AUTH_VERIFIED', payload: true});
        console.error('Error checking authentication status:', error);
      });
  }, [navigate, setState]);

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