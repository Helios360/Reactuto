// components/Header.jsx
import logo from '../assets/man.png';

const Header = () => {
  return (
    <header className="bg-light p-3">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="logo">
          <img src={logo} alt="logo" height="80px" width="80px" className="img-fluid" />
        </div>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">Acueil</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
