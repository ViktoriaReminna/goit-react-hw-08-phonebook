import { useDispatch, useSelector } from 'react-redux';

import { ContactListItem, Wrapper } from './ContactList.styled';

import { getFiltered } from '../../redux/selectors';

import { deleteContact } from '../../redux/beckendAPI';

export const ContactList = () => {
  const contacts = useSelector(getFiltered);
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };
  return (
    <Wrapper>
      <ul>
        {contacts && contacts.length > 0 ? (
          contacts.map(({ id, name, number }) => (
            <ContactListItem key={id}>
              {name + ': ' + number}
              <button
                type="button"
                onClick={() => handleDelete(id)}
                aria-label="Delete contact"
              >
                Delete
              </button>
            </ContactListItem>
          ))
        ) : (
          <p>Sorry! You have no contacts created.</p>
        )}
      </ul>
    </Wrapper>
  );
};
