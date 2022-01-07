import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const usersSignup = async user => {
  const { data } = await axios.post(`/users/signup`, { ...user });
  token.set(data.token);
  return data;
};

const usersSignin = async user => {
  const { data } = await axios.post(`/users/login`, { ...user });
  token.set(data.token);
  return data;
};

const usersLogOut = async () => {
  await axios.post(`/users/logout`);
  token.unset();
};

const usersCurrent = async persistedToken => {
  token.set(persistedToken);
  const { data } = await axios.get(`/users/current`);
  return data;
};

// Contacts
const contactsGetAll = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

const contactsAddNew = async contact => {
  const { data } = await axios.post('/contacts', contact);
  return data;
};

const contactsDeleteOne = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};

const contactsUpdateOne = async ({ id, updatedContact }) => {
  const { data } = await axios.patch(`/contacts/${id}`, updatedContact);
  return data;
};

export {
  usersSignup,
  usersSignin,
  usersLogOut,
  usersCurrent,
  contactsGetAll,
  contactsAddNew,
  contactsDeleteOne,
  contactsUpdateOne,
};
