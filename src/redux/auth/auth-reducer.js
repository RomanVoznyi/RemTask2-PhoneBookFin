import { createSlice } from '@reduxjs/toolkit';
import {
  registerUser,
  loginUser,
  logoutUser,
  getCurrent,
} from './auth-operation';

const initialState = {
  user: { name: '', email: '' },
  token: '',
  isLoggedIn: false,
  isLoading: false,
  error: { status: false, message: '' },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [registerUser.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = { status: false, message: '' };
    },
    [loginUser.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = { status: false, message: '' };
    },
    [logoutUser.fulfilled](state, _) {
      state.user.name = '';
      state.user.email = '';
      state.token = '';
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error = { status: false, message: '' };
    },
    [getCurrent.fulfilled](state, { payload }) {
      state.user = payload;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = { status: false, message: '' };
    },
    [registerUser.pending](state, _) {
      state.isLoading = true;
      state.error = { status: false, message: '' };
    },
    [loginUser.pending](state, _) {
      state.isLoading = true;
      state.error = { status: false, message: '' };
    },
    [logoutUser.pending](state, _) {
      state.isLoading = true;
      state.error = { status: false, message: '' };
    },
    [getCurrent.pending](state, _) {
      state.isLoading = true;
      state.error = { status: false, message: '' };
    },
    [registerUser.rejected](state, { payload }) {
      state.user.name = '';
      state.user.email = '';
      state.token = '';
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error = { status: true, message: payload };
    },
    [loginUser.rejected](state, { payload }) {
      state.user.name = '';
      state.user.email = '';
      state.token = '';
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error = { status: true, message: payload };
    },
    [logoutUser.rejected](state, { payload }) {
      state.user.name = '';
      state.user.email = '';
      state.token = '';
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error = { status: true, message: payload };
    },
    [getCurrent.rejected](state, { payload }) {
      state.user.name = '';
      state.user.email = '';
      state.token = '';
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error = { status: true, message: payload };
    },
  },
});

export default authSlice.reducer;
