import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Autorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Autorization = '';
  },
};

const usersSignup = async user => {
  try {
    const { data } = await axios.post(`/users/signup`, { ...user });
    token.set(data.token);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export { usersSignup };
