import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Logo from '../svg/Logo.svg';
import { useState } from 'react';
import { Contacts } from './Contacts';

function Header() {
  const [contactsShow, setContactsShow] = useState(false);
  return (
    <Navbar bg="dark" variant="dark mb-2">
      <Container>
        <Navbar.Brand className="logo" href="/shop-app">
          <img
            alt="Shop App"
            src={Logo}
            width="35"
            height="35"
            className="d-inline-block align-top"
          />{' '}
          Shop App
        </Navbar.Brand>
        <Nav>
          <Nav.Link href="#">
            <Button
              variant="outline-info rounded-pill"
              onClick={() => setContactsShow(true)}
            >
              Contacts
            </Button>{' '}
          </Nav.Link>
        </Nav>
        <Contacts show={contactsShow} onHide={() => setContactsShow(false)} />
      </Container>
    </Navbar>
  );
}

export { Header };
