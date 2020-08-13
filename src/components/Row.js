import React, { useState, useEffect } from 'react';
import instance from '../axios';
const baseImgURL = 'https://image.tmdb.org/t/p/w200';

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

  console.table(movies);

  return (
    <div className='Row'>
      <h2 className='Row__title'>{title}</h2>

      <div className='Row__posters'>
        {movies.map((movie, idx) => (
          <img
            key={idx}
            className='Row__poster'
            src={`${baseImgURL}${movie.poster_path}`}
            alt={movie.name || 'No Name provided!'}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
