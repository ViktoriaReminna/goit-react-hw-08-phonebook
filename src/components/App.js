// import { FormContacts } from './FormContacts/FormContacts';

// import { ContactList } from './ContactList/ContactList';

// import { ContactFilter } from './ContactFilter/ContactFilter';

// import { GlobalStyle } from './GlobalStyle';

// import { Container, Title1, Title2, Title3 } from './App.styled';
// import { useDispatch, useSelector } from 'react-redux';
// import { getError, getIsLoading } from '../redux/selectors';
// import { useEffect } from 'react';
// import { fetchContacts } from '../redux/beckendAPI';

// export function App() {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(getIsLoading);
//   const error = useSelector(getError);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <Container>
//       <Title1>Phonebook</Title1>
//       <FormContacts />
//       <Title2>Contacts</Title2>
//       <Title3>Find contacts by name</Title3>
//       <ContactFilter />
//       {isLoading ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <p>Error: {error}</p>
//       ) : (
//         <ContactList />
//       )}

//       <GlobalStyle />
//     </Container>
//   );
// }
import { lazy, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { useDispatch } from 'react-redux';

import { Layout } from './Layout';
import { fetchCurrentUser } from 'redux/auth/auth_operations';
import { useAuth } from './hook/useAuth';

const Home = lazy(() => import('../pages/Home'));
const ContactsPage = lazy(() => import('../pages/Contacts'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <div>Loading....</div>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="contacts"
            element={
              <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
            }
          />
          <Route
            path="registration"
            element={
              <PublicRoute component={<Register />} redirectTo="/contacts" />
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute component={<Login />} redirectTo="/contacts" />
            }
          />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
