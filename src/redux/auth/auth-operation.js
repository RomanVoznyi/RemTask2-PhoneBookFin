import { createAsyncThunk } from '@reduxjs/toolkit';
import { usersSignup } from '../../services/api-services';

const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (user, thunkAPI) => {
    console.log('Operation - ', user);
    const response = await usersSignup(user);
    return response.data;
  },
);

export { registerUser };
