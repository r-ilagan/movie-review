import { useState, useEffect } from 'react';
import Movie from './Movie';
import { searchForMovies } from '../services/movie';
import { useQuery } from '../hooks';

const Movies = () => {
  const [shows, setShows] = useState([]);
  const [isFetching, setFetching] = useState(true);
  const query = useQuery();

  useEffect(() => {
    setFetching(true);
    const findShows = async () => {
      await searchForMovies(query.get('search'))
        .then((data) => setShows(data.Search))
        .then(() => setFetching(false));
    };
    findShows();
  }, [query]);

  const loading = isFetching ? (
    <div>Loading...</div>
  ) : (
    <div className="text-center">
      <p>
        No results found for <span className="font-bold">"{query}"</span>
      </p>
    </div>
  );

  return (
    <article>
      <ul className="grid md:grid-cols-3 justify-items-center">
        {shows
          ? shows.map((movie) => {
              return (
                <li key={movie.imdbID}>
                  <Movie movie={movie} />
                </li>
              );
            })
          : loading}
      </ul>
    </article>
  );
};

export default Movies;
