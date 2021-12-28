import React, { useEffect, useState } from "react";
import "./App.css";
import Movie from "./components/Movie";
function App() {
  const featuresApi =
    "https://api.themoviedb.org/3/discover/movie?page=1&include_video=false&include_adult=f[…]esc&language=en-US&api_key=1bfa430aada4409bfa6a3c5528128e8a";
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(featuresApi).then((res) =>
      res.json().then((data) => {
        console.log(data.results);
        setMovies(data.results);
      })
    );
  }, []);
  return (
    <>
      <header>
        <h1>MovieList</h1>
        <input className="search" type="search" placeholder="search..."></input>
      </header>
      <div className="movie-container">
        {movies.length &&
          movies.map((element) => <Movie key={element.id} {...element} />)}
      </div>
    </>
  );
}

export default App;
