import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllContacts } from '../redux/contacts/contacts-operations';
import {
  getContacts,
  getFilterName,
} from '../redux/contacts/contacts-selector';
import { sortListOfObjects, groupArrayByLetters } from '../services/helpers';
import Person from './Person';

const Contacts = () => {
  const contacts = useSelector(state => getContacts(state));
  const filter = useSelector(state => getFilterName(state));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  const filteredArray = arr =>
    sortListOfObjects(
      arr.filter(el => el.name.toLowerCase().includes(filter.toLowerCase())),
      'name',
    );

  const contactsByLetters = groupArrayByLetters(contacts);

  return (
    <div className="contactListSection">
      {contacts.length > 0 ? (
        filter !== '' ? (
          <ul className="contactList">
            {filteredArray(contacts).map(el => (
              <Person el={el} key={el.id} />
            ))}
          </ul>
        ) : (
          contactsByLetters[0].map(letter => (
            <div key={letter} className="letterBox">
              <h2 className="letterTitle" id={letter}>
                {letter.toUpperCase()}
              </h2>
              <ul className="contactList">
                {contactsByLetters[1][letter].map(el => (
                  <Person el={el} key={el.id} />
                ))}
              </ul>
            </div>
          ))
        )
      ) : (
        <p>Your contact list is empty.</p>
      )}
    </div>
  );
};

export default Contacts;
