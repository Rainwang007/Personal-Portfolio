import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <h1 className="header-title">Rain's Portfolio</h1>
      <nav>
        <NavLink className="nav-link" activeClassName="active-link" exact to="/">About</NavLink>
        <NavLink className="nav-link" activeClassName="active-link" to="/projects">Projects</NavLink>
        <NavLink className="nav-link" activeClassName="active-link" to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}

export default Header;
