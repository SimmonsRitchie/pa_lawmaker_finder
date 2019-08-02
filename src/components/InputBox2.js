import React from "react";
import geolocate, {Geolocate} from './../utils/geolocate'

class InputBox2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handleGeolocate () {
    geolocate()
  }

  render() {
    return (
      <div className="container__input">
        <button onClick={this.handleGeolocate}>Use current location</button> 
        <button>Enter address</button> 
      </div>
    );
  }
}

export default InputBox2;
