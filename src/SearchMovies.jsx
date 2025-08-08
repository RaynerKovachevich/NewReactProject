import React, { useState } from "react";

const BACKEND_URL = 'http://localhost:8000';

const SearchMovies = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [message, setMessage] = useState('');

    // Search movies from OMDB
    const SearchMovie = async () => {
        if (!query.trim()) return;
        try {
            const response = await fetch(`${BACKEND_URL}/movies/search/?title=${query}`);
            const data = await response.json();
            setMovies(data);
            setMessage('');
        } catch (error) {
            console.error('Error searching movies:', error);
        }
    };

    // Save movie in DB
 const savedMovie = async (movie) => {
    try {
        const response = await fetch(`${BACKEND_URL}/movies/save-from-omdb/?title=${encodeURIComponent(movie.Title)}`, {
            method: 'POST',
        });

        if (response.ok) {
            setMessage(`Movie "${movie.Title}" saved successfully!`);
        } else {
            const errData = await response.json();
            setMessage(`Error: ${errData.detail || 'Could not save movie'}`);
        }
    } catch (error) {
        console.error('Error saving movie:', error);
    }
};


    return (
        <div className="search-movies-container">
            <h2>Search Movies</h2>
            <div>
                <input 
                    type="text"
                    placeholder="Enter movie title"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)} 
                />
                <button onClick={SearchMovie}>Search</button>
            </div>

            {message && <p>{message}</p>}

            <div className="movies-result">
                {movies.length > 0 ? (
                    movies.map((movie, index) => (
                        <div key={index} className="movie-card">
                            <h3>{movie.Title}</h3>
                            <p>{movie.Year}</p>
                            {movie.Poster && movie.Poster !== "N/A" && (
                                <img src={movie.Poster} alt={movie.Title} width="100"/>
                            )}
                            <button onClick={() => savedMovie(movie)}>Save</button>
                        </div>
                    ))
                ) : (
                    <p>No movies found.</p>
                )}
            </div>
        </div>
    );
};

export default SearchMovies;
