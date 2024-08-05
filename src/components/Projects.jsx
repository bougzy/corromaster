import React from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import AnimatedSection from './AnimatedSection';

const Projects = () => {
  return (
    <AnimatedSection animationClass="animate__fadeInUp">
      <Container className="my-5">
        <h2>Our Projects</h2>
        <Row>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Img variant="top" src="https://via.placeholder.com/600x400" />
              <Card.Body>
                <Card.Title>Project 1: E-commerce Platform</Card.Title>
                <Card.Text>
                  <strong>Client:</strong> ABC Retailers<br/>
                  <strong>Objective:</strong> Develop an online platform for seamless shopping experiences.<br/>
                  <strong>Outcome:</strong> Increased sales by 30% within the first six months.
                </Card.Text>
                <Button variant="primary">View Details</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Img variant="top" src="https://via.placeholder.com/600x400" />
              <Card.Body>
                <Card.Title>Project 2: Mobile Banking App</Card.Title>
                <Card.Text>
                  <strong>Client:</strong> XYZ Bank<br/>
                  <strong>Objective:</strong> Create a user-friendly mobile app for banking transactions.<br/>
                  <strong>Outcome:</strong> Achieved a 95% user satisfaction rate.
                </Card.Text>
                <Button variant="primary">View Details</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Img variant="top" src="https://via.placeholder.com/600x400" />
              <Card.Body>
                <Card.Title>Project 3: Healthcare Management System</Card.Title>
                <Card.Text>
                  <strong>Client:</strong> HealthCare Solutions<br/>
                  <strong>Objective:</strong> Implement a comprehensive management system for healthcare facilities.<br/>
                  <strong>Outcome:</strong> Improved operational efficiency by 40%.
                </Card.Text>
                <Button variant="primary">View Details</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Img variant="top" src="https://via.placeholder.com/600x400" />
              <Card.Body>
                <Card.Title>Project 4: Smart Home Automation</Card.Title>
                <Card.Text>
                  <strong>Client:</strong> SmartLiving Corp<br/>
                  <strong>Objective:</strong> Develop an integrated smart home solution.<br/>
                  <strong>Outcome:</strong> Enhanced user convenience and energy efficiency.
                </Card.Text>
                <Button variant="primary">View Details</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Img variant="top" src="https://via.placeholder.com/600x400" />
              <Card.Body>
                <Card.Title>Project 5: Educational Platform</Card.Title>
                <Card.Text>
                  <strong>Client:</strong> EduTech Innovators<br/>
                  <strong>Objective:</strong> Create an online platform for educational resources.<br/>
                  <strong>Outcome:</strong> Engaged over 10,000 users within the first year.
                </Card.Text>
                <Button variant="primary">View Details</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Img variant="top" src="https://via.placeholder.com/600x400" />
              <Card.Body>
                <Card.Title>Project 6: Logistics Management System</Card.Title>
                <Card.Text>
                  <strong>Client:</strong> Global Logistics Co<br/>
                  <strong>Objective:</strong> Streamline logistics operations with an advanced management system.<br/>
                  <strong>Outcome:</strong> Reduced operational costs by 20%.
                </Card.Text>
                <Button variant="primary">View Details</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </AnimatedSection>
  );
};

export default Projects;
