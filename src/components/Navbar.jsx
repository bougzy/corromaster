import React from 'react';
import { Container, Nav, Image, Navbar as BootstrapNavbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import coro from "../assets/coro.jpeg"

const Navbar = () => {
  return (
    <BootstrapNavbar bg="primary " expand="lg" className="p-4">
      <Container>
        <BootstrapNavbar.Brand href="/">
        <Image src={coro} roundedCircle className="me-2 w-100" />
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <LinkContainer to="/">
              <Nav.Link className="text-white">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link className="text-white">About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/services">
              <Nav.Link className="text-white">Services</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/projects">
              <Nav.Link className="text-white">Projects</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link className="text-white">Contact</Nav.Link>
            </LinkContainer>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
