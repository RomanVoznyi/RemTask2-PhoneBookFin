import { NavLink } from 'react-router-dom';
import { RiContactsBookFill } from 'react-icons/ri';

const HomeView = () => {
  return (
    <div className="section">
      <div className="logoBox">
        <RiContactsBookFill className="logoIcon" />
        <h2 className="logoTitle">Phonebook</h2>
      </div>
      <h1 className="homeTitle">Your contacts are in good hands</h1>
      <NavLink
        to="/login"
        className={navData =>
          navData.isActive ? 'homeLinkBtn active' : 'homeLinkBtn'
        }
      >
        Sign In
      </NavLink>
    </div>
  );
};

export default HomeView;
