import { searchForMovies } from '../services/movie';

function SearchBar({ query, setQuery, setMovies }) {
  const findMovies = async () => {
    await searchForMovies(query)
      .then((data) => setMovies(data.Search))
      .catch((error) => console.log(error));
  };

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <section>
      <h2>Search for a movie</h2>
      <input type="text" onChange={onChange} />
      <button onClick={findMovies}>Search</button>
    </section>
  );
}

export default SearchBar;
