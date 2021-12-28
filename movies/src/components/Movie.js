import React from "react";
export default function movie({ title, poster_path, overview, vote_average }) {
  const imagApi = "https://image.tmdb.org/t/p/w1280";
  return (
    <div className="movie">
      <div className="movie-header">
        <img src={imagApi + poster_path} alt={title} />
      </div>
      <div className="movie-ifo">
        <h3>{title}</h3>
        <span>{vote_average}</span>
      </div>
      <div className="movie-over">
        <h2>OverView:</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
}
