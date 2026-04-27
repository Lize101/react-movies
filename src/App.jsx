import { useState, useEffect } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import List from './components/MovieList';
import Footer from './components/Footer';
import './App.css'

const App = () => {

  const apiKey = import.meta.env.VITE_API_KEY;

  const [resultMovies, setResultMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchMovies('Action');
  }, []);

  const fetchMovies = async (searchTerm) => {

    const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`;

    try {
      setLoading(true);
      let data = await fetch(url);
      let response = await data.json();
      setResultMovies(response.Search || []);
      setLoading(false);
    } catch (err) {
      console.error(`There is an error ${err}`);
    }
  }

  return (
    <>
      <Header/>
      <Search fetchMovies={fetchMovies}/>
      {loading && <p className='loading'>Loading...</p>}
      {resultMovies.length === 0 && !loading ? <p className='no-results'>No results found</p> : <List results={resultMovies}/>}
      <Footer/>
    </>
  )
}

export default App;