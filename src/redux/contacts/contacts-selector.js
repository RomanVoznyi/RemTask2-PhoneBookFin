const getContacts = state => state.contacts.contacts;
const getFilterName = state => state.contacts.filterName;
const getFilterLetter = state => state.contacts.filterLetter;

export { getContacts, getFilterName, getFilterLetter };
