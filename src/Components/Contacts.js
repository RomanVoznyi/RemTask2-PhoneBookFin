import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllContacts,
  deleteContact,
} from '../redux/contacts/contacts-operations';
import { getContacts, getFilter } from '../redux/contacts/contacts-selector';
import { BsPersonCircle } from 'react-icons/bs';
import { TiDeleteOutline } from 'react-icons/ti';

const Contacts = () => {
  const contacts = useSelector(state => getContacts(state));
  const filter = useSelector(state => getFilter(state));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  const handleDelete = e => {
    dispatch(deleteContact(e.currentTarget.dataset.id));
  };

  const filteredArray = arr =>
    arr.filter(el => el.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <ul className="contactList">
      {contacts.length > 0 ? (
        filteredArray(contacts).map(el => (
          <li key={el.id} className="contactListItem">
            <div className="contactIconBox">
              <BsPersonCircle className="contactIcon" />
            </div>
            <div className="contactNameBox">
              <h3 className="contactName">{el.name}</h3>
              <span className="contactPhone">{el.number}</span>
              <button
                type="button"
                data-id={el.id}
                className="deleteButton"
                onClick={handleDelete}
              >
                <TiDeleteOutline className="deleteIcon" />
              </button>
            </div>
          </li>
        ))
      ) : (
        <p>Your contact list is empty.</p>
      )}
    </ul>
  );
};

export default Contacts;
