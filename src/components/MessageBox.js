import React from 'react';

const MessageBox = (props) => (
    <div className="messageBox__container">
      <p className='has-text-centered is-size-5'>{props.message}</p>
    </div>
)


export default MessageBox