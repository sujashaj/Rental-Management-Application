import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useRentalContext } from '../context/RentalContext';
import { useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { url } from '../constants';

const defaultTheme = createTheme({
});

export default function AppHeader() {
  const { state, setState } = useRentalContext();
  const navigate = useNavigate();

  const handleLogout = async (event) => {
    event.preventDefault();
    try {
        const response = await fetch(`${url}/logout`, {
        method: 'POST',
        'credentials': 'include',
        headers: {
            'Content-Type': 'application/json',
        }
        });
  
        const responseData = await response.json(); 
        if (response.ok) {
            console.log('Log out successful!');
            console.log(responseData);
            setState({ type: 'SET_IS_AUTHORIZED', payload: false});
            navigate('/signin');
        } else {
        console.error('Log out failed.');
        }
    } catch (error) {
        console.error('Error logging out:', error);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <AppBar position="static">
        <Toolbar variant="dense" 
        disableGutters sx={{ minHeight: 90, height: 90 }}
        >
          <Typography variant="h4" component="div" sx={{ display:"flex", justifyContent:"center", flexGrow: 100 }}>
            Rental Management Application
          </Typography>
          {state.isAuthorized && (<Button color="inherit" onClick={handleLogout}>
          <Typography variant="h6">
            Logout
          </Typography>
            </Button>)}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}