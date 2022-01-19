import React, { useEffect, useState } from 'react';
import { API_KEY } from './utils';
import Container from './components/Container';
import Error from './components/Error';

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isResponseAnError, setIsResponseAnError] = useState(false);

  useEffect(() => {
    const fetchNasaPhotos = async () => {
      setIsLoading(true);
      const response = await fetch(
        `https://api.nasa.gov/planetary/apod?start_date=2020-12-31&end_date=2021-01-19&api_key=${API_KEY}`
      );
      if (!response.ok) {
        setIsResponseAnError(true);
        setIsLoading(false);
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
        <h1>Spacestagram</h1>
      </header>
      {isResponseAnError ? (
        <Error />
      ) : (
        <Container isLoading={isLoading} data={data} />
      )}
    </div>
  );
}

export default App;
