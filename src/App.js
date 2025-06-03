import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import './App.css';
import SearchIcon from './search.svg';

const API_URL = "http://www.omdbapi.com?apikey=2d2fd5b6";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage on first render
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  // Save favorites to localStorage on change
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    if (data.Search) {
      setMovies(data.Search);
    } else {
      setMovies([]);
    }
  };

  const toggleFavorite = (movie) => {
    const isFav = favorites.some((fav) => fav.imdbID === movie.imdbID);
    if (isFav) {
      setFavorites(favorites.filter((fav) => fav.imdbID !== movie.imdbID));
    } else {
      setFavorites([...favorites, movie]);
    }
  };

  const isFavorite = (movie) => {
    return favorites.some((fav) => fav.imdbID === movie.imdbID);
  };

  useEffect(() => {
    searchMovies('hulk');
  }, []);

  return (
    <div className='app'>
      <h1>Movie Search App</h1>

      <div className='search'>
        <input
          placeholder='Search for movies'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt='search'
          onClick={() => searchMovies(search)}
        />
      </div>

      <h2>Search Results</h2>
      {
        movies?.length > 0 ? (
          <div className='container'>
            {movies.map((movie) => (
              <MovieCard
                key={movie.imdbID}
                movie={movie}
                isFavorite={isFavorite(movie)}
                toggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        ) : (
          <div className='empty'><h2>No Movies Found</h2></div>
        )
      }

      <h2>Favorite Movies</h2>
      {
        favorites.length > 0 ? (
          <div className='container'>
            {favorites.map((movie) => (
              <MovieCard
                key={movie.imdbID}
                movie={movie}
                isFavorite={true}
                toggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        ) : (
          <p>No favorites added yet.</p>
        )
      }
    </div>
  );
}

export default App;
