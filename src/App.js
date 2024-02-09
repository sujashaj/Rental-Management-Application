import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RentalProvider } from './context/RentalContext';
import { AddRentals } from './components/AddRentals';
import SignUp from './components/SignUp';
import AppHeader from './components/AppHeader';
import { SignIn } from './components/SignIn';
import NavigationPanel from './components/NavigationPanel';

function App() {

  return (
    <BrowserRouter>
      <RentalProvider>
        <AppHeader/>
        <Routes>
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/addRentals" element={<AddRentals />} />
          <Route path="/dashboard" element={<NavigationPanel />} />
        </Routes>
      </RentalProvider>
    </BrowserRouter>
  );
}
export default App;


