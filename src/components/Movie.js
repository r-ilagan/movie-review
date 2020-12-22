const Movie = ({ movie }) => {
  return (
    <article>
      <img src={movie.Poster} alt="movie poster" />
      <h3>{movie.Title}</h3>
      <p>Year: {movie.Year}</p>
      <p>Type: {movie.Type}</p>
      <a href={`/movies/${movie.imdbID}`}>More</a>
    </article>
  );
};

export default Movie;
