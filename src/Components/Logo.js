import { NavLink } from 'react-router-dom';
import { RiContactsBookFill } from 'react-icons/ri';

const Logo = () => {
  return (
    <div className="smallLogo">
      <NavLink to="/" className="logoLink" activeClassName="logolink active">
        <RiContactsBookFill className="smallLogoIcon" />
        <h2 className="smallLogoTitle">Phonebook</h2>
      </NavLink>
    </div>
  );
};

export default Logo;
