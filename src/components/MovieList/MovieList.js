import React, { useEffect, useState } from "react";
import Movies from "../Movies/Movies";

function MovieList() {
  const API_KEY = "67029a41f2f57fb40a0583274a6c678c";

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("Avengers");

  useEffect(() => {
    async function getMovies() {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}`
      );
      const data = await response.json();
      console.log(data.results);
      setMovies(data.results);
    }
    if (query !== "") getMovies();
  }, [query]);

  const updateMovies = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search); //Sets the value of the query to search
  };

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Movie List</h2>
        <div className="container">
          <input
            className="search-input"
            onChange={updateMovies}
            value={search}
            type="text"
          ></input>
          <button className="search-button" onClick={getSearch} type="submit">
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {movies.map((movie) => (
            <Movies
              key={movie.id}
              title={movie.title}
              release_date={movie.release_date}
              image={movie.poster_path}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieList;
