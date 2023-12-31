import {
  useAddContactMutation,
  useGetContactsQuery,
} from 'redux/auth/contact_operation';

import { useState } from 'react';

import { toast } from 'react-hot-toast';

export const useInputParams = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { data: contacts } = useGetContactsQuery();
  const [addContact, { isLoading }] = useAddContactMutation();

  const handleSubmit = e => {
    e.preventDefault();
    const sameName = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (sameName) {
      toast.error(`${name} is already in contacts!`);
      return;
    }

    addContact({ name, number });
    setName('');
    setNumber('');
  };

  const handleChange = e => {
    const { value, name } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  return {
    name,
    number,
    handleSubmit,
    handleChange,
    isLoading,
  };
};
