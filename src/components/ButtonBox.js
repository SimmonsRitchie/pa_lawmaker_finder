import React from "react";
import geolocate from '../utils/geolocate'

class ButtonBox extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  handleEnterAddress = (e) => {
    e.preventDefault();
    console.log("clicked 'handleEnterAdress'")
    console.log(this.props)
    this.props.setInputAddress(true)
  }

  render() {
    return (
      <div className="container__input">
        <button onClick={this.props.handleGeolocate}>Use current location</button> 
        <button onClick={this.handleEnterAddress}>Enter address</button>
      </div>
    );
  }
}

export default ButtonBox;
