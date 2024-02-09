import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RentalProvider } from './context/RentalContext';
import { AddRentals } from './components/AddRentals';
import SignUp from './components/SignUp';
import AppHeader from './components/AppHeader';

function App() {

  return (
    <BrowserRouter>
      <RentalProvider>
        <AppHeader/>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/addRentals" element={<AddRentals />} />
        </Routes>
      </RentalProvider>
    </BrowserRouter>
  );
}
export default App;


