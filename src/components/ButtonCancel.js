import React from "react";

// This is submit button used in our app.

const ButtonCancel = ({ text, onClickEvt }) => {
  return (
  <button
    type="button"
    className="button is-light is-fullwidith"
    onClick={onClickEvt}
  >
    <span>{text}</span>
  </button>
)};

export default ButtonCancel;

