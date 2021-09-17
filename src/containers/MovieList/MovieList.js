import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../../redux/actions/movieActions"

const MovieList = () => {
  const movies = useSelector((state) => state);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios.get('https://ghibliapi.herokuapp.com/films').catch((err) => {
      console.log("err", err);
    })
    dispatch(setMovies(response.data));
  };

  useEffect(() => {
    fetchProducts();
  });
  console.log("movie list", movies);

  return (
    <div>MovieList</div>
  );
};

export default MovieList;
