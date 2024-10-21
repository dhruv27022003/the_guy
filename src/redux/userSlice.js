// redux/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
      console.log('User added:', action.payload);
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
