import React from "react";
import ButtonPrimary from "./ButtonPrimary"

class ButtonBox extends React.Component {

  render() {
    return (
      <div className="buttonBox__container">
        <ButtonPrimary onClickEvt={this.props.handleGeolocate} text="Use current location"/>
        <ButtonPrimary onClickEvt={this.props.handleEnterAddress} text="Enter your address"/>
      </div>
    );
  }
}

export default ButtonBox;
