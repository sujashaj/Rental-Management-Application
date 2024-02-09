// AddProperty.js
import React, { useState } from 'react';
import { useRentalContext } from '../context/RentalContext';

import { Box, Container, TextField, Grid, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const AddRentals = () => {
  const { state, setState } = useRentalContext();
  const [rentalName, setRentalName] = useState('');
  const [rentalAddress, setRentalAddress] = useState('');
  const [renterName, setRenterName] = useState('');
  const [rentAmount, setRentAmount] = useState('');
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  const style = {
    backgroundColor: isHovering ? "yellow" : "white",
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setState({ type: 'ADD_RENTAL', payload:
        { rentalName: rentalName,  rentalAddress: rentalAddress, renterName: renterName, rentAmount: rentAmount} });
    setRentalName('');
    setRentalAddress('');
    setRenterName('');
    setRentAmount('');
  };

  const defaultTheme = createTheme({
    typography: {
      fontSize: 8,
    },
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container maxWidth="xs">
      <Box
          sx={{
            marginTop: 4,
            px: 12,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }} 
        >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
            <TextField
                    autoComplete="off"
                    name="rental"
                    required
                    fullWidth
                    id="rental"
                    label="Name of Rental"
                    autoFocus
                    size='small'
            />
        </Grid>
        <Grid item xs={12} sm={12}>
            <TextField
                    autoComplete="street-address"
                    name="address"
                    required
                    fullWidth
                    id="address"
                    label="Address of Rental"
                    autoFocus
                    size='small'
            />
        </Grid>
        <Grid item xs={12} sm={12}>
            <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="Name of Renter"
                    autoFocus
                    size='small'
            />
        </Grid>
        <Grid item xs={12} sm={12}>
            <TextField
                    autoComplete="transaction-amount"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="Rent Amount"
                    autoFocus
                    size='small'
            />
        </Grid>

      </Grid>
      <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 0}}
            >
              Add Rental
        </Button>

      </Box>
      </Container>
    </ThemeProvider>
    
  );
};

export { AddRentals };