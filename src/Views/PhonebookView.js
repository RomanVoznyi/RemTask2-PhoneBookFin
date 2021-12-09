import { useState } from 'react';
import Contacts from '../Components/Contacts';
import Filter from '../Components/Filter';
import AddForm from '../Components/AddForm';

const INITIAL_STATE = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

const PhonebookView = () => {
  const [contacts, setContacts] = useState(() => {
    const localContacts = localStorage.getItem('contacts');
    return JSON.parse(localContacts) || INITIAL_STATE.contacts;
  });
  const [filter, setFilter] = useState(INITIAL_STATE.filter);

  const handleInputField = ({ target }) => setFilter(target.value);

  const filteredArray = arr =>
    arr.filter(el => el.name.toLowerCase().includes(filter.toLowerCase()));

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(el => el.id !== id));
  };

  return (
    <div className="phoneSection">
      <aside className="filterSide">
        <Filter filter={filter} handleInputField={handleInputField} />
      </aside>
      <div className="contactsSide">
        <AddForm contacts={contacts} setContacts={setContacts} />
        <Contacts
          contacts={contacts}
          filteredArray={filteredArray}
          deleteContact={deleteContact}
        />
      </div>
    </div>
  );
};

export default PhonebookView;
