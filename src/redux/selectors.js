import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const getIsLoggedIn = state => state.auth.isLoggedIn;

export const getUsername = state => state.auth.user.name;

export const getToken = state => state.auth.token;

export const selectFilteredContact = state => state.filter;

export const selectFilteredByName = createSelector(
  [selectContacts, selectFilteredContact],
  (contacts, nameFromFilter) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(nameFromFilter.toLowerCase())
    );
  }
);
