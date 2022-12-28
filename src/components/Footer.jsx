import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Footer() {
  return (
    <Navbar fixed="bottom" style={{ background: '#d5d5d5' }} variant="light">
      <Container className="d-flex justify-content-center">
        <Nav>
          <Nav.Link href="https://github.com/iKHVRV/shop-app" target="_blank">
            Github
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export { Footer };
