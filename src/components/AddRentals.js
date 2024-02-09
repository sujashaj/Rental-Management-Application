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
//  const handleAddProperty = () => {
//    state({ type: 'ADD_PROPERTY', payload: { name: propertyName } });
//    setPropertyName('');
//  };
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
    // <Container className="mt-1 mb-3">
    //   <Form onSubmit={handleSubmit} className="p-5 m-5 border rounded shadow">
    //       <Form.Group className="mb-3" controlId="rentalName">
    //         <Form.Label>Name of Rental</Form.Label>
    //         <Form.Control size="sm" type="text" value={rentalName} onChange={(event) => setRentalName(event.target.value)}/>
    //       </Form.Group>
    //       <Form.Group className="mb-3" controlId="rentalAddress">
    //         <Form.Label>Address of Rental</Form.Label>
    //         <Form.Control size="sm" type="text" value={rentalAddress} onChange={(event) => setRentalAddress(event.target.value)}/>
    //       </Form.Group>
    //       <Form.Group className="mb-3" controlId="renterName">
    //         <Form.Label>Name of Renter</Form.Label>
    //         <Form.Control size="sm" type="text" value={renterName} onChange={(event) => setRenterName(event.target.value)}/>
    //       </Form.Group>
    //       <Form.Group className="mb-3" controlId="rentAmount">
    //         <Form.Label>Rent Amount</Form.Label>
    //         <Form.Control size="sm" type="text" value={rentAmount} onChange={(event) => setRentAmount(event.target.value)}/>
    //       </Form.Group>
    //       <Button variant="primary" type="submit">
    //         Add Rental
    //       </Button>
    //   </Form>
    // </Container>
  );
};

export { AddRentals };