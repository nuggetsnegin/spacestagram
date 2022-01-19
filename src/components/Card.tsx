import moment from 'moment';
import React, { useState, useCallback } from 'react';
import { Post } from '../types';
import { ReactComponent as FavoriteIcon } from '../assets/iconmonstr-favorite.svg';
import { HEART_COLORS, getIsValidImageURL } from '../utils';
import errorImage from '../assets/no_image.png';

function Card({ title, url, explanation, date, copyright }: Post) {
  const [isPostLiked, setIsPostLiked] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  const handlePostLike = useCallback(() => {
    setIsPostLiked(!isPostLiked);
    setShouldAnimate(true);
  }, [isPostLiked, shouldAnimate]);

  const handleAnimationEnd = useCallback(() => setShouldAnimate(false), []);

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
        <button
          type='button'
          onClick={handlePostLike}
          className={shouldAnimate ? 'animate-heart' : ''}
          onAnimationEnd={handleAnimationEnd}
        >
          <FavoriteIcon
            className='favorite-icon'
            fill={
              isPostLiked
                ? HEART_COLORS.liked_background
                : HEART_COLORS.unliked_background
            }
            stroke={HEART_COLORS.stroke}
            strokeWidth={2}
            width={40}
            height={26}
          />
        </button>
      </div>
      <p className='card-explanation'>{explanation}</p>
      <span className='card-hashtag'>#{title}</span>
    </div>
  );
}

export default Card;
