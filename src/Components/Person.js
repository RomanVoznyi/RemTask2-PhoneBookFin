import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../redux/contacts/contacts-operations';
import { getContacts } from '../redux/contacts/contacts-selector';
import { updateContact } from '../redux/contacts/contacts-operations';
import { BsPersonCircle } from 'react-icons/bs';
import { TiDeleteOutline } from 'react-icons/ti';
import { MdAutoFixHigh } from 'react-icons/md';

const Person = ({ el }) => {
  const [updateMode, setUpdateMode] = useState(false);
  const [name, setName] = useState(el.name);
  const [number, setNumber] = useState(el.number);
  const contacts = useSelector(state => getContacts(state));
  const dispatch = useDispatch();

  const handleDelete = e => {
    dispatch(deleteContact(e.currentTarget.dataset.id));
  };

  const toggleUpdate = () => {
    setUpdateMode(prevState => !prevState);
  };

  const handleInputField = ({ target }) =>
    target.name === 'number' ? setNumber(target.value) : setName(target.value);

  const handleSubmit = evt => {
    evt.preventDefault();
    for (const contact of contacts) {
      if (contact.name.toLowerCase() === name.toLowerCase()) {
        alert(`${name} is already in contacts`);
        return;
      }
    }
    const updatedContact = { name, number };
    dispatch(updateContact({ id: el.id, updatedContact }));
    setUpdateMode(false);
  };

  return (
    <li className="contactListItem">
      <div className="contactIconBox">
        <BsPersonCircle className="contactIcon" />
      </div>
      <div className="contactNameBox">
        {!updateMode ? (
          <>
            <h3 className="contactName">{el.name}</h3>
            <span className="contactPhone">{el.number}</span>
          </>
        ) : (
          <>
            <form className="updForm" onSubmit={handleSubmit}>
              <input
                type="text"
                className="updInput"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов."
                value={name}
                onChange={handleInputField}
                placeholder=" "
                required
              />

              <input
                type="tel"
                className="updInput"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                value={number}
                onChange={handleInputField}
                placeholder=" "
                required
              />
              <button type="submit" className="updButton">
                Update
              </button>
            </form>
          </>
        )}

        <div className="serviseButtonBox">
          <button
            type="button"
            name="update"
            data-id={el.id}
            className="serviseButton"
            onClick={toggleUpdate}
          >
            <MdAutoFixHigh className="serviseIcon" />
          </button>
          <button
            type="button"
            name="delete"
            data-id={el.id}
            className="serviseButton"
            onClick={handleDelete}
          >
            <TiDeleteOutline className="serviseIcon" />
          </button>
        </div>
      </div>
    </li>
  );
};

export default Person;
