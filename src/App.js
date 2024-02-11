import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { RentalProvider } from './context/RentalContext';
import SignUp from './components/SignUp';
import AppHeader from './components/AppHeader';
import { SignIn } from './components/SignIn';
import Dashboard from './components/Dashboard';

function App() {

  return (
    <BrowserRouter>
      <RentalProvider>
        <AppHeader/>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Navigate replace to="/signin" />} />
        </Routes>
      </RentalProvider>
    </BrowserRouter>
  );
}
export default App;


