import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { RiContactsBookFill } from 'react-icons/ri';
import { isLoggedIn } from '../redux/auth/auth-selector';

const HomeView = () => {
  const loggedIn = useSelector(state => isLoggedIn(state));

  return (
    <div className="section">
      <NavLink to="/phonebook">
        <div className="logoBox">
          <RiContactsBookFill className="logoIcon" />
          <h2 className="logoTitle">Phonebook</h2>
        </div>
      </NavLink>

      <h1 className="homeTitle">Your contacts are in good hands</h1>
      {!loggedIn && (
        <NavLink
          to="/login"
          className={navData =>
            navData.isActive ? 'homeLinkBtn active' : 'homeLinkBtn'
          }
        >
          Sign In
        </NavLink>
      )}
    </div>
  );
};

export default HomeView;
