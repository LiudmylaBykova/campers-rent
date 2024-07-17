import { createSlice } from "@reduxjs/toolkit";
import { getAllCampers } from "./campersOps";

const initialState = {
  campers: [],
  isLoading: false,
  isError: false,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.isError = action.payload;
};

const campersSlice = createSlice({
  name: "campers",
  initialState: initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getAllCampers.pending, handlePending)
      .addCase(getAllCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.campers = action.payload;
      })
      .addCase(getAllCampers.rejected, handleRejected);
  },
});

export const campersReducer = campersSlice.reducer;
