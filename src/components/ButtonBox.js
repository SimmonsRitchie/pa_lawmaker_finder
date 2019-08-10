import React from "react";
import Button1 from "./Button1"

class ButtonBox extends React.Component {

  render() {
    return (
      <div className="buttonBox__container">
        <Button1 onClickEvt={this.props.handleGeolocate} text="Use current location"/>
        <Button1 onClickEvt={this.props.handleEnterAddress} text="Enter your address"/>
      </div>
    );
  }
}

export default ButtonBox;
