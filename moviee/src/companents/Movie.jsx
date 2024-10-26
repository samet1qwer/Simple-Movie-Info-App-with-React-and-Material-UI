import React from "react";
import "../css/movie.css";
import { useNavigate } from "react-router-dom";

function Movie({ movie }) {
  const { Poster, Title, Type, Year, imdbID } = movie;
  const navigate = useNavigate();
  return (
    <div
      className="container"
      onClick={() => {
        navigate("/movie-details/" + imdbID);
      }}
    >
      <div className="row">
        <img src={Poster} className="img-btn" />
      </div>
      <div className="descrip">
        <h3 className="title">Title: {Title}</h3>
        <p className="type">Type: {Type}</p>
        <h5 className="year">Year: {Year}</h5>
      </div>
    </div>
  );
}

export default Movie;
