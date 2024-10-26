import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Movie from "./Movie";
import "../css/movie.css";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

function Movies() {
  const { data, loading } = useSelector((store) => store.movies);

  return (
    <div>
      <div className="big-container">
        {data &&
          data.map((movie, index) => (
            <Movie key={movie.imdbID} movie={movie} />
          ))}
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    </div>
  );
}

export default Movies;
