import { createSlice } from "@reduxjs/toolkit";
import { getAllCampers } from "./campersOps";

const initialState = {
  campers: [],
  campersFavorites: [],
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

  reducers: {
    addFavorites(state, action) {
      state.campersFavorites.push(action.payload);
    },
    deleteFavorites(state, action) {
      state.campersFavorites = state.campersFavorites.filter(
        (camper) => camper.id !== action.payload.id
      );
    },
  },

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
export const { addFavorites, deleteFavorites } = campersSlice.actions;
