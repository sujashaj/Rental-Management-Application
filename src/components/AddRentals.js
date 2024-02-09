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

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const formData = {
      rental_name: data.get('rentalName'),
      rental_address: data.get('rentalAddress'),
      renter_name: data.get('renterName'),
      rent_amount: data.get('rentAmount')
    };

    console.log({
      rental_name: data.get('rentalName'),
      rental_address: data.get('rentalAddress'),
      renter_name: data.get('renterName'),
      rent_amount: data.get('rentAmount')
      });

    // You can post the data to the desired endpoint here
    try {
        const response = await fetch('http://localhost:5000/addRental', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        });

        const responseData = await response.json(); 
        if (response.ok) {
            console.log('Login successful!');
            console.log(responseData);
        // Redirect or handle successful login here
        } else {
        console.error('Login failed.');
        // Handle login failure
        }
    } catch (error) {
        console.error('Error logging in:', error);
        // Handle error
    }
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
        component="form"
        sx={{
          marginTop: 4,
          px: 12,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }} 
        onSubmit={handleSubmit} >
       
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
              <TextField
                      autoComplete="off"
                      name="rentalName"
                      required
                      fullWidth
                      id="rentalName"
                      label="Name of Rental"
                      autoFocus
                      size='small'
              />
          </Grid>
          <Grid item xs={12} sm={12}>
              <TextField
                      autoComplete="street-address"
                      name="rentalAddress"
                      required
                      fullWidth
                      id="rentalAddress"
                      label="Address of Rental"
                      autoFocus
                      size='small'
              />
          </Grid>
          <Grid item xs={12} sm={12}>
              <TextField
                      autoComplete="given-name"
                      name="renterName"
                      required
                      fullWidth
                      id="renterName"
                      label="Name of Renter"
                      autoFocus
                      size='small'
              />
          </Grid>
          <Grid item xs={12} sm={12}>
              <TextField
                      autoComplete="transaction-amount"
                      name="rentAmount"
                      required
                      fullWidth
                      id="rentAmount"
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
          sx={{ mt: 2, mb: 0}}>
            Add Rental
        </Button>

      </Box>
      </Container>
    </ThemeProvider>
  );
};

export { AddRentals };