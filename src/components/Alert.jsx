import Toast from 'react-bootstrap/Toast';
import { useContext } from 'react';
import { ShopContext } from '../context';

function Alert() {
  const { alertName, show, setShow } = useContext(ShopContext);
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
