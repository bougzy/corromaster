import React, { useState } from 'react';
import { Container, Row, Col, Image, Modal } from 'react-bootstrap';
import Slide26 from '../assets/Slide26.png';
import Slide23 from '../assets/Slide23.png';
import Slide24 from '../assets/Slide24.png';
import Slide25 from '../assets/Slide25.png';
import Slide20 from '../assets/Slide20.png';
import Slide21 from '../assets/Slide21.png';

const ImageGallery = () => {
  const images = [
    { id: 1, src: Slide26, alt: 'Vision Image' },
    { id: 2, src: Slide23, alt: 'Hall of Fame Image' },
    { id: 3, src: Slide24, alt: 'Hat Image' },
    { id: 4, src: Slide25, alt: 'Placeholder Image' },
    { id: 5, src: Slide20, alt: 'Placeholder Image' },
    { id: 6, src: Slide21, alt: 'Placeholder Image' }
  ];

  const [show, setShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = (image) => {
    setSelectedImage(image);
    setShow(true);
  };

  return (
    <div className="bg-secondary p-5">
    <Container className="my-4">
      <h3 className="bg-white p-3 rounded-2 text-danger text-center fw-bold">PROJECTS BY ACTION</h3>
      <Row>
        {images.map((image) => (
          <Col key={image.id} xs={12} md={6} lg={6}>
            <Image
              src={image.src}
              alt={image.alt}
              thumbnail
              onClick={() => handleShow(image)}
              style={{ cursor: 'pointer', width: '200%', height: 'auto' }}
            />
          </Col>
        ))}
      </Row>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedImage.alt}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={selectedImage.src} alt={selectedImage.alt} fluid style={{ width: '200%', height: '300px' }} />
        </Modal.Body>
      </Modal>
    </Container>
    </div>
  );
};

export default ImageGallery;
