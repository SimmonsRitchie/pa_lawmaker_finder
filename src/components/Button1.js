import React from "react";

// This is primary button used in our app.

const Button1 = ({ text, onClickEvt, back }) => {
  let icon = ""
  if (back) {
    icon = "fa-chevron-left"
  }

  return (
  <button
    className="button is-primary is-fullwidith button__primary"
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

export default Button1

