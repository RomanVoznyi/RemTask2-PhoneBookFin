import { useState } from 'react';
import { nanoid } from 'nanoid';

const INITIAL_STATE = {
  name: '',
  number: '',
};

const AddForm = ({ contacts, setContacts }) => {
  const [name, setName] = useState(INITIAL_STATE.name);
  const [number, setNumber] = useState(INITIAL_STATE.number);

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
    setContacts(prevState => [...prevState, { id: nanoid(), name, number }]);
    setName(INITIAL_STATE.name);
    setNumber(INITIAL_STATE.number);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="labelNameField">
        <span className="titleNameField">Name</span>
        <input
          type="text"
          className="nameField"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов."
          value={name}
          onChange={handleInputField}
          required
        />
      </label>
      <label className="labelNumberField">
        <span className="titleNumberField">Number</span>
        <input
          type="tel"
          className="numberField"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          value={number}
          onChange={handleInputField}
          required
        />
      </label>
      <button type="submit" className="addButton">
        Add contact
      </button>
    </form>
  );
};

export default AddForm;
