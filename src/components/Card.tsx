import moment from 'moment';
import React, { useState, useCallback } from 'react';
import { Post } from '../types';
import { ReactComponent as FavoriteIcon } from '../assets/iconmonstr-favorite.svg';
import { COLORS, getIsValidImageURL } from '../utils';
import errorImage from '../assets/no_image.png';

function Card({ title, url, explanation, date, copyright }: Post) {
  const [isPostLiked, setIsPostLiked] = useState(false);

  const handlePostLike = useCallback(
    () => setIsPostLiked(!isPostLiked),
    [isPostLiked]
  );

  return (
    <div className='card'>
      {copyright && <h2 className='card-copyright'>@{copyright}</h2>}
      {getIsValidImageURL(url) ? (
        <img className='card-image' src={url} alt={title} />
      ) : (
        <img className='card-image' src={errorImage} alt={title} />
      )}
      <div className='card-extra-info'>
        <span className='card-date'>Posted on {moment(date).format('LL')}</span>
        <button type='button' onClick={handlePostLike}>
          <FavoriteIcon
            fill={isPostLiked ? COLORS.heart_liked_bg : COLORS.heart_unliked_bg}
            stroke={
              isPostLiked
                ? COLORS.heart_like_stroke
                : COLORS.heart_unliked_stroke
            }
            width={24}
            height={24}
          />
        </button>
      </div>
      <p className='card-explanation'>{explanation}</p>
      <span className='card-hashtag'>#{title}</span>
    </div>
  );
}

export default Card;
