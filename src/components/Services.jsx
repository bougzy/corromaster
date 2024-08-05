import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import AnimatedSection from './AnimatedSection';

const Services = () => {
  return (
    <AnimatedSection animationClass="animate__fadeInUp">
      <Container className="my-5">
        <h2>Our Core Services at the Glance</h2>
        <p>
Corromasters Limited is the reformed engineering design, Asset Integrity
Management, Reliability Inspection Management Technology and Corrosion Control
Services. We are strategically position to deliver forehand services to our client.
Inspection Hubs and Integrity Assessment Technology
Pipelines Internal Inspection Services
Difficult to Inspect Pipelines using Advanced ILI
Non-contact Magnetic Tomography Inspection Services
External Corrosion Direct Assessment of Pipeline
Internal Corrosion Direct Assessment of Pipeline
Pipeline Intelligent Monitoring Technology: Corrosion Monitoring and Cathodic
Protection Technology.
Pipeline Integrity Management Technology
Comprehensive details inspection of Structural Components, Pressure Vessels,
Separators, Tanks and Heat Exchanger.
Digital Pipeline Integrity Management
Digital Drone Inspection Services
Welding Inspection Services and Qualification
</p>
        {/* <Row>
          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Consulting</Card.Title>
                <Card.Text>
                  Our consulting services provide strategic insights and practical solutions to help you overcome challenges 
                  and achieve your business objectives. We work closely with you to understand your needs and deliver tailored 
                  recommendations.
                </Card.Text>
                <ul>
                  <li>Industry-specific expertise</li>
                  <li>Custom solutions</li>
                  <li>Proven methodologies</li>
                </ul>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Development</Card.Title>
                <Card.Text>
                  Our development team specializes in creating robust and scalable software solutions that drive business success. 
                  From web applications to mobile apps, we build products that are secure, reliable, and user-friendly.
                </Card.Text>
                <ul>
                  <li>Full-stack development</li>
                  <li>Agile methodologies</li>
                  <li>Cutting-edge technologies</li>
                </ul>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Design</Card.Title>
                <Card.Text>
                  Our design team creates visually stunning and user-friendly interfaces that enhance user experience and engagement. 
                  We focus on both aesthetics and functionality to deliver designs that resonate with your audience.
                </Card.Text>
                <ul>
                  <li>Responsive design</li>
                  <li>User-centered approach</li>
                  <li>Brand consistency</li>
                </ul>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Support</Card.Title>
                <Card.Text>
                  Our support services ensure that your systems are running smoothly and efficiently. We offer comprehensive support 
                  plans that include monitoring, maintenance, and troubleshooting to keep your operations on track.
                </Card.Text>
                <ul>
                  <li>24/7 support</li>
                  <li>Proactive monitoring</li>
                  <li>Timely issue resolution</li>
                </ul>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row> */}
      </Container>
    </AnimatedSection>
  );
};

export default Services;
