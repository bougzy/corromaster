import React from 'react';
import { Container, Nav, Image, Navbar as BootstrapNavbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import necoro from "../assets/newlogo.png"

const Navbar = () => {
  return (
    <BootstrapNavbar bg="white " expand="lg" className="p-4">
      <Container>
        <BootstrapNavbar.Brand href="/">
        <Image src={necoro}  className="me-2" style={{width:"120px", }} />
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <LinkContainer to="/">
              <Nav.Link className="text-primary fw-bold">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link className="text-primary fw-bold">About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/services">
              <Nav.Link className="text-primary fw-bold">Services</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/projects">
              <Nav.Link className="text-primary fw-bold">Projects</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link className="text-primary fw-bold">Contact</Nav.Link>
            </LinkContainer>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
