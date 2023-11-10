import { useDispatch, useSelector } from 'react-redux';

import { ContactListItem, Wrapper } from './ContactList.styled';

import { selectFilteredByName } from '../../redux/selectors';

import { useEffect } from 'react';

import { deleteContact, fetchContacts } from 'redux/operations';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredByName);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDeleteContact = event => {
    dispatch(deleteContact(event.target.dataset.id));
  };

  return (
    <Wrapper>
      <ul>
        {contacts?.map(({ id, name, number }) => {
          return (
            <ContactListItem key={id}>
              {name + ': ' + number}
              <button type="button" onClick={handleDeleteContact} data-id={id}>
                Delete
              </button>
            </ContactListItem>
          );
        })}
      </ul>
    </Wrapper>
  );
};
