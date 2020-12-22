import { searchForMovies } from '../services/movie';
import { useHistory } from 'react-router-dom';

const SearchBox = ({ query, setQuery, setMovies }) => {
  const history = useHistory();

  const findMovies = async (e) => {
    e.preventDefault();
    await searchForMovies(query)
      .then((data) => setMovies(data.Search))
      .then(() => history.push(`/s/${query}`))
      .catch((error) => console.log(error));
  };

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <section className="text-black">
      <form onSubmit={findMovies}>
        <input type="text" onChange={onChange} />
      </form>
    </section>
  );
};

export default SearchBox;
