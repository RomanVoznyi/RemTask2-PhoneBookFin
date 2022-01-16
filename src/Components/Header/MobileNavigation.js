import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { debounce } from 'debounce';
import { logoutUser } from '../../redux/auth/auth-operation';
import { getUser, isLoggedIn } from '../../redux/auth/auth-selector';
import { BsPersonCircle } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import SmallLogo from './SmallLogo';

const MobileNavigation = () => {
  const user = useSelector(state => getUser(state));
  const loggedIn = useSelector(state => isLoggedIn(state));
  const [isOpen, setIsOpen] = useState(false);
  const [currentWidth, setCurrentWidth] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkWidth = () => {
      setCurrentWidth(window.innerWidth);
    };

    window.onresize = debounce(checkWidth, 1000);
    if (currentWidth > 768) {
      setIsOpen(false);
    }
    return () => {
      window.onresize.clear();
    };
  });

  const handleExit = () => {
    dispatch(logoutUser());
  };

  const toggleOpen = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <div className="mobileNavigationBox">
      <SmallLogo />
      <div className="menuButtons" onClick={toggleOpen}>
        {isOpen && <AiOutlineClose />}
        {!isOpen && <GiHamburgerMenu />}
      </div>
      <nav className={isOpen ? 'mobileNavigate' : 'mobileNavigate close'}>
        {loggedIn && (
          <div className="personBox">
            <BsPersonCircle className="personIcon" />
            <span className="personGreeting">
              Welcome on board, {user.name}
            </span>
          </div>
        )}
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
        {!loggedIn && (
          <>
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
          </>
        )}
        {loggedIn && (
          <button className="exitButton" onClick={handleExit}>
            Exit
          </button>
        )}
      </nav>
    </div>
  );
};

export default MobileNavigation;
