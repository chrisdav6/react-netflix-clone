import React, { useState, useEffect } from 'react';
import requests from '../requests';
import axios from 'axios';

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const data = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3${requests.fetchNetflixOriginals}`
      );
      setMovies(response.data.results);
      console.log(response);
    };

    data();
  }, [movies]);

  return (
    <div className='App'>
      <h1>Netflix Clone</h1>
      {movies.map(movie => {
        return <p>{movie.original_name}</p>;
      })}
    </div>
  );
};

export default App;
