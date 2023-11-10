import { FormContacts } from './FormContacts/FormContacts';

import { ContactList } from './ContactList/ContactList';

import { ContactFilter } from './ContactFilter/ContactFilter';

import { GlobalStyle } from './GlobalStyle';

import { Container, Title1, Title2, Title3 } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getError, getIsLoading } from '../redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/beckendAPI';

export function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Title1>Phonebook</Title1>
      <FormContacts />
      <Title2>Contacts</Title2>
      <Title3>Find contacts by name</Title3>
      <ContactFilter />
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <ContactList />
      )}

      <GlobalStyle />
    </Container>
  );
}
