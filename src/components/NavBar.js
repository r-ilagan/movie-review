import React from 'react';
import SearchBox from './SearchBox';
import Logo from './icons/Logo';
import { Link } from 'react-router-dom';

const NavBar = ({ query, setQuery, setMovies, setResponse }) => {
  return (
    <header>
      <nav>
        <ul className="flex px-2 py-3 items-center justify-center">
          <Link to="/">
            <li>
              <Logo height={20} />
            </li>
          </Link>
          <li>
            <SearchBox
              query={query}
              setQuery={setQuery}
              setMovies={setMovies}
              setResponse={setResponse}
            />
          </li>
          <Link to="/about">
            <li className="px-2">About</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
