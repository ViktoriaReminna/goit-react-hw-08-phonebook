import { Box } from 'components/Box';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logIn } from 'redux/auth/auth_operations';
import style from './Login.module.css';

export default function Login() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(logIn({ email, password }));

    setEmail('');
    setPassword('');
  };

  return (
    <Box>
      <div className={style.box}>
        <h2>Please login to continue</h2>

        <form className={style.form} onSubmit={handleSubmit} autoComplete="off">
          <label className={style.label}>
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              className={style.input}
            />
          </label>

          <label className={style.label}>
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              className={style.input}
            />
          </label>
          <Link className={style.text} to="/registration">
            Dont have account?
          </Link>
          <button className={style.add} type="submit">
            Go!
          </button>
        </form>
      </div>
    </Box>
  );
}
