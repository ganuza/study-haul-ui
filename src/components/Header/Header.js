import logo from '../../Assets/StudyHaul_logo.png';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <Link to="/">Home</Link>
      <img src={logo} />
      <h1 className="sr-only">Study Hall</h1>
    </div>
  );
}

export default Header;
