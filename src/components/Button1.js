import React from "react";

// This is primary button used in our app.

const Button1 = ({ text, onClickEvt }) => (
  <button
    className="button is-primary is-fullwidith button__primary"
    onClick={onClickEvt}
  >
    {text}
  </button>
);

export default Button1

