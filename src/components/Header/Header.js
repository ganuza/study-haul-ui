import logo from '../../Assets/StudyHaul_logo.png'       
import './Header.css';

function Header() {
  return (
    <div className="header">
      <img src={logo}/>
      <h1 className='sr-only'>Study Hall</h1>
    </div>
  );
}

export default Header;
