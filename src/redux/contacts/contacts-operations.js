import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  contactsGetAll,
  contactsAddNew,
  contactsDeleteOne,
  contactsUpdateOne,
} from '../../services/api-services';
import { toast } from 'react-toastify';

const getAllContacts = createAsyncThunk(
  'getAllContacts',
  async (_, thunkAPI) => {
    try {
      const contacts = await contactsGetAll();
      return contacts;
    } catch (error) {
      toast.error(`Wrong request! ${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const addNewContact = createAsyncThunk(
  'addNewContact',
  async (newContact, thunkAPI) => {
    try {
      const contact = await contactsAddNew(newContact);
      toast.success(`Contact was successfully added!`);
      return contact;
    } catch (error) {
      toast.error(`Something wrong! ${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const deleteContact = createAsyncThunk(
  'deleteContact',
  async (id, thunkAPI) => {
    try {
      await contactsDeleteOne(id);
      toast.success(`Contact was successfully deleted!`);
      return id;
    } catch (error) {
      toast.error(`Something wrong! ${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const updateContact = createAsyncThunk(
  'updateContact',
  async ({ id, updatedContact }, thunkAPI) => {
    try {
      const contacts = await contactsUpdateOne({ id, updatedContact });
      toast.success(`Contact was successfully updated!`);
      console.log(contacts);
      return contacts;
    } catch (error) {
      toast.error(`Something wrong! ${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export { getAllContacts, addNewContact, deleteContact, updateContact };
