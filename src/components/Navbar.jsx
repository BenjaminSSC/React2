import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavigationBar = () => {
  const total = 25000;
  const token = false;

  return (
    <Navbar expand="lg" className="bg-dark text-center px-4">
      <Navbar.Brand href="#home" className="text-white">Pizzería Mamma Mia!</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Button variant="outline-primary" className="me-2 text-white">Home</Button>
          {token && <Nav.Link href="#profile">Profile</Nav.Link>}
          {token ? (
            <Button variant="outline-danger" className="text-white">Logout</Button>
          ) : (
            <>
              <Button variant="outline-primary" className="me-2 text-white">Login</Button>
              <Button variant="outline-secondary" className="text-white">Register</Button>
            </>
          )}
        </Nav>
        <Navbar.Text className="ms-auto text-white">
          Total: ${total.toLocaleString('es-CL')}
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
