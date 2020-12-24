import Movie from './Movie';
import { useParams } from 'react-router-dom';

const Movies = ({ movies, response }) => {
  const { query } = useParams();

  if (response === 'FALSE') {
    return (
      <div className="text-center">
        <p>
          No results found for <span className="font-bold">"{query}"</span>
        </p>
      </div>
    );
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
