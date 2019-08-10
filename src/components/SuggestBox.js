import React from 'react';

const SuggestBox = ({message, error=null}) => {
  const errorClass = error ? 'has-text-danger' : null;
  return (
    <div className='suggestBox__container'>
      <p className={`has-text-centered ${errorClass}`}>
        {message}
      </p>
    </div>
  )}

export default SuggestBox

// <div className={`suggestBox__container ${errorClass}`}>
// {message}
// </div>