import { useState } from 'react';
import About from './components/About';
import Home from './components/Home';
import Movies from './components/Movies';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  console.log(movies);

  return (
    <Router>
      <div>
        <NavBar query={query} setQuery={setQuery} setMovies={setMovies} />
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/" component={Home} />
        </Switch>
        <Movies movies={movies} />
      </div>
    </Router>
  );
}

export default App;
