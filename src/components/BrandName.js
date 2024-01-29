import React from 'react';

import { Navbar, Container } from 'react-bootstrap';

function BrandName() {
  return (
    <div>
      <Navbar className="bg-body-tertiary" data-bs-theme="dark">
        <Container className="justify-content-center">
          <Navbar.Brand>Rental Management Application</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export { BrandName };
