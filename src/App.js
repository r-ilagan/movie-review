import { useState } from 'react';
import SearchBar from './components/SearchBar';
import Movies from './components/Movies';

function App() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  return (
    <div>
      <SearchBar query={query} setQuery={setQuery} setMovies={setMovies} />
      <Movies movies={movies} />
    </div>
  );
}

export default App;
