import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../redux/auth/auth-operation';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      default:
        setPassword(value);
        break;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const newUser = { name, email, password };
    dispatch(registerUser(newUser));
  };

  return (
    <form onSubmit={handleSubmit} className="section">
      <label title="Name">
        <input
          name="name"
          placeholder="Input your name"
          value={name}
          onChange={handleChange}
        />
      </label>
      <label title="Email">
        <input
          name="email"
          type="email"
          placeholder="Input your mail"
          value={email}
          onChange={handleChange}
        />
      </label>
      <label title="Password">
        <input
          name="password"
          type="password"
          minLength="8"
          placeholder="Input your password"
          value={password}
          onChange={handleChange}
        />
      </label>
      <button type="submit">SignUp</button>
    </form>
  );
};

export default Register;
