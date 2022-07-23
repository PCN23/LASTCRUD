import React, { useEffect } from 'react';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { updateMovie, getMovieById, deleteMovie } from './services/fetch-utils';

export default function UpdatePage() {
  const { push } = useHistory();  //we use to navigate using java//
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');


//   fetch one thing from supabbase
  

// create movie in supa base and send to user list
  console.log(id);
  useEffect(() => {
    async function doFetch() {
      const movie = await getMovieById(id);

      console.log(movie);
      setTitle(movie.title);
      setDirector(movie.director);
    }

    doFetch();
  }, [id]);

  async function handleDeleteMovie() {
    await deleteMovie(id);
    push('/movies');
  }



  async function handleFormSubmit(e) {
    e.preventDefault();


    await updateMovie({
      title: title,
      director: director
    }, id);
// clear forms
    setDirector('');
    setTitle('');
    // navigate user into movie list page
    push('/movies');
  }
  
  return (



    <div>
      <h2>Update a movie from you watch list!</h2>
      <form onSubmit={handleFormSubmit}>
        <label> Movie Title:
          <input onChange={e => setTitle(e.target.value)} value={title}/>
        </label>
        <label> Director:
          <input onChange={e => setDirector(e.target.value)} value={director}/>
        </label>
        <button>Update Movie</button>
      </form>
      <button onClick={handleDeleteMovie} className='delete'>Delete Movie from list</button>
    </div>
  );
} 
