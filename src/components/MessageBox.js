import React from 'react';

const MessageBox = ({message, italic}) => {
  const italic = props.italic ? "is-italic" : ""
  return (
    <div className="messageBox__container">
      <p className={`has-text-centered is-size-6 ${italic}`}>{message}</p>
    </div>
)
}

// <div className="messageBox__container">

export default MessageBox