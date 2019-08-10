import React from 'react';

const MessageBox = ({content, italic}) => {
  const italicClass = italic ? "is-italic" : ""
  return (
    <div className="messageBox__container">
      <p className={`has-text-centered is-size-6 ${italicClass}`}>{content}</p>
    </div>
)
}

// <div className="messageBox__container">

export default MessageBox