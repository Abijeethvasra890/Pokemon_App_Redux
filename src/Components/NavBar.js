import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';


const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" className="d-flex justify-content-between">
      <Navbar.Brand as={Link} to="/">Pokemon App</Navbar.Brand>
      <Nav>
        <Nav.Link as={NavLink} to="/" exact activeclassname="active-link">Home</Nav.Link>
        <Nav.Link as={NavLink} to="/pokemons" activeclassname="active-link">Pokemon List</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
