import React from 'react';
import SearchMovies from './components/searchMovies'

import './App.css';

function App() {
  return (
    <div className="container">
      <h1 className="title">The Movie Database Search</h1>
      <SearchMovies />

      <footer>
        <p>&copy; 2020 | With &hearts; from Teri 'codegod' Eyenike</p>
      </footer>
    </div>
  );
}

export default App;
