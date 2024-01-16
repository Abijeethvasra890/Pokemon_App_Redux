import React from 'react';
import { Link } from 'react-router-dom';

import NavBar from './NavBar';

const Home = () => {
  return (
    <div>
      <NavBar />
      <h1>Welcome to the Pokemon App!</h1>
      <p>
        Explore the fascinating world of Pokemon. Catch 'em all, learn about
        their abilities, and dive into the details of each Pokemon in our
        comprehensive Pokemon database.
      </p>
      <Link to="/pokemons">
        <button className="btn btn-primary">Discover Pokemon</button>
      </Link>
    </div>
  );
};

export default Home;
