import { createSlice } from '@reduxjs/toolkit';
import {
  getAllContacts,
  addNewContact,
  deleteContact,
  updateContact,
} from './contacts-operations';

const initialState = {
  contacts: [],
  filterName: '',
  filterLetter: '',
  isLoading: false,
  error: { status: false, message: '' },
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setFilterName(state, { payload }) {
      state.filterName = payload;
    },
    setFilterLetter(state, { payload }) {
      state.filterLetter = payload;
    },
  },
  extraReducers: {
    [getAllContacts.fulfilled](state, { payload }) {
      state.contacts = payload;
      state.isLoading = false;
      state.error = { status: false, message: '' };
    },
    [addNewContact.fulfilled](state, { payload }) {
      state.contacts = [...state.contacts, payload];
      state.isLoading = false;
      state.error = { status: false, message: '' };
    },
    [deleteContact.fulfilled](state, { payload }) {
      state.contacts = [...state.contacts.filter(el => el.id !== payload)];
      state.isLoading = false;
      state.error = { status: false, message: '' };
    },
    [updateContact.fulfilled](state, { payload }) {
      state.contacts = [
        ...state.contacts.filter(el => el.id !== payload.id),
        payload,
      ];
      state.isLoading = false;
      state.error = { status: false, message: '' };
    },
    [getAllContacts.pending](state, _) {
      state.isLoading = true;
      state.error = { status: false, message: '' };
    },
    [addNewContact.pending](state, _) {
      state.isLoading = true;
      state.error = { status: false, message: '' };
    },
    [deleteContact.pending](state, _) {
      state.isLoading = true;
      state.error = { status: false, message: '' };
    },
    [updateContact.pending](state, _) {
      state.isLoading = true;
      state.error = { status: false, message: '' };
    },
    [getAllContacts.rejected](state, { payload }) {
      state.contacts = [];
      state.isLoading = false;
      state.error = { status: true, message: payload };
    },
    [addNewContact.rejected](state, { payload }) {
      state.contacts = [];
      state.isLoading = false;
      state.error = { status: true, message: payload };
    },
    [deleteContact.rejected](state, { payload }) {
      state.contacts = [];
      state.isLoading = false;
      state.error = { status: true, message: payload };
    },
    [updateContact.rejected](state, { payload }) {
      state.contacts = [];
      state.isLoading = false;
      state.error = { status: true, message: payload };
    },
  },
});

export const { setFilterName, setFilterLetter } = contactsSlice.actions;

export default contactsSlice.reducer;
