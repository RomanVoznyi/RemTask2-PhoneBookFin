import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser } from '../redux/auth/auth-operation';
import { RiContactsBookFill } from 'react-icons/ri';

const LoginView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    const user = { email, password };
    dispatch(loginUser(user));
  };

  return (
    <div className="section">
      <div className="signInBox">
        <RiContactsBookFill className="logoIcon" />
        <h2 className="signInTitle">Sign in to Phonebook</h2>
        <form onSubmit={handleSubmit} className="signInForm">
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
            SignIn
          </button>
        </form>
        <div className="signUpLink">
          <p>New to Phonebook?</p>
          <Link to="/register">Create an account.</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginView;
