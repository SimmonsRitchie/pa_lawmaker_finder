import React from 'react';

const SuggestBox = ({message, error=null}) => {
  const errorClass = error ? 'suggestBox__error' : null;
  return (
    <div className={`suggestBox__container ${errorClass}`}>
      {message}
    </div>
  )}

export default SuggestBox

// <div className="suggestBox__container">
// {message}
// </div>