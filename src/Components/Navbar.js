import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CustomNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">Trip Planner</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/trip-duration">Trip Duration</Nav.Link>
          <Nav.Link as={Link} to="/destinations">Destinations</Nav.Link>
          <Nav.Link as={Link} to="/transportation">Transportation</Nav.Link>
          <Nav.Link as={Link} to="/hotels">Hotels</Nav.Link>
          <Nav.Link as={Link} to="/nearby-places">Nearby Places</Nav.Link>
          <Nav.Link as={Link} to="/return-options">Return Options</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
