import React from 'react';
import SearchBox from './SearchBox';
import Logo from './icons/Logo';
import { Link } from 'react-router-dom';

const NavBar = ({ query, setQuery, setMovies }) => {
  return (
    <nav>
      <ul>
        <Link to="/">
          <li>
            <Logo />
          </li>
        </Link>
        <li>
          <SearchBox query={query} setQuery={setQuery} setMovies={setMovies} />
        </li>
        <Link to="/about">
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
