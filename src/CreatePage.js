import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createMovie } from './services/fetch-utils';

export default function CreatePage() {
  const { push } = useHistory();  //we use to navigate using java//
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');

// create movie in supa base and send to user list
  async function handleFormSubmit(e) {
    e.preventDefault();


    const movie = await createMovie({
      title: title,
      director: director
    });
    console.log(movie);
// clear forms
    setDirector('');
    setTitle('');
    // navigate user into movie list page
    push('/movies');
  }
  
  return (



    <div className='create-page'>
      <h2>create a movie for you watchlist!</h2>
      <form onSubmit={handleFormSubmit}>
        <label> Movie Title:
          <input onChange={e => setTitle(e.target.value)} value={title}/>
        </label>
        <label> Director:
          <input onChange={e => setDirector(e.target.value)} value={director}/>
        </label>
        <button>Create Movie</button>
      </form>
    </div>
  );
}
