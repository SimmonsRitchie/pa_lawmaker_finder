import React from 'react';
import { Notification } from 'react-bulma-components'

const SuggestBox = ({message}) => (
    <Notification color="light" outlined={true} size="small" className="suggestBox__container">
      {message}
    </Notification>
  )

export default SuggestBox

// <div className="suggestBox__container">
// {message}
// </div>