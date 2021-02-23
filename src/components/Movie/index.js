import { useState } from 'react';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { IconButton } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import './style.css';

export const Movie = ({ movie, handleWatched }) => {
  const [opened, setOpened] = useState(false);

  const {
    original_title: name,
    vote_average: score,
    release_date: date,
    backdrop_path: imageName,
  } = movie;
  const year = date.substring(0, 4);

  return (
    <div className="movie-cont">
      <div className="closed">
        <div className="movie-name">
          <IconButton
            color="primary"
            aria-label="add an alarm"
            onClick={() => setOpened((prev) => !prev)}
          >
            {!opened ? (
              <KeyboardArrowRightIcon color="primary" />
            ) : (
              <KeyboardArrowDownIcon color="primary" />
            )}
          </IconButton>

          <span>{name}</span>
        </div>
        {opened && (
          <div className="watched-checkbox">
            <FormControlLabel
              control={
                <Checkbox
                  checked={movie.watched}
                  onChange={() => handleWatched(name)}
                  name="checkedB"
                  color="primary"
                />
              }
              label="Watched"
            />
          </div>
        )}
      </div>

      {opened && (
        <div className="opened">
          <div className="img-cont">
            <img
              src={`https://image.tmdb.org/t/p/w500/${imageName}`}
              alt="Film"
              width="150px"
            />
          </div>

          <div className="movie-data">
            <span>Year: {year}</span>
            <span>Runtime: 137m</span>
            <span>IMDB Score: {score}</span>
          </div>
        </div>
      )}
    </div>
  );
};
