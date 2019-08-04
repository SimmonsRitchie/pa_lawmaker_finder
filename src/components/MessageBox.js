import React from 'react';
import { Heading } from 'react-bulma-components'

const MessageBox = (props) => (
    <div className="messageBox__container">
      <Heading subtitle size={6}>{props.message}</Heading>
    </div>
)


export default MessageBox