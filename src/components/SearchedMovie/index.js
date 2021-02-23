import './style.css';

export const SearchedMovie = ({ movie }) => {
  const {
    original_title: name,
    release_date: date,
    poster_path: imageName,
  } = movie;
  const year = date.substring(0, 4);

  return (
    <div className="searched-movie">
      <div className="img-cont">
        <img
          src={
            imageName
              ? `https://image.tmdb.org/t/p/w500/${imageName}`
              : 'https://i.stack.imgur.com/y9DpT.jpg'
          }
          alt=""
          width="120"
        />
      </div>

      <div className="searched-movie-data">
        <span>{name}</span>

        <span>Year: {year}</span>
      </div>
    </div>
  );
};
