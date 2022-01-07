import Contacts from '../Components/Contacts';
import Filter from '../Components/Filter/Filter';
import AddForm from '../Components/AddForm';

const PhonebookView = () => {
  return (
    <div className="phoneSection">
      <aside className="filterSide">
        <Filter />
      </aside>
      <div className="contactsSide">
        <AddForm />
        <Contacts />
      </div>
    </div>
  );
};

export default PhonebookView;
