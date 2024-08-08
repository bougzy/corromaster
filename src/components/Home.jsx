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
      {/* <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://upload.wikimedia.org/wikipedia/commons/4/45/HDPE_Pipeline_in_a_harsh_Australian_environment.jpg"
            alt="First slide"
            style={carouselImageStyle} // Apply inline styles
          />
          <Carousel.Caption>
            <h3>Innovative Solutions</h3>
            <p>Leading the way in cutting-edge technology and design.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://irp.cdn-website.com/818538c1/dms3rep/multi/oil+refinery+in+Atlanta-+GA.jpeg"
            alt="Second slide"
            style={carouselImageStyle} // Apply inline styles
          />
          <Carousel.Caption>
            <h3>Customer Satisfaction</h3>
            <p>Our commitment is to you, ensuring quality and satisfaction.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/3216911/pexels-photo-3216911.jpeg?cs=srgb&dl=pexels-jan-rune-smenes-reite-221584-3216911.jpg&fm=jpg"
            alt="Third slide"
            style={carouselImageStyle} // Apply inline styles
          />
          <Carousel.Caption>
            <h3>Professional Team</h3>
            <p>Expertise you can rely on to achieve your goals.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> */}

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
            <h3>Innovative Solutions</h3>
            <p>Leading the way in cutting-edge technology and design.</p>
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
            <h3>Innovative Solutions</h3>
            <p>Leading the way in cutting-edge technology and design.</p>
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
            <h3>Innovative Solutions</h3>
            <p>Leading the way in cutting-edge technology and design.</p>
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
            <h3>Innovative Solutions</h3>
            <p>Leading the way in cutting-edge technology and design.</p>
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
            <h3>Innovative Solutions</h3>
            <p>Leading the way in cutting-edge technology and design.</p>
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
            <h3>Innovative Solutions</h3>
            <p>Leading the way in cutting-edge technology and design.</p>
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
            <h3>Innovative Solutions</h3>
            <p>Leading the way in cutting-edge technology and design.</p>
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
            <h3>Innovative Solutions</h3>
            <p>Leading the way in cutting-edge technology and design.</p>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={overlayStyle}></div> {/* Overlay */}
        <img
          className="d-block w-100"
          src="https://irp.cdn-website.com/818538c1/dms3rep/multi/oil+refinery+in+Atlanta-+GA.jpeg"
          alt="Second slide"
          style={carouselImageStyle}
        />
        <div style={captionContainerStyle}>
          <div>
            <h3>Customer Satisfaction</h3>
            <p>Our commitment is to you, ensuring quality and satisfaction.</p>
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
          Your trusted partner in comprehensive corrosion management solutions. With a dedicated team of experts and decades of experience in the field, we specialize in protecting your valuable assets from the damaging effects of corrosion. Our mission is to deliver innovative, cost-effective, and sustainable corrosion prevention and control strategies tailored to meet the unique needs of each client.
          </p>
        </Container>
      </AnimatedSection>
      </div>

      

{/* About Section */}
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


      

      {/* Our Services Section */}
      {/* <AnimatedSection animationClass="animate__fadeInRight">
        <Container className="my-5 mt-5 d-none">
          <h2 className="text-center mb-3">Our Services</h2>
          <Carousel controls={false} indicators={true}>
            <Carousel.Item>
              <Row>
                <Col md={4}>
                  <Card className="mb-4">
                    <Card.Img variant="top" src={cleva}  style={cardImageStyle} />
                    <Card.Body>
                      <Card.Title>Consulting</Card.Title>
                      <Card.Text>
                        We offer expert consulting services to help you navigate complex challenges and
                        achieve success. Our consultants bring a wealth of experience and knowledge to
                        every project.
                      </Card.Text>
                      <Button variant="primary">Learn More</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="mb-4">
                    <Card.Img variant="top" src="https://via.placeholder.com/150" style={cardImageStyle} />
                    <Card.Body>
                      <Card.Title>Development</Card.Title>
                      <Card.Text>
                        Our development team is skilled in the latest technologies and techniques,
                        ensuring that we deliver robust and scalable solutions to meet your needs.
                      </Card.Text>
                      <Button variant="primary">Learn More</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="mb-4">
                    <Card.Img variant="top" src="https://via.placeholder.com/150" style={cardImageStyle} />
                    <Card.Body>
                      <Card.Title>Design</Card.Title>
                      <Card.Text>
                        Our designers create visually stunning and user-friendly interfaces that
                        engage and delight users. We prioritize both aesthetics and functionality in our designs.
                      </Card.Text>
                      <Button variant="primary">Learn More</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row>
                <Col md={4}>
                  <Card className="mb-4">
                    <Card.Img variant="top" src="https://via.placeholder.com/150" style={cardImageStyle}/>
                    <Card.Body>
                      <Card.Title>Marketing</Card.Title>
                      <Card.Text>
                        Our marketing strategies are tailored to help your business reach its full potential.
                        We use the latest techniques to create campaigns that resonate with your target audience.
                      </Card.Text>
                      <Button variant="primary">Learn More</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="mb-4">
                    <Card.Img variant="top" src="https://via.placeholder.com/150" style={cardImageStyle}/>
                    <Card.Body>
                      <Card.Title>Analytics</Card.Title>
                      <Card.Text>
                        We provide in-depth analytics to help you understand your business better. Our insights
                        can guide your decisions and help you achieve your goals efficiently.
                      </Card.Text>
                      <Button variant="primary">Learn More</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="mb-4">
                    <Card.Img variant="top" src="https://via.placeholder.com/150" style={cardImageStyle}/>
                    <Card.Body>
                      <Card.Title>Support</Card.Title>
                      <Card.Text>
                        Our support team is here to assist you at every step of your journey. We are dedicated
                        to providing timely and effective solutions to your queries and concerns.
                      </Card.Text>
                      <Button variant="primary">Learn More</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </Container>
      </AnimatedSection> */}

      
      {/* Our Mission Section */}
      <div style={{marginTop:"100px"}}> 
      <AnimatedSection animationClass="animate__fadeIn">
        <Container className="my-5">
            <h1 className="text-center fw-bold text-primary mb-2">CML Vision & Mission</h1>
          <Row>
            <Col md={6}>
              <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLB5QwZdJ6s99l98wRevG1pUQwetAUGExs1w&s" 
              className="img-fluid rounded w-100" />
            </Col>
            <Col md={6}>
            <h2 className="text-center text-danger fw-bold">Our Vision</h2>
              <p className="text-primary">
              Our Vision is to become a World class engineering, Process Control, construction,
