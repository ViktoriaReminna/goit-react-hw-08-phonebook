import { addContact } from '../../redux/beckendAPI';

import React from 'react';

import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { StyledForm, StyledField, Label, Button } from './FormContacts.styled';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getContacts } from 'redux/selectors';

export const FormContacts = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const onInputChange = event => {
    const { name, value } = event.currentTarget;

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

  const onSubmit = event => {
    event.preventDefault();
    const contact = {
      name: name,
      number: number,
    };

    const hasContact = contacts.some(
      object => object.name.toLowerCase() === name.toLowerCase()
    );

    if (hasContact) {
      toast.warn(`is already in contacts.`);
      return;
    }
    dispatch(addContact(contact))
      .unwrap()
      .then(toast.success(`${contact.name} added to contacts.`));
    setName('');
    setNumber('');
  };

  return (
    <div>
      <StyledForm onSubmit={onSubmit}>
        <Label>
          Name
          <StyledField
            type="text"
            name="name"
            placeholder="Name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={onInputChange}
          />
        </Label>
        <Label>
          <StyledField
            type="tel"
            name="number"
            placeholder="Number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={onInputChange}
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </StyledForm>
      <ToastContainer />
    </div>
  );
};
