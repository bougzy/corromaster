import React from 'react';
import { Container, Nav, Image, Navbar as BootstrapNavbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import corologo from "../assets/corologo.png"

const Navbar = () => {
  return (
    <BootstrapNavbar bg="white " expand="lg" className="p-4">
      <Container>
        <BootstrapNavbar.Brand href="/">
        <Image src={corologo}  className="me-2" style={{width:"230px", }} />
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto mt-3">
            <LinkContainer to="/">
              <Nav.Link className="text-primary fw-bold fs-5">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link className="text-primary fw-bold fs-5">About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/services">
              <Nav.Link className="text-primary fw-bold fs-5">Services</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/projects">
              <Nav.Link className="text-primary fw-bold fs-5">Projects</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link className="text-primary fw-bold fs-5">Contact</Nav.Link>
            </LinkContainer>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
