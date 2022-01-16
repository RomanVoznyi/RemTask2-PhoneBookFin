import DisplayNavigation from './DisplayNavigation';
import MobileNavigation from './MobileNavigation';

const Header = () => {
  return (
    <header className="header">
      <DisplayNavigation />
      <MobileNavigation />
    </header>
  );
};

export default Header;
