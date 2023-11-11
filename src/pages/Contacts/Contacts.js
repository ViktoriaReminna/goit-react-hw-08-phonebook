import InputPhoneBook from 'components/FormContacts/FormContacts';

import FindContact from 'components/ContactFilter/ContactFilter';

import ContactsList from 'components/ContactList/ContactList';

import { Toaster } from 'react-hot-toast';

import { Div, DivContainer, Title } from './Contacts.styled';

const PageContacts = () => {
  return (
    <DivContainer>
      <Div>
        <h1>Phonebook</h1>
        <InputPhoneBook />
        <Title>Contacts</Title>
        <FindContact />
        <ContactsList />
        <Toaster />
      </Div>
    </DivContainer>
  );
};

export default PageContacts;
