import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  usersSignup,
  usersSignin,
  usersLogOut,
  usersCurrent,
} from '../../services/api-services';
import { getToken } from './auth-selector';
import { toast } from 'react-toastify';

const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (credentials, thunkAPI) => {
    try {
      const user = await usersSignup(credentials);
      toast.success(`Registration successful!`);
      return user;
    } catch (error) {
      toast.error(`Registration failed! ${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials, thunkAPI) => {
    try {
      const user = await usersSignin(credentials);
      return user;
    } catch (error) {
      toast.error(`SignIn failed! ${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const logoutUser = createAsyncThunk('auth/logoutUser', async (_, thunkAPI) => {
  try {
    await usersLogOut();
  } catch (error) {
    toast.error(`Logout failed! ${error.message}`);
    return thunkAPI.rejectWithValue(error.message);
  }
});

const getCurrent = createAsyncThunk('auth/getCurrent', async (_, thunkAPI) => {
  const persistedToken = getToken(thunkAPI.getState());

  if (!persistedToken) {
    return thunkAPI.rejectWithValue();
  }

  try {
    const user = await usersCurrent(persistedToken);
    return user;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export { registerUser, loginUser, logoutUser, getCurrent };
