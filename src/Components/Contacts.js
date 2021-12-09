import { BsPersonCircle } from 'react-icons/bs';

const Contacts = ({ contacts, filteredArray, deleteContact }) => {
  const handleClick = e => deleteContact(e.target.dataset.id);

  return (
    <ul>
      {contacts.length > 0 &&
        filteredArray(contacts).map(el => (
          <li key={el.id} className="listItem">
            <BsPersonCircle style={{ color: '#000099' }} /> -{' '}
            <span>{el.name}</span>: <span>{el.number}</span>
            <button
              type="button"
              data-id={el.id}
              className="deleteButton"
              onClick={handleClick}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};

export default Contacts;
