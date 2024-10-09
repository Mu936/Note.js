import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Note Taking App</h1>
      <nav>
        <Link to="/">Home</Link>
        <p> take</p>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
};

export default Header;
