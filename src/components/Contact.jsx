import React from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import AnimatedSection from './AnimatedSection';

const Contact = () => {
  return (
    <AnimatedSection animationClass="animate__fadeInUp">
      <Container className="my-5">
        <h2>Contact Us</h2>
        <Row>
          <Col md={6}>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group controlId="formSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" placeholder="Enter subject" />
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col md={6}>
            <h4>Get in Touch</h4>
            <p>
              We would love to hear from you. Whether you have a question about our services, pricing, 
              or anything else, our team is ready to answer all your questions. Feel free to reach out 
              to us using the contact form, email, or phone.
            </p>
            <ul>
              <li><strong>Email:</strong> contact@company.com</li>
              <li><strong>Phone:</strong> +1 234 567 890</li>
              <li><strong>Address:</strong> 123 Main Street, Anytown, USA</li>
            </ul>
          </Col>
        </Row>
        <Alert variant="success" className="mt-4">
          Thank you for reaching out to us. We will get back to you as soon as possible.
        </Alert>
      </Container>
    </AnimatedSection>
  );
};

export default Contact;
