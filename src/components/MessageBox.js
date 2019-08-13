import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MessageBox = ({message: {content, italic=false, icon=false}}) => {
  /* Params:
  content: Str. Text message to display.
  italic: Bool. Text will be displayed in italics if true. Default false.
  icon: Str. Font awesome icon to display. eg. 'exclamation'. Default false.
  
  Note: Font Awesome icon must be imported in app.js to work.
  */
  const italicClass = italic ? "is-italic" : ""
  let iconColorClass = ""
  let iconSymbol = ""
  switch(icon) {
    case "exclamation":
      iconColorClass = "messageBox__icon--danger";
      iconSymbol = "exclamation-circle";
      break;
    case "success":
      iconColorClass = "messageBox__icon--success";
      iconSymbol = "check-circle";
      break;
  }

  return (
    <div className="messageBox__container">
      <span className={`has-text-centered subtitle is-6 ${italicClass}`}>
      {icon && <FontAwesomeIcon className={`messageBox__icon ${iconColorClass}`} icon={iconSymbol} />}
      {content}</span>
    </div>
)
}

// <div className="messageBox__container">

export default MessageBox