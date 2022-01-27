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
                `https://api.themoviedb.org/4/search/movie?api_key=${API_KEY}&language=en-US&query=${query}`
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
        setQuery(search);
    };

    return (
        <div className="bg-white">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2>Movie List</h2>
                <div className="flex justify-center">
                    <div className="mb-3 xl:w-96">
                        <div className="input-group relative flex items-stretch w-full mb-4" 
                            onChange={updateMovies}
                            value={search}
                        >
                            <input type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon3" />
                            <button onClick={getSearch} className="ml-2 text-white bg-indigo-600 hover:bg-indigo-700 btn inline-block px-6 py-2 border-2 border-blue-600 font-medium text-xs leading-tight uppercase rounded  focus:outline-none focus:ring-0 transition duration-150 ease-in-out" type="button" id="button-addon3">Search</button>
                        </div>
                    </div>
                </div>

                <ul className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {movies.map((movie) => (
                        <Movies
                            key={movie.id}
                            title={movie.title}
                            release_date={movie.release_date}
                            image={movie.poster_path}
                            overview={movie.overview}
                            vote_average={movie.vote_average}
                            original_title={movie.original_title}
                            vote_count={movie.vote_count}
                        />
                    ))}
                </ul>
            </div>

        </div>
    );
}

export default MovieList;
