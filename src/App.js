import { useEffect, useState } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";
import NavBar from "./NavBar";
import logo from "./assets/Newlogo.png";

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
    const [showTopBtn, setShowTopBtn] = useState(false);

    const searchMovies = async (tittle) => {

        const response = await fetch(`${API_URL}&s=${tittle}`);
        const data = await response.json();

        setMovies(data.Search);

    }

    useEffect(() => {
        searchMovies('Movies');
    }, []);

    const handleKeyDown = (e) => {
        console.log('Key pressed:', e.key); 
        if (e.key === 'Enter') {
            console.log('Enter key pressed');
            searchMovies(searchTerm);
        }
    };

    const filterMoviesByGenre = (movies, genre) => {
        if (genre === "All") return movies;
        return movies.filter(movie => movie.Genre && movie.Genre.includes(genre));
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth"});
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="app">
               <img src={logo} alt="Logo" className="logo"/>
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
            <div>
                <button className={`Top-btn ${showTopBtn ? 'show' : ''}`} onClick={scrollToTop}>Top</button>
            </div>
        </div>
    );
}

export default App;