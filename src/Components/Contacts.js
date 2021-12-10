import { BsPersonCircle } from 'react-icons/bs';
import { TiDeleteOutline } from 'react-icons/ti';

const Contacts = ({ contacts, filteredArray, deleteContact }) => {
  const handleClick = e => deleteContact(e.target.dataset.id);

  return (
    <ul className="contactList">
      {contacts.length > 0 &&
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
                onClick={handleClick}
              >
                <TiDeleteOutline className="deleteIcon" />
              </button>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default Contacts;
