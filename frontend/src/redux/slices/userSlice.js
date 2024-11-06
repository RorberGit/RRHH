import { createSlice } from "@reduxjs/toolkit";

const DEFAULT_STATE = {
  isAuth: false,
  user: null,
};

const initialState = (() => {
  return DEFAULT_STATE;
})();

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    create: (state, action) => {
      state.isAuth = true;
      state.user = action.payload;
    },
    reset: () => initialState,
  },
});

// Action creators are generated for each case reducer function
export const { create, reset } = userSlice.actions;

export default userSlice.reducer;
