import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/auth-reducer';

export const store = configureStore({
  reducer: { authReducer },
});
