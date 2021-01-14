import { useState } from 'react';
import About from './components/About';
import Home from './components/Home';
import SearchPage from './components/SearchPage';
import NavBar from './components/NavBar';
import { Switch, Route } from 'react-router-dom';

function App() {
  const [query, setQuery] = useState('');

  return (
    <div>
      <NavBar query={query} setQuery={setQuery} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/find" component={SearchPage} />
      </Switch>
    </div>
  );
}

export default App;
