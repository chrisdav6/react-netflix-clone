import React from 'react';
import Row from './Row';
import requests from '../requests';

const App = () => {
  return (
    <div className='App'>
      <h1>Netflix Clone</h1>
      <Row
        title='Netflix Originals'
        fetchURL={requests.fetchNetflixOriginals}
      />
      <Row title='Trending Now' fetchURL={requests.fetchTrending} />
    </div>
  );
};

export default App;
