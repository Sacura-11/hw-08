import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://653fa39c9e8bd3be29e0f4f2.mockapi.io/api/v1';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get('/contacts');
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async ({ name, phone }, { rejectWithValue }) => {
        try {
            const response = await axios.post('/contacts', { name, phone });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, { rejectWithValue }) => {
        try {
            const response = await axios.delete(`/contacts/${contactId}`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);