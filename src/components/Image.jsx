import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

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
      <Modal.Header closeButton className="border-bottom border-danger">
        <Modal.Title id="contained-modal-title-vcenter">
          {image.displayName}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          className="imgFull"
          src={image.full_background || image.background}
          alt={image.displayName}
        />
      </Modal.Body>
      <Modal.Footer className="border-top border-danger">
        <Button variant="danger" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export { Image };
