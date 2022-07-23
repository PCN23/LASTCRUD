import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getMovies } from './services/fetch-utils';

export default function MovieListPage() {
  const [movies, setMovies] = useState([]);


//   onload
  useEffect(() => {
    async function deFetch() {
      const movies = await getMovies();

      setMovies(movies);
    }
    // call movies 
    deFetch();
  }, []);

  return (
    <div className='movie-list'>
      {
        movies.map((movie, i) => 
          <Link to={`/movies/${movie.id}`}key={movie.director + movie.title + i}>
            <p > {movie.title} by {movie.director} </p></Link>)
      }
    </div>
  );
}
