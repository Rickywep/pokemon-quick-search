import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';
import SearchPokemon from './SearchPokemon';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light row m-0" style={{ backgroundColor: '#CC0000' }}>
      <div className="col-lg-4 text-center text-lg-left">
        <Link to="/">
          <img src={Logo} className="m-1 ml-2 " width="120" alt="logo" />
        </Link>
      </div>
      <div className="col-lg-4 my-2">
        <SearchPokemon />
      </div>
    </nav>
  );
}
