import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import { useContext } from 'react';
import { ShopContext } from '../context';

function Image() {
  const { imageShow, setImageShow, image, indexImage, selectImage } =
    useContext(ShopContext);

  return (
    <Modal
      show={imageShow}
      onHide={() => setImageShow(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="border-0">
        <Modal.Title id="contained-modal-title-vcenter">
          {image.displayName}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-0">
        <Carousel
          interval={null}
          activeIndex={indexImage}
          onSelect={selectImage}
        >
          <Carousel.Item>
            <img
              className="imgFull rounded-1"
              src={image.full_background}
              alt={image.displayName}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="imgFull rounded-1"
              src={image.background}
              alt={image.displayName}
            />
          </Carousel.Item>
        </Carousel>
      </Modal.Body>
      <Modal.Footer className="border-0">
        <Button variant="danger" onClick={() => setImageShow(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export { Image };
