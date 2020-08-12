import React, { useState, useEffect } from 'react';
import instance from '../axios';

const Row = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await instance.get(fetchURL);
      setMovies(request.data.results);
      return request;
    };

    fetchData();
  }, [fetchURL]);

  return (
    <div>
      <h2>{title}</h2>
      {movies.map((movie, idx) => {
        return <p key={idx}>{movie.original_name}</p>;
      })}
    </div>
  );
};

export default Row;
