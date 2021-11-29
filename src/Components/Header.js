import { NavLink } from 'react-router-dom';
import Logo from './Logo';

const Header = () => {
  return (
    <header className="header">
      <nav className="navigate">
        <Logo />
        <div className="navLinkBox">
          <NavLink to="/" exact>
            Home
          </NavLink>
          <NavLink to="/phonebook" exact>
            Phonebook
          </NavLink>
        </div>
        <div className="regLinkBox">
          <NavLink to="/login" exact>
            Login
          </NavLink>
          <NavLink to="/register" exact>
            Register
          </NavLink>
        </div>
      </nav>
      <div className="userMenuBox">
        <div>
          👨‍🦱
          <span>Welcome board, Name</span>
        </div>
        <button>Exit</button>
      </div>
    </header>
  );
};

export default Header;
