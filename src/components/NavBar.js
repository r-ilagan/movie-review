import React from 'react';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

const NavBar = ({ query, setQuery, setMovies }) => {
  return (
    <nav>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <li>
          <SearchBar query={query} setQuery={setQuery} setMovies={setMovies} />
        </li>
        <Link to="/about">
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
