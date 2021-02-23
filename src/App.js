import { useEffect, useState } from 'react';
import { SearchBar } from './components/SearchBar';
import { MoviesTabs } from './components/Tabs';
import { Context } from './context/movies.context';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchedData, setSearchedData] = useState([]);
  const [searchTxt, setSearchTxt] = useState('');
  const [searchDBTxt, setSearchDBTxt] = useState('');

  useEffect(() => {
    (async () => {
      const res = await fetch(
        'https://api.themoviedb.org/3/movie/popular?api_key=019475ce37a142dba3bad860c3ea7047&language=en-US&page=1'
      );
      const data = await res.json();

      setMovies(data.results);
    })();
  }, []);

  const handleWatched = (name) => {
    console.log(movies, 44444);
    setMovies(
      movies.map((movie) => {
        if (movie.original_title === name) {
          movie.watched = !movie.watched;
        }

        return movie;
      })
    );
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearchTxt(value);

    setMovies(
      movies.map((movie) => {
        if (value === '') {
          movie.hide = false;
        } else if (
          !movie.original_title.toLowerCase().startsWith(value.toLowerCase())
        ) {
          movie.hide = true;
        } else {
          movie.hide = false;
        }

        return movie;
      })
    );
  };

  const handleSearchDB = async (e) => {
    const { value } = e.target;
    setSearchDBTxt(value);

    if (value.trim()) {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=019475ce37a142dba3bad860c3ea7047&query=${value}`
      );
      const data = await res.json();

      setSearchedData(data.results);
    } else {
      setSearchedData([]);
    }
  };

  return (
    <Context.Provider
      value={{
        movies,
        searchDBTxt,
        handleSearchDB,
        searchedData,
        setSearchedData,
        handleWatched,
        searchTxt,
        handleSearch,
      }}
    >
      <div className="container">
        <div className="search-bar-cont">
          <SearchBar />
        </div>

        <div className="films-cont">
          <MoviesTabs />
        </div>
      </div>
    </Context.Provider>
  );
};

export default App;
