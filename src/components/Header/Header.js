import logo from '../../Assets/StudyHaul_logo.png';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  return (
    <div className="header">
      <div className="logo-container">
        <Link className="home-link" to="/">
          <img src={logo} alt="study-haul-logo" className="logo-img" />
        </Link>
        <h1 className="sr-only">Study Haul</h1>
      </div>
      {location.pathname !== '/' && (
        <Link className="home-link" to="/">
          Home
        </Link>
      )}
    </div>
  );
}

export default Header;
