import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';

function Contacts(props) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="border-warning">
        <Modal.Title id="contained-modal-title-vcenter">Contacts</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h1 className="text-center contacts">
          <Nav.Link href="https://github.com/iSlideRjs" target="_blank">
            GitHub
          </Nav.Link>
        </h1>
      </Modal.Body>
      <Modal.Footer className="border-0">
        <Button variant="warning" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export { Contacts };
