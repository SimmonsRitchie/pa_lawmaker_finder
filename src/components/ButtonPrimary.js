import React from "react";

// This is primary button used in our app.

const ButtonPrimary = ({ text, onClickEvt }) => {


  return (
  <button
    className="button is-primary is-fullwidith"
    onClick={onClickEvt}
    type="button"
  >
    <span>{text}</span>
  </button>
)};

export default ButtonPrimary

