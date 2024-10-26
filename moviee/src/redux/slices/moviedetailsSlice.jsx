import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  details: [],
  loading: false,
};

export const getDetails = createAsyncThunk("getDetails", async (imdbID) => {
  const apiKey = "b5a0a1c4";
  const response = await axios.get(
    `http://www.omdbapi.com/?i=${imdbID}&plot=full&apikey=${apiKey}`
  );
  return response.data;
});

export const detailsSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(getDetails.fulfilled, (state, action) => {
        state.details = action.payload;
        state.loading = false;
      })
      .addCase(getDetails.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default detailsSlice.reducer;
