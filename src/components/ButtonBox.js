import React from "react";
import ButtonPrimary from "./ButtonPrimary"

class ButtonBox extends React.Component {

  render() {
    return (
      <div className="buttons is-centered">
        <ButtonPrimary onClickEvt={this.props.handleGeolocate} text="Use current location"/>
        <ButtonPrimary onClickEvt={this.props.handleEnterAddress} text="Enter your address"/>
      </div>
    );
  }
}

export default ButtonBox;
