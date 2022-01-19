import React from 'react';
import loadingIcon from '../assets/loading_animation.png';

function LoadingIndicator() {
  return (
    <div className='loading-indicator'>
      <img
        src={loadingIcon}
        alt='Loading animation of Negin and her cat traversing the globe'
      />
    </div>
  );
}

export default LoadingIndicator;
