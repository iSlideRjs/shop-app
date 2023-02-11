import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Git from '../svg/Git.svg';

function Footer() {
  return (
    <Navbar
      className="d-flex justify-content-center footer"
      style={{ background: '#d5d5d5' }}
      variant="light"
    >
      <Nav.Link href="https://github.com/iKHVRV/shop-app" target="_blank">
        <img alt="Git Hub" src={Git} width="40" height="40" />
      </Nav.Link>
    </Navbar>
  );
}

export { Footer };
