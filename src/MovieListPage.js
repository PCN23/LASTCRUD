import React, { useEffect } from 'react';
import { useState } from 'react';
import { getMovies } from './services/fetch-utils';

export default function MovieListPage() {
  const [movies, setMovies] = useState([]);
  async function doFetch() {
    const movies = await getMovies();
    console.log(movies);
  }
  useEffect(() => {

  }, []);


  return (
    <div>
      {
        movies.map((movie, i) => <p key={movie.director + movie.title + i}> {movie.title} by {movie.director} </p>)
      }
    </div>
  );
}
