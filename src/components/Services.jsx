import React from 'react';
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';
import AnimatedSection from './AnimatedSection';
import Slide9 from "../assets/Slide9.png"
import coro from "../assets/coro.jpeg"
import sevy from "../assets/sevy.png"
import sery2 from "../assets/sery2.png"
import ru from "../assets/ru.png"
import t1 from "../assets/t1.png"
import t2 from "../assets/t2.png"
import t3 from "../assets/t3.png"
import t4 from "../assets/t4.png"
const Services = () => {
  return (
    <div className='p-5' style={{background:"lightGray"}}>
    <AnimatedSection animationClass="animate__fadeInUp">
      <Container className="my-5">
        <h1 className="text-center text-danger fw-bold bg-white p-3">ACTION BY SERVICES</h1>
        <p>
       </p>
       
      </Container>
    </AnimatedSection>

    


      <AnimatedSection animationClass="animate__fadeInLeft">
  <div className="bg-white p-3">
    <Container className="my-5 text-black">
      <h2 className="fw-bold" style={{color:"red"}}>Our Core Services at the Glance</h2>
      <Row>
        <Col md={6}>
          <p className="fw-bold">
          Corromasters Limited is the reformed engineering design, Asset Integrity
         Management, Reliability Inspection Management Technology and Corrosion Control
Services. We are strategically position to deliver forehand services to our client
          </p>
          <h4 className="fw-bold" style={{color:"blue"}}>Inspection Hubs and Integrity Assessment Technology</h4>
          <ul className="list-unstyled fw-bold">
            <li className="d-flex align-items-center mb-3">
              <Image src={coro} roundedCircle className="me-2" />
              <span>Pipelines Internal Inspection Services</span>
            </li>
            <li className="d-flex align-items-center mb-3">
              <Image src={coro} roundedCircle className="me-2" />
              <span>
Difficult to Inspect Pipelines using Advanced ILI</span>
            </li>
            <li className="d-flex align-items-center mb-3">
              <Image src={coro} roundedCircle className="me-2" />
              <span>
Non-contact Magnetic Tomography Inspection Services</span>
            </li>
            <li className="d-flex align-items-center mb-3">
              <Image src={coro} roundedCircle className="me-2" />
              <span>
External Corrosion Direct Assessment of Pipeline</span>
            </li>
            <li className="d-flex align-items-center mb-3">
              <Image src={coro} roundedCircle className="me-2" />
              <span>Internal Corrosion Direct Assessment of Pipeline</span>
            </li>
            <li className="d-flex align-items-center mb-3">
              <Image src={coro} roundedCircle className="me-2" />
              <span>Pipeline Intelligent Monitoring Technology: Corrosion Monitoring and Cathodic</span>
            </li>
            <li className="d-flex align-items-center mb-3">
              <Image src={coro} roundedCircle className="me-2" />
              <span>Internal Corrosion Direct Assessment of Pipeline</span>
            </li>
            <li className="d-flex align-items-center mb-3">
              <Image src={coro} roundedCircle className="me-2" />
              <span>Protection Technology.</span>
            </li>
            <li className="d-flex align-items-center mb-3">
              <Image src={coro} roundedCircle className="me-2" />
              <span>Pipeline Integrity Management Technology</span>
            </li>
            <li className="d-flex align-items-center mb-3">
              <Image src={coro} roundedCircle className="me-2" />
              <span>Comprehensive details inspection of Structural Components, Pressure Vessels,
              Separators, Tanks and Heat Exchanger.</span>
            </li>
            <li className="d-flex align-items-center mb-3">
              <Image src={coro} roundedCircle className="me-2" />
              <span>Digital Pipeline Integrity Management</span>
            </li>
            <li className="d-flex align-items-center mb-3">
              <Image src={coro} roundedCircle className="me-2" />
              <span>Digital Drone Inspection Services</span>
            </li>
            <li className="d-flex align-items-center mb-3">
              <Image src={coro} roundedCircle className="me-2" />
              <span>Welding Inspection Services and Qualification</span>
            </li>
          </ul>
        </Col>
        <Col md={6} className="d-flex flex-column align-items-center">
          <Image 
            src={sevy}
            className="img-fluid rounded mb-3 w-75"
            alt="About Us"
          />
          <Image 
            src={sery2} 
            className="img-fluid rounded w-75"
            alt="About Us"
          />
        </Col>
      </Row>
    </Container>
  </div>
</AnimatedSection>

      <AnimatedSection animationClass="animate__fadeInLeft">
  <div className="bg-white mt-5 p-3">
    <Container className="my-5 text-black">
      <h5 className="fw-bold" style={{color:"black"}}>Digital Asset Integrity Engineering Concepts:</h5>
      <Row>
        <Col md={6}>
          
          <ul className="list-unstyled fw-bold">
            <li className="d-flex align-items-center mb-3">
              <Image src={coro} roundedCircle className="me-2" />
              <span>Corrosion and Metallurgical Diagrams</span>
            </li>
            <li className="d-flex align-items-center mb-3">
              <Image src={coro} roundedCircle className="me-2" />
              <span>
              Risk Assessment and Management</span>
            </li>
            <li className="d-flex align-items-center mb-3">
              <Image src={coro} roundedCircle className="me-2" />
              <span>
              Criticality Assessment</span>
            </li>
            <li className="d-flex align-items-center mb-3">
              <Image src={coro} roundedCircle className="me-2" />
              <span>
              Aging Assessment</span>
            </li>
            <li className="d-flex align-items-center mb-3">
              <Image src={coro} roundedCircle className="me-2" />
              <span> Quantitative and Qualitative Risk Assessment</span>
            </li>
            <li className="d-flex align-items-center mb-3">
              <Image src={coro} roundedCircle className="me-2" />
              <span> Risk Based Inspection</span>
            </li>
            <li className="d-flex align-items-center mb-3">
              <Image src={coro} roundedCircle className="me-2" />
              <span> Turnaround Management</span>
            </li>
            <li className="d-flex align-items-center mb-3">
              <Image src={coro} roundedCircle className="me-2" />
              <span> Integrity and Materials Operating Window</span>
            </li>
            <li className="d-flex align-items-center mb-3">
              <Image src={coro} roundedCircle className="me-2" />
              <span> Outage optimization</span>
            </li>
            <li className="d-flex align-items-center mb-3">
              <Image src={coro} roundedCircle className="me-2" />
              <span>Fitness for Services</span>
            </li>
            <li className="d-flex align-items-center mb-3">
              <Image src={coro} roundedCircle className="me-2" />
              <span>Failure Analysis and Root Cause Analysis</span>
            </li>
            <li className="d-flex align-items-center mb-3">
              <Image src={coro} roundedCircle className="me-2" />
              <span> Mitigation, Control, Monitoring Planning
              </span>
            
            </li>
            <li className="d-flex align-items-center mb-3">
              <Image src={coro} roundedCircle className="me-2" />
              <span> Reassessment, Evaluation and Continuous Improvement
              </span>
            
            </li>
            <li className="d-flex align-items-center mb-3">
              <Image src={coro} roundedCircle className="me-2" />
              <span> Positive Identification of Right-of-Way
              </span>
            
            </li>
    
           
            <li className="d-flex align-items-center mb-3">
              <Image src={coro} roundedCircle className="me-2" />
              <span>Pipeline Digital Route Mapping</span>
            </li>
            <li className="d-flex align-items-center mb-3">
              <Image src={coro} roundedCircle className="me-2" />
              <span>Heat Treatment Technology
              </span>
            </li>
            <li className="d-flex align-items-center mb-3">
              <Image src={coro} roundedCircle className="me-2" />
              <span> 360 Degree Laser Scanning and Surveying Services</span>
            </li>
          </ul>
        </Col>
        <Col md={6} className="d-flex flex-column align-items-center">
          <Image 
            src={ru}
            className="img-fluid rounded mb-3 w-75"
            alt="About Us"
          />
          
        </Col>
      </Row>
    </Container>
  </div>
</AnimatedSection>

<AnimatedSection animationClass="animate__fadeInLeft">
  <div className="bg-white mt-5 p-5"> 
    <h2 className="text-center mb-4" style={{textDecoration:"underline"}}>Expertise for Engineering Concept</h2>
    <hl text-danger />
<Container>
      <Row className="">
        {/* Column for Text */}
        <Col md={6}>
        <ul className="list-unstyled fw-bold">
            <li className="d-flex align-items-center mb-3">
              <Image src={coro} roundedCircle className="me-2" />
              <span>Significant engineering operations with centres of
              excellence in the Nigeria and Africa.</span>
            </li>
            <li className="d-flex align-items-center mb-3">
              <Image src={coro} roundedCircle className="me-2" />
              <span>
              FEED and detailed engineering
              </span>
            </li>
            <li className="d-flex align-items-center mb-3">
              <Image src={coro} roundedCircle className="me-2" />
              <span>
              Fully integrated teams; process and plant</span>
            </li>
            <li className="d-flex align-items-center mb-3">
              <Image src={coro} roundedCircle className="me-2" />
              <span>
              utilities and infrastructure</span>
            </li>
            <li className="d-flex align-items-center mb-3">
              <Image src={coro} roundedCircle className="me-2" />
              <span> Extensive experience of international codes and
              standards</span>
            </li>
            <li className="d-flex align-items-center mb-3">
              <Image src={coro} roundedCircle className="me-2" />
              <span> Extensive use of proprietary engineering
              software tools</span>
            </li>
            <li className="d-flex align-items-center mb-3">
              <Image src={coro} roundedCircle className="me-2" />
              <span> Use of in-house developed project control
              systems</span>
            </li>
            
            </ul>
            <h3 className="">Over 20 engineering design staff across
            systematic key centres of operations</h3>
        </Col>

        {/* Column for Images */}
        <Col md={6}>
          <Row>
            <Col xs={6} className="mb-4">
              <img src={t1} alt="First Image" className="img-fluid rounded-4" />
            </Col>
            <Col xs={6} className="mb-4">
              <img src={t2} alt="Second Image" className="img-fluid h-100" />
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <img src={t3} alt="Third Image" className="img-fluid" />
            </Col>
            <Col xs={6}>
              <img src={t4} alt="Fourth Image" className="img-fluid h-75" />
            </Col>
          </Row>
        </Col>
      </Row>
      <h1 className="mb-4 p-2" style={{color:"red"}}>corromasters Engineering CAPABILITIES
      </h1>
    </Container>
    </div>
</AnimatedSection>

<AnimatedSection>
  
    <div className="bg-white mt-4 p-4">
      <h5 className="fw-bold">Corrosion Module:</h5>
      <p className="fw-bold">The Corrosion Module also includes capabilities for describing in
detail the charge transfer reactions that are responsible for corrosion occurring at
electrolyte–metal surfaces. Modeling and simulation are powerful tools for understanding
corrosion and designing and optimizing corrosion protection systems.
The following determine corrosion capabilities future and growing rate;</p>
             <ul className="list-unstyled fw-bold">
            <li className="d-flex align-items-center mb-3">
              <Image src={coro} roundedCircle className="me-2" />
              <span>Corrosion Types and Damage Mechanism</span>
            </li>
            <li className="d-flex align-items-center mb-3">
              <Image src={coro} roundedCircle className="me-2" />
              <span>
              Corrosion Management and Control
              </span>
            </li>
            <li className="d-flex align-items-center mb-3">
              <Image src={coro} roundedCircle className="me-2" />
              <span>
              Materials Selection</span>
            </li>
            <li className="d-flex align-items-center mb-3">
              <Image src={coro} roundedCircle className="me-2" />
              <span>
              Corrosion Test</span>
            </li>
            
            
            </ul>
    </div>
  
</AnimatedSection>
<AnimatedSection>
  
    <div className="bg-white mt-4 p-4">
      <h5 className="fw-bold">Engineering calculations:</h5>
      <p className="fw-bold">Engineering calculations are an integral part of the
Corromasters development process of products, machines and structures. Correctly
performed calculations provide assurance of product performance, reliability of technical
solutions, safety of people, as well as the expediency of the materials used.
A team of professionals with decades years of experience will carry out engineering
calculations of any complexity for you</p>
             <ul className="list-unstyled fw-bold">
            <li className="d-flex align-items-center mb-3">
              <Image src={coro} roundedCircle className="me-2" />
              <span>Pipeline and Piping systems
              </span>
            </li>
            <li className="d-flex align-items-center mb-3">
              <Image src={coro} roundedCircle className="me-2" />
              <span>
              Pressure Vessels, Separators and tanks
              </span>
            </li>
            </ul>
    </div>
  
</AnimatedSection>

    </div>
  );
};

export default Services;
