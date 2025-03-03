// components/Header.jsx

import logo from '../assets/man.png';
import { Container, Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <header className="bg-light">
      <Navbar expand="lg" className="navbar-light">
        <Container className="d-flex justify-content-between align-items-center">
          <Navbar.Brand href="/">
            <img
              src={logo}
              alt="logo"
              height="80"
              width="80"
              className="img-fluid"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Accueil</Nav.Link>
              {/* Additional nav items can be added here */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;