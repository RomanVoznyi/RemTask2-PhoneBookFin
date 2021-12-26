import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllContacts } from '../redux/contacts/contacts-operations';
import { getContacts, getFilter } from '../redux/contacts/contacts-selector';

import Person from './Person';

const Contacts = () => {
  const contacts = useSelector(state => getContacts(state));
  const filter = useSelector(state => getFilter(state));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  const filteredArray = arr =>
    arr.filter(el => el.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <ul className="contactList">
      {contacts.length > 0 ? (
        filteredArray(contacts).map(el => <Person el={el} key={el.id} />)
      ) : (
        <p>Your contact list is empty.</p>
      )}
    </ul>
  );
};

export default Contacts;
