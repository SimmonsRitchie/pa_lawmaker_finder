import React from "react";

// This is submit button used in our app.

const ButtonSubmit = ({ text, onClickEvt }) => {
  return (
  <button
    type="submit"
    className="button is-primary is-fullwidith"
  >
    <span>{text}</span>
  </button>
)};

export default ButtonSubmit

