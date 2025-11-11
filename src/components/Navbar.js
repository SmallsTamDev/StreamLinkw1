import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h2>StreamList</h2>
      <ul className="nav-links">
        <li>
          <NavLink to="/" className="nav-button">Home</NavLink>
        </li>
        <li>
          <NavLink to="/movies" className="nav-button">Movies</NavLink>
        </li>
        <li>
          <NavLink to="/cart" className="nav-button">Cart</NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-button">About</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;