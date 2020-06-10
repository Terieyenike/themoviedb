import React, { useState } from 'react';
import { MovieCard } from './movieCard';
import config from '../config';

const SearchMovies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    const { api_key } = config;
    e.preventDefault();
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${query}&page=1&include_adult=false`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (err) {
      console.log(err, err.message);
    }
  };

  const onSearchChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <form className='form' onSubmit={searchMovies}>
        <label htmlFor='query' className='label'>
          Movie Name
        </label>
        <input
          aria-label='Search for blockbuster movies'
          type='text'
          className='input'
          name='query'
          placeholder='i.e. Jurassic Park'
          value={query}
          onChange={onSearchChange}
        />
        <button className='button' type='submit'>
          Search
        </button>
      </form>
      <div className='card-list'>
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
      </div>
    </>
  );
};

export default SearchMovies;
