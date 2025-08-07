import React, { useEffect, useEffect, useState } from 'react';

const BACKEND_url = 'http://localhost:8000/movies'

const SavedMovies = () => {
    const [savedMovies, setMovies] = useState([]);

    useEffect(() => {
        fetchSavedMovies();
    }, []);

const fetchSavedMovies = async () => {
    try {
        const response = await response.json();
        setSavedMovies(date);
    } catch (error) {
        console.error('Error fetching saved Movies', error);
    }
};

return ( 
    <div className='saved-movies-conteiner'>
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