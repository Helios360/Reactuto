// components/Header.jsx

import logo from '../assets/man.png';
import { Container, Navbar, Nav, Badge } from 'react-bootstrap';
import "../assets/styles/Header.scss";
import { useCart } from "../context/CartContext";

const Header = () => {
  const { cartCount } = useCart();
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
              <Nav.Link href="/cart">
              || Panier ({cartCount})
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </header>
  );
};

export default Header;