import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import AnimatedSection from './AnimatedSection';
// import teamMember1 from '../assets/team1.jpg';
// import teamMember2 from '../assets/team2.jpg';
// import teamMember3 from '../assets/team3.jpg';
import coro from "../assets/coro.jpeg"

const About = () => {
  return (

   <div className="mt-3 mb-4 bg-secondary">
      <AnimatedSection animationClass="animate__fadeInLeft">
  <div className="bg-primary p-3">
    <Container className="my-5 text-white">
      <h2>About Us</h2>
      <Row>
        <Col md={6}>
          <p>
            Corromasters Limited is a leading provider of advanced engineering design, asset integrity management, reliability inspection management technology, and corrosion control services. We are strategically positioned to deliver proactive, innovative, and effective solutions to our clients, ensuring the safety, reliability, and longevity of their critical infrastructure.
          </p>
          <ul className="list-unstyled">
            <li className="d-flex align-items-center mb-3">
              <Image src={coro} roundedCircle className="me-2" />
              <span>Est. 2003, professionally managed Company Over 250 projects executed till date.</span>
            </li>
            <li className="d-flex align-items-center mb-3">
              <Image src={coro} roundedCircle className="me-2" />
              <span>Employs over 45 Engineers, Inspectors and Construction Management Staff. Main operations in Port Harcourt and Lagos</span>
            </li>
            <li className="d-flex align-items-center mb-3">
              <Image src={coro} roundedCircle className="me-2" />
              <span>Certified to ISO 9001:2015 and Achilles JQS for Nigeria.</span>
            </li>
            <li className="d-flex align-items-center mb-3">
              <Image src={coro} roundedCircle className="me-2" />
              <span>Complete value chain for Oil & Gas Production, Transportation, Storage and List item.</span>
            </li>
            <li className="d-flex align-items-center mb-3">
              <Image src={coro} roundedCircle className="me-2" />
              <span>Refining and Storage facilities.</span>
            </li>
          </ul>
        </Col>
        <Col md={6}>
          <Image 
            src="https://images.pexels.com/photos/3216911/pexels-photo-3216911.jpeg?cs=srgb&dl=pexels-jan-rune-smenes-reite-221584-3216911.jpg&fm=jpg" 
            className="img-fluid rounded w-100"
            alt="About Us"
          />
        </Col>
      </Row>
    </Container>
  </div>
</AnimatedSection>
   </div>
  
    
    // <AnimatedSection animationClass="animate__fadeInUp">
    //   <Container className="my-5">
    //     <h2>About Us</h2>
    //     <Row>
    //       <Col md={6}>
    //         <h4>Our History</h4>
    //         <p>
    //           Founded in 2010, our company has grown from a small startup to a leading provider of technology solutions. 
    //           We have consistently expanded our offerings and capabilities to meet the changing needs of our clients.
    //         </p>
    //       </Col>
    //       <Col md={6}>
    //         <Image src="https://via.placeholder.com/600x400" fluid />
    //       </Col>
    //     </Row>
    //     <Row className="my-5">
    //       <Col md={6}>
    //         <Image src="https://via.placeholder.com/600x400" fluid />
    //       </Col>
    //       <Col md={6}>
    //         <h4>Our Mission</h4>
    //         <p>
    //           Our mission is to deliver innovative and reliable solutions that empower our clients to succeed in their industries. 
    //           We strive to exceed expectations through quality, integrity, and a commitment to excellence.
    //         </p>
    //       </Col>
    //     </Row>
    //     <h4>Meet Our Team</h4>
    //     <Row className="mt-4">
    //       <Col md={4}>
    //         <Card className="mb-4 text-center">
    //           {/* <Card.Img variant="top" src={} className="rounded-circle mx-auto mt-3" style={{ width: '100px', height: '100px' }} /> */}
    //           <Card.Body>
    //             <Card.Title>Sarah Brown</Card.Title>
    //             <Card.Text>Chief Executive Officer</Card.Text>
    //           </Card.Body>
    //         </Card>
    //       </Col>
    //       <Col md={4}>
    //         <Card className="mb-4 text-center">
    //           {/* <Card.Img variant="top" src={teamMember2} className="rounded-circle mx-auto mt-3" style={{ width: '100px', height: '100px' }} /> */}
    //           <Card.Body>
    //             <Card.Title>Michael Green</Card.Title>
    //             <Card.Text>Chief Technology Officer</Card.Text>
    //           </Card.Body>
    //         </Card>
    //       </Col>
    //       <Col md={4}>
    //         <Card className="mb-4 text-center">
    //           {/* <Card.Img variant="top" src={teamMember3} className="rounded-circle mx-auto mt-3" style={{ width: '100px', height: '100px' }} /> */}
    //           <Card.Body>
    //             <Card.Title>Emily White</Card.Title>
    //             <Card.Text>Chief Marketing Officer</Card.Text>
    //           </Card.Body>
    //         </Card>
    //       </Col>
    //     </Row>
    //   </Container>
    // </AnimatedSection>
  );
};

export default About;
