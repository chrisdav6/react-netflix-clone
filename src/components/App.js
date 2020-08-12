import React, { useState, useEffect } from 'react';
import requests from '../requests';
import instance from '../axios';

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const data = async () => {
      const response = await instance.get(requests.fetchNetflixOriginals);
      setMovies(response.data.results);
      console.log(response);
    };

    data();
  }, []);

  return (
    <div className='App'>
      <h1>Netflix Clone</h1>
      {movies.map((movie, idx) => {
        return <p key={idx}>{movie.original_name}</p>;
      })}
    </div>
  );
};

export default App;
