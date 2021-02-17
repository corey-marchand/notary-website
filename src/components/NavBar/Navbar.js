import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Button } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

function NavigationBar() {
  return (
    <>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Puget Sound Notary</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="home">Home</Nav.Link>
        <Nav.Link href="features">Real Estate Signings</Nav.Link>
        <Nav.Link href="pricing">Fees</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
    </>
  );
}

export default NavigationBar;
