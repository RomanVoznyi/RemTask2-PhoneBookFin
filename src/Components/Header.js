import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logoutUser } from '../redux/auth/auth-operation';
import { getUser, isLoggedIn } from '../redux/auth/auth-selector';
import { BsPersonCircle } from 'react-icons/bs';
import Logo from './Logo';

const Header = () => {
  const user = useSelector(state => getUser(state));
  const loggedIn = useSelector(state => isLoggedIn(state));
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logoutUser());
  };

  // `https://pixabay.com/api/?id=1266883438&key=3NZY2bsd1ttRbidLiyo8SJV4SHxsvpKh9M`;

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
          {loggedIn && (
            <NavLink
              to="/phonebook"
              className={navData =>
                navData.isActive ? 'navLink active' : 'navLink'
              }
            >
              Phonebook
            </NavLink>
          )}
        </div>
        {!loggedIn && (
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
        )}
      </nav>
      {loggedIn && (
        <div className="userMenuBox">
          <div className="personBox">
            <BsPersonCircle className="personIcon" />
            <span className="personGreeting">
              Welcome on board, {user.name}
            </span>
          </div>
          <button className="exitButton" onClick={handleClick}>
            Exit
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
