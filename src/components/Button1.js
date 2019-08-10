import React from "react";

// This is primary button used in our app.

const Button1 = ({ text, onClickEvt }) => (
  <button
    // className={"button__primary"}
    // color={"dark"}
    // outlined={true}
    onClick={onClickEvt}
  >
    {text}
  </button>
);

export default Button1