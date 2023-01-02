import Spinner from 'react-bootstrap/Spinner';

function Preloader() {
  return (
    <div className="d-flex justify-content-center">
      <Spinner animation="border" variant="info" />
    </div>
  );
}

export { Preloader };
