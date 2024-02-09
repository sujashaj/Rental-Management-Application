import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme({
});

export default function AppHeader() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppBar position="static">
        <Toolbar variant="dense" sx={{ display:"flex", justifyContent:"center" }}>
          <Typography variant="h6" component="div">
            Rental Management Application
          </Typography>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}