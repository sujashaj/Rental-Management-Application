// AddProperty.js
import React, { useState } from 'react';
import { useRentalContext } from '../context/RentalContext';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


const AddRentals = () => {
  const { state, setState } = useRentalContext();
  const [rentalName, setRentalName] = useState('');
  const [rentalAddress, setRentalAddress] = useState('');
  const [renterName, setRenterName] = useState('');
  const [rentAmount, setRentAmount] = useState('');

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

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="rentalName">
            <Form.Label>Name of Rental</Form.Label>
            <Form.Control size="sm" type="text" value={rentalName} onChange={(event) => setRentalName(event.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="rentalAddress">
            <Form.Label>Address of Rental</Form.Label>
            <Form.Control size="sm" type="text" value={rentalAddress} onChange={(event) => setRentalAddress(event.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="renterName">
            <Form.Label>Name of Renter</Form.Label>
            <Form.Control size="sm" type="text" value={renterName} onChange={(event) => setRenterName(event.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="rentAmount">
            <Form.Label>Rent Amount</Form.Label>
            <Form.Control size="sm" type="text" value={rentAmount} onChange={(event) => setRentAmount(event.target.value)}/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Add Rental
          </Button>
      </Form>
    </Container>
  );
};
export { AddRentals };