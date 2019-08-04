import React from "react";
import geolocate from "../utils/geolocate";
import { Container, Button, Heading } from "react-bulma-components";

class ButtonBox extends React.Component {

  render() {
    return (
      <div className="buttonBox__container">
        <Heading subtitle size={6} style={{ textAlign: "center" }}>
          Find out who represents you in the Pa. Legislature using one of the following options:
        </Heading>
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
