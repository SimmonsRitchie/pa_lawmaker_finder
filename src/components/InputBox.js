import React from "react";
import geolocate from '../utils/geolocate'

class InputBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enableInputHandler: false
    };
  }

  handleEnableInput () {
    console.log("enableInput")
  }

  render() {
    return (
      <div className="container__input">
        <button onClick={this.props.handleGeolocate}>Use current location</button> 
        <button onClick={this.handleEnableInput}>Enter address</button>
      </div>
    );
  }
}

export default InputBox;
