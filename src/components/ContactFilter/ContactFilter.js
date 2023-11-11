import { useFilterParams } from '../../hook/ContactsHooks/useFilterParams';

import React from 'react';

import { Input, Title } from './ContactFilter.styled';

const FindContact = () => {
  const { filter, onChange } = useFilterParams();

  return (
    <div>
      <Title>Find contacts by name</Title>
      <Input type="text" name="name" value={filter} onChange={onChange}></Input>
    </div>
  );
};

export default FindContact;
