import React from "react";
import { useSelector } from "react-redux";
import "./MovieComponent.scss";

const MovieComponents = () => {
  const movies = useSelector((state) => state.allMovies.movies);
  const renderMovies = movies.map((movie) => {
    const { id, title, release_date } = movie;
    return (
      <div key={id} className="component-wrapper">
        <div className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{title}</span>
              <p>{release_date}</p>
            </div>
            <div className="card-action">
              <a href={`/movie/${id}`}>Movie Details</a>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return renderMovies;
};

export default MovieComponents;
