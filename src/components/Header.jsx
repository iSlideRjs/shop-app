import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          {/* <img
            alt=""
            src=""
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '} */}
          Shop App
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export { Header };
