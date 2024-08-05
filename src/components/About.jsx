import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import AnimatedSection from './AnimatedSection';
// import teamMember1 from '../assets/team1.jpg';
// import teamMember2 from '../assets/team2.jpg';
// import teamMember3 from '../assets/team3.jpg';

const About = () => {
  return (
    <AnimatedSection animationClass="animate__fadeInUp">
      <Container className="my-5">
        <h2>About Us</h2>
        <Row>
          <Col md={6}>
            <h4>Our History</h4>
            <p>
              Founded in 2010, our company has grown from a small startup to a leading provider of technology solutions. 
              We have consistently expanded our offerings and capabilities to meet the changing needs of our clients.
            </p>
          </Col>
          <Col md={6}>
            <Image src="https://via.placeholder.com/600x400" fluid />
          </Col>
        </Row>
        <Row className="my-5">
          <Col md={6}>
            <Image src="https://via.placeholder.com/600x400" fluid />
          </Col>
          <Col md={6}>
            <h4>Our Mission</h4>
            <p>
              Our mission is to deliver innovative and reliable solutions that empower our clients to succeed in their industries. 
              We strive to exceed expectations through quality, integrity, and a commitment to excellence.
            </p>
          </Col>
        </Row>
        <h4>Meet Our Team</h4>
        <Row className="mt-4">
          <Col md={4}>
            <Card className="mb-4 text-center">
              {/* <Card.Img variant="top" src={} className="rounded-circle mx-auto mt-3" style={{ width: '100px', height: '100px' }} /> */}
              <Card.Body>
                <Card.Title>Sarah Brown</Card.Title>
                <Card.Text>Chief Executive Officer</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4 text-center">
              {/* <Card.Img variant="top" src={teamMember2} className="rounded-circle mx-auto mt-3" style={{ width: '100px', height: '100px' }} /> */}
              <Card.Body>
                <Card.Title>Michael Green</Card.Title>
                <Card.Text>Chief Technology Officer</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4 text-center">
              {/* <Card.Img variant="top" src={teamMember3} className="rounded-circle mx-auto mt-3" style={{ width: '100px', height: '100px' }} /> */}
              <Card.Body>
                <Card.Title>Emily White</Card.Title>
                <Card.Text>Chief Marketing Officer</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </AnimatedSection>
  );
};

export default About;
