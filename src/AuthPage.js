import React from 'react';
import { useState } from 'react';
import { signUp } from './services/fetch-utils';


export default function AuthPage({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');


  async function handleSubmit(e) {
    e.preventDefault();
    //  we want to create a user in supabase one using email and password
    const user = await signUp(email, password);

    setUser(user);
  }

  async function handleSignInSubmit(e) {
    e.preventDefault();
    //  we want to create a user in supabase one using email and password
    const user = await signUp(signInEmail, signInPassword);

    setUser(user);
  }




  return (
    <div className='forms'>
      <h1>My personal movie list</h1>
      <form onSubmit={handleSubmit}>
        Sign Up 
        <label> Email
          <input onChange={e => setEmail(e.target.value)} value={email} type='email'/>
        </label>
        <label> Password
          <input onChange={e => setPassword(e.target.value)} value={password} type='password'/>
        </label>
        <button>Sign In!</button>
      </form>
      <form onSubmit={handleSignInSubmit}>
        Sign In
        <label> Email
          <input onChange={e => setSignInEmail(e.target.value)} value={signInEmail} type='email'/>
        </label>
        <label> Password
          <input onChange={e => setSignInPassword(e.target.value)} value={signInPassword} type='password'/>
        </label>
        <button>Sign In!</button>
      </form>
    </div>
  );
}
