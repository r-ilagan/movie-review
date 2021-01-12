import { useState, useEffect } from 'react';
import Movie from './Movie';
import { multiSearch } from '../services/tmdb';
import { useQuery } from '../hooks';
import { isObjEmpty } from '../utils';

const Movies = () => {
  const [response, setResponse] = useState({});
  const [isFetching, setFetching] = useState(true);
  const search = useQuery().get('search');

  useEffect(() => {
    setFetching(true);
    const findShows = async () => {
      await multiSearch(search)
        .then((data) => setResponse(data))
        .then(() => setFetching(false))
        .catch((error) => {
          console.log(error);
          setFetching(false);
        });
    };
    findShows();
  }, [search]);

  const loading = isFetching ? (
    <div>Loading...</div>
  ) : (
    <div className="col-span-3 text-center">
      <p>
        No results found for <span className="font-bold">"{search}"</span>
      </p>
    </div>
  );

  return (
    <article>
      <ul className="grid md:grid-cols-3 justify-items-center">
        {!isObjEmpty(response)
          ? response.results.map((show) => {
              return (
                <li key={show.imdbID}>
                  <Movie movie={show} />
                </li>
              );
            })
          : loading}
      </ul>
    </article>
  );
};

export default Movies;
