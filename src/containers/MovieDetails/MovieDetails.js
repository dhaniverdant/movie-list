import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectedMovie } from "../../redux/actions/movieActions";

const MovieDetails = () => {
  const { movieId } = useParams();
  let movie = useSelector((state) => state.movie);
  const { id, title, release_date, description } = movie;
  const dispatch = useDispatch();
  const fetchMovieDetails = async (id) => {
    const response = await axios
      .get(`https://ghibliapi.herokuapp.com/films/${id}`)
      .catch((err) => {
        console.log("Error : ", err);
      });
    dispatch(selectedMovie(response.data));
  };

  useEffect(() => {
    if (movieId && movieId !== "") fetchMovieDetails(movieId);
  }, [movieId]);

  return (
    <div key={ id }>
      <h2>{ `${title}(${release_date})` }</h2>
      <p>{ description }</p>
    </div>
  );
};

export default MovieDetails;
