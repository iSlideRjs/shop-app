import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { GoodsItem } from './GoodsItem';

function Header() {
  return (
    <Navbar bg="dark" variant="dark mb-2">
      <Container>
        <Navbar.Brand className="logo" href="#home">
          {/* <img
            alt="Shop App"
            src=""
            width="35"
            height="35"
            className="d-inline-block align-top"
          />{' '} */}
          Shop App
        </Navbar.Brand>
        <Nav>
          <Nav.Link href="#">
            <Button variant="outline-primary rounded-pill">
              Cart{' '}
              <Badge bg="danger" pill>
                10
              </Badge>
            </Button>{' '}
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export { Header };
