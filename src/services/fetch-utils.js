import { client } from './client';

export async function createMovie(movie) {
  const { data, error } = await client
    .from('movies')
    .insert(movie)
    .single();

  return { data, error };
}

export async function updateMovie(movie, id) {
  const { data, error } = await client
    .from('movies')
    .update(movie)
    .match({ id: id })
    .single();
    
  return { data, error };
}

export async function deleteMovie(id) {
  const { data, error } = await client
    .from('movies')
    .delete()
    .match({ id: id })
    .single();
      
  return { data, error };
}

export async function getMovies() {
  const { data, error } = await client
    .from('movies')
    .select('*');
  
  return { data, error };
}

export async function getMovieById(id) {
  const { data, error } = await client
    .from('movies')
    .select('*')
    .match({ id })
    .single();
    
  return { data, error };
}

export async function signUp(email, password) {
  const { user } = await client.auth.signUp({
    email: email,
    password: password,
  });
  return user;
}

export async function signIn(email, password) {
  const { user } = await client.auth.signIn({
    email: email,
    password: password,
  });
  return user;
}

export async function logout() {
  const { error } = await client.auth.user();
  return error;
}