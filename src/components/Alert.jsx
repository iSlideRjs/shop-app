import Toast from 'react-bootstrap/Toast';

function Alert(props) {
  const { show, setShow, alertName } = props;
  return (
    <div className="alert">
      <Toast
        className="alertToast"
        onClose={() => setShow(false)}
        show={show}
        delay={3000}
        autohide
        bg="dark"
      >
        <Toast.Body className="text-white">
          {alertName} add to basket
        </Toast.Body>
      </Toast>
    </div>
  );
}

export { Alert };
