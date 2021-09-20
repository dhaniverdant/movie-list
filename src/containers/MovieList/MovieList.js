/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setMovies } from "../../redux/actions/movieActions"
import MovieComponents from "../MovieComponent/MovieComponent";

const MovieList = () => {
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios.get('https://ghibliapi.herokuapp.com/films').catch((err) => {
      console.log("err", err);
    });
    dispatch(setMovies(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <div class="navbar-fixed">
        <nav>
          <div class="nav-wrapper">
            <a href="#!" class="brand-logo">Logo</a>
            <ul class="right hide-on-med-and-down">
              <li><a href="/mymovie">My Movies</a></li>
            </ul>
          </div>
        </nav>
      </div>
      <MovieComponents />
    </div>
  );
};

export default MovieList;
