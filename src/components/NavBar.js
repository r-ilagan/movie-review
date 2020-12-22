import React from 'react';
import SearchBox from './SearchBox';
import Logo from './icons/Logo';
import { Link } from 'react-router-dom';

const NavBar = ({ query, setQuery, setMovies }) => {
  return (
    <header>
      <nav>
        <ul className="flex px-2 py-3 items-center justify-between">
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
