import { useState, useEffect } from 'react';
import { Header, Search, List, Footer } from './components';
import { searchMovies } from './api/movies';
import type { Movie } from './types';
import './App.css'

const App = () => {

  const [resultMovies, setResultMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchMovies('Harry Potter');
  }, []);

  const fetchMovies = async (searchTerm: string) => {

    try {
      setLoading(true);
      setError(null);
      const foundMovies = await searchMovies(searchTerm)
      setResultMovies(foundMovies);
    } catch (err) {
      console.error(`There is an error ${err}`);
      setError('There is a technical problem. We are working on this.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Header/>
      <Search fetchMovies={fetchMovies}/>
      {loading && <p className='loading'>Loading...</p>}
      {error && <p className='error'>{error}</p>}
      {resultMovies.length === 0 && !loading && !error ? <p className='no-results'>No results found</p> : <List results={resultMovies}/>}
      <Footer/>
    </>
  )
}

export default App;