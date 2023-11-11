import React from 'react';

import { useInputParams } from '../../hook/ContactsHooks/useInputParam';

import { Button, Form, Input, Label } from './FormContacts.styled';

export default function InputPhoneBook() {
  const { name, number, handleSubmit, handleChange, isLoading } =
    useInputParams();

  return (
    <div>
      <Form type="submit" onSubmit={handleSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
            value={name}
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
            value={number}
          />
        </Label>

        <Button type="submit" disabled={isLoading}>
          Add contact
        </Button>
      </Form>
    </div>
  );
}
