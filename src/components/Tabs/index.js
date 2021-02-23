import { useState, useContext } from 'react';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import TextField from '@material-ui/core/TextField';
import { Movie } from '../Movie';
import { Context } from '../../context/movies.context';
import './style.css';

export const MoviesTabs = () => {
  const { movies, handleWatched, searchTxt, handleSearch } = useContext(
    Context
  );

  const [value, setValue] = useState(1);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div className="tabs-container">
      <div className="tabs-search-cont">
        <div className="select-tabs">
          <div
            className={`tab ${value === 1 ? 'selected' : ''}`}
            onClick={() => handleChange(1)}
          >
            <VisibilityOffIcon
              fontSize="large"
              color={`${value === 1 ? 'primary' : ''}`}
            />
            <span>Unwatched</span>
          </div>

          <div
            className={`tab ${value === 2 ? 'selected' : ''}`}
            onClick={() => handleChange(2)}
          >
            <VisibilityIcon
              fontSize="large"
              color={`${value === 2 ? 'primary' : ''}`}
            />
            <span>Watched</span>
          </div>
        </div>

        <div className="search-bar">
          <TextField
            id="standard-search"
            placeholder="Search My Movies"
            type="search"
            variant="outlined"
            value={searchTxt}
            onChange={handleSearch}
          />
        </div>
      </div>

      <div className="movies-cont">
        {movies?.map((movie) => {
          if (!movie.hide) {
            if (value === 1) {
              return !movie.watched ? (
                <Movie
                  movie={movie}
                  handleWatched={handleWatched}
                  key={movie.backdrop_path}
                />
              ) : null;
            } else if (value === 2) {
              return movie.watched ? (
                <Movie
                  movie={movie}
                  handleWatched={handleWatched}
                  key={movie.backdrop_path}
                />
              ) : null;
            }
          }

          return [];
        })}
      </div>
    </div>
  );
};
