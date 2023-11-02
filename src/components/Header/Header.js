import logo from '../../Assets/StudyHaul_logo.png';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  return (
    <div className="header">
      {location.pathname !== '/' && <Link to="/">Home</Link>}
      <img src={logo} />
      <h1 className="sr-only">Study Hall</h1>
    </div>
  );
}

export default Header;
