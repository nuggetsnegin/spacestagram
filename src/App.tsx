import React, { useEffect, useState } from 'react';
import './App.css';
import API_KEY from './utils';
import { Post } from './types';
import Card from './Card';

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
    <div className='App'>
      <header className='App-header'>
        <h1>Spacetagram</h1>
      </header>
      <main>
        {isLoading ? (
          <h2>peepo</h2>
        ) : (
          data.map((item: Post) => (
            <Card
              title={item.title}
              url={item.url}
              explanation={item.explanation}
              date={item.date}
              copyright={item.copyright}
              key={JSON.stringify(item)}
            />
          ))
        )}
      </main>
    </div>
  );
}

export default App;
