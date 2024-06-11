import { useEffect, useState } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";
import NavBar from "./NavBar";

// 861465c7 API key OMDb movie data base

const API_URL ='https://www.omdbapi.com?apikey=861465c7';

const movie= {
    
        "Title": "Italian Spiderman",
        "Year": "2007",
        "imdbID": "tt2705436",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg"
    }



const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')
    const [genre, setGenre] = useState('All');

    const searchMovies = async (tittle) => {

        const response = await fetch(`${API_URL}&s=${tittle}`);
        const data = await response.json();

        setMovies(data.Search);

    }

    useEffect(() => {
        searchMovies('Movies');
    }, []);

    const handleKeyDown = (e) => {
        console.log('Key pressed:', e.key); // Debugging statement
        if (e.key === 'Enter') {
            console.log('Enter key pressed'); // Debugging statement
            searchMovies(searchTerm);
        }
    };

    const filterMoviesByGenre = (movies, genre) => {
        if (genre === "All") return movies;
        return movies.filter(movie => movie.Genre && movie.Genre.includes(genre));
    }

    return (
        <div className="app">
              <h1>Rayner Movies</h1>
            <NavBar setGenre={setGenre} />

            <div className="search">
                <input
                  placeholder="Search for movies"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
                <img
                 src={SearchIcon}
                 alt="search"
                 onClick={() => searchMovies(searchTerm)}

                />
            </div>

            {movies?.length > 0
                ? (
                <div className="container">
                    {filterMoviesByGenre(movies, genre).map((movie) => (
                        <MovieCard movie={movie} />
                    ))}
                </div>
                
                ) : 
                (
                    <div className="empty">
                        <h2>No Movies found</h2>
                    </div>
                )
            }
        </div>
    );
}

export default App;