import React from "react";
import { Button } from "react-bulma-components";

// This is primary button used in our app.

const Button1 = ({ text, onClickEvt }) => (
  <Button
    className={"button__primary"}
    color={"dark"}
    outlined={true}
    onClick={onClickEvt}
  >
    {text}
  </Button>
);

export default Button1