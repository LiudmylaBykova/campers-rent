import { createSlice } from "@reduxjs/toolkit";
import { getAllCampers } from "./campersOps";

const initialState = {
  campers: [],
  campersFavorites: [],
  location: "",
  filters: {
    options: [],
    camperType: "",
  },
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
    changeLocation: (state, action) => {
      state.location = action.payload;
    },
    setFilters(state, action) {
      state.filters = action.payload;
    },
    addFavorites: {
      reducer(state, action) {
        state.campersFavorites.push(action.payload);
      },
      prepare(values) {
        return {
          payload: {
            ...values,
          },
        };
      },
    },

    deleteFavorites: (state, action) => {
      state.campersFavorites = state.campersFavorites.filter(
        (camper) => camper._id !== action.payload
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
export const { addFavorites, deleteFavorites, changeLocation, setFilters } =
  campersSlice.actions;
