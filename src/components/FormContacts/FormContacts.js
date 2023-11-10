import React from 'react';

import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { StyledForm, StyledField, Label, Button } from './FormContacts.styled';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { selectContacts } from 'redux/selectors';

import { addContacts } from 'redux/operations';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleAddContact = (name, number) => {
    return contacts?.find(contact => contact.name === name)
      ? toast.error(`${name} is already in contacts`)
      : dispatch(
          addContacts({
            name,
            number,
          })
        );
  };

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default: {
        return;
      }
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    handleAddContact(name, number);
    toast.success(`${name} added to contacts.`);
    onDelete();
  };

  const onDelete = () => {
    setName('');
    setNumber('');
  };
  return (
    <div>
      <StyledForm onSubmit={handleSubmit}>
        <Label>
          Name
          <StyledField
            type="text"
            name="name"
            placeholder="Name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={handleChange}
            value={name}
            required
          />
        </Label>
        <Label>
          <StyledField
            type="tel"
            name="number"
            placeholder="Number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={handleChange}
            value={number}
            required
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </StyledForm>
      <ToastContainer />
    </div>
  );
};
