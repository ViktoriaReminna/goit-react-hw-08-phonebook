import axios from 'axios';

export const getContacts = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const addContactsData = async ({ name, number }) => {
  const { data } = await axios.post('/contacts', { name, number });

  return data;
};

export const deleteContactsData = async contactId => {
  const { data } = await axios.delete(`/contacts/${contactId}`);
  return data;
};
