import { NavLink } from 'react-router-dom';
import Logo from './Logo';

const Header = () => {
  return (
    <header className="header">
      <nav className="navigate">
        <Logo />
        <div className="navLinkBox">
          <NavLink
            to="/"
            className={navData =>
              navData.isActive ? 'navLink active' : 'navLink'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/phonebook"
            className={navData =>
              navData.isActive ? 'navLink active' : 'navLink'
            }
          >
            Phonebook
          </NavLink>
        </div>
        <div className="regLinkBox">
          <NavLink
            to="/login"
            className={navData =>
              navData.isActive ? 'navLink active' : 'navLink'
            }
          >
            Login
          </NavLink>
          <NavLink
            to="/register"
            className={navData =>
              navData.isActive ? 'navLink active' : 'navLink'
            }
          >
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
