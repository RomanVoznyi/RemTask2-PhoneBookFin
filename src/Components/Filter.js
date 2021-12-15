import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/contacts/contacts-reducer';
import { getFilter } from '../redux/contacts/contacts-selector';

const Filter = () => {
  const filter = useSelector(state => getFilter(state));
  const dispatch = useDispatch();

  const changeFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <label className="labelFilterField">
      <span className="titleFilterField">Find contacts by Name:</span>
      <input
        type="text"
        className="filterField"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов."
        value={filter}
        onChange={changeFilter}
      />
    </label>
  );
};

export default Filter;
