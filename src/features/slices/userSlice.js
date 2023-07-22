import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    decodedToken: null,
    user: null,
  },
  reducers: {
    setDecodedToken: (state, action) => {
      state.decodedToken = action.payload;
    },
  },
});

export const {setDecodedToken} = userSlice.actions;

export default userSlice.reducer;
