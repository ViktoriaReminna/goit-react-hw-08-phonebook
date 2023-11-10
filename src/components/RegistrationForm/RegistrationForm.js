// import { Box } from 'components/Box';
// import { toast } from 'react-toastify';
// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import style from './RegistrationForm.module.css';
// import { register } from 'redux/auth/auth_operations';
// import { UpLink } from 'react-router-dom';
// import {
//   FormWrapper,
//   Form,
//   Label,
//   StyledField,
//   Button,
// } from './RegistrationForm.styled';

// export const RegistrationForm = () => {
//   const dispatch = useDispatch();

//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [repPassword, setRepPassword] = useState('');

//   const inputs = {
//     name: setName,
//     email: setEmail,
//     password: setPassword,
//     repPassword: setRepPassword,
//   };

//   const handleInput = event => {
//     inputs[event.target.name](event.target.value.trim());
//   };

//   const handleFormSubmit = event => {
//     event.preventDefault();

//     if (password === repPassword) {
//       const userInfo = {
//         name,
//         email,
//         password,
//       };

//       dispatch(register(userInfo));
//       setName('');
//       setEmail('');
//       setPassword('');
//       setRepPassword('');
//       toast.success(`The user ${userInfo.name} is successfully registered `);
//     } else {
//       toast.error('Try entering the password again');
//     }
//   };

//   return (
//     <Box>
//       <FormWrapper>
//         <h2>Please register to continue</h2>
//         <Form onSubmit={handleFormSubmit}>
//           <Label>
//             Name
//             <StyledField
//               required
//               onChange={handleInput}
//               name="name"
//               value={name}
//               type="text"
//               className={style.input}
//             />
//           </Label>
//           <Label>
//             Email
//             <StyledField
//               required
//               onChange={handleInput}
//               name="email"
//               value={email}
//               type="email"
//             />
//           </Label>
//           <Label>
//             Password
//             <StyledField
//               required
//               onChange={handleInput}
//               name="password"
//               value={password}
//               type="password"
//             />
//           </Label>
//           <Label>
//             Repeat the password
//             <StyledField
//               required
//               onChange={handleInput}
//               name="repPassword"
//               value={repPassword}
//               type="password"
//             />
//           </Label>
//           <UpLink className={style.text} to="/login">
//             Already has account?
//           </UpLink>
//           <Button className={style.add} type="submit">
//             Sign up
//           </Button>
//         </Form>{' '}
//       </FormWrapper>
//     </Box>
//   );
// };
import { Box } from 'components/Box';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import style from './RegistrationForm.module.css';
import { register } from 'redux/auth/auth_operations';
import { Link } from 'react-router-dom';

export const RegistrationForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repPassword, setRepPassword] = useState('');

  const inputs = {
    name: setName,
    email: setEmail,
    password: setPassword,
    repPassword: setRepPassword,
  };

  const handleInput = event => {
    inputs[event.target.name](event.target.value.trim());
  };

  const handleFormSubmit = event => {
    event.preventDefault();

    if (password === repPassword) {
      const userInfo = {
        name,
        email,
        password,
      };

      dispatch(register(userInfo));
      setName('');
      setEmail('');
      setPassword('');
      setRepPassword('');
      toast.success(`The user ${userInfo.name} is successfully registered `);
    } else {
      toast.error('Try entering the password again');
    }
  };

  return (
    <Box>
      <div className={style.box}>
        <h2 className={style.title}>Please register to continue</h2>
        <form className={style.form} onSubmit={handleFormSubmit}>
          <label className={style.label}>
            Name
            <input
              required
              onChange={handleInput}
              name="name"
              value={name}
              type="text"
              className={style.input}
            />
          </label>
          <label className={style.label}>
            Email
            <input
              required
              onChange={handleInput}
              name="email"
              value={email}
              type="email"
              className={style.input}
            />
          </label>
          <label className={style.label}>
            Password
            <input
              required
              onChange={handleInput}
              name="password"
              value={password}
              type="password"
              className={style.input}
            />
          </label>
          <label className={style.label}>
            Repeat the password
            <input
              required
              onChange={handleInput}
              name="repPassword"
              value={repPassword}
              type="password"
              className={style.input}
            />
          </label>
          <Link className={style.text} to="/login">
            Already has account?
          </Link>
          <button className={style.add} type="submit">
            Sign up
          </button>
        </form>{' '}
      </div>
    </Box>
  );
};
