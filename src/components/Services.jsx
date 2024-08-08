import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import AnimatedSection from './AnimatedSection';
import Slide9 from "../assets/Slide9.png"
const Services = () => {
  return (
    <div>
    <AnimatedSection animationClass="animate__fadeInUp">
      <Container className="my-5">
        <h1 className="text-center">ACTION BY SERVICES</h1>
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
       
      </Container>
    </AnimatedSection>

    <AnimatedSection animationClass="animate__fadeIn">
        <div style={{marginTop:"100px"}}>
      <Container className=" text-center">
      <Card className="border-0 image-card"> {/* Add a card with custom styling */}
        <Card.Img variant="top" src={Slide9} alt="Image" className="img-fluid" /> {/* Use img-fluid for responsiveness */}
      </Card>
    </Container>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Services;
