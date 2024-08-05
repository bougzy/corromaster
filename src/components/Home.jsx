import React from 'react';
import { Carousel, Container, Card, Row, Col, Button, Image } from 'react-bootstrap';
import AnimatedSection from './AnimatedSection';
import Carded from "./Carded"
import cleva from "../assets/clev.png"
import coro from "../assets/coro.jpeg"

const Home = () => {
  const carouselImageStyle = {
    width: '100%',
    height: '500px',
    objectFit: 'cover',
  };
  const cardImageStyle = {
    width: '100%',
    height: '300px',
    objectFit: 'cover',
  };

  return (
    <div>
      {/* Hero Section */}
      <Carousel>
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
      </Carousel>

      {/* Welcome Section */}
      <AnimatedSection animationClass="animate__fadeInUp">
        <Container className="text-center my-5">
          <h2>Welcome to Corromasters</h2>
          <p className="lead">
          Your trusted partner in comprehensive corrosion management solutions. With a dedicated team of experts and decades of experience in the field, we specialize in protecting your valuable assets from the damaging effects of corrosion. Our mission is to deliver innovative, cost-effective, and sustainable corrosion prevention and control strategies tailored to meet the unique needs of each client.
          </p>
        </Container>
      </AnimatedSection>

      {/* About Section */}
      <AnimatedSection animationClass="animate__fadeInLeft">
        <Container className="my-5">
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
                  <span>Complete value chain for Oil & Gas Production, Transportation, Storage andList item.</span>
                </li>
                <li className="d-flex align-items-center mb-3">
                  <Image src={coro} roundedCircle className="me-2" />
                  <span>Refining and Storage facilities.</span>
                </li>
              </ul>
            </Col>
            <Col md={6}>
              <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Uxpv5awMMRCE7W6Y9-kyxp_cz4WvXSDm-CTKUfJD-rotadEOGsvWdYVnmA3-hHAUATs&usqp=CAU" style={{width:"650px", height:"400px"}} />
            </Col>
          </Row>
        </Container>
      </AnimatedSection>

        <div className="container" style={{marginTop:"150px"}}>
            <h3 className="text-center">Our Projects</h3>
      <Carded />
        </div>

      {/* Our Services Section */}
      <AnimatedSection animationClass="animate__fadeInRight">
        <Container className="my-5 mt-5">
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
      </AnimatedSection>

      {/* Why Choose Us Section */}
      <AnimatedSection animationClass="animate__fadeInUp">
        <Container className="my-5 text-center">
          <h2>Why Choose Us</h2>
          <p className="lead">
            65 years of experience in industrial and commercial construction – with solid oil and gas background
            Highest health and safety standards that benefit employees, clients, subcontractors and the environment
          </p>
          <ul className="list-unstyled">
            <li className="d-flex  mb-3">
              <Image src={coro} roundedCircle className="me-2" />
              <span className="mt-3">Exceptional Project Execution</span>
            </li>
            <li className="d-flex  mb-3">
              <Image src={coro} roundedCircle className="me-2" />
              <span className="mt-3">Proven Track Record</span>
            </li>
            <li className="d-flex  mb-3">
              <Image src={coro} roundedCircle className="me-2" />
              <span className="mt-3">Meeting Surpassing Project and Industry Quality Requirements</span>
            </li>
          </ul>
        </Container>
      </AnimatedSection>

      {/* Our Mission Section */}
      <AnimatedSection animationClass="animate__fadeIn">
        <Container className="my-5">
          <h2>Our Mission</h2>
          <Row>
            <Col md={6}>
              <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLB5QwZdJ6s99l98wRevG1pUQwetAUGExs1w&s" style={{width:"650px", height:"400px"}} />
            </Col>
            <Col md={6}>
              <p>
                Our mission is to lead the industry in delivering innovative and reliable solutions.
                We strive to exceed client expectations by consistently providing high-quality services
                and products that empower their success. Our commitment to integrity, excellence, and
                customer satisfaction drives us to push boundaries and set new standards in the market.
              </p>
              <ul className="list-unstyled">
                <li className="d-flex align-items-center mb-3">
                  <Image src={coro} roundedCircle className="me-2" />
                  <span>Dummy text for the first point</span>
                </li>
                <li className="d-flex align-items-center mb-3">
                  <Image src={coro} roundedCircle className="me-2" />
                  <span>Dummy text for the second point</span>
                </li>
                <li className="d-flex align-items-center mb-3">
                  <Image src={coro} roundedCircle className="me-2" />
                  <span>Dummy text for the third point</span>
                </li>
                <li className="d-flex align-items-center mb-3">
                  <Image src={coro} roundedCircle className="me-2" />
                  <span>Dummy text for the fourth point</span>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </AnimatedSection>
      <AnimatedSection animationClass="animate__fadeIn">
        <Container className="my-5" >
          <h2>Our Core Believe</h2>
          <Row>
            <Col md={6} className="order-2">
              <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLB5QwZdJ6s99l98wRevG1pUQwetAUGExs1w&s" style={{width:"650px", height:"400px"}} />
            </Col>
            <Col md={6}>
              <p>
              This is a clear culture of Corromasters Limited to stand for what we believe:
              </p>
              <ul className="list-unstyled">
                <li className="d-flex align-items-center mb-3">
                  <Image src={coro} roundedCircle className="me-2" />
                  <p className="mt-2">
              <span className="h4">INTEGRITY</span>
People can be relied on to do what they say they will do, and to do what is expected
of them; they have the courage to do what is right and to hold everyone accountable,
including themselves
              </p>
                </li>
                <li className="d-flex align-items-center mb-3">
                  <Image src={coro} roundedCircle className="me-2" />
                  <p>
              <span className="h4">KNOWLEDGE</span>
              People understand not only what they do, but why they do it; People are continually
expanding their understanding of systems, processes, and hazards of their
workplace
              </p>
                </li>
                <li className="d-flex align-items-center mb-3">
                  <Image src={coro} roundedCircle className="me-2" />
                  <p>
              <span className="h4">FORMALITY</span>
              People follow authorized procedures; they don’t tolerate shortcuts; they
              communicate information in a disciplined manner
              </p>
                </li>
                <li className="d-flex align-items-center mb-3">
                  <Image src={coro} roundedCircle className="me-2" />
                  <p>
              <span className="h4">QUESTIONING ATTITUDE</span>
              People anticipate problems and are alert to unusual conditions; they don’t assume,
              they verify
              </p>
                </li>
                <li className="d-flex align-items-center mb-3">
                  <Image src={coro} roundedCircle className="me-2" />
                  <p>
              <span className="h4">TEAM BACKUP</span>
              People actively back each other up; they speak up when potential problems are
              recognized; they value other’s inputs
              </p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </AnimatedSection>

      {/* Contact Us Section */}
      <AnimatedSection animationClass="animate__fadeIn">
        <Container className="my-5 text-center">
          <h2>Contact Us</h2>
          <p className="lead">
            Have questions or need assistance? Reach out to our team, and we will be more than happy to help.
          </p>
          <Button variant="primary" size="lg">Get in Touch</Button>
        </Container>
      </AnimatedSection>
    </div>
  );
};

export default Home;
