import React, { useEffect, useState } from 'react';
import API_KEY from './utils';

import Container from './components/Container';

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchNasaPhotos = async () => {
      setIsLoading(true);
      const response = await fetch(
        `https://api.nasa.gov/planetary/apod?count=30&api_key=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error(
          `Woops, something wen't wrong! status: ${response.status}`
        );
      }
      const responseJson = await response.json();
      setIsLoading(false);
      setData(responseJson);
    };
    fetchNasaPhotos();
  }, [setData]);

  return (
    <div className='app'>
      <header className='header'>
        <h1>Spacetagram</h1>
      </header>
      <Container isLoading={isLoading} data={data} />
    </div>
  );
}

export default App;
