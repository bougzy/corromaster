import React, { useState } from "react";
import { Carousel, Container, Card, Row, Col, Modal, Button, Image } from 'react-bootstrap';
import AnimatedSection from './AnimatedSection';
import coro from "../assets/coro.jpeg"
import cap from "../assets/cap.png"
import v from "../assets/v.png"
import fu from "../assets/fu.png"
import z from "../assets/z.png"
import prod from "../assets/prod.png"
import yk from "../assets/yk.png"
import g from "../assets/g.png"
import pip from "../assets/pip.png"
import berge from "../assets/berge.png"
import vision from "../assets/vision.png"
import hof from "../assets/hof.png"
import hat from "../assets/hat.png"

const Home = () => {

    const [showModal, setShowModal] = useState(false);

  // Function to handle modal open
  const handleShow = () => setShowModal(true);

  // Function to handle modal close
  const handleClose = () => setShowModal(false);
  
  const cardImageStyle = {
    width: '100%',
    height: '300px',
    objectFit: 'cover',
  };

  // Custom styles for the carousel images and overlay
const carouselImageStyle = {
    height: '500px', // Adjust height as needed
    objectFit: 'cover',
    position: 'relative',
    width: '100%',
  };
  
  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // 50% opacity black
    zIndex: 1, // Ensures overlay is on top of the image
  };
  
  // New style to center caption text
  const captionContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 2, // Ensure caption is above overlay
    color: 'white', // Ensure the text color is readable
    textAlign: 'center',
  };




  return (
    <div>
      {/* Hero Section */}
      

<Carousel>
      <Carousel.Item>
        <div style={overlayStyle}></div> {/* Overlay */}
        <img
          className="d-block w-100"
          src={pip}
          alt="First slide"
          style={carouselImageStyle}
        />
        <div style={captionContainerStyle}>
          <div>
            <h3>Pipelines needs…. Our Solutions</h3>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={overlayStyle}></div> {/* Overlay */}
        <img
          className="d-block w-100"
          src={v}
          alt="First slide"
          style={carouselImageStyle}
        />
        <div style={captionContainerStyle}>
          <div>
            <h3>Power Generation needs…. Our Solutions</h3>
           
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={overlayStyle}></div> {/* Overlay */}
        <img
          className="d-block w-100"
          src={berge}
          alt="First slide"
          style={carouselImageStyle}
        />
        <div style={captionContainerStyle}>
          <div>
            <h3>Marine needs…. Our Solutions</h3>
            
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={overlayStyle}></div> {/* Overlay */}
        <img
          className="d-block w-100"
          src={yk}
          alt="First slide"
          style={carouselImageStyle}
        />
        <div style={captionContainerStyle}>
          <div>
            <h3>FLNG needs…our Solutions
            </h3>
            
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={overlayStyle}></div> {/* Overlay */}
        <img
          className="d-block w-100"
          src={g}
          alt="First slide"
          style={carouselImageStyle}
        />
        <div style={captionContainerStyle}>
          <div>
            <h3>FPSO needs…our Solutions
            </h3>
           
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={overlayStyle}></div> {/* Overlay */}
        <img
          className="d-block w-100"
          src={z}
          alt="First slide"
          style={carouselImageStyle}
        />
        <div style={captionContainerStyle}>
          <div>
            <h3>Offshore Platform needs…. Our Solutions</h3>
            
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={overlayStyle}></div> {/* Overlay */}
        <img
          className="d-block w-100"
          src={prod}
          alt="First slide"
          style={carouselImageStyle}
        />
        <div style={captionContainerStyle}>
          <div>
            <h3>Refinery/Chemical needs…. Our Solutions</h3>
           
          </div>
        </div>
      </Carousel.Item>
     
    </Carousel>

      {/* Welcome Section */}
      <div style={{marginTop:"120px"}}>
      <AnimatedSection animationClass="animate__fadeInUp">
        <Container className="text-center my-5 text-primary">
          <h2 className="fw-bold">Welcome to Corromasters</h2>
          <p className="lead">
         Your trusted asset integrity partner with fourth digital industrial revolutionize approach in comprehensive engineering, inspection and corrosion management solutions. With the dedicated professional team of experts and decades of vast experience in the field, our concern is to bring solution to your challenges and protecting your valuable assets from the ageing damaging effects of corrosion and unplanned shutdown. Our mission is to deliver innovative, cost-effective, and sustainable asset integrity, reliability inspection, corrosion prevention and control strategies tailored to meet the unique needs of our clientele.
          </p>
        </Container>
      </AnimatedSection>
      </div>

      

{/* About Section */}
<AnimatedSection animationClass="animate__fadeInLeft">
  <div className="bg-primary p-3">
    <Container className="my-5 text-white">
      <div className="bg-white text-danger w-50 rounded-4 p-2 mb-2">
      <h2 className="text-center fw-bold">About Us</h2>
      </div>
      <Row>
        <Col md={6}>
          <p>
            Corromasters Limited is a leading provider of advanced engineering design, asset integrity management, reliability inspection management technology, and corrosion control services. We are strategically positioned to deliver proactive, innovative, and effective solutions to our clients, ensuring the safety, reliability, and longevity of their critical infrastructure.
          </p>
          <ul className="list-unstyled">
            <li className="d-flex align-items-center mb-3">
              <Image src={coro} roundedCircle className="me-2" />
              <span>Established in 2003, professionally managed Company Over 250 projects executed till date.</span>
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


      

           
      {/* Our Mission Section */}
      
      <div style={{marginTop:"100px"}} className=""> 
      <AnimatedSection animationClass="animate__fadeIn">
        <Container className="my-5 mx-auto">
            {/* <h1 className="text-center fw-bold text-primary mb-2">CML Vision & Mission</h1> */}
          <Row>
            <Col md={6} className="order-2">
              <Image src={vision}
              className="img-fluid rounded w-50" />
            </Col>
            <Col md={6} className="">
            <h2 className="text-center text-danger fw-bold">
              <img src="" />
              Our Vision</h2>
              <p className="text-primary">
              Our Vision is to become a World class engineering, Process Control, construction,
Corrosion, Inspection, Asset Integrity and innovative technology by building a
value adding and safe business, manned by highly motivated and competent
Nigerians globally
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="order-2 mt-4">
              <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLB5QwZdJ6s99l98wRevG1pUQwetAUGExs1w&s"
              className="img-fluid rounded w-50" />
            </Col>
            <Col md={6} className="">
            <h2 className="text-center text-danger fw-bold">Our Mission</h2>
              <p className="text-primary">
              To provide value to our professional staff through a forum for sharing ideas,
engaging the industry and its stakeholders, facilitating business opportunities and
promoting the highest standards in the Oil, Gas & Energy industry.
Our Mission is to contribute to the country’s economic progress, by providing
reliable and efficient management of the operation technology.

              </p>
              <p className="text-primary fw-bold">Our person...our technology...our service...our performance, is the heart of
              Corromasters Limited</p>
            </Col>
          </Row>
          <p className="text-danger fw-bold">VISION 2030: GREATLY DEVELOP; GREATLY DEPLOY; GREATLY IMPLEMENT; GREATLY
          <br/>ACHIEVE. IT’S A CENTRE FOR EXCELLENCE TO VISUALIZE</p>
        </Container>
      </AnimatedSection>
      </div>

               {/* Contact Us Section */}
      


      <AnimatedSection animationClass="animate__fadeIn">
  <Container>
    <Row className="custom-row p-4">
      {/* First Column with Image */}
      <Col md={6} className="custom-col">
        <Image
          src={hof}
          alt="First Image"
          fluid
          className="w-100"
        />
      </Col>

      {/* Second Column with Text and Image */}
      <Col md={6} className="custom-col">
        <div>
          <p className="mt-4 fw-bold text-start">
          Corromasters Building a Culture of Operational Excellence
Closing the Culture Gap to Drive Business Performance in
Engineering Solution, Asset Integrity Management &
Reliability Inspection Service
          </p>
          <Image
            src={hat}
            alt="Second Image"
            fluid
          />
        </div>
      </Col>
    </Row>
  </Container>
</AnimatedSection>



      <AnimatedSection animationClass="animate__fadeIn">
        <div  style={{marginTop:"100px"}} className="bg-primary p-3">
        <Container className="my-5 text-white" style={{marginTop:"150px"}}>
          <h2 className="fw-bold text-center mb-5 text-danger bg-white w-50 mx-auto p-2 rounded-4">Our Core Believe</h2>
          <Row>
            <Col md={6} className="order-2">
              <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKsfNNvJ9hUPyLW2f7QmEZbx5sxrgYRgkdbLlLv1QKyX74BI-VOMDlx-IICPfb1_SEgXg&usqp=CAU" 
              className="img-fluid rounded w-100" />
            </Col>
            <Col md={6}>
              <p>
              This is a clear culture of Corromasters Limited to stand for what we believe:
              </p>
              <ul className="list-unstyled">
                <li className=" align-items-center mb-3">
                  {/* <Image src={coro} roundedCircle className="me-2" /> */}
              <span className="h4">INTEGRITY</span>
                  <p className="mt-2">
People can be relied on to do what they say they will do, and to do what is expected
of them; they have the courage to do what is right and to hold everyone accountable,
including themselves
              </p>
                </li>
                <li className="align-items-center mb-3">
                  {/* <Image src={coro} roundedCircle className="me-2" /> */}
              <span className="h4">KNOWLEDGE</span>
                  <p>
              People understand not only what they do, but why they do it; People are continually
expanding their understanding of systems, processes, and hazards of their
workplace
              </p>
                </li>
                <li className=" align-items-center mb-3">
                  {/* <Image src={coro} roundedCircle className="me-2" /> */}
              <span className="h4">FORMALITY</span>
                  <p>
              People follow authorized procedures; they don’t tolerate shortcuts; they
              communicate information in a disciplined manner
              </p>
                </li>
                <li className=" align-items-center mb-3">
                  {/* <Image src={coro} roundedCircle className="me-2" /> */}
              <span className="h4">QUESTIONING ATTITUDE</span>
                  <p>
              People anticipate problems and are alert to unusual conditions; they don’t assume,
              they verify
              </p>
                </li>
                <li className=" align-items-center mb-3">
                  {/* <Image src={coro} roundedCircle className="me-2" /> */}
              <span className="h4">TEAM BACKUP</span>
                  <p>
              People actively back each other up; they speak up when potential problems are
              recognized; they value other’s inputs
              </p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
        </div>
      </AnimatedSection>

                {/* Contact Us Section */}
      <AnimatedSection animationClass="animate__fadeIn">
        <div style={{marginTop:"100px"}}>
      
        </div>
      </AnimatedSection>

      <AnimatedSection animationClass="animate__fadeInUp">
        <div className="bg-primary">
        <Container className="my-5 p-4 text-center text-white" style={{marginTop:"50px"}}>
          <h2 className="fw-bold bg-white mx-auto rounded-4 p-3 w-50 text-danger">Why Choose Us</h2>
          <p className="lead">
            65 years of experience in industrial and commercial construction – with solid oil and gas background
            Highest health and safety standards that benefit employees, clients, subcontractors and the environment
          </p>
          <div className="container">
          <ul className="list-unstyled fw-bold">
            <li className="mb-3">
              {/* <Image src={coro} roundedCircle className="me-2" /> */}
              <span className="mt-3">Exceptional Project Execution</span>
            </li>
            <li className="mb-3">
              {/* <Image src={coro} roundedCircle className="me-2" /> */}
              <span className="mt-3">Proven Track Record</span>
            </li>
            <li className="mb-3">
              {/* <Image src={coro} roundedCircle className="me-2" /> */}
              <span className="mt-3">Meeting Surpassing Project and Industry Quality Requirements</span>
            </li>
          </ul>
          </div>
        </Container>
        </div>
      </AnimatedSection>


                {/* Contact Us Section */}
      <AnimatedSection animationClass="animate__fadeIn">
        <div style={{marginTop:"100px"}}>
      <Container className=" text-center">
      <Card className="border-0 image-card"> {/* Add a card with custom styling */}
        <Card.Img variant="top" src={cap} alt="Image" className="img-fluid" /> {/* Use img-fluid for responsiveness */}
      </Card>
    </Container>
        </div>
      </AnimatedSection>

             


      <AnimatedSection animationClass="animate__fadeInUp">
        <div className="bg-dark">
        <Container className="my-5 p-4 text-center text-white" style={{marginTop:"50px"}}>
          <h2 className="fw-bold">Our Values</h2>
          <p className="lead">
            Corromasters Building a Culture of Operational Excellence
            Closing the Culture Gap to Drive Business Performance in
            Engineering Solution, Asset Integrity Management &
            Reliability Inspection Services
          </p>
          <div className="container">
          </div>
        </Container>
        </div>
      </AnimatedSection>

    </div>
  );
};

export default Home;
