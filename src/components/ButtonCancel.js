import React from "react";

// This is submit button used in our app.

const ButtonCancel = ({ text, onClickEvt, back }) => {
  let icon = ""
  if (back) {
    icon = "fa-chevron-left"
  }
  return (
  <button
    type="button"
    className="button is-grey is-fullwidith"
    onClick={onClickEvt}
  >
  {icon && 
    <span className="icon">
      <i className={`fa ${icon}`}></i>
    </span>
  }
    <span>{text}</span>
  </button>
)};

export default ButtonCancel;

