import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./slices/movieSlice";
import moviedetailsSlice from "./slices/moviedetailsSlice";
export const store = configureStore({
  reducer: {
    movies: movieSlice,
    details: moviedetailsSlice,
  },
});
