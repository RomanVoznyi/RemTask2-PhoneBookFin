import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../redux/auth/auth-operation';
import { RiContactsBookFill } from 'react-icons/ri';

const RegisterView = () => {
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
    <div className="section">
      <div className="signInBox">
        <RiContactsBookFill className="logoIcon" />
        <form onSubmit={handleSubmit} className="signInForm">
          <label className="signInLabel">
            <span className="signInLabelTitle">Name</span>
            <input
              name="name"
              className="signInInput"
              placeholder="Input your name"
              value={name}
              onChange={handleChange}
            />
          </label>
          <label className="signInLabel">
            <span className="signInLabelTitle">Email</span>
            <input
              name="email"
              className="signInInput"
              type="email"
              placeholder="Input your mail"
              value={email}
              onChange={handleChange}
            />
          </label>
          <label className="signInLabel">
            <span className="signInLabelTitle">Password</span>
            <input
              name="password"
              className="signInInput"
              type="password"
              minLength="8"
              placeholder="Input your password"
              value={password}
              onChange={handleChange}
            />
          </label>
          <button type="submit" className="signInButton">
            SignUp
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterView;
