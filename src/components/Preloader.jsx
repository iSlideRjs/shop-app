import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';

function Preloader() {
  return (
    <Container>
      <div
        style={{ minHeight: '75vh' }}
        className="d-flex justify-content-center align-content-center flex-wrap"
      >
        <Spinner animation="border" variant="info" />
      </div>
    </Container>
  );
}

export { Preloader };
