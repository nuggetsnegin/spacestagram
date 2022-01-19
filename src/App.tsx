import React, { useEffect, useState } from 'react';
import './App.css';
import API_KEY from './utils';
import { Post } from './types';
import Card from './Card';

function App() {
  const [data, setData] = useState([]);

  async function fetchNasaPhotos() {
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?count=30&api_key=${API_KEY}`
    );
    if (!response.ok) {
      throw new Error(
        `Woops, something wen't wrong! status: ${response.status}`
      );
    }
    setData(await response.json());
  }

  useEffect(() => {
    fetchNasaPhotos();
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Spacetagram</h1>
      </header>
      {data.map((item: Post) => (
        <Card
          title={item.title}
          url={item.url}
          explanation={item.explanation}
          date={item.date}
          copyright={item.copyright}
          key={JSON.stringify(item)}
        />
      ))}
    </div>
  );
}

export default App;
