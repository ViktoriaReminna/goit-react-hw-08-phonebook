import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://64ee38801f87218271426d96.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'task/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      const contacts = response.data.map(contact => ({
        id: contact.id,
        name: contact.name,
        number: contact.phone,
      }));
      return contacts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'task/addContact',
  async (object, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', object);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'tasks/deleteTask',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
