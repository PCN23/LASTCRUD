import './App.css';
import { useState } from 'react';
import React from 'react';
import { client } from './services/client';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import AuthPage from './AuthPage';
import CreatePage from './CreatePage';
import MovieListPage from './MovieListPage';
import UpdatePage from './UpdatePage';
import { logout } from './services/fetch-utils';



export default function App() {
  // our callback
  const [user, setUser] = useState(client.auth.user());


  function handleLogoutClick() {
    logout();
    setUser('');
  }

  return (
    <Router>
      <div className='header'>
        <nav>
          <ul>
            {
              user && <button onClick={handleLogoutClick}>Logout</button>
            }
            <li>
              <Link to="/">Sign In</Link>
            </li>
            <li>
              <Link to="/create">Create New Movie</Link>
            </li>
            <li>
              <Link to="/movies/1">update a movie</Link>
            </li>
            <li>
              <Link to="/movies">List of movies</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            {
              !user 
                ? <AuthPage setUser={setUser} />
                : <Redirect to="movies"/>
            }
          </Route>
          <Route exact path="/movies/:id">
            {
              
              user 
                ? <UpdatePage setUser={setUser} />
                : <Redirect to="movies"/>
              
            }
          </Route>
          <Route exact path="/movies">
            {
              user 
                ? <MovieListPage setUser={setUser} />
                : <Redirect to="/"/>
            }
          </Route>
          <Route exact path="/create">
            <CreatePage />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}