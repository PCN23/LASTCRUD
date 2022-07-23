import { client } from './client';

export async function createMovie(movie) {
  const { data, error } = await client
    .from('movies')
    .insert(movie)
    .single();

  return data;
}

export async function getMovies() {
  const { data, error } = await client
    .from('movies')
    .select('*');
  
  return data;
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
}