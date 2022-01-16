import { useState, useEffect } from 'react';
import { debounce } from 'debounce';
import Contacts from '../Components/Contacts';
import Filter from '../Components/Filter/Filter';
import AddForm from '../Components/AddForm';
import { BsSearch } from 'react-icons/bs';

const BREAKPOINT = 768;

const PhonebookView = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth);

  useEffect(() => {
    const checkWidth = () => {
      setCurrentWidth(window.innerWidth);
    };

    window.onresize = debounce(checkWidth, 1000);

    return () => {
      window.onresize.clear();
    };
  });

  const handleOpen = () => {
    setOpenFilter(prevState => !prevState);
  };

  return (
    <div className="phoneSection">
      <aside className="filterSide">
        {currentWidth < BREAKPOINT + 1 && (
          <button className="findButton" onClick={handleOpen}>
            <BsSearch className="findIcon" />
            <span>Find contact</span>
          </button>
        )}
        {(currentWidth > BREAKPOINT ||
          (currentWidth < BREAKPOINT + 1 && openFilter)) && <Filter />}
      </aside>
      <div className="contactsSide">
        <AddForm />
        <Contacts />
      </div>
    </div>
  );
};

export default PhonebookView;
