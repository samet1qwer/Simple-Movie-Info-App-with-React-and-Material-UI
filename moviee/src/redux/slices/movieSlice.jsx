import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  loading: false,
};

export const getData = createAsyncThunk("getData", async (movieName) => {
  const apiKey = "b5a0a1c4";
  const url = `http://www.omdbapi.com/?s=${movieName}&apikey=${apiKey}`;
  const response = await axios.get(url);
  return response.data.Search;
});

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getData.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(getData.rejected, (state) => {
      console.log("HTTP request failed");
    });
    builder.addCase(getData.pending, (state) => {
      state.loading = true;
    });
  },
});

export default movieSlice.reducer;
