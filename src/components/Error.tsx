import React from 'react';
import errorIcon from '../assets/error.png';

function Error() {
  return (
    <div className='error-container'>
      <img src={errorIcon} alt='Illustration of Negin and her cat on earth' />
      <p className='error-message'>
        Woops, our astronauts are having trouble reaching Earth. Please check
        back later.
      </p>
    </div>
  );
}

export default Error;
