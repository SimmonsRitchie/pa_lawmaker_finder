import React from "react";

// This is primary button used in our app.

const ButtonPrimary = ({ text, onClickEvt, back }) => {
  let icon = ""
  if (back) {
    icon = "fa-chevron-left"
  }

  return (
  <button
    className="button is-primary is-fullwidith button__primary"
    onClick={onClickEvt}
    type="button"
  >
  {icon && 
    <span className="icon">
      <i className={`fa ${icon}`}></i>
    </span>
  }
    <span>{text}</span>
  </button>
)};

export default ButtonPrimary

