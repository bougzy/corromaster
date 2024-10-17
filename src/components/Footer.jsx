import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-4">
      <Container>
        <Row>
          
          
          <Col md={12}>
            <h5>Contact Information</h5>
            <ul className="list-unstyled">
              <li><strong>Email:</strong> info@corromaster.com; corromasterltd@gmail.com</li>
              <li><strong>Phone:</strong>07035877639</li>
              <li><strong>WhatsApp:</strong>09093237110</li>
              <li><strong>Address:</strong>Plot 30 Ken Saro-Wiwa Road, Widom House Second Floor, Rumuomasi. Port Harcourt. Rivers State.</li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="text-center">
            <p>&copy; 2024 Your Company. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
