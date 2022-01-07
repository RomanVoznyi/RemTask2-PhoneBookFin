const sortListOfObjects = (array, sortField) =>
  array.sort((a, b) => {
    if (a[sortField].toLowerCase() > b[sortField].toLowerCase()) return 1;
    else if (a[sortField].toLowerCase() < b[sortField].toLowerCase()) return -1;
    else return 0;
  });

const groupArrayByLetters = arr => {
  const listOfContactsByLetter = {};
  for (const el of arr) {
    const listOfLetters = Object.keys(listOfContactsByLetter);
    const firstLetter = el.name.toLowerCase().charAt(0);
    listOfLetters.includes(firstLetter)
      ? listOfContactsByLetter[firstLetter].push(el)
      : (listOfContactsByLetter[firstLetter] = [el]);
  }

  const keysList = Object.keys(listOfContactsByLetter).sort();
  const sortListOfContacts = {};
  for (const key of keysList) {
    sortListOfContacts[key] = sortListOfObjects(
      listOfContactsByLetter[key],
      'name',
    );
  }

  return [keysList, sortListOfContacts];
};

const scroll = top => {
  window.scrollTo({
    top: top,
    behavior: 'smooth',
  });
};

export { sortListOfObjects, groupArrayByLetters, scroll };
