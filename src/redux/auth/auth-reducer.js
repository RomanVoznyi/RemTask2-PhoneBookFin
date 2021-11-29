import { createSlice } from '@reduxjs/toolkit';
import { registerUser } from './auth-operation';

const initialState = {
  user: { name: '', email: '' },
  isLoggedIn: false,
  isLoading: false,
  error: { status: false, message: '' },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registerUser.fulfilled]: (state, action) => {
      state.user.name = action.user.name;
      state.user.email = action.user.email;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error.status = false;
    },
    [registerUser.pending]: (state, _) => {
      state.isLoading = true;
      state.error.status = false;
    },
    [registerUser.rejected]: (state, action) => {
      state.user.name = '';
      state.user.email = '';
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error.status = true;
      state.error.message = action.error;
    },
  },
});

export default authSlice.reducer;

// {"user":{"name":"Roman","email":"roman54321@mail.com"},"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWEzZmM1ZjZiN2YyODAwMTUwMjc3YzYiLCJpYXQiOjE2MzgxMzY5Mjd9.eF3zpNOYCkiCaO2c4YEvjFXIWpHYS2ode9UNJ0Fegrs"}
