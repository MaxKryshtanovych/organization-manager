import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Organization Management App</h1>
      <hr />
      <div className="links">
        <NavLink to="/" className="link" activeClassName="active" exact>
          Organization List
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
          Add Organization
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
