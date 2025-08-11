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
};
