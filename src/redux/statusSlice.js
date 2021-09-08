import { createSlice } from "@reduxjs/toolkit";

const statusSlice = createSlice({
  name: "status",
  initialState: "not-sorted",
  reducers: {
    changeStatus: (state, action) => {
      state = action.payload.value;
      return state;
    },
  },
});

export const { changeStatus } = statusSlice.actions;

export default statusSlice.reducer;
