import { useState, useEffect } from 'react';
import Show from './Show';
import { multiSearch } from '../services/tmdb';
import { useQuery } from '../hooks';
import { isObjEmpty } from '../utils';

const SearchPage = () => {
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
      <ul className="flex flex-col pl-4 gap-2">
        {!isObjEmpty(response)
          ? response.results.map((show) => {
              return (
                <li key={show.id}>
                  <Show show={show} />
                </li>
              );
            })
          : loading}
      </ul>
    </article>
  );
};

export default SearchPage;
