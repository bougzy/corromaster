// RealEstateCard.js
import React from 'react';
import { Card, Button, Row, Col, Carousel } from 'react-bootstrap';

function RealEstateCard() {
  return (
    <Card className="my-4 border-0">
      <Card.Body>
        <Row>
          {/* Images and Videos Carousel */}
          <Col md={6} className="d-flex align-items-center">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1/600x400"
                  alt="Property Slide 1"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg?auto=compress&cs=tinysrgb&w=600/600x400"
                  alt="Property Slide 2"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600/600x400"
                  alt="Property Slide 3"
                />
              </Carousel.Item>
            </Carousel>
          </Col>

          {/* Property Details */}
          <Col md={6}>
            <Card.Title className="mb-3">Beautiful Family House</Card.Title>
            <Card.Text className="text-muted">Downtown, Cityville</Card.Text>
            <Card.Text>
              <strong>Address:</strong> 123 Main Street
            </Card.Text>
            <Card.Text>
              A charming house in the heart of the city, featuring 3 bedrooms,
              2 bathrooms, and a spacious garden.
            </Card.Text>

            {/* Features List */}
            <ul className="list-unstyled">
              <li className="mb-2">
                <i className="fa fa-check-circle text-success"></i> Spacious
                Living Room
              </li>
              <li className="mb-2">
                <i className="fa fa-check-circle text-success"></i> Modern
                Kitchen
              </li>
              <li className="mb-2">
                <i className="fa fa-check-circle text-success"></i> Private
                Garden
              </li>
            </ul>

            <Button variant="primary">Contact Agent</Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default RealEstateCard;
