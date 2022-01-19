import moment from 'moment';
import React, { useState, useCallback } from 'react';
import { Post } from './types';

function Card({ title, url, explanation, date, copyright = '' }: Post) {
  const [isPostLiked, setIsPostLiked] = useState(false);

  const handlePress = useCallback(
    () => (isPostLiked ? setIsPostLiked(false) : setIsPostLiked(true)),
    [isPostLiked]
  );

  return (
    <div className='card'>
      <h2>{title}</h2>
      <h1>{isPostLiked ? 'Liked' : ''}</h1>
      <p className='card-explanation'>{explanation}</p>
      <span className='card-date'>{moment(date).format('LL')}</span>
      <img className='card-image' src={url} alt={title} />
      <p className='card-copyright'>{copyright}</p>
      <button type='button' onClick={handlePress}>
        heart me lol
      </button>
    </div>
  );
}

export default Card;
