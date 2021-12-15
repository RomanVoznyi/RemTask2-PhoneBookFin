import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { getContacts } from '../redux/contacts/contacts-selector';
import { addNewContact } from '../redux/contacts/contacts-operations';

const INITIAL_STATE = {
  name: '',
  number: '',
};

const AddForm = () => {
  const [name, setName] = useState(INITIAL_STATE.name);
  const [number, setNumber] = useState(INITIAL_STATE.number);
  const [open, setOpen] = useState(false);
  const contacts = useSelector(state => getContacts(state));
  const dispatch = useDispatch();

  const handleInputField = ({ target }) =>
    target.name === 'number' ? setNumber(target.value) : setName(target.value);

  const toggleAddForm = () => setOpen(prevState => !prevState);

  const handleSubmit = evt => {
    evt.preventDefault();
    for (const contact of contacts) {
      if (contact.name.toLowerCase() === name.toLowerCase()) {
        alert(`${name} is already in contacts`);
        return;
      }
    }
    dispatch(addNewContact({ id: nanoid(), name, number }));
    setName(INITIAL_STATE.name);
    setNumber(INITIAL_STATE.number);
    toggleAddForm();
  };

  return (
    <div className="addBox">
      <div className="addIconBox" onClick={toggleAddForm}>
        {!open ? (
          <AiOutlinePlusCircle className="addIcon" />
        ) : (
          <AiOutlineMinusCircle className="addIcon" />
        )}
        <span className="addIconTitle">Add new contact</span>
      </div>

      {open && (
        <form className="addForm" onSubmit={handleSubmit}>
          <label className="addLabel">
            <input
              type="text"
              className="addInput"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов."
              value={name}
              onChange={handleInputField}
              placeholder=" "
              required
            />
            <span className="addTitle">Name</span>
          </label>
          <label className="addLabel">
            <input
              type="tel"
              className="addInput"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              value={number}
              onChange={handleInputField}
              placeholder=" "
              required
            />
            <span className="addTitle">Number</span>
          </label>
          <button type="submit" className="addButton">
            Add contact
          </button>
        </form>
      )}
    </div>
  );
};

export default AddForm;
