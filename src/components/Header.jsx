// components/Header.jsx

import logo from '../assets/man.png';
import { Container, Navbar, Nav } from 'react-bootstrap';
import "../assets/styles/Header.scss";
const Header = () => {
  return (
    <header className="bg-light">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={logo}
              alt="logo"
              height="80"
              width="80"
              className="img-fluid logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Accueil</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;