import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

function Header() {
  return (
    <Navbar bg="dark" variant="dark mb-2">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/logo.svg"
            width="35"
            height="35"
            className="d-inline-block align-top"
          />{' '}
          Shop App
        </Navbar.Brand>
        <Nav>
          <Nav.Link href="#">
            <Button disabled variant="outline-primary rounded-pill">
              Cart
            </Button>{' '}
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export { Header };
