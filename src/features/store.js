import {configureStore} from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

export default store;
