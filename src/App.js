import { useState } from 'react';
import About from './components/About';
import Home from './components/Home';
import Movies from './components/Movies';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [response, setResponse] = useState('FALSE');

  return (
    <Router>
      <div>
        <NavBar
          query={query}
          setQuery={setQuery}
          setMovies={setMovies}
          setResponse={setResponse}
        />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/s/:query">
            <Movies movies={movies} response={response} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
