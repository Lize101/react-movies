import { useState, useEffect } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import List from './components/MovieList';
import Footer from './components/Footer';
import './App.css'

const App = () => {

  const apiKey = import.meta.env.VITE_API_KEY;

  const [resultMovies, setResultMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMovies('Action');
  }, []);

  const fetchMovies = async (searchTerm) => {

    const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`;

    try {
      setError(null);
      const res = await fetch(url);
      if(!res.ok) {
        setError('There is an error retrieving data')
        return;
      }
      const data = await res.json();
      setResultMovies(data.Search || []);
    } catch (err) {
      console.error(`There is an error ${err}`);
      setError('An error has occurred');
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