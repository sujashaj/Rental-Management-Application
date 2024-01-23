// AddProperty.js
import React, { useState } from 'react';
import { useRentalContext } from '../context/RentalContext';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const AddRentals = () => {
  const { state } = useRentalContext();
  const [propertyName, setPropertyName] = useState('');

  const handleAddProperty = () => {
    state({ type: 'ADD_PROPERTY', payload: { name: propertyName } });
    setPropertyName('');
  };

  return (
    <div>
      <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name of Rental</Form.Label>
            <Form.Control placeholder="Name of Rental" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Address of Rental</Form.Label>
            <Form.Control placeholder="Address of Rental" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formRenter">
            <Form.Label>Name of Renter</Form.Label>
            <Form.Control placeholder="Name of Renter" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formRenter">
            <Form.Label>Rent Amount</Form.Label>
            <Form.Control placeholder="Rent Amount" />
          </Form.Group>
      </Form>
      <Button variant="primary" type="submit">
        Add Rental
      </Button>
    </div>
  );
};

export { AddRentals };