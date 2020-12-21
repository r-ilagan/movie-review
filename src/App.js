import { useState } from 'react';
import SearchBar from './components/SearchBar';

function App() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  return (
    <div>
      <SearchBar query={query} setQuery={setQuery} setMovies={setMovies} />
    </div>
  );
}

export default App;
