import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';

function Preloader() {
  return (
    <Container>
      <div className="d-flex justify-content-center align-content-center flex-wrap loader">
        <Spinner animation="border" variant="info" />
      </div>
    </Container>
  );
}

export { Preloader };
