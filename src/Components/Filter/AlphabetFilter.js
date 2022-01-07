import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterLetter } from '../../redux/contacts/contacts-reducer';
import {
  getFilterName,
  getFilterLetter,
  getContacts,
} from '../../redux/contacts/contacts-selector';
import { groupArrayByLetters } from '../../services/helpers';
import { GiBroom } from 'react-icons/gi';
import { scroll } from '../../services/helpers';

const AlphabetFilter = () => {
  const engAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const rusAlphabet = 'АБВГДЕЁЖЗИКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
  const filter = useSelector(state => getFilterName(state));
  const checkedId = useSelector(state => getFilterLetter(state));
  const contacts = useSelector(state => getContacts(state));
  const [checkedLocal, setCheckedLocal] = useState('enLocal');
  const [usedLetters, setUsedLetters] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    filter !== '' && clearAlphabets();
  }, [filter]);

  useEffect(() => {
    if (contacts.length === 0) {
      setUsedLetters([]);
      dispatch(setFilterLetter(''));
    } else {
      setUsedLetters(groupArrayByLetters(contacts)[0]);
    }
  }, [contacts]);

  const handleChange = e => {
    dispatch(setFilterLetter(e.currentTarget.id));
    const checkedLetter = document.getElementById(e.currentTarget.dataset.id);
    checkedLetter !== null && scroll(checkedLetter.offsetTop - 200);
  };

  const handleLocal = e => {
    setCheckedLocal(e.currentTarget.id);
  };

  const clearAlphabets = () => {
    dispatch(setFilterLetter(''));
    scroll(0);
  };

  const setLetterClass = (el, local) => {
    if (usedLetters.length > 0 && usedLetters.includes(el.toLowerCase())) {
      return checkedId === `radio-${local}-${el}`
        ? 'alphaLetter active'
        : 'alphaLetter';
    } else {
      return 'alphaLetter disabled';
    }
  };

  return (
    <div className="filterAlphaArticle">
      <div className="filterArticleTitle">
        Find contacts by the First letter of name:
        <div className="localBox">
          <label
            className={
              checkedLocal === 'enLocal' ? 'alphaLang active' : 'alphaLang'
            }
          >
            <input
              type="radio"
              name="alphaLocal"
              id="enLocal"
              className="visually-hidden"
              onChange={handleLocal}
            />
            <span>en</span>
          </label>
          <label
            className={
              checkedLocal === 'ruLocal' ? 'alphaLang active' : 'alphaLang'
            }
          >
            <input
              type="radio"
              name="alphaLocal"
              id="ruLocal"
              className="visually-hidden"
              onChange={handleLocal}
            />
            <span>ru</span>
          </label>
        </div>
      </div>
      {checkedLocal === 'enLocal' && (
        <div className="alphaBox">
          {engAlphabet.split('').map(el => (
            <label key={`radio-en-${el}`} className={setLetterClass(el, 'en')}>
              <input
                type="radio"
                onChange={handleChange}
                name="alphabet"
                data-id={el.toLowerCase()}
                id={`radio-en-${el}`}
                disabled={
                  usedLetters?.includes(el.toLowerCase()) ? false : true
                }
                className="visually-hidden"
              />
              <span>{el}</span>
            </label>
          ))}
        </div>
      )}
      {checkedLocal === 'ruLocal' && (
        <div className="alphaBox">
          {rusAlphabet.split('').map(el => (
            <label key={`radio-ru-${el}`} className={setLetterClass(el, 'ru')}>
              <input
                type="radio"
                onChange={handleChange}
                name="alphabet"
                data-id={el.toLowerCase()}
                id={`radio-ru-${el}`}
                disabled={
                  usedLetters?.includes(el.toLowerCase()) ? false : true
                }
                className="visually-hidden"
              />
              <span>{el}</span>
            </label>
          ))}
        </div>
      )}

      {checkedId && (
        <button
          className="clearBtn"
          onClick={clearAlphabets}
          title="Clear filter"
        >
          <GiBroom />
        </button>
      )}
    </div>
  );
};

export default AlphabetFilter;
