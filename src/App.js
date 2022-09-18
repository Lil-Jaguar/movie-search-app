
import { useEffect ,useState} from 'react';
import MovieCard from './MovieCard';
import './App.css';
import SearchIcon from './search.svg';
//2d2fd5b6

const API_URL = "http://www.omdbapi.com?apikey=2d2fd5b6"
function App() {
  const [movies , setMovies] = useState([]);
  const [search , setSearch] = useState('');
  const movie1 = {
    "Title": "The Incredible Hulk",
    "Year": "2008",
    "imdbID": "tt0800080",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTUyNzk3MjA1OF5BMl5BanBnXkFtZTcwMTE1Njg2MQ@@._V1_SX300.jpg"
};
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }
  useEffect(()=>{
    searchMovies('hulk');
  },[]
  );
  return (
    <div className='app'>
      <h1>movies</h1>
      <div className='search'>
        <input
          placeholder='search for movies'
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
           
        />
        <img 
          src={SearchIcon} 
          alt='search'
          onClick={()=>searchMovies(search)}
          />
      </div>
      
        {
          movies?.length > 0 ?
          (
            <div className='container'>
              {movies.map((movie)=>(
                <MovieCard movie={movie}/>
                ))}
            </div>
          ) : (
            <div className='empty'><h2>No Movies Found</h2></div>
            
          )
        }
        
        
     
     
    </div>
  );
}

export default App;
