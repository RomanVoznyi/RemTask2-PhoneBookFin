import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterName } from '../../redux/contacts/contacts-reducer';
import {
  getFilterName,
  getFilterLetter,
} from '../../redux/contacts/contacts-selector';
import AlphabetFilter from './AlphabetFilter';

const Filter = () => {
  const filter = useSelector(state => getFilterName(state));
  const checkedId = useSelector(state => getFilterLetter(state));
  const dispatch = useDispatch();

  useEffect(() => {
    checkedId !== '' && dispatch(setFilterName(''));
  }, [checkedId]);

  const changeFilter = ({ target }) => {
    dispatch(setFilterName(target.value));
  };

  return (
    <>
      <div className="filterArticle">
        <span className="filterArticleTitle">Find contacts by Name:</span>
        <label className="labelFilterField">
          <input
            type="text"
            className="filterField"
            value={filter}
            onChange={changeFilter}
          />
        </label>
      </div>
      <AlphabetFilter />
    </>
  );
};

export default Filter;
