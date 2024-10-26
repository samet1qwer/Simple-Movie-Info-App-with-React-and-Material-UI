import React from "react";
import { Routes, Route } from "react-router-dom";
import Movies from "../companents/Movies";
import Notfound from "../companents/Notfound";
import MovieDetails from "../companents/movieDetails";
import Contack from "../companents/Contack";
import About from "../companents/About";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Movies />} />
      <Route path="/movie-details/:imdbID" element={<MovieDetails />} />
      <Route path="/contack" element={<Contack />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
}

export default Router;
