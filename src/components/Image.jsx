import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';

function Image(props) {
  const { show, onHide, image } = props;
  return (
    <Modal
      show={show}
      onHide={onHide}
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
        <Carousel interval={null}>
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
        <Button variant="danger" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export { Image };
