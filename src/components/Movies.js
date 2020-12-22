import Movie from './Movie';

const Movies = ({ movies }) => {
  if (typeof movies === 'undefined' || movies.length === 0) {
    return null;
  }

  return (
    <article>
      <ul>
        {movies.map((movie) => {
          return (
            <li key={movie.imdbID}>
              <Movie movie={movie} />
            </li>
          );
        })}
      </ul>
    </article>
  );
};

export default Movies;
