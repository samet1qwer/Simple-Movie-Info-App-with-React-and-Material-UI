import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetails } from "../redux/slices/moviedetailsSlice";
import "../css/movieDetails.css";
import Container from "@mui/material/Container";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
function movieDetails() {
  const { imdbID } = useParams();
  const { details, loading } = useSelector((store) => store.details);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetails(imdbID));
  }, [dispatch, imdbID]);

  const {
    Actors,
    Awards,
    BoxOffice,
    Plot,
    Poster,
    imdbVotes,
    Director,
    Title,
    Type,
  } = details;

  return (
    <Container maxWidth="md">
      {/* {loading ? (
      
      ) : (
        console.log("başarılı")
      )} */}

      <div className="details-container">
        <div className="img-div">
          <div>
            {" "}
            <img src={Poster} className="details-img" />
          </div>

          <div className="plot-tittle">
            <h3 className="tittle-details">{Title}</h3>
            <p className="plot-details">{Plot}</p>
          </div>
        </div>
        <div>
          <p className="votes">imdb votes : {imdbVotes}</p>
        </div>
        <div className="extra-details">
          {" "}
          <div className="btn-details">
            <p>Director : {Director}</p>
            <p>Awards :{Awards}</p>
            <p>Actors : {Actors}</p>
            <p>BoxOffice : {BoxOffice}</p>
          </div>
        </div>

        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          {" "}
          {/* <CircularProgress color="inherit" /> */}
          <span className="loader">Loading</span>
        </Backdrop>
      </div>
    </Container>
  );
}

export default movieDetails;
