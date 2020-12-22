import { searchForMovies } from '../services/movie';

const SearchBar = ({ query, setQuery, setMovies }) => {
  const findMovies = async (e) => {
    e.preventDefault();
    await searchForMovies(query)
      .then((data) => setMovies(data.Search))
      .catch((error) => console.log(error));
  };

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <section>
      <form onSubmit={findMovies}>
        <input type="text" onChange={onChange} />
      </form>
    </section>
  );
};

export default SearchBar;