Corrosion, Inspection, Asset Integrity and innovative technology by building a
value adding and safe business, manned by highly motivated and competent
Nigerians globally
              </p>
            <h2 className="text-center text-danger fw-bold">Our Mission</h2>
              <p className="text-primary">
              To provide value to our professional staff through a forum for sharing ideas,
engaging the industry and its stakeholders, facilitating business opportunities and
promoting the highest standards in the Oil, Gas & Energy industry.
Our Mission is to contribute to the country’s economic progress, by providing
reliable and efficient management of the operation technology.
Our person...our technology...our service...our performance, is the heart of
Corromasters Limited
              </p>
            </Col>
          </Row>
        </Container>
      </AnimatedSection>
      </div>
      <div style={{marginTop:"100px"}}> 
      <AnimatedSection animationClass="animate__fadeIn">
        <Container className="my-5">
            {/* <h1 className="text-center fw-bold text-primary mb-2">CML Vision & Mission</h1> */}
          <Row>
            <Col md={6} className="order-2">
              <Image src={vision}
              className="img-fluid rounded w-100" />
            </Col>
            <Col md={6} className="">
            <h2 className="text-center text-danger fw-bold">Our Mission</h2>
              <p className="text-primary">
              To provide value to our professional staff through a forum for sharing ideas,
engaging the industry and its stakeholders, facilitating business opportunities and
promoting the highest standards in the Oil, Gas & Energy industry.
Our Mission is to contribute to the country’s economic progress, by providing
reliable and efficient management of the operation technology.
Our person...our technology...our service...our performance, is the heart of
Corromasters Limited
              </p>
            </Col>
          </Row>
        </Container>
      </AnimatedSection>
      </div>

               {/* Contact Us Section */}
      <AnimatedSection animationClass="animate__fadeIn">
        <div style={{marginTop:"100px"}}>
      <Container className="text-center">
      <Card className="border-0 image-card"> {/* Add a card with custom styling */}
        <Card.Img variant="top" src={fu} alt="Image" className="img-fluid" /> {/* Use img-fluid for responsiveness */}
      </Card>
    </Container>
        </div>
      </AnimatedSection>

      <AnimatedSection animationClass="animate__fadeIn">
        <div  style={{marginTop:"100px"}} className="bg-primary p-3">
        <Container className="my-5 text-white" style={{marginTop:"150px"}}>
          <h2 className="fw-bold text-center mb-5">Our Core Believe</h2>
          <Row>
            <Col md={6} className="order-2">
              <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLB5QwZdJ6s99l98wRevG1pUQwetAUGExs1w&s" 
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
          <h2 className="fw-bold">Why Choose Us</h2>
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



      {/*  */}


      {/* Contact Us Section */}
      {/* <AnimatedSection animationClass="animate__fadeIn">
        <Container className="my-5 text-center">
          <h2>Contact Us</h2>
          <p className="lead">
            Have questions or need assistance? Reach out to our team, and we will be more than happy to help.
          </p>
          <Button variant="primary" size="lg">Get in Touch</Button>
        </Container>
      </AnimatedSection> */}

                {/* Why Choose Us Section */}
      

    </div>
  );
};

export default Home;
