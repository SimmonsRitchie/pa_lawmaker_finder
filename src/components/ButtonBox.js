import React from "react";
import { Container, Button, Heading } from "react-bulma-components";

class ButtonBox extends React.Component {

  render() {
    return (
      <div className="buttonBox__container">

        <Button
          className={"button__primary"}
          color={"dark"}
          outlined={true}
          onClick={this.props.handleGeolocate}
        >
          Use current location
        </Button>
        <Button
          className={"button__primary"}
          color={"dark"}
          outlined={true}
          onClick={this.props.handleEnterAddress}
        >
          Enter your address
        </Button>
      </div>
    );
  }
}

export default ButtonBox;

// <Heading spaced subtitle size={6} className={"buttonBox__subtitle"}>
// Find out who represents you in the Pa. Legislature:
// </Heading>