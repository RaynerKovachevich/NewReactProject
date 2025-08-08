import React, { useEffect, useState } from 'react';

const BACKEND_URL = 'http://localhost:8000/movies/';

const SavedMovies = () => {
    const [savedMovies, setMovies] = useState([]);

    useEffect(() => {
        fetchSavedMovies();
    }, []);

    const fetchSavedMovies = async () => {
        try {
            const response = await fetch(BACKEND_URL);
            const data = await response.json();
            setMovies(data);
        } catch (error) {
            console.error('Error fetching saved movies:', error);
        }
    };

    return ( 
        <div className='saved-movies-container'>
            {savedMovies.length > 0 ? (
                savedMovies.map((movie) => (
                    <div key={movie.id} className='saved-movie-card'>
                        <h3>{movie.title}</h3>
                        <p>{movie.description}</p>
                    </div>
                ))
            ) : (
                <p>No saved movies found.</p>
            )}
        </div>
    );
};

export default SavedMovies;
